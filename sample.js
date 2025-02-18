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
      if (!db.objectStoreNames.contains("ItemsCache")) {
        db.createObjectStore("ItemsCache", { keyPath: "id", autoIncrement: true });
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

const DB = (function(){
  // console.log(this.chrome)

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

  async function DBInstance() {

      if (singleton) {
          return singleton;
      }

      let dbname = null;

      try {  
          dbname = await accessDatabase();
      } catch (error) {
          return new Error("Error accessing the database", error)
      }

      if (!dbname) {
          throw new Error("Error accessing the database (2)");
      }

      this.db = null;
      this.lastResult = null;

      const request = indexedDB.open(dbname, 1);

      const self = this;

      return new Promise((resolve, reject) => {

          request.onupgradeneeded = (event) => {
              const db = event.target.result;
              if (!db.objectStoreNames.contains("Tags")) {
                  db.createObjectStore("Tags", { keyPath: "id", autoIncrement: true });
              }
  
              if (!db.objectStoreNames.contains("Items")) {
                  db.createObjectStore("Items", { keyPath: "id", autoIncrement: true });
              }
          };
  
          request.onsuccess = () => {
              self.db = request.result
              resolve(self);
          };
  
          request.onerror = (err) => {
              console.error("Error opening database:", err);
              reject(err);
          };

      });
      
  }

  DBInstance.prototype.returnLatestResult = function() {
      
      const _res = this.lastResult;
      this.lastResult = null;
      
      return _res;
  }

  /**
   * 
   * @param {String} objectStorage 
   * @param {any} data 
   * @returns Promise
   */
  DBInstance.prototype.addData = function(objectStorage, data) {

      const self = this;

      return new Promise((resolve, reject) => {
          
          const db = self.db;
          const tx = db.transaction(objectStorage, "readwrite");
          const store = tx.objectStore(objectStorage);
          const request = store.add(data);
      
          request.onsuccess = (event) => {
              self.lastResult = event.target.result;
              console.log("Data added:", event.target.result);
              resolve(event.target.result);
          };
  
          request.onerror = () => {
              console.error("Error adding data:", request.error)
              reject(request.error);
          }

      });
  }

  /**
   * 
   * @param {String} objectStorage 
   * @param {Number} id 
   */
  DBInstance.prototype.getData = async function(objectStorage, id) {
      const db = this.db;
      const tx = db.transaction(objectStorage, "readonly");
      const store = tx.objectStore(objectStorage);
      const request = store.get(id);
  
      request.onsuccess = () => console.log("Data retrieved:", request.result);
      request.onerror = () => console.error("Error retrieving data:", request.error);
  
      await tx.complete;
  }

  DBInstance.prototype.getAllData = async function(objectStorage, callback) {

      console.log("getAllData", this);

      const self = this;

      return new Promise((resolve, reject) => {
          const db = self.db;

          const tx = db.transaction(objectStorage, "readonly");
          const store = tx.objectStore(objectStorage);
          const request = store.getAll();
      
          request.onsuccess = () => {
              console.log("Data retrieved:", request.result)
              if (callback) {
                  callback(request.result);
              };
              resolve(request.result);
          }
          
          request.onerror = () => {
              console.error("Error retrieving data:", request.error)
              reject(request.error);
          }

      });
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

      return new Promise((resolve, reject) => {
          const db = this.db;
          const tx = db.transaction(objectStorage, "readwrite");
          const store = tx.objectStore(objectStorage);
          const request = store.put(data);
      
          request.onsuccess = () =>
              {
                  console.log("Data updated:", request.result);
                  resolve(request.result);
              }
          
          request.onerror = () => {
              console.error("Error updating data:", request.error);
              reject(request.error);
          }
      
      });
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

  return DBInstance;

});