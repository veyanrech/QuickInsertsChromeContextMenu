export class Tags {
    
    #_db = null;

    constructor(db) {
        this.#_db = db;
    }

    async addTag(tagValue) {
        const idres = await this.#_db.addData("Tags", new tagModel(null, tagValue).returnValue())
        console.log("tag actions add tag id", idres);
        return idres;
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
        return this.#_db.getAllData("Tags");        
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