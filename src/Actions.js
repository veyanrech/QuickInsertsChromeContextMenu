import {Tags} from './Actions_TAG';
import {Items} from './Actions_ITEM';

/**
 * @typedef {import('./Actions_TAG').Tags} Tags
 * @typedef {import('./Actions_ITEM').Items} Items
 *
 * @typedef tagItem
 * @property {number} id
 * @property {HTMLElement} htmlelement
 */

export default class Actions {

    /**
     * @type {Tags}
     */
    #_tagsdb = null;

    /**
     * @type {Items}
     */
    #_itemsdb = null;

    #_db = null;

    constructor(db) {
        this.data = [];

        this.#_db = db;

        this.#_tagsdb = new Tags(db);
        this.#_itemsdb = new Items(db);

        console.log("Actions",this.#_tagsdb,this.#_itemsdb,this.#_db);
    }

    async addTag(tagValue) {
        const newtagid = await this.#_tagsdb.addTag(tagValue);
        
        return newtagid;
    }

    async getAllTags() {
        return await this.#_tagsdb.getAllTags();
    }

    /**
     * 
     * @param {number} tagid 
     * @param {string} itemValue 
     */
    async addItem(tagid, itemValue) {
        const newitemid = await this.#_itemsdb.addItem(itemValue, tagid);
        
        return newitemid;
    }

    async getItemsByTagId(tagid) {
        return await this.#_itemsdb.getItemsByTagId(tagid);
    }

    async removeTag(tagID) {

        //alert i

        //remove all items with tagID
        return this.#_tagsdb.removeTag(tagID);
    }

    moveItem(itemID, tagID) {
        
    }

}