import Actions from "./dataActions";
import DBINSTANCE from "./db";
import { AddStyles, ShowDialog } from "./dialog";

const APP = new Actions(DBINSTANCE);
console.log(APP)

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    AddStyles();

    if (msg.action == 'open_dialog_box') {
        ShowDialog(APP);
    }

    console.log(msg)
    console.log(sender)
    console.log(sendResponse)

    return true;
  
});