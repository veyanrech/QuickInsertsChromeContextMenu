import { contentUtils } from "./db";
import { AddStyles, ShowDialog } from "./dialog";

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    AddStyles();

    if (msg.action == 'open_dialog_box') {
        ShowDialog();
    }

    console.log(msg)
    console.log(sender)
    console.log(sendResponse)

    return true;
  
});