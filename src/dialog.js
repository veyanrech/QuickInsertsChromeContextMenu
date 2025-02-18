import Actions from "./Actions";

export const dialogHtmlCode = ``+
    // <dialog id="fast-past-dialog-id">
        `<div style="
            display: flex;
            flex-flow: column;
            position: relative;
            ">
            <div class="header">
                <h1>Fast Past Items Menu</h1>
                <div class="container column-2">
                    <div class="column-75"></div>
                    <div class="column-25">
                        <button id="close">Close X</button>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="container">
                    <div class="column-35">
                        <div class="column-header">
                            <div class="container column">
                                <div class="column-75">
                                    <h2>Tags</h2>
                                </div>
                                <div class="column-25">
                                    <button id="add-tag">Add +</button>
                                </div>
                            </div>
                        </div>
                        <div class="column content tags"></div>
                    </div>
                    <div class="vertical-line" style="flex-grow: 1;"></div>
                    <div class="column-65">
                        <div class="column-header">
                            <div class="container column">
                                <div class="column-75">
                                    <h2>Items</h2>
                                </div>
                                <div class="column-25">
                                    <button id="add-item">Add +</button>
                                </div>
                            </div>
                        </div>
                        <div class="column content items"></div>
                    </div>
                </div>
            </div>
        </div>`;
    // </dialog>`;

    
export const dialogCssCode = `
#fast-past-dialog-id {
    all: initial;
    font-family: system-ui, -apple-system, sans-serif;
    color: #333;
    background: white;
    border-radius: 8px;
    padding: 0;
    margin: auto 50%;
    max-width: 800px;
    min-width: 250px;
    max-height: 60vh;
    min-height: 250px;
    border: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: none;
    inset-block-start: 0px;
    inset-block-end: 0px;
    position: fixed;
    transform: translate(-50%);
    width: calc(100% - 2em - 6px);
    height: calc(100% - 2em - 6px);
}

#fast-past-dialog-id::backdrop {
    background: rgba(0, 0, 0, 0.5);
}

#fast-past-dialog-id[open] {
    display: block;
}

#fast-past-dialog-id * {
    all: initial;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 1rem;
}

#fast-past-dialog-id .header {
    padding: .1em .25em;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: calc(1.5em + 2px + .5em);
}

#fast-past-dialog-id .header h1 {
    padding: .15em .25em;
    font-size: 1.5em;
    display: block;
}

#fast-past-dialog-id .header button#close {
    cursor: pointer;
    padding: .25em;
    border-radius: .25em;
    border: 1px solid #e0e0e0;
    font-size: .75em;
}

#fast-past-dialog-id .body {
    padding: .25em;
    display: flex;
    flex-flow: column;
    max-height: calc(60vh - calc(1.5em + 2px + .5em));
}

#fast-past-dialog-id .container {
    display: flex;
    flex-flow: row;
    padding: .25em;
}

#fast-past-dialog-id .container .column-header {
    max-height: 30px;
}

#fast-past-dialog-id .container .column-header {
    max-height: 30px;
}

#fast-past-dialog-id .container.column {
    display: flex;
}

#fast-past-dialog-id .column-25 {
    flex-grow: 25;
}

#fast-past-dialog-id .column-35 {
    flex-grow: 35;
    width: 35%;
}

#fast-past-dialog-id .column-65 {
    flex-grow: 65;
    width: 65%;
}

#fast-past-dialog-id .column-75 {
    flex-grow: 75;
}

#fast-past-dialog-id .vertical-line {
    border-left: 1px solid #e0e0e0;
    margin: 0;
}

#fast-past-dialog-id .column-header {
    border-bottom: 1px solid #e0e0e0;
    display: block;
}

#fast-past-dialog-id .column.content.tags, #fast-past-dialog-id .column.content.items {
    padding: .25em;
    display: flex;
    flex-flow: column;

    min-height: 175px;
    max-height: calc(60vh - calc(1.5em + 2px + .5em) - 30px - 1.5em);

    overflow: auto;
}

#fast-past-dialog-id .tag-container, #fast-past-dialog-id .item-container {
    display: flex;
    flex-flow: row;
    padding: .25em;
    cursor: pointer;
    border-bottom: 1px solid transparent;
}

#fast-past-dialog-id .tag-container.selected {
    background-color:rgb(61, 61, 61);
    border-bottom: 1px solid rgb(224, 224, 224);
    color: white;
}

#fast-past-dialog-id .tag-container:hover, #fast-past-dialog-id .item-container:hover {
    background-color: #f0f0f0;
    border-bottom: 1px solid #e0e0e0;
}

#fast-past-dialog-id .tag-container .tag-content  {
    flex-grow: 85;
    max-width: 250px;
}

#fast-past-dialog-id .tag-container .tag-action  {
    flex-grow: 15;
    max-width: 75px;
}


#fast-past-dialog-id .item-container .item-action button, #fast-past-dialog-id .tag-container .tag-action button {
    cursor: pointer;
    font-size: .75em;
    border: 1px solid #e0e0e0;
    padding: .07em;
}

#fast-past-dialog-id .item-container .item-action button:hover, #fast-past-dialog-id .tag-container .tag-action button:hover {
    border: 1px solid #7e7e7e;
    background-color: #e0e0e0;
}

#fast-past-dialog-id .add-item, #fast-past-dialog-id .edit-item, #fast-past-dialog-id .delete-item, #fast-past-dialog-id .add-tag, #fast-past-dialog-id .edit-tag, #fast-past-dialog-id .delete-tag {
    cursor: pointer;
    font-size: .75em;
    border: 1px solid #e0e0e0;
    padding: .07em;
}

#fast-past-dialog-id #add-tag, #fast-past-dialog-id #add-item{
    cursor: pointer;
    border: 1px solid #e0e0e0;
    border-radius: .25em;
    padding: .07em;
}

#fast-past-dialog-id .column.content.tags {
    max-width: 400px;
}
`;

export function CloseDialog(){
    var dialog = document.getElementById('fast-past-dialog-id');
    dialog.close();
    removeESCEventListenerONDialogClosed(dialog);
    detachCloseEventToCloseButton();
}



/**
 * 
 * @param {DialogUI} dialogui 
 */
export function ShowDialog(dialogui){
    dialogui.show();
}

function initialLoadtags(app, tagsColumn, itemsColumn, ) {}

function selectTagEvent(app, tagid, tagsColumn, itemsColumn) {}

function addESCEventListenerONDialogOpened(dialogElement) {
    if (!dialogElement) {
        return;
    }

    if (dialogElement.hasAttribute("open")) {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                dialogElement.close();
            }
        });
    }
}

function removeESCEventListenerONDialogClosed(dialogElement) {
    if (dialogElement) {
        document.removeEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                dialogElement.close();
            }
        });
    }
}

function attachCloseEventToCloseButton() {
    const closeButton = document.querySelector("#fast-past-dialog-id #close");

    closeButton.addEventListener("click", () => {
        CloseDialog();
    });
}

function detachCloseEventToCloseButton() {
    const closeButton = document.querySelector("#fast-past-dialog-id #close");

    closeButton.removeEventListener("click", () => {
        CloseDialog();
    });
}

function appendDialogToBody() {
  
    // Create the dialog box
    const dialogBox = document.createElement("dialog");
    dialogBox.id = "fast-past-dialog-id";

    dialogBox.innerHTML = dialogHtmlCode;

    document.body.appendChild(dialogBox);
  
}


let cssWasAdded = false;

export function AddStyles() {
    if (cssWasAdded) {
        return;
    }
    const style = document.createElement('style');
    style.innerHTML = dialogCssCode;

    document.head.appendChild(style);

    cssWasAdded = true;
}
/**
 * 
 * @param {DialogUI} app
 * @param {number} tagid 
 * @param {string} tagname 
 * @returns Object{
 *     id: number,
 *    htmlelement: HTMLElement}
 */
function tagRender(app, tagid, tagname) {

    const cont = document.createElement('div');
    cont.classList.add('tag-container');

    const html = `<div class="tag-content">${tagname}</div>`+
    `<div class="tag-action">
        <button class="edit-tag" onclick="tagedit(${tagid})">Edit</button>
        <button class="delete-tag" onclick="tagdelete(${tagid})">Del X</button>
    </div>`;

    cont.innerHTML = html;

    cont.onclick = () => {

        const thisTagID = tagid;
        const thisCont = cont;

        app.setCurrentTag((()=>{
            return {
                id:thisTagID,
                htmlelement:thisCont
            };
        })());
    }

    return {
        id:tagid,
        htmlelement:cont
    };
}

let tagdelete = null;

/**
 * 
 * @param {Actions} app 
 * @param {*} tagid 
 * @param {*} itemid 
 * @param {*} itemvalue 
 * @returns 
 */
function itemRender(app, tagid, itemid, itemvalue) {

    const cont = document.createElement('div');
    cont.classList.add('item-container');

    const html = `<div class="item-content">${itemvalue}</div>` +
    `<div class="item-action">
        <button class="edit-item" onclick="itemedit(${itemid})">Edit</button>
        <button class="delete-item" onclick="itemdelete(${itemid})">Del X</button>
    </div>`;

    cont.innerHTML = html;

    cont.onclick = () => {
        navigator.clipboard.writeText(itemvalue).then(() => {
            console.log('Async: Copying to clipboard was successful!');
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        });
    }

    return {
        id:itemid,
        htmlelement:cont
    };

}

function itemdelete(itemid) {
    console.log("itemdelete", itemid);
}

export class DialogUI {

    tagsColumn = null;
    itemsColumn = null;

    addTagButton = null;
    addItemButton = null;

    dialog = null;

    #_items = {};

    /**
     * @type {tagItem}
     */
    currentTag = null;

    /*
    * @type {Object.<number, tagItem>}
    */
    tags = {};

    /**
     * 
     * @param {Actions} app 
     */
    constructor(app) {
        this.app = app;

        if (!document.getElementById('fast-past-dialog-id')) {
            appendDialogToBody();
        }

        tagdelete = (tagid) => {
            app.removeTag(tagid);
            if (this.tags[tagid]) {
                this.tags[tagid].htmlelement.remove();
            }
        };

        this.init();
    }

    async show() {

        if (!document.getElementById('fast-past-dialog-id')) {
            appendDialogToBody();
            this.init();
            Object.keys(this.tags).forEach((key) => {
                this.tagsColumn.appendChild(this.tags[key].htmlelement);
            });
        }

        this.dialog.showModal();
        const focusedInput = document.activeElement;
    }

    async init() {
        this.dialog = document.getElementById('fast-past-dialog-id');

        addESCEventListenerONDialogOpened(this.dialog);
        
        attachCloseEventToCloseButton();

        this.tagsColumn = document.querySelector("#fast-past-dialog-id .column.content.tags");
        this.itemsColumn = document.querySelector("#fast-past-dialog-id .column.content.items");

        this.addTagButton = document.getElementById("add-tag");
        this.addItemButton = document.getElementById("add-item");

        this.addTagButton.addEventListener("click", async (e) => {
            // Add Tag
            let userinput = window.prompt("Add Tag", "New Tag Name");
            if (userinput == null) {
                // Add Tag to the list
                alert("Tag name is required");
                return
            }
    
            let newtagid = await this.app.addTag(userinput)

            console.log("new tag id", newtagid, this.tags);

            this.tags[newtagid] = tagRender(this, newtagid, userinput);

            this.tagsColumn.appendChild(this.tags[newtagid].htmlelement);
        });


        this.addItemButton.addEventListener("click", async (e) => {
            // Add Item
            let userinput = window.prompt("Add Item", "New Item Name");
            if (userinput == null) {
                // Add Item to the list
                alert("Item name is required");
                return
            }

            let newitemid = await this.app.addItem(this.getCurrentTag().id, userinput);

            this.#_items[newitemid] = itemRender(this, this.getCurrentTag().id, newitemid, userinput);

            this.itemsColumn.appendChild(this.#_items[newitemid].htmlelement);
        });

        let tags = await this.app.getAllTags();
        tags.forEach(element => {
            this.tags[element.id] = tagRender(this, element.id, element.Name);
            this.tagsColumn.appendChild(this.tags[element.id].htmlelement);
        });

        console.log("tags", tags);

    }

    /**
     * 
     * @param {tagItem} tag 
     */
    setCurrentTag(tag) {

        if (this.currentTag){
            this.currentTag.htmlelement.classList.remove("selected");
        }

        this.currentTag = tag;

        this.tags[tag.id]
            .htmlelement
            .classList.add("selected");

            this.itemsColumn.innerHTML = "No data found";

        this.app.getItemsByTagId(tag.id).then((items) => {
            if (!items || items.length == 0) return;
            this.itemsColumn.innerHTML = "";
            items.forEach(element => {
                this.#_items[element.id] = itemRender(this, element.TagId, element.id, element.Value);
                this.itemsColumn.appendChild(this.#_items[element.id].htmlelement);
            });
        });
    }

    /**
     * 
     * @returns {tagItem}
     */
    getCurrentTag() {
        return this.currentTag;
    }
}