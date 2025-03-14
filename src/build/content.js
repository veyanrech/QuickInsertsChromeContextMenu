/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Actions.js":
/*!********************!*\
  !*** ./Actions.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Actions)
/* harmony export */ });
/* harmony import */ var _Actions_TAG__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions_TAG */ "./Actions_TAG.js");
/* harmony import */ var _Actions_ITEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Actions_ITEM */ "./Actions_ITEM.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }



/**
 * @typedef {import('./Actions_TAG').Tags} Tags
 * @typedef {import('./Actions_ITEM').Items} Items
 *
 * @typedef tagItem
 * @property {number} id
 * @property {HTMLElement} htmlelement
 */
var _tagsdb = /*#__PURE__*/new WeakMap();
var _itemsdb = /*#__PURE__*/new WeakMap();
var Actions = /*#__PURE__*/function () {
  // #_db = null;

  function Actions(db) {
    _classCallCheck(this, Actions);
    /**
     * @type {Tags}
     */
    _classPrivateFieldInitSpec(this, _tagsdb, null);
    /**
     * @type {Items}
     */
    _classPrivateFieldInitSpec(this, _itemsdb, null);
    this.data = [];

    // this.#_db = db;

    _classPrivateFieldSet(_tagsdb, this, new _Actions_TAG__WEBPACK_IMPORTED_MODULE_0__.Tags());
    _classPrivateFieldSet(_itemsdb, this, new _Actions_ITEM__WEBPACK_IMPORTED_MODULE_1__.Items());
    console.log("Actions", _classPrivateFieldGet(_tagsdb, this), _classPrivateFieldGet(_itemsdb, this));
  }
  return _createClass(Actions, [{
    key: "addTag",
    value: function () {
      var _addTag = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(tagValue) {
        var newtagid;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _classPrivateFieldGet(_tagsdb, this).addTag(tagValue);
            case 2:
              newtagid = _context.sent;
              return _context.abrupt("return", newtagid);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function addTag(_x) {
        return _addTag.apply(this, arguments);
      }
      return addTag;
    }()
  }, {
    key: "getAllTags",
    value: function () {
      var _getAllTags = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _classPrivateFieldGet(_tagsdb, this).getAllTags();
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getAllTags() {
        return _getAllTags.apply(this, arguments);
      }
      return getAllTags;
    }()
    /**
     * 
     * @param {number} tagid 
     * @param {string} itemValue 
     */
  }, {
    key: "addItem",
    value: (function () {
      var _addItem = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(tagid, itemValue) {
        var newitemid;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _classPrivateFieldGet(_itemsdb, this).addItem(itemValue, tagid);
            case 2:
              newitemid = _context3.sent;
              return _context3.abrupt("return", newitemid);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function addItem(_x2, _x3) {
        return _addItem.apply(this, arguments);
      }
      return addItem;
    }())
  }, {
    key: "getItemsByTagId",
    value: function () {
      var _getItemsByTagId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(tagid) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _classPrivateFieldGet(_itemsdb, this).getItemsByTagId(tagid);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getItemsByTagId(_x4) {
        return _getItemsByTagId.apply(this, arguments);
      }
      return getItemsByTagId;
    }()
  }, {
    key: "removeTag",
    value: function () {
      var _removeTag = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(tagID) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", _classPrivateFieldGet(_tagsdb, this).removeTag(tagID));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function removeTag(_x5) {
        return _removeTag.apply(this, arguments);
      }
      return removeTag;
    }()
  }, {
    key: "moveItem",
    value: function moveItem(itemID, tagID) {}
  }]);
}();


/***/ }),

/***/ "./Actions_ITEM.js":
/*!*************************!*\
  !*** ./Actions_ITEM.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Items: () => (/* binding */ Items)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Items = /*#__PURE__*/function () {
  // #_db = null;

  function Items() {
    _classCallCheck(this, Items);
  } // this.#_db = db;
  return _createClass(Items, [{
    key: "addItem",
    value: function addItem(itemValue, tagId) {
      // return this.#_db.addData("Items", new itemsModel(null, itemValue, tagId).returnValue());
      return new Promise(function (res, rej) {
        chrome.runtime.sendMessage({
          action: "SAVEDATA",
          objectStorage: "Items",
          data: new itemsModel(null, itemValue, tagId).returnValue()
        }, function (response) {
          res(response);
          console.log("ADD ITEM SAVE DATA response", response);
          chrome.runtime.sendMessage({
            action: "GETDATABYID",
            objectStorage: "Tags",
            id: tagId
          }, function (response) {
            console.log("response", response);
          });
        });
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(item_id) {
      // this.#_db.removeData("Items", item_id);
      return new Promise(function (res, rej) {
        chrome.runtime.sendMessage({
          action: "DELETEDATA",
          objectStorage: "Items",
          id: item_id
        }, function (response) {
          res(response);
        });
      });
    }
  }, {
    key: "updateItem",
    value: function updateItem(tag_id, item_id, value) {}
  }, {
    key: "getItemsByTagId",
    value: function getItemsByTagId(tag_id) {
      // return new Promise((res,rej) => {
      //     this.#_db.getAllData("Items", (result) => {
      //         if (!tag_id) return rej("No tag id provided");
      //         if (!result) return rej("No items found");
      //         res( result.filter(item => item.TagId === tag_id) );
      //     });
      // })

      console.log("GET ITEMS BY TAG ID", tag_id);
      return new Promise(function (res, rej) {
        chrome.runtime.sendMessage({
          action: "GETDATA",
          objectStorage: "Items",
          id: tag_id
        }, function (response) {
          res(response);
        });
      });
    }
  }, {
    key: "getAllItems",
    value: function getAllItems() {
      // return new Promise((res,rej) => {
      //     this.#_db.getAllData("Items", (result) => {
      //         res(result);
      //     });
      // })
    }
  }, {
    key: "getFirstItem",
    value: function getFirstItem(tag_id) {}
  }]);
}();
function itemsModel(id, v, tid) {
  this.Id = id || 0;
  this.Value = v || "Item";
  this.TagId = tid || 0;
}
itemsModel.prototype.returnValue = function () {
  if (!this.Id) {
    return {
      Value: this.Value,
      TagId: this.TagId
    };
  }
  return {
    Id: this.Id,
    Value: this.Value,
    TagId: this.TagId
  };
};

/***/ }),

/***/ "./Actions_TAG.js":
/*!************************!*\
  !*** ./Actions_TAG.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tags: () => (/* binding */ Tags)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Tags = /*#__PURE__*/function () {
  // #_db = null;

  function Tags(db) {
    _classCallCheck(this, Tags);
  } // this.#_db = db;
  return _createClass(Tags, [{
    key: "addTag",
    value: function addTag(tagValue) {
      // const idres = await this.#_db.addData("Tags", new tagModel(null, tagValue).returnValue())
      // console.log("tag actions add tag id", idres);
      // return idres;
      console.log("ADD TAG", tagValue);
      return new Promise(function (res, rej) {
        chrome.runtime.sendMessage({
          action: "SAVEDATA",
          objectStorage: "Tags",
          data: new tagModel(null, tagValue).returnValue()
        }, function (response) {
          console.log("ADD TAG response", response);
          res(response);
        });
      });
    }
  }, {
    key: "removeTag",
    value: function removeTag(tagID) {
      //remove all items with tagID
      // return this.#_db.removeData("Tags", tagID);
      return new Promise(function (res, rej) {
        chrome.runtime.sendMessage({
          action: "DELETEDATA",
          objectStorage: "Tags",
          id: tagID
        }, function (response) {
          res(response);
        });
      });
    }
  }, {
    key: "updateTag",
    value: function updateTag(tagID, tagData) {
      //update tag name
    }
  }, {
    key: "getTagById",
    value: function getTagById(tagID) {
      // return this.#_db.getData("Tags", tagID);
      return new Promise(function (res, rej) {
        chrome.runtime.sendMessage({
          action: "GETDATABYID",
          objectStorage: "Tags",
          id: tagID
        }, function (response) {
          res(response);
        });
      });
    }
  }, {
    key: "getAllTags",
    value: function getAllTags() {
      // return this.#_db.getAllData("Tags");        
      return new Promise(function (res, rej) {
        chrome.runtime.sendMessage({
          action: "GETALLDATA",
          objectStorage: "Tags"
        }, function (response) {
          res(response);
        });
      });
    }
  }]);
}();
function tagModel(id, name) {
  this.Id = id || 0;
  this.Name = name || "Tag";
  this.Items = [];
}
tagModel.prototype.returnValue = function () {
  if (!this.Id) {
    return {
      Name: this.Name
    };
  }
  return {
    Id: this.Id,
    Name: this.Name
  };
};

/***/ }),

/***/ "./dialog.js":
/*!*******************!*\
  !*** ./dialog.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddStyles: () => (/* binding */ AddStyles),
/* harmony export */   CloseDialog: () => (/* binding */ CloseDialog),
/* harmony export */   DialogUI: () => (/* binding */ DialogUI),
/* harmony export */   ShowDialog: () => (/* binding */ ShowDialog),
/* harmony export */   dialogCssCode: () => (/* binding */ dialogCssCode),
/* harmony export */   dialogHtmlCode: () => (/* binding */ dialogHtmlCode)
/* harmony export */ });
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./Actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }

var dialogHtmlCode = "" + // <dialog id="fast-past-dialog-id">
"<div style=\"\n            display: flex;\n            flex-flow: column;\n            position: relative;\n            \">\n            <div class=\"header\">\n                <h1>Fast Past Items Menu</h1>\n                <div class=\"container column-2\">\n                    <div class=\"column-75\"></div>\n                    <div class=\"column-25\">\n                        <button id=\"close\">Close X</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"body\">\n                <div class=\"container\">\n                    <div class=\"column-35\">\n                        <div class=\"column-header\">\n                            <div class=\"container column\">\n                                <div class=\"column-75\">\n                                    <h2>Tags</h2>\n                                </div>\n                                <div class=\"column-25\">\n                                    <button id=\"add-tag\">Add +</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"column content tags\"></div>\n                    </div>\n                    <div class=\"vertical-line\" style=\"flex-grow: 1;\"></div>\n                    <div class=\"column-65\">\n                        <div class=\"column-header\">\n                            <div class=\"container column\">\n                                <div class=\"column-75\">\n                                    <h2>Items</h2>\n                                </div>\n                                <div class=\"column-25\">\n                                    <button id=\"add-item\">Add +</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"column content items\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>";
// </dialog>`;

var dialogCssCode = "\n#fast-past-dialog-id {\n    all: initial;\n    font-family: system-ui, -apple-system, sans-serif;\n    color: #333;\n    background: white;\n    border-radius: 8px;\n    padding: 0;\n    margin: auto 50%;\n    max-width: 800px;\n    min-width: 250px;\n    max-height: 60vh;\n    min-height: 250px;\n    border: none;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    display: none;\n    inset-block-start: 0px;\n    inset-block-end: 0px;\n    position: fixed;\n    transform: translate(-50%);\n    width: calc(100% - 2em - 6px);\n    height: calc(100% - 2em - 6px);\n}\n\n#fast-past-dialog-id::backdrop {\n    background: rgba(0, 0, 0, 0.5);\n}\n\n#fast-past-dialog-id[open] {\n    display: block;\n}\n\n#fast-past-dialog-id * {\n    all: initial;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, sans-serif;\n    font-size: 1rem;\n}\n\n#fast-past-dialog-id .header {\n    padding: .1em .25em;\n    border-bottom: 1px solid #e0e0e0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-height: calc(1.5em + 2px + .5em);\n}\n\n#fast-past-dialog-id .header h1 {\n    padding: .15em .25em;\n    font-size: 1.5em;\n    display: block;\n}\n\n#fast-past-dialog-id .header button#close {\n    cursor: pointer;\n    padding: .25em;\n    border-radius: .25em;\n    border: 1px solid #e0e0e0;\n    font-size: .75em;\n}\n\n#fast-past-dialog-id .body {\n    padding: .25em;\n    display: flex;\n    flex-flow: column;\n    max-height: calc(60vh - calc(1.5em + 2px + .5em));\n}\n\n#fast-past-dialog-id .container {\n    display: flex;\n    flex-flow: row;\n    padding: .25em;\n}\n\n#fast-past-dialog-id .container .column-header {\n    max-height: 30px;\n}\n\n#fast-past-dialog-id .container .column-header {\n    max-height: 30px;\n}\n\n#fast-past-dialog-id .container.column {\n    display: flex;\n}\n\n#fast-past-dialog-id .column-25 {\n    flex-grow: 25;\n}\n\n#fast-past-dialog-id .column-35 {\n    flex-grow: 35;\n    width: 35%;\n}\n\n#fast-past-dialog-id .column-65 {\n    flex-grow: 65;\n    width: 65%;\n}\n\n#fast-past-dialog-id .column-75 {\n    flex-grow: 75;\n}\n\n#fast-past-dialog-id .vertical-line {\n    border-left: 1px solid #e0e0e0;\n    margin: 0;\n}\n\n#fast-past-dialog-id .column-header {\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n}\n\n#fast-past-dialog-id .column.content.tags, #fast-past-dialog-id .column.content.items {\n    padding: .25em;\n    display: flex;\n    flex-flow: column;\n\n    min-height: 175px;\n    max-height: calc(60vh - calc(1.5em + 2px + .5em) - 30px - 1.5em);\n\n    overflow: auto;\n}\n\n#fast-past-dialog-id .tag-container, #fast-past-dialog-id .item-container {\n    display: flex;\n    flex-flow: row;\n    padding: .25em;\n    cursor: pointer;\n    border-bottom: 1px solid transparent;\n}\n\n#fast-past-dialog-id .tag-container.selected {\n    background-color:rgb(61, 61, 61);\n    border-bottom: 1px solid rgb(224, 224, 224);\n    color: white;\n}\n\n#fast-past-dialog-id .tag-container:hover, #fast-past-dialog-id .item-container:hover {\n    background-color: #f0f0f0;\n    border-bottom: 1px solid #e0e0e0;\n}\n\n#fast-past-dialog-id .tag-container .tag-content  {\n    flex-grow: 85;\n    max-width: 250px;\n}\n\n#fast-past-dialog-id .tag-container .tag-action  {\n    flex-grow: 15;\n    max-width: 75px;\n}\n\n\n#fast-past-dialog-id .item-container .item-action button, #fast-past-dialog-id .tag-container .tag-action button {\n    cursor: pointer;\n    font-size: .75em;\n    border: 1px solid #e0e0e0;\n    padding: .07em;\n}\n\n#fast-past-dialog-id .item-container .item-action button:hover, #fast-past-dialog-id .tag-container .tag-action button:hover {\n    border: 1px solid #7e7e7e;\n    background-color: #e0e0e0;\n}\n\n#fast-past-dialog-id .add-item, #fast-past-dialog-id .edit-item, #fast-past-dialog-id .delete-item, #fast-past-dialog-id .add-tag, #fast-past-dialog-id .edit-tag, #fast-past-dialog-id .delete-tag {\n    cursor: pointer;\n    font-size: .75em;\n    border: 1px solid #e0e0e0;\n    padding: .07em;\n}\n\n#fast-past-dialog-id #add-tag, #fast-past-dialog-id #add-item{\n    cursor: pointer;\n    border: 1px solid #e0e0e0;\n    border-radius: .25em;\n    padding: .07em;\n}\n\n#fast-past-dialog-id .column.content.tags {\n    max-width: 400px;\n}\n";
function CloseDialog() {
  var dialog = document.getElementById('fast-past-dialog-id');
  dialog.close();
  removeESCEventListenerONDialogClosed(dialog);
  detachCloseEventToCloseButton();
}

/**
 * 
 * @param {DialogUI} dialogui 
 */
function ShowDialog(dialogui) {
  dialogui.show();
}
function initialLoadtags(app, tagsColumn, itemsColumn) {}
function selectTagEvent(app, tagid, tagsColumn, itemsColumn) {}
function addESCEventListenerONDialogOpened(dialogElement) {
  if (!dialogElement) {
    return;
  }
  if (dialogElement.hasAttribute("open")) {
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dialogElement.close();
      }
    });
  }
}
function removeESCEventListenerONDialogClosed(dialogElement) {
  if (dialogElement) {
    document.removeEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dialogElement.close();
      }
    });
  }
}
function attachCloseEventToCloseButton() {
  var closeButton = document.querySelector("#fast-past-dialog-id #close");
  closeButton.addEventListener("click", function () {
    CloseDialog();
  });
}
function detachCloseEventToCloseButton() {
  var closeButton = document.querySelector("#fast-past-dialog-id #close");
  closeButton.removeEventListener("click", function () {
    CloseDialog();
  });
}
function appendDialogToBody() {
  // Create the dialog box
  var dialogBox = document.createElement("dialog");
  dialogBox.id = "fast-past-dialog-id";
  dialogBox.innerHTML = dialogHtmlCode;
  document.body.appendChild(dialogBox);
}
var cssWasAdded = false;
function AddStyles() {
  if (cssWasAdded) {
    return;
  }
  var style = document.createElement('style');
  style.innerHTML = dialogCssCode;
  document.head.appendChild(style);
  cssWasAdded = true;
}
/**
 * 
 * @param {DialogUI} app
 * @param {number} tagid 
 * @param {string} tagname 
 * @returns Object{
 *     id: number,
 *    htmlelement: HTMLElement}
 */
function tagRender(app, tagid, tagname) {
  var cont = document.createElement('div');
  cont.classList.add('tag-container');
  var html = "<div class=\"tag-content\">".concat(tagname, "</div>") + "<div class=\"tag-action\">\n        <button class=\"edit-tag\" onclick=\"tagedit(".concat(tagid, ")\">Edit</button>\n        <button class=\"delete-tag\" onclick=\"tagdelete(").concat(tagid, ")\">Del X</button>\n    </div>");
  cont.innerHTML = html;
  cont.onclick = function () {
    var thisTagID = tagid;
    var thisCont = cont;
    app.setCurrentTag(function () {
      return {
        id: thisTagID,
        htmlelement: thisCont
      };
    }());
  };
  return {
    id: tagid,
    htmlelement: cont
  };
}
var tagdelete = null;

/**
 * 
 * @param {Actions} app 
 * @param {*} tagid 
 * @param {*} itemid 
 * @param {*} itemvalue 
 * @returns 
 */
function itemRender(app, tagid, itemid, itemvalue) {
  var cont = document.createElement('div');
  cont.classList.add('item-container');
  var html = "<div class=\"item-content\">".concat(itemvalue, "</div>") + "<div class=\"item-action\">\n        <button class=\"edit-item\" onclick=\"itemedit(".concat(itemid, ")\">Edit</button>\n        <button class=\"delete-item\" onclick=\"itemdelete(").concat(itemid, ")\">Del X</button>\n    </div>");
  cont.innerHTML = html;
  cont.onclick = function () {
    navigator.clipboard.writeText(itemvalue).then(function () {
      console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });
  };
  return {
    id: itemid,
    htmlelement: cont
  };
}
function itemdelete(itemid) {
  console.log("itemdelete", itemid);
}
var _items = /*#__PURE__*/new WeakMap();
var DialogUI = /*#__PURE__*/function () {
  /**
   * 
   * @param {Actions} app 
   */
  function DialogUI(app) {
    var _this = this;
    _classCallCheck(this, DialogUI);
    _defineProperty(this, "tagsColumn", null);
    _defineProperty(this, "itemsColumn", null);
    _defineProperty(this, "addTagButton", null);
    _defineProperty(this, "addItemButton", null);
    _defineProperty(this, "dialog", null);
    _classPrivateFieldInitSpec(this, _items, {});
    /**
     * @type {tagItem}
     */
    _defineProperty(this, "currentTag", null);
    /*
    * @type {Object.<number, tagItem>}
    */
    _defineProperty(this, "tags", {});
    this.app = app;
    if (!document.getElementById('fast-past-dialog-id')) {
      appendDialogToBody();
    }
    tagdelete = function tagdelete(tagid) {
      app.removeTag(tagid);
      if (_this.tags[tagid]) {
        _this.tags[tagid].htmlelement.remove();
      }
    };
    this.init();
  }
  return _createClass(DialogUI, [{
    key: "show",
    value: function () {
      var _show = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        var focusedInput;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!document.getElementById('fast-past-dialog-id')) {
                appendDialogToBody();
                this.init();
                Object.keys(this.tags).forEach(function (key) {
                  _this2.tagsColumn.appendChild(_this2.tags[key].htmlelement);
                });
              }
              this.dialog.showModal();
              focusedInput = document.activeElement;
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function show() {
        return _show.apply(this, arguments);
      }
      return show;
    }()
  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this3 = this;
        var tags;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.dialog = document.getElementById('fast-past-dialog-id');
              addESCEventListenerONDialogOpened(this.dialog);
              attachCloseEventToCloseButton();
              this.tagsColumn = document.querySelector("#fast-past-dialog-id .column.content.tags");
              this.itemsColumn = document.querySelector("#fast-past-dialog-id .column.content.items");
              this.addTagButton = document.getElementById("add-tag");
              this.addItemButton = document.getElementById("add-item");
              this.addTagButton.addEventListener("click", /*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                  var userinput, newtagid;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        // Add Tag
                        userinput = window.prompt("Add Tag", "New Tag Name");
                        if (!(userinput == null)) {
                          _context2.next = 4;
                          break;
                        }
                        // Add Tag to the list
                        alert("Tag name is required");
                        return _context2.abrupt("return");
                      case 4:
                        _context2.next = 6;
                        return _this3.app.addTag(userinput);
                      case 6:
                        newtagid = _context2.sent;
                        console.log("new tag id", newtagid, _this3.tags);
                        _this3.tags[newtagid] = tagRender(_this3, newtagid, userinput);
                        _this3.tagsColumn.appendChild(_this3.tags[newtagid].htmlelement);
                      case 10:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }());
              this.addItemButton.addEventListener("click", /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(e) {
                  var userinput, newitemid;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        // Add Item
                        userinput = window.prompt("Add Item", "New Item Name");
                        if (!(userinput == null)) {
                          _context3.next = 4;
                          break;
                        }
                        // Add Item to the list
                        alert("Item name is required");
                        return _context3.abrupt("return");
                      case 4:
                        _context3.next = 6;
                        return _this3.app.addItem(_this3.getCurrentTag().id, userinput);
                      case 6:
                        newitemid = _context3.sent;
                        _classPrivateFieldGet(_items, _this3)[newitemid] = itemRender(_this3, _this3.getCurrentTag().id, newitemid, userinput);
                        _this3.itemsColumn.appendChild(_classPrivateFieldGet(_items, _this3)[newitemid].htmlelement);
                      case 9:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x2) {
                  return _ref2.apply(this, arguments);
                };
              }());
              _context4.next = 11;
              return this.app.getAllTags();
            case 11:
              tags = _context4.sent;
              tags === null || tags === void 0 || tags.forEach(function (element) {
                _this3.tags[element.id] = tagRender(_this3, element.id, element.Name);
                _this3.tagsColumn.appendChild(_this3.tags[element.id].htmlelement);
              });
              console.log("tags", tags);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
    /**
     * 
     * @param {tagItem} tag 
     */
  }, {
    key: "setCurrentTag",
    value: function setCurrentTag(tag) {
      var _this4 = this;
      if (this.currentTag) {
        this.currentTag.htmlelement.classList.remove("selected");
      }
      this.currentTag = tag;
      this.tags[tag.id].htmlelement.classList.add("selected");
      this.itemsColumn.innerHTML = "No data found";
      this.app.getItemsByTagId(tag.id).then(function (items) {
        if (!items || items.length == 0) return;
        _this4.itemsColumn.innerHTML = "";
        items.forEach(function (element) {
          _classPrivateFieldGet(_items, _this4)[element.id] = itemRender(_this4, element.TagId, element.id, element.Value);
          _this4.itemsColumn.appendChild(_classPrivateFieldGet(_items, _this4)[element.id].htmlelement);
        });
      });
    }

    /**
     * 
     * @returns {tagItem}
     */
  }, {
    key: "getCurrentTag",
    value: function getCurrentTag() {
      return this.currentTag;
    }
  }]);
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ "./Actions.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog */ "./dialog.js");


var APP = new _Actions__WEBPACK_IMPORTED_MODULE_0__["default"]();
var UI = new _dialog__WEBPACK_IMPORTED_MODULE_1__.DialogUI(APP);
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  (0,_dialog__WEBPACK_IMPORTED_MODULE_1__.AddStyles)();
  if (msg.action == 'open_dialog_box') {
    (0,_dialog__WEBPACK_IMPORTED_MODULE_1__.ShowDialog)(UI);
  }
  return true;
});
})();

/******/ })()
;