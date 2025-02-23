export class Tags {
    
    // #_db = null;

    constructor(db) {
        // this.#_db = db;
    }

    addTag(tagValue) {
        // const idres = await this.#_db.addData("Tags", new tagModel(null, tagValue).returnValue())
        // console.log("tag actions add tag id", idres);
        // return idres;
        console.log("ADD TAG",tagValue);

        return new Promise((res,rej)=>{
            chrome.runtime.sendMessage({
                action: "SAVEDATA",
                objectStorage: "Tags",
                data: new tagModel(null, tagValue).returnValue()
            }, (response) => {
                console.log("ADD TAG response",response);
                res(response);
            });
        })

    }

    removeTag(tagID) {
        //remove all items with tagID
        // return this.#_db.removeData("Tags", tagID);
        return new Promise((res,rej)=>{
            chrome.runtime.sendMessage({
                action: "DELETEDATA",
                objectStorage: "Tags",
                id: tagID
            }, (response) => {
                res(response);
            });
        })
    }

    updateTag(tagID, tagData) {
        //update tag name
    }

    getTagById(tagID) {
        // return this.#_db.getData("Tags", tagID);
        return new Promise((res,rej)=>{
            chrome.runtime.sendMessage({
                action: "GETDATABYID",
                objectStorage: "Tags",
                id: tagID
            }, (response) => {
                res(response);
            });
        })
    }

    getAllTags() {
        // return this.#_db.getAllData("Tags");        
        return new Promise((res,rej)=>{
            chrome.runtime.sendMessage({
                action: "GETALLDATA",
                objectStorage: "Tags"
            }, (response) => {
                res(response);
            });
        })
    }
}

function tagModel(id, name) {
    this.Id = id || 0;
    this.Name = name || "Tag";
    this.Items = [];
}

tagModel.prototype.returnValue = function() {
    if (!this.Id) {
        return {
            Name: this.Name
        };
    }
    return {
        Id: this.Id,
        Name: this.Name
    }
}