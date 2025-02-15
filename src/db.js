const DBINSTANCE = {};

(function(retObj){

    console.log(this)
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
        this.lastResult = null;

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

        request.onsuccess = () => {
            this.db = request.result
        };

        request.onerror = (err) => {
            console.error("Error opening database:", err);
        };
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
    
        request.onsuccess = (event) => {
            const insertedId = event.target.result;
            this.lastResult = insertedId;
        };

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

    retObj.DBInstance = new DBInstance;

    return retObj;

})(DBINSTANCE);

export default DBINSTANCE;