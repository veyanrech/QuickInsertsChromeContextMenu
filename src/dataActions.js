import {Tags} from './tagActions';
import {Items} from './itemActions';

export default class Actions {

    #_tagsdb = null;
    #_itemsdb = null;

    #_db = null;

    #_currentTag = null;

    #_tags = [];

    constructor(db) {
        this.data = [];

        this.#_db = db;

        this.#_tagsdb = new Tags(db);
        this.#_itemsdb = new Items(db);

        console.log(this.#_tagsdb,this.#_itemsdb,this.#_db);
    }

    async addTag(tagValue) {
        await this.#_tagsdb.addTag(tagValue);

        return this.#_tagsdb.returnLatestResult();
    }

    removeTag(tagID) {

        //alert i

        //remove all items with tagID
        this.#_tagsdb.removeTag(tagID);
    }

    moveItem(itemID, tagID) {
        
    }

}