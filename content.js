let contentUtils = {};
(function(retObj){

    console.log(this)
    console.log(this.chrome)

    let singleton = null;

    async function accessDatabase() {
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
                if (!db.objectStoreNames.contains("FastPastObjectStore_tags")) {
                    db.createObjectStore("FastPastObjectStore_tags", { keyPath: "id", autoIncrement: true });
                }

                if (!db.objectStoreNames.contains("FastPastObjectStore_itmes")) {
                    db.createObjectStore("FastPastObjectStore_items", { keyPath: "id", autoIncrement: true });
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

    DBInstance.prototype.deleteData = async function(objectStorage, id) {
        const db = this.db;
        const tx = db.transaction(objectStorage, "readwrite");
        const store = tx.objectStore(objectStorage);
        const request = store.delete(id);
    
        request.onsuccess = () => console.log("Data deleted:", id);
        request.onerror = () => console.error("Error deleting data:", request.error);
    
        await tx.complete;
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
    .fast-past-hoverable:hover {
        cursor: pointer;
        padding: 5px;
        margin: 5px;
        border-radius: 5px;
        background-color: #f0f0f0;
        transition: background-color 0.3s;
    }
    `

    document.head.appendChild(style);

    cssWasAdded = true;
}

const cachedData = {
    tags: [
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
};

const $ = document.querySelector.bind(document);

function showDialog() {

    const focusedInput = document.activeElement;

    // Create a div element for the dialog background
    const dialogOverlay = document.createElement("div");
    dialogOverlay.style.position = "fixed";
    dialogOverlay.style.top = "0";
    dialogOverlay.style.left = "0";
    dialogOverlay.style.width = "100%";
    dialogOverlay.style.height = "100%";
    dialogOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    dialogOverlay.style.zIndex = "9999";
  
    // Create the dialog box
    const dialogBox = document.createElement("div");
    dialogBox.style.position = "fixed";
    dialogBox.style.top = "25%";
    dialogBox.style.left = "50%";
    dialogBox.style.transform = "translate(-50%, -50%)";
    dialogBox.style.padding = "20px";
    dialogBox.style.backgroundColor = "white";
    dialogBox.style.borderRadius = "8px";
    dialogBox.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
    dialogBox.style.zIndex = "10000";
    dialogBox.innerText = "Items to paste";
  
    // Add a close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "❌";
    closeButton.style.marginTop = "10px";

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
    tagsColumn.style.padding = "10px";
    tagsColumn.style.borderRight = "1px solid #ccc";
    tagsColumn.style.width = "30%";

    const tagsColumnTitle = document.createElement("h3");
    tagsColumnTitle.innerText = "Tags";
    tagsColumn.appendChild(tagsColumnTitle);

    const tagsList = document.createElement("ul");
    tagsList.style.listStyle = "none";
    tagsColumn.appendChild(tagsList);

    const itemsColums = document.createElement("div");
    itemsColums.style.padding = "10px";
    itemsColums.style.width = "70%";

    const itemsColumnTitle = document.createElement("h3");
    itemsColumnTitle.innerText = "Items";
    itemsColums.appendChild(itemsColumnTitle);

    const itemsList = document.createElement("ul");
    itemsList.style.listStyle = "none";
    itemsColums.appendChild(itemsList);

    tagsAndItemsContainer.appendChild(tagsColumn);
    tagsAndItemsContainer.appendChild(itemsColums);

    dialogBox.appendChild(tagsAndItemsContainer);

    RenderCachedItems(focusedInput, tagsList, itemsList,remover);
  }

  function RenderCachedItems(focusedInput, tagsUl, itemsUl, remover) {
    //render all tags,
    //render all items of the first tag
    //add event listeners to item to paste it into ficused input

    cachedData.tags.forEach(tag => {
      const tagLi = document.createElement("li");
      tagLi.innerText = tag.tag_name;

      tagLi.onclick = () => {
        itemsUl.innerHTML = "";
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
    notification.style.position = "fixed";
    notification.style.bottom = "10px";
    notification.style.right = "10px";
    notification.style.padding = "10px";
    notification.style.backgroundColor = "#4CAF50";
    notification.style.color = "#fff";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    notification.innerText = text || "FastPast: Item copied to clipboard";
  
    document.body.appendChild(notification);
  
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 1500);
}

