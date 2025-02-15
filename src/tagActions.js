export class Tags {
    
    #_db = null;

    /**
     * 
     * @param {DBInstance} db IndexDB instance
     */
    constructor(db) {
        this.#_db = db.DBInstance;
        this.tagsCache = [];
    }

    addTag(tagValue) { 
        console.log("Adding Tag", tagValue);
        console.log(this.#_db);
        this.#_db.addData("Tags", new tagModel(null, tagValue).returnValue());
    }

    removeTag(tagID) {
        //remove all items with tagID
        return this.#_db.removeData("Tags", tagID);
    }

    updateTag(tagID, tagData) {
        //update tag name
    }

    getTagById(tagID) {}

    async getAllTags() {

        return new Promise((resolve, reject) => {
            this.#_db.getAllData("Tags", (result) => {
                resolve(result);
            });
        });
        
    }
}

function tagModel(id, name) {
    this.Id = id || 0;
    this.Name = name || "Tag";
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