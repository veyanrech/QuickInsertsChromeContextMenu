import Actions from "./Actions";
import {DB} from "./db";
import { AddStyles, ShowDialog, DialogUI } from "./dialog";
const dbinstance = await new DB();
const APP = new Actions(dbinstance);
const UI = new DialogUI(APP);

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    AddStyles();

    if (msg.action == 'open_dialog_box') {
        ShowDialog(UI);
    }

    return true;
  
});