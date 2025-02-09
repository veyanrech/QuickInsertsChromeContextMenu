/*! For license information please see content.js.LICENSE.txt */
(()=>{"use strict";function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(){n=function(){return r};var e,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{d({},"")}catch(e){d=function(t,n,e){return t[n]=e}}function f(t,n,e,r){var o=n&&n.prototype instanceof b?n:b,a=Object.create(o.prototype),s=new N(r||[]);return i(a,"_invoke",{value:_(t,e,s)}),a}function p(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var h="suspendedStart",m="suspendedYield",g="executing",v="completed",y={};function b(){}function x(){}function w(){}var E={};d(E,c,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(T([])));k&&k!==o&&a.call(k,c)&&(E=k);var S=w.prototype=b.prototype=Object.create(E);function j(t){["next","throw","return"].forEach((function(n){d(t,n,(function(t){return this._invoke(n,t)}))}))}function O(n,e){function r(o,i,s,c){var l=p(n[o],n,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==t(d)&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,s,c)}),(function(t){r("throw",t,s,c)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return r("throw",t,s,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function _(t,n,r){var o=h;return function(a,i){if(o===g)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:e,done:!0}}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var c=I(s,r);if(c){if(c===y)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===h)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var l=p(t,n,r);if("normal"===l.type){if(o=r.done?v:m,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=v,r.method="throw",r.arg=l.arg)}}}function I(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,I(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var a=p(o,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var i=a.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function D(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function t(){for(;++o<n.length;)if(a.call(n,o))return t.value=n[o],t.done=!1,t;return t.value=e,t.done=!0,t};return i.next=i}}throw new TypeError(t(n)+" is not iterable")}return x.prototype=w,i(S,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:x,configurable:!0}),x.displayName=d(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},r.awrap=function(t){return{__await:t}},j(O.prototype),d(O.prototype,l,(function(){return this})),r.AsyncIterator=O,r.async=function(t,n,e,o,a){void 0===a&&(a=Promise);var i=new O(f(t,n,e,o),a);return r.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(S),d(S,u,"Generator"),d(S,c,(function(){return this})),d(S,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(D),!t)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=n,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),D(e),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;D(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},r}function e(t,n,e,r,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void e(t)}s.done?n(c):Promise.resolve(c).then(r,o)}function r(t){return function(){var n=this,r=arguments;return new Promise((function(o,a){var i=t.apply(n,r);function s(t){e(i,o,a,s,c,"next",t)}function c(t){e(i,o,a,s,c,"throw",t)}s(void 0)}))}}!function(t){function e(t){return o.apply(this,arguments)}function o(){return(o=r(n().mark((function t(e){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,t.prev=1,t.next=4,chrome.storage.local.get("FastPastDBName");case 4:r=t.sent,t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(1),new Error("Error accessing the database",t.t0);case 10:return t.abrupt("return",r);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}function a(){var t=this,o=null;try{o=r(n().mark((function t(){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()}catch(t){return new Error("Error accessing the database",t)}if(!o)throw new Error("Error accessing the database (2)");this.db=null,this.lastResult=null;var a=indexedDB.open(o,1);a.onupgradeneeded=function(t){var n=t.target.result;n.objectStoreNames.contains("Tags")||n.createObjectStore("Tags",{keyPath:"id",autoIncrement:!0}),n.objectStoreNames.contains("Items")||n.createObjectStore("Items",{keyPath:"id",autoIncrement:!0})},a.onsuccess=function(){t.db=a.result},a.onerror=function(t){console.error("Error opening database:",t)}}console.log(this),a.prototype.returnLatestResult=function(){var t=this.lastResult;return this.lastResult=null,t},a.prototype.addData=function(){var t=r(n().mark((function t(e,r){var o,a,i,s,c=this;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=this.db,a=o.transaction(e,"readwrite"),i=a.objectStore(e),(s=i.add(r)).onsuccess=function(t){var n=t.target.result;c.lastResult=n},s.onerror=function(){return console.error("Error adding data:",s.error)},t.next=8,a.complete;case 8:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}(),a.prototype.getData=function(){var t=r(n().mark((function t(e,r){var o,a,i,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=this.db,a=o.transaction(e,"readonly"),i=a.objectStore(e),(s=i.get(r)).onsuccess=function(){return console.log("Data retrieved:",s.result)},s.onerror=function(){return console.error("Error retrieving data:",s.error)},t.next=8,a.complete;case 8:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}(),a.prototype.getAllData=function(){var t=r(n().mark((function t(e,r){var o,a,i,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=this.db,a=o.transaction(e,"readonly"),i=a.objectStore(e),(s=i.getAll()).onsuccess=function(){console.log("Data retrieved:",s.result),r&&r(s.result)},s.onerror=function(){return console.error("Error retrieving data:",s.error)},t.next=8,a.complete;case 8:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}(),a.prototype.deleteData=function(){var t=r(n().mark((function t(e,r){var o,a,i,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=this.db,a=o.transaction(e,"readwrite"),i=a.objectStore(e),(s=i.delete(r)).onsuccess=function(){return console.log("Data deleted:",r)},s.onerror=function(){return console.error("Error deleting data:",s.error)},t.next=8,a.complete;case 8:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}(),a.prototype.updateData=function(){var t=r(n().mark((function t(e,r){var o,a,i,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=this.db,a=o.transaction(e,"readwrite"),i=a.objectStore(e),(s=i.put(r)).onsuccess=function(){return console.log("Data updated:",s.result)},s.onerror=function(){return console.error("Error updating data:",s.error)},t.next=8,a.complete;case 8:case"end":return t.stop()}}),t,this)})));return function(n,e){return t.apply(this,arguments)}}(),a.prototype.getLastIndexOfStorage=function(){var t=r(n().mark((function t(e){var r,o,a,i,s;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.db,o=r.transaction(e,"readonly"),a=o.objectStore(e),i=a.getAllKeys(),s=0,i.onsuccess=function(){var t=i.result;t.length>0&&(s=t[t.length-1])},i.onerror=function(){return console.error("Error getting last index of storage:",i.error)},t.next=9,o.complete;case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}(),t.DBInstance=new a}({});function o(){var t,n=document.getElementById("fast-past-dialog-id");n.close(),(t=n)&&document.removeEventListener("keydown",(function(n){"Escape"===n.key&&t.close()})),document.querySelector("#fast-past-dialog-id #close").removeEventListener("click",(function(){o()}))}function a(){!function(){if(!document.getElementById("fast-past-dialog-id")){var t=document.createElement("dialog");t.id="fast-past-dialog-id",t.innerHTML='<div style="\n            display: flex;\n            flex-flow: column;\n            position: relative;\n            ">\n            <div class="header">\n                <h1>Fast Past Items Menu</h1>\n                <div class="container column-2">\n                    <div class="column-75"></div>\n                    <div class="column-25">\n                        <button id="close">Close X</button>\n                    </div>\n                </div>\n            </div>\n            <div class="body">\n                <div class="container">\n                    <div class="column-35">\n                        <div class="column-header">\n                            <div class="container column">\n                                <div class="column-75">\n                                    <h2>Tags</h2>\n                                </div>\n                                <div class="column-25">\n                                    <button id="add-tag">Add +</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="column content tags"></div>\n                    </div>\n                    <div class="vertical-line" style="flex-grow: 1;"></div>\n                    <div class="column-65">\n                        <div class="column-header">\n                            <div class="container column">\n                                <div class="column-75">\n                                    <h2>Items</h2>\n                                </div>\n                                <div class="column-25">\n                                    <button id="add-item">Add +</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="column content items"></div>\n                    </div>\n                </div>\n            </div>\n        </div>',document.body.appendChild(t)}}();var t,n=document.getElementById("fast-past-dialog-id");n.showModal(),document.activeElement,document.querySelector("#fast-past-dialog-id .column.content.tags"),document.querySelector("#fast-past-dialog-id .column.content.items"),document.getElementById("add-tag"),document.getElementById("add-item"),(t=n)&&t.hasAttribute("open")&&document.addEventListener("keydown",(function(n){"Escape"===n.key&&t.close()})),document.querySelector("#fast-past-dialog-id #close").addEventListener("click",(function(){o()}))}var i=!1;chrome.runtime.onMessage.addListener((function(t,n,e){return function(){if(!i){var t=document.createElement("style");t.innerHTML="\n#fast-past-dialog-id {\n    all: initial;\n    font-family: system-ui, -apple-system, sans-serif;\n    color: #333;\n    background: white;\n    border-radius: 8px;\n    padding: 0;\n    margin: auto 50%;\n    max-width: 800px;\n    min-width: 250px;\n    max-height: 60vh;\n    min-height: 250px;\n    border: none;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    display: none;\n    inset-block-start: 0px;\n    inset-block-end: 0px;\n    position: fixed;\n    transform: translate(-50%);\n    width: calc(100% - 2em - 6px);\n    height: calc(100% - 2em - 6px);\n}\n\n#fast-past-dialog-id::backdrop {\n    background: rgba(0, 0, 0, 0.5);\n}\n\n#fast-past-dialog-id[open] {\n    display: block;\n}\n\n#fast-past-dialog-id * {\n    all: initial;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, sans-serif;\n    font-size: 1rem;\n}\n\n#fast-past-dialog-id .header {\n    padding: .1em .25em;\n    border-bottom: 1px solid #e0e0e0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-height: calc(1.5em + 2px + .5em);\n}\n\n#fast-past-dialog-id .header h1 {\n    padding: .15em .25em;\n    font-size: 1.5em;\n    display: block;\n}\n\n#fast-past-dialog-id .header button#close {\n    cursor: pointer;\n    padding: .25em;\n    border-radius: .25em;\n    border: 1px solid #e0e0e0;\n    font-size: .75em;\n}\n\n#fast-past-dialog-id .body {\n    padding: .25em;\n    display: flex;\n    flex-flow: column;\n    max-height: calc(60vh - calc(1.5em + 2px + .5em));\n}\n\n#fast-past-dialog-id .container {\n    display: flex;\n    flex-flow: row;\n    padding: .25em;\n}\n\n#fast-past-dialog-id .container .column-header {\n    max-height: 30px;\n}\n\n#fast-past-dialog-id .container .column-header {\n    max-height: 30px;\n}\n\n#fast-past-dialog-id .container.column {\n    display: flex;\n}\n\n#fast-past-dialog-id .column-25 {\n    flex-grow: 25;\n}\n\n#fast-past-dialog-id .column-35 {\n    flex-grow: 35;\n}\n\n#fast-past-dialog-id .column-65 {\n    flex-grow: 65;\n}\n\n#fast-past-dialog-id .column-75 {\n    flex-grow: 75;\n}\n\n#fast-past-dialog-id .vertical-line {\n    border-left: 1px solid #e0e0e0;\n    margin: 0;\n}\n\n#fast-past-dialog-id .column-header {\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n}\n\n#fast-past-dialog-id .column.content.tags, #fast-past-dialog-id .column.content.items {\n    padding: .25em;\n    display: flex;\n    flex-flow: column;\n\n    min-height: 175px;\n    max-height: calc(60vh - calc(1.5em + 2px + .5em) - 30px - 1.5em);\n\n    overflow: auto;\n}\n\n#fast-past-dialog-id .tag-container, #fast-past-dialog-id .item-container {\n    display: flex;\n    flex-flow: row;\n    padding: .25em;\n}\n\n#fast-past-dialog-id .item-container .item-action button, #fast-past-dialog-id .tag-container .tag-action button {\n    cursor: pointer;\n    font-size: .75em;\n    border: 1px solid #e0e0e0;\n    padding: .07em;\n}\n\n#fast-past-dialog-id .item-container .item-action button:hover, #fast-past-dialog-id .tag-container .tag-action button:hover {\n    border: 1px solid #7e7e7e;\n    background-color: #e0e0e0;\n}\n\n#fast-past-dialog-id .add-item, #fast-past-dialog-id .edit-item, #fast-past-dialog-id .delete-item, #fast-past-dialog-id .add-tag, #fast-past-dialog-id .edit-tag, #fast-past-dialog-id .delete-tag {\n    cursor: pointer;\n    font-size: .75em;\n    border: 1px solid #e0e0e0;\n    padding: .07em;\n}\n\n#fast-past-dialog-id #add-tag, #fast-past-dialog-id #add-item{\n    cursor: pointer;\n    border: 1px solid #e0e0e0;\n    border-radius: .25em;\n    padding: .07em;\n}",document.head.appendChild(t),i=!0}}(),"open_dialog_box"==t.action&&a(),console.log(t),console.log(n),console.log(e),!0}))})();