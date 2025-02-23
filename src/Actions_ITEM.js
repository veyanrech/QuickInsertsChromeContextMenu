export class Items {

    // #_db = null;

    constructor() {
        // this.#_db = db;
    }

    addItem(itemValue, tagId) {
        // return this.#_db.addData("Items", new itemsModel(null, itemValue, tagId).returnValue());
        return new Promise((res,rej)=>{
            chrome.runtime.sendMessage({
                action: "SAVEDATA",
                objectStorage: "Items",
                data: new itemsModel(null, itemValue, tagId).returnValue()
            }, (response) => {
                res(response);

                console.log("ADD ITEM SAVE DATA response",response);

                chrome.runtime.sendMessage({
                    action: "GETDATABYID",
                    objectStorage: "Tags",
                    id: tagId
                }, (response) => {
                    console.log("response",response);
                });
            });
        })
    }

    removeItem(item_id) {

        // this.#_db.removeData("Items", item_id);
        return new Promise((res,rej)=>{
            chrome.runtime.sendMessage({
                action: "DELETEDATA",
                objectStorage: "Items",
                id: item_id
            }, (response) => {
                res(response);
            });
        })

    }

    updateItem(tag_id, item_id, value) {

    }

    getItemsByTagId(tag_id) {
        // return new Promise((res,rej) => {
        //     this.#_db.getAllData("Items", (result) => {
        //         if (!tag_id) return rej("No tag id provided");
        //         if (!result) return rej("No items found");
        //         res( result.filter(item => item.TagId === tag_id) );
        //     });
        // })

        return new Promise((res,rej)=>{
            chrome.runtime.sendMessage({
                action: "GETDATA",
                objectStorage: "Items",
                id: tag_id
            }, (response) => {
                res(response);
            });
        })
    }

    getAllItems() {
        // return new Promise((res,rej) => {
        //     this.#_db.getAllData("Items", (result) => {
        //         res(result);
        //     });
        // })
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