// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
      console.log(tabs)
      chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {});  
  });
}

chrome.runtime.onInstalled.addListener(function () {
  // Create one test item for each context type.
  let contexts = [
    {'selection':{
      title:'Save selection',
    }},
    {'link':{
      title:'Save link',
    }},
    {'editable':{
      title:'Paste item',
    }}
  ];

  for (let i = 0; i < contexts.length; i++) {
    
    let keys = Object.keys(contexts[i]);

    let title = contexts[i][keys[0]].title;
    let id = keys[0] + "_id";

    chrome.contextMenus.create({
      title: title,
      contexts: [keys[0]],
      id: id
    });
  }

  chrome.contextMenus.create({
    title: 'Edit items',
    id: 'edit_items'
  });

});

