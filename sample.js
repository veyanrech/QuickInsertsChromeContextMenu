// A generic onclick callback function.
chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  console.log(info);
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
  chrome.contextMenus.create({
    title: 'Items',
    id: 'items'
  });
  

  // Intentionally create an invalid item, to show off error checking in the
  // create callback.
  chrome.contextMenus.create(
    { title: 'Oops', parentId: 999, id: 'errorItem' },
    function () {
      if (chrome.runtime.lastError) {
        console.log('Got expected error: ' + chrome.runtime.lastError.message);
      }
    }
  );
});