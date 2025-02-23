import Actions from "./Actions";
import { AddStyles, ShowDialog, DialogUI } from "./dialog";
const APP = new Actions();
const UI = new DialogUI(APP);

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    AddStyles();

    if (msg.action == 'open_dialog_box') {
        ShowDialog(UI);
    }

    return true;
  
});