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

    new DBInstance().then((db) => {
        console.log("DBInstance", db);
    });

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

chrome.runtime.onMessage.addListener((request,sender,send_response)=>{

    const actions = {
        "SAVEDATA":1,
        "GETDATA":1,
        "DELETEDATA":1, 
        "UPDATEDATA":1,
        "GETALLDATA":1,
        "GETDATABYID":1,
    }

    console.log("onMessage.addListener request", request);

    if (request.action in actions) {
        console.log("action", request.action);
        const db = new DBInstance();
        db.then(async (db) => {
            console.log("sender",sender);
            switch (request.action) {
                case "SAVEDATA":
                    console.log("BACKGROUND SAVEDATA request", request);
                    const savedata_result = await db.addData(request.objectStorage, request.data);
                    console.log("BACKGROUND SAVEDATA result", result);
                    send_response(db.returnLatestResult());
                    break;
                case "GETDATA":
                    db.getData(request.objectStorage, request.id);
                    break;
                case "DELETEDATA":
                    db.deleteData(request.objectStorage, request.id);
                    break;
                case "UPDATEDATA":
                    db.updateData(request.objectStorage, request.data);
                    break;
                case "GETALLDATA":
                    db.getAllData(request.objectStorage, (data) => {
                        console.log("getAllData", data);
                        send_response(data);
                    });
                    break;
                case "GETDATABYID":
                    const getbyid_result = await db.getData(request.objectStorage, request.id); 
                    if (getbyid_result.error) {
                        send_response({error:getbyid_result.error});
                    } else {
                        send_response(db.returnLatestResult());
                    }
                    break;
            }
        });
    }

    return true;

})


function DBInstance() {

    this.db = null;
    this.db_name = `FastPastDB_${chrome.runtime.id}`;

    const self = this;

    return new Promise((resolve, reject) => {

        let request = indexedDB.open(self.db_name, 1);
        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("Tags")) {
                db.createObjectStore("Tags", { keyPath: "id", autoIncrement: true });
            }

            if (!db.objectStoreNames.contains("Items")) {
                db.createObjectStore("Items", { keyPath: "id", autoIncrement: true });
            }
        };
        request.onsuccess = () => {
            
            self.db = request.result;
            resolve(self);

        }
        request.onerror = () => reject(request.error);

    });
}

DBInstance.prototype.returnLatestResult = function() {
    
    const _res = this.lastResult;
    this.lastResult = null;
    
    return _res;
}

DBInstance.prototype.addData = async function(objectStorage, data) {
    
    const db = this.db;
    const tx = db.transaction(objectStorage, "readwrite");
    const store = tx.objectStore(objectStorage);
    const request = store.add(data);

    return new Promise((res,rej)=>{
        request.onsuccess = (event) => {
            const insertedId = event.target.result;
            this.lastResult = insertedId;
            res(insertedId);
        };

        request.onerror = () => {
            console.error("Error adding data:", request.error);
            rej({error:request.error});
        };
        request.onblocked = () => {
            console.error("Database is blocked:", request.error);
            rej({error:request.error});
        };
    });
}

DBInstance.prototype.getData = async function(objectStorage, id) {
    const db = this.db;
    const tx = db.transaction(objectStorage, "readonly");
    const store = tx.objectStore(objectStorage);
    const request = store.get(id);

    return new Promise((res,rej)=>{
        request.onsuccess = () => {
            console.log("Data retrieved:", request.result);
            this.lastResult = request.result;
            res(request.result);
        };
        request.onerror = () => {
            console.error("Error retrieving data:", request.error);
            rej({error:request.error});
        };
    })
}

DBInstance.prototype.getAllData = async function(objectStorage, callback) {
    const db = this.db;
    const tx = db.transaction(objectStorage, "readonly");
    const store = tx.objectStore(objectStorage);
    const request = store.getAll();

    request.onsuccess = () => {
        console.log("Data retrieved:", request.result)
        if (callback) {
            callback(request.result);
        };
    }
    
    request.onerror = () => console.error("Error retrieving data:", request.error);

    await tx.complete;
}

DBInstance.prototype.deleteData = async function(objectStorage, id) {
    const db = this.db;
    const tx = db.transaction(objectStorage, "readwrite");
    const store = tx.objectStore(objectStorage);
    const request = store.delete(id);

    return new Promise((res,rej)=>{

        request.onsuccess = () => {
            console.log("Data deleted:", request.result);
            res(request.result);
        };
        request.onerror = () => {
            console.error("Error deleting data:", request.error);
            rej({error:request.error});
        };
    })
}

DBInstance.prototype.updateData = async function(objectStorage, data) {
    const db = this.db;
    const tx = db.transaction(objectStorage, "readwrite");
    const store = tx.objectStore(objectStorage);
    const request = store.put(data);

    return new Promise((res,rej)=>{
        request.onsuccess = () => {
            console.log("Data updated:", request.result);
            res(request.result);
        };
        request.onerror = () => {
            console.error("Error updating data:", request.error);
            rej({error:request.error});
        };
    })

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