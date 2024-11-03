function DBinstance() {
    let db = null;
    db = ((context) => {
        return context.indexedDB || context.mozIndexedDB || context.webkitIndexedDB || context.msIndexedDB;
    })(this)

    console.log(db)
}

const data = {
    "Topics": [
      {
        "name":"Personal Data",
        "items": ['Mikhail', 'Cherniaev', 'chernmisha@gmail.com'],
      },{
        "name":"Links",
        "items":["https://www.linkedin.com/in/mikhail-i-cherniaev/", "https://github.com/veyanrech"]
      }
    ]
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    if (msg.action == 'open_dialog_box') {
        showDialog();
    }

    console.log(msg)
    console.log(sender)
    console.log(sendResponse)

    return true;
  
});

function showDialog() {
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
    closeButton.onclick = () => document.body.removeChild(dialogOverlay);
    dialogBox.appendChild(closeButton);
  
    // Append the dialog and overlay to the document
    dialogOverlay.appendChild(dialogBox);
    document.body.appendChild(dialogOverlay);

    pasteClickedItemIntoFocusedInput();
  }

  function RenderPasteItems() {
    const items = data.Topics.map((topic) => {
        return topic.items.map((item) => {
            return item
        })
    })

    console.log(items)
  }

  function pasteClickedItemIntoFocusedInput() {
    const focusedInput = document.activeElement;
    focusedInput.value = "Hello, world!";
  }