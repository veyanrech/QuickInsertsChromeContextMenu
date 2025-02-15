export class Items {

    #_db = null;

    /**
     * 
     * @param {DBInstance} db IndexDB instance
     */
    constructor(db) {
        this.#_db = db;
    }

    addItem(itemValue, tagId) {
        this.#_db.addData("Items", new itemsModel(null, itemValue, tagId).returnValue());
    }

    removeItem(item_id) {

        this.#_db.removeData("Items", item_id);

    }

    updateItem(tag_id, item_id, value) {

    }

    getItemsByTagId(tag_id) {
        return new Promise((res,rej) => {
            this.#_db.getAllData("Items", (result) => {
                resolve( result.filter(item => item.TagId === tag_id) );
            });
        })
    }

    getAllItems() {
        return new Promise((res,rej) => {
            this.#_db.getAllData("Items", (result) => {
                resolve(result);
            });
        })
    }

    getFirstItem(tag_id) {}
}

function itemsModel(id,v,tid){
    this.Id = id || 0;
    this.Value = v || "Item";
    this.TagId = tid || 0;
}

itemsModel.prototype.returnValue = function() {
    if (!this.Id) {
        return {
            Value: this.Value,
            TagId: this.TagId
        };
    }
    return {
        Id: this.Id,
        Value: this.Value,
        TagId: this.TagId
    }
}