// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      console.log(tabs)
      chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
  });
}

chrome.runtime.onInstalled.addListener(function () {

  dbInit();

  // Create one test item for each context type.
  let contexts = [
    {'selection':{
      title:'Save selection',
    }},
    {'link':{
      title:'Save link',
    }},
    {'editable':{
      title:'Paste item',
    }}
  ];

  for (let i = 0; i < contexts.length; i++) {
    
    let keys = Object.keys(contexts[i]);

    let title = contexts[i][keys[0]].title;
    let id = keys[0] + "_id";

    chrome.contextMenus.create({
      title: title,
      contexts: [keys[0]],
      id: id
    });

    // chrome.contextMenus.create({
    //   title: 'Edit items',
    //   id: 'edit_items_' + keys[0],
    //   contexts: [keys[0]]
    // });
  }

  chrome.contextMenus.create({
    title: 'Edit items',
    id: 'edit_items'
  });

});

function dbInit() {
  chrome.storage.local.get("FastPastDBName", (result) => {
    let dbName = result.FastPastDBName;

    if (Object.keys(result).length === 0 || !dbName) {
        dbName = generateUniqueDBName();
        saveDBName(dbName);
    }

    initializeDatabase(dbName);
  });
}
// Function to generate a unique name (using a timestamp here for simplicity)
function generateUniqueDBName() {
  return "FastPast_" + Date.now();
}

// Save the database name in Chrome storage
function saveDBName(dbName) {
  chrome.storage.local.set({ "FastPastDBName":dbName }, () => {
      console.log("Database name saved:", dbName);
  });
}

function initializeDatabase(dbName) {
  const request = indexedDB.open(dbName, 1);

  request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains("Tags")) {
          db.createObjectStore("Tags", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("Items")) {
        db.createObjectStore("Items", { keyPath: "id", autoIncrement: true });
      }



      console.log("IndexedDB initialized with unique name and object store created.");
  };

  request.onsuccess = () => {
      console.log("Database opened successfully with name:", dbName);
  };

  request.onerror = (error) => {
      console.error("Error opening database:", error);
  };
}