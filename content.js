let contentUtils = {};
(function(retObj){

    console.log(this)
    console.log(this.chrome)

    let singleton = null;

    async function accessDatabase(_dbname) {
        let res = null;
        try {
            res = await chrome.storage.local.get("FastPastDBName");
        } catch (error) {
            throw new Error("Error accessing the database", error)
        }
        return res;
    }

    function DBInstance() {

        if (singleton) {
            return singleton;
        }

        let dbname = null;

        try {  
            dbname = (async () => {
                let res = await accessDatabase();
                return res;
            })();
        } catch (error) {
            return new Error("Error accessing the database", error)
        }

        if (!dbname) {
            throw new Error("Error accessing the database (2)");
        }

        this.db = null;

        this.db = new Promise((resolve, reject) => {
            const request = indexedDB.open(dbname, 1);
    
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains("Tags")) {
                    db.createObjectStore("Tags", { keyPath: "id", autoIncrement: true });
                }

                if (!db.objectStoreNames.contains("Items")) {
                    db.createObjectStore("Items", { keyPath: "id", autoIncrement: true });
                }
            };
    
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        return this
    }

    DBInstance.prototype.addData = async function(objectStorage, data) {
        
        const db = this.db;
        const tx = db.transaction(objectStorage, "readwrite");
        const store = tx.objectStore(objectStorage);
        const request = store.add(data);
    
        request.onsuccess = () => console.log("Data added:", request.result);
        request.onerror = () => console.error("Error adding data:", request.error);
    
        await tx.complete;
    }

    DBInstance.prototype.getData = async function(objectStorage, id) {
        const db = this.db;
        const tx = db.transaction(objectStorage, "readonly");
        const store = tx.objectStore(objectStorage);
        const request = store.get(id);
    
        request.onsuccess = () => console.log("Data retrieved:", request.result);
        request.onerror = () => console.error("Error retrieving data:", request.error);
    
        await tx.complete;
    }

    DBInstance.prototype.getAllData = async function(objectStorage) {
        const db = this.db;
        const tx = db.transaction(objectStorage, "readonly");
        const store = tx.objectStore(objectStorage);
        const request = store.getAll();
    
        request.onsuccess = () => console.log("Data retrieved:", request.result);
        request.onerror = () => console.error("Error retrieving data:", request.error);
    
        await tx.complete;
    }

    DBInstance.prototype.deleteData = async function(objectStorage, id) {
        const db = this.db;
        const tx = db.transaction(objectStorage, "readwrite");
        const store = tx.objectStore(objectStorage);
        const request = store.delete(id);
    
        request.onsuccess = () => console.log("Data deleted:", id);
        request.onerror = () => console.error("Error deleting data:", request.error);
    
        await tx.complete;
    }

    DBInstance.prototype.updateData = async function(objectStorage, data) {
        const db = this.db;
        const tx = db.transaction(objectStorage, "readwrite");
        const store = tx.objectStore(objectStorage);
        const request = store.put(data);
    
        request.onsuccess = () => console.log("Data updated:", request.result);
        request.onerror = () => console.error("Error updating data:", request.error);
    
        await tx.complete;
    }

    DBInstance.prototype.getLastIndexOfStorage = async function(objectStorage) {
        const db = this.db;
        const tx = db.transaction(objectStorage, "readonly");
        const store = tx.objectStore(objectStorage);
        const request = store.getAllKeys();
    
        let lastIndex = 0;

        request.onsuccess = () => {
            const keys = request.result;
            if (keys.length > 0) {
                lastIndex = keys[keys.length - 1];
            }
        };
        request.onerror = () => console.error("Error getting last index of storage:", request.error);
    
        await tx.complete;

        return lastIndex;
    }

    retObj.DBInstance = DBInstance;

})(contentUtils);

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    addStyles();

    if (msg.action == 'open_dialog_box') {
        showDialog();
    }

    console.log(msg)
    console.log(sender)
    console.log(sendResponse)

    return true;
  
});

let cssWasAdded = false;

function addStyles() {
    if (cssWasAdded) {
        return;
    }
    const style = document.createElement('style');
    style.innerHTML = `

    .fast-past-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        font-family: Arial, sans-serif;
    }

    .fast-past-overlay * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .fast-past-hoverable:hover {
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: #f0f0f0;
        transition: background-color 0.3s;
    }

    .fast-past-dialog {
        position: relative;
        // top: 25%;?
        // left: 50%
        // transform: translate(-50%, -50%);
        padding: 20px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        margin: 10% auto;
        max-width: 800px;
    }

    .fast-past-notification {
        position: fixed;
        bottom: 10px;
        right: 10px;
        padding: 10px;
        background-color: #4CAF50;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .fast-past-close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .fast-past-close-button:hover {
        transform: scale(1.1);
    }

    .fast-past-tags-column {
        padding: 10px;
        border-right: 1px solid #ccc;
        width: 30%;
        overflow-y: auto;
        max-height: calc(100vh - 200px);
    }

    .fast-past-items-column {
        padding: 10px;
        width: 70%;
        overflow-y: auto;
        max-height: calc(100vh - 200px);
    }

    .fast-past-li-item {
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: #f0f0f0;
        cursor: pointer;
    }

    `

    document.head.appendChild(style);

    cssWasAdded = true;
}

function tagModel(id, name) {
    return {
        Id: id || 0,
        Name: name || "Tag"
    }
}

class Tags {
    
    #_db = null;

    /**
     * 
     * @param {DBInstance} db 
     */
    constructor(db) {
        this._db = db;
        this.tagsCache = [];
    }

    addTag(tagValue) {
        this._db.getLastIndexOfStorage("Tags");
        this._db.addData("Tags", tagModel(null, tagValue));
    }

    removeTag(tagID) {
        //remove all items with tagID
    }

    updateTag(tagID) {
        //update tag name
    }

    getTagById(tagID) {}

    async getAllTags() {
        this._db.getAllData("Tags");
    }
}

function itemsModel(id,v,tid){
    return {
        Value: v || "",
        TagId: tid || 0,
        Id: id || 0,
    }
}

class Items {

    #_db = null;

    /**
     * 
     * @param {DBInstance} db 
     */
    constructor(db) {
        this._db = db;
        this.itemsCache = [];
    }

    addItem(itemValue) {
       
    }

    removeItem(item_id) {
        
    }

    updateItem(tag_id, item_id, value) {

    }

    getItemsByTagId(tag_id) {

    }

    getItemById(id) {

    }
}

class FastPastDB {

    #db = null;

    /**
     * 
     * @param {DBInstance} db 
     */
    constructor(db) {
        this.db = db;
        this.tags = new Tags(db);
        this.items = new Items(db);
    }
}

const Data = new FastPastDB(contentUtils.DBInstance);

const $ = document.querySelector.bind(document);

function showDialog() {

    const focusedInput = document.activeElement;

    // Create a div element for the dialog background
    const dialogOverlay = document.createElement("div");
    dialogOverlay.classList.add("fast-past-overlay");
  
    // Create the dialog box
    const dialogBox = document.createElement("div");
    dialogBox.classList.add("fast-past-dialog");
  
    // Add a close button
    const closeButton = document.createElement("div");
    closeButton.classList.add("fast-past-close-button");
    closeButton.appendChild(createIcon("close", 24, 24));

    const remover = () => {
        dialogOverlay.removeChild(dialogBox);
        document.body.removeChild(dialogOverlay);
    }

    closeButton.onclick = remover;

    dialogBox.appendChild(closeButton);
  
    // Append the dialog and overlay to the document
    dialogOverlay.appendChild(dialogBox);
    document.body.appendChild(dialogOverlay);

    const tagsAndItemsContainer = document.createElement("div");
    tagsAndItemsContainer.style.display = "flex";

    const tagsColumn = document.createElement("div");
    tagsColumn.className = "fast-past-tags-column";

    tagsColumn.appendChild(createAddNewButton("Tags", () => {
        const newTagName = prompt("Enter new tag name");
        if (newTagName) {
            
            // cachedData.tags.push({
            //     tag_name: newTagName,
            //     tag_id: cachedData.tags.length + 1,
            //     items: []
            // });

            Data.tags.addTag(newTagName);

            renderClosure();
        }
    }));

    const tagsList = document.createElement("ul");
    tagsList.style.listStyle = "none";
    tagsColumn.appendChild(tagsList);

    const itemsColumn = document.createElement("div");
    itemsColumn.classList.add("fast-past-items-column");

    itemsColumn.appendChild(createAddNewButton("Items", () => {
        const newItemValue = prompt("Enter new item value");
        if (newItemValue) {
            // cachedData.tags[0].items.push({
            //     value: newItemValue,
            //     id: cachedData.tags[0].items.length + 1
            // });

            Data.items.addItem(newItemValue);

            renderClosure();
        }
    }));

    const itemsList = document.createElement("ul");
    itemsList.style.listStyle = "none";
    itemsColumn.appendChild(itemsList);

    tagsAndItemsContainer.appendChild(tagsColumn);
    tagsAndItemsContainer.appendChild(itemsColumn);

    dialogBox.appendChild(tagsAndItemsContainer);

    const renderClosure = () => {
        const f = focusedInput;
        const t = tagsList;
        const i = itemsList;
        RenderCachedItems(f, t, i, remover);
    }

    RenderCachedItems(focusedInput, tagsList, itemsList, remover);
  
}

function addNewSomethingButton(ulPlace, text, callback) {
    const newTagLi = document.createElement("li");
    
    newTagLi.classList.add("fast-past-li-item","fast-past-new-item");
    newTagLi.innerText = text || "Add new";

    if (callback) {
        newTagLi.onclick = callback;
    }

    ulPlace.appendChild(newTagLi);
    return newTagLi;
}

  async function RenderCachedItems(focusedInput, tagsUl, itemsUl, remover) {
    //render all tags,
    //render all items of the first tag
    //add event listeners to item to paste it into ficused input

    [tagsUl, itemsUl].forEach(ul => {
        const ulitems = ul;
        if (!ulitems) {
            return;
        }
        try {
            const _items = ulitems.querySelectorAll(".fast-past-li-item");
            if (!_items) {
                return;
            }
            _items.forEach(item => {
                ul.removeChild(item);
            });   
        } catch (error) {
            console.error("Error removing items", error);
        }
    })

    // cachedData.tags.forEach(tag => {
    let alltags = await Data.tags.getAllData()
    
    alltags.forEach(tag => {
      const tagLi = document.createElement("li");
      tagLi.classList.add("fast-past-li-item");
      tagLi.innerText = tag.tag_name;

      tagLi.onclick = () => {
        //remove childs items
        
        const items = itemsUl.querySelectorAll(".fast-past-li-item")
        items.forEach(item => {
            itemsUl.removeChild(item);
        });
        
        tag.items.forEach(item => {
            renderPasteItems(itemsUl,focusedInput,item.value,remover);
        });
      }

      tagsUl.appendChild(tagLi);
    });

    cachedData.tags[0].items.forEach(item => {
        renderPasteItems(itemsUl,focusedInput,item.value,remover);
    });

  }

  function renderPasteItems(placeToAppend,focusedInput,valueText,remover) {
    const itemLi = document.createElement("li");
    
    itemLi.classList.add("fast-past-li-item");
    itemLi.innerText = valueText;
    itemLi.onclick = () => pasteClickedItemIntoFocusedInput(focusedInput, valueText,remover);
    itemLi.classList.add("fast-past-hoverable");
    


    placeToAppend.appendChild(itemLi);
  }

  async function pasteClickedItemIntoFocusedInput(focusedInput,value,removerCallback) {
    await navigator.clipboard.writeText(value);
    focusedInput.focus();
    showRightBottomNotification();
    removerCallback();
  }

function showRightBottomNotification(text) {
    const notification = document.createElement("div");
    notification.classList.add("fast-past-notification");
    notification.innerText = text || "FastPast: Item copied to clipboard";
  
    document.body.appendChild(notification);
  
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 1500);
}

const iconspaths = {
    "delete" : `<path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M20.5 6H3.49988" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9.5 11L10 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5 11L14 16" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,

    'edit':`<path d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L12 6.43872M19.9213 9.63993L14.6607 14.9006L11.5613 18L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021M2.32181 19.8021L3.41556 16.5208C3.67368 15.7465 3.80273 15.3593 3.97634 14.995C4.18114 14.5653 4.43213 14.1592 4.7249 13.7838C4.97308 13.4656 5.26166 13.1771 5.83882 12.5999L8.5 9.93872" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,

    'add' : `<path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/><path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,

    'close': `<path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/><path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`
}

function createIcon(iconName, wsize, hsize) {

    const icons = {
        "edit": `<svg width="${wsize}px" height="${hsize}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${iconspaths['edit']}</svg>`,
        
        "delete": `<svg width="${wsize}px" height="${hsize}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${iconspaths["delete"]}</svg>`,
        
        "add": `<svg width="${wsize}px" height="${hsize}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${iconspaths['add']}></svg>`,
        
        "close": `<svg width="${wsize}px" height="${hsize}px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">${iconspaths['close']}</svg>`
    }

    const icon = document.createElement("i");
    icon.className = "material-icons";
    icon.innerHTML = icons[iconName];
    return icon;
}

function insideliTextComponent(liparent, id, text, childComponents) {
    
    const lidiv = document.createElement("div");
    lidiv.id = id;

    return ;
}

function editButtonComponent(id, callback) {}

function deleteButtonComponent(id, callback) {}

function createAddNewButton(headingText, callback) {
    const container = document.createElement('div');
    container.style.display = "flex";

    // First child div
    const firstDiv = document.createElement('div');
    firstDiv.style.alignItems = "center";
    firstDiv.style.display = "flex";

    const heading = document.createElement('h3');
    heading.textContent = headingText;
    firstDiv.appendChild(heading);

    // Second child div
    const secondDiv = document.createElement('div');
    
    secondDiv.style.alignItems = "center";
    secondDiv.style.display = "flex";
    secondDiv.style.marginLeft = "4px";
    secondDiv.style.cursor = "pointer";
    secondDiv.style.padding = "4px 0px";

    secondDiv.appendChild(createIcon("add", 24, 24));

    // Append both divs to the container
    container.appendChild(firstDiv);
    container.appendChild(secondDiv);

    secondDiv.onclick = callback;

    // Append the container to the document body or any desired parent element
    return container
}

/**
 * tags: [
        {
            tag_name: "Personal Data",
            tag_id: 1,
            items: [
                {
                    value: "Mikhail",
                    id: 1
                },
                {
                    value: "Cherniaev",
                    id: 2
                },
                {
                    value: "chernmisha@gmail.com",
                    id: 3
                }, {
                    value: "https://www.linkedin.com/in/mikhail-i-cherniaev/",
                    id: 4
                }, {
                    value: "+12026963640",
                    id: 5
                }
            ]
        }
    ],
 */