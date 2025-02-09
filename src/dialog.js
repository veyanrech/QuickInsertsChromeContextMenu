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
}

#fast-past-dialog-id .column-65 {
    flex-grow: 65;
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
}`;

export function CloseDialog(){
    var dialog = document.getElementById('fast-past-dialog-id');
    dialog.close();
    removeESCEventListenerONDialogClosed(dialog);
    detachCloseEventToCloseButton();
}

export function ShowDialog(){

    appendDialogToBody();

    var dialog = document.getElementById('fast-past-dialog-id');
    dialog.showModal();

    const focusedInput = document.activeElement;

    const tagsColumn = document.querySelector("#fast-past-dialog-id .column.content.tags");

    const itemsColumn = document.querySelector("#fast-past-dialog-id .column.content.items");

    const addTagButton = document.getElementById("add-tag");

    const addItemButton = document.getElementById("add-item");

    addESCEventListenerONDialogOpened(dialog);

    attachCloseEventToCloseButton();
}

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

    if (document.getElementById('fast-past-dialog-id')) {
        return;
    }
  
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