import { Tags } from './tagActions';
import { Items } from './itemActions';

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
    }

    async addTag(tagValue) {
        await this.#_tagsdb.addTag(tagValue);

        const lastTagResult = this.#_db.returnLatestResult();


    }

    removeTag(tagID) {

        //alert i

        //remove all items with tagID
        this.#_tagsdb.removeTag(tagID);
    }

    moveItem(itemID, tagID) {
        
    }

}

function tagRender(tagid, tagname) {

    const cont = document.createElement('div');
    cont.classList.add('tag-container');

    const html = `<div class="tag-content">${tagname}</div>`+
    `<div class="tag-action">
        <button class="edit-tag" onclick="tagedit(${tagid})">Edit</button>
        <button class="delete-tag" onclick="tagdelete(${tagid})">Del X</button>
    </div>`;

    cont.innerHTML = html;

    return cont;
}

function itemRender(tagid, itemid, itemvalue) {

    const cont = document.createElement('div');
    cont.classList.add('item-container');

    const html = `<div class="item-content">${itemvalue}</div>` +
    `<div class="item-action">
        <button class="edit-item" onclick="itemedit(${itemid})">Edit</button>
        <button class="delete-item" onclick="itemdelete(${itemid})">Del X</button>
    </div>`;

    cont.innerHTML = html;

    return cont;

}