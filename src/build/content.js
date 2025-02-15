/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./tagActions.js
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
var _db = /*#__PURE__*/new WeakMap();
var Tags = /*#__PURE__*/function () {
  /**
   * 
   * @param {DBInstance} db IndexDB instance
   */
  function Tags(db) {
    _classCallCheck(this, Tags);
    _classPrivateFieldInitSpec(this, _db, null);
    _classPrivateFieldSet(_db, this, db.DBInstance);
    this.tagsCache = [];
  }
  return _createClass(Tags, [{
    key: "addTag",
    value: function addTag(tagValue) {
      console.log("Adding Tag", tagValue);
      console.log(_classPrivateFieldGet(_db, this));
      _classPrivateFieldGet(_db, this).addData("Tags", new tagModel(null, tagValue).returnValue());
    }
  }, {
    key: "removeTag",
    value: function removeTag(tagID) {
      //remove all items with tagID
      return _classPrivateFieldGet(_db, this).removeData("Tags", tagID);
    }
  }, {
    key: "updateTag",
    value: function updateTag(tagID, tagData) {
      //update tag name
    }
  }, {
    key: "getTagById",
    value: function getTagById(tagID) {}
  }, {
    key: "getAllTags",
    value: function () {
      var _getAllTags = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                _classPrivateFieldGet(_db, _this).getAllData("Tags", function (result) {
                  resolve(result);
                });
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getAllTags() {
        return _getAllTags.apply(this, arguments);
      }
      return getAllTags;
    }()
  }]);
}();
function tagModel(id, name) {
  this.Id = id || 0;
  this.Name = name || "Tag";
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
;// ./itemActions.js
function itemActions_typeof(o) { "@babel/helpers - typeof"; return itemActions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, itemActions_typeof(o); }
function itemActions_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function itemActions_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, itemActions_toPropertyKey(o.key), o); } }
function itemActions_createClass(e, r, t) { return r && itemActions_defineProperties(e.prototype, r), t && itemActions_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function itemActions_toPropertyKey(t) { var i = itemActions_toPrimitive(t, "string"); return "symbol" == itemActions_typeof(i) ? i : i + ""; }
function itemActions_toPrimitive(t, r) { if ("object" != itemActions_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != itemActions_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function itemActions_classPrivateFieldInitSpec(e, t, a) { itemActions_checkPrivateRedeclaration(e, t), t.set(e, a); }
function itemActions_checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function itemActions_classPrivateFieldGet(s, a) { return s.get(itemActions_assertClassBrand(s, a)); }
function itemActions_classPrivateFieldSet(s, a, r) { return s.set(itemActions_assertClassBrand(s, a), r), r; }
function itemActions_assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var itemActions_db = /*#__PURE__*/new WeakMap();
var Items = /*#__PURE__*/function () {
  /**
   * 
   * @param {DBInstance} db IndexDB instance
   */
  function Items(db) {
    itemActions_classCallCheck(this, Items);
    itemActions_classPrivateFieldInitSpec(this, itemActions_db, null);
    itemActions_classPrivateFieldSet(itemActions_db, this, db);
  }
  return itemActions_createClass(Items, [{
    key: "addItem",
    value: function addItem(itemValue, tagId) {
      itemActions_classPrivateFieldGet(itemActions_db, this).addData("Items", new itemsModel(null, itemValue, tagId).returnValue());
    }
  }, {
    key: "removeItem",
    value: function removeItem(item_id) {
      itemActions_classPrivateFieldGet(itemActions_db, this).removeData("Items", item_id);
    }
  }, {
    key: "updateItem",
    value: function updateItem(tag_id, item_id, value) {}
  }, {
    key: "getItemsByTagId",
    value: function getItemsByTagId(tag_id) {
      var _this = this;
      return new Promise(function (res, rej) {
        itemActions_classPrivateFieldGet(itemActions_db, _this).getAllData("Items", function (result) {
          resolve(result.filter(function (item) {
            return item.TagId === tag_id;
          }));
        });
      });
    }
  }, {
    key: "getAllItems",
    value: function getAllItems() {
      var _this2 = this;
      return new Promise(function (res, rej) {
        itemActions_classPrivateFieldGet(itemActions_db, _this2).getAllData("Items", function (result) {
          resolve(result);
        });
      });
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
;// ./dataActions.js
function dataActions_typeof(o) { "@babel/helpers - typeof"; return dataActions_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dataActions_typeof(o); }
function dataActions_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ dataActions_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == dataActions_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(dataActions_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function dataActions_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function dataActions_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { dataActions_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { dataActions_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function dataActions_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function dataActions_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, dataActions_toPropertyKey(o.key), o); } }
function dataActions_createClass(e, r, t) { return r && dataActions_defineProperties(e.prototype, r), t && dataActions_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function dataActions_toPropertyKey(t) { var i = dataActions_toPrimitive(t, "string"); return "symbol" == dataActions_typeof(i) ? i : i + ""; }
function dataActions_toPrimitive(t, r) { if ("object" != dataActions_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != dataActions_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function dataActions_classPrivateFieldInitSpec(e, t, a) { dataActions_checkPrivateRedeclaration(e, t), t.set(e, a); }
function dataActions_checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function dataActions_classPrivateFieldGet(s, a) { return s.get(dataActions_assertClassBrand(s, a)); }
function dataActions_classPrivateFieldSet(s, a, r) { return s.set(dataActions_assertClassBrand(s, a), r), r; }
function dataActions_assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }


var _tagsdb = /*#__PURE__*/new WeakMap();
var _itemsdb = /*#__PURE__*/new WeakMap();
var dataActions_db = /*#__PURE__*/new WeakMap();
var _currentTag = /*#__PURE__*/new WeakMap();
var _tags = /*#__PURE__*/new WeakMap();
var Actions = /*#__PURE__*/function () {
  function Actions(db) {
    dataActions_classCallCheck(this, Actions);
    dataActions_classPrivateFieldInitSpec(this, _tagsdb, null);
    dataActions_classPrivateFieldInitSpec(this, _itemsdb, null);
    dataActions_classPrivateFieldInitSpec(this, dataActions_db, null);
    dataActions_classPrivateFieldInitSpec(this, _currentTag, null);
    dataActions_classPrivateFieldInitSpec(this, _tags, []);
    this.data = [];
    dataActions_classPrivateFieldSet(dataActions_db, this, db);
    dataActions_classPrivateFieldSet(_tagsdb, this, new Tags(db));
    dataActions_classPrivateFieldSet(_itemsdb, this, new Items(db));
    console.log(dataActions_classPrivateFieldGet(_tagsdb, this), dataActions_classPrivateFieldGet(_itemsdb, this), dataActions_classPrivateFieldGet(dataActions_db, this));
  }
  return dataActions_createClass(Actions, [{
    key: "addTag",
    value: function () {
      var _addTag = dataActions_asyncToGenerator(/*#__PURE__*/dataActions_regeneratorRuntime().mark(function _callee(tagValue) {
        return dataActions_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return dataActions_classPrivateFieldGet(_tagsdb, this).addTag(tagValue);
            case 2:
              return _context.abrupt("return", dataActions_classPrivateFieldGet(_tagsdb, this).returnLatestResult());
            case 3:
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
    key: "removeTag",
    value: function removeTag(tagID) {
      //alert i

      //remove all items with tagID
      dataActions_classPrivateFieldGet(_tagsdb, this).removeTag(tagID);
    }
  }, {
    key: "moveItem",
    value: function moveItem(itemID, tagID) {}
  }]);
}();

;// ./db.js
function db_typeof(o) { "@babel/helpers - typeof"; return db_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, db_typeof(o); }
function db_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ db_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == db_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(db_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function db_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function db_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { db_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { db_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var DBINSTANCE = {};
(function (retObj) {
  console.log(this);
  // console.log(this.chrome)

  var singleton = null;
  function accessDatabase(_x) {
    return _accessDatabase.apply(this, arguments);
  }
  function _accessDatabase() {
    _accessDatabase = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee8(_dbname) {
      var res;
      return db_regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            res = null;
            _context8.prev = 1;
            _context8.next = 4;
            return chrome.storage.local.get("FastPastDBName");
          case 4:
            res = _context8.sent;
            _context8.next = 10;
            break;
          case 7:
            _context8.prev = 7;
            _context8.t0 = _context8["catch"](1);
            throw new Error("Error accessing the database", _context8.t0);
          case 10:
            return _context8.abrupt("return", res);
          case 11:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[1, 7]]);
    }));
    return _accessDatabase.apply(this, arguments);
  }
  function DBInstance() {
    var _this = this;
    if (singleton) {
      return singleton;
    }
    var dbname = null;
    try {
      dbname = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee() {
        var res;
        return db_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return accessDatabase();
            case 2:
              res = _context.sent;
              return _context.abrupt("return", res);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    } catch (error) {
      return new Error("Error accessing the database", error);
    }
    if (!dbname) {
      throw new Error("Error accessing the database (2)");
    }
    this.db = null;
    this.lastResult = null;
    var request = indexedDB.open(dbname, 1);
    request.onupgradeneeded = function (event) {
      var db = event.target.result;
      if (!db.objectStoreNames.contains("Tags")) {
        db.createObjectStore("Tags", {
          keyPath: "id",
          autoIncrement: true
        });
      }
      if (!db.objectStoreNames.contains("Items")) {
        db.createObjectStore("Items", {
          keyPath: "id",
          autoIncrement: true
        });
      }
    };
    request.onsuccess = function () {
      _this.db = request.result;
    };
    request.onerror = function (err) {
      console.error("Error opening database:", err);
    };
  }
  DBInstance.prototype.returnLatestResult = function () {
    var _res = this.lastResult;
    this.lastResult = null;
    return _res;
  };
  DBInstance.prototype.addData = /*#__PURE__*/function () {
    var _ref2 = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee2(objectStorage, data) {
      var _this2 = this;
      var db, tx, store, request;
      return db_regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            db = this.db;
            tx = db.transaction(objectStorage, "readwrite");
            store = tx.objectStore(objectStorage);
            request = store.add(data);
            request.onsuccess = function (event) {
              var insertedId = event.target.result;
              _this2.lastResult = insertedId;
            };
            request.onerror = function () {
              return console.error("Error adding data:", request.error);
            };
            _context2.next = 8;
            return tx.complete;
          case 8:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this);
    }));
    return function (_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();
  DBInstance.prototype.getData = /*#__PURE__*/function () {
    var _ref3 = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee3(objectStorage, id) {
      var db, tx, store, request;
      return db_regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            db = this.db;
            tx = db.transaction(objectStorage, "readonly");
            store = tx.objectStore(objectStorage);
            request = store.get(id);
            request.onsuccess = function () {
              return console.log("Data retrieved:", request.result);
            };
            request.onerror = function () {
              return console.error("Error retrieving data:", request.error);
            };
            _context3.next = 8;
            return tx.complete;
          case 8:
          case "end":
            return _context3.stop();
        }
      }, _callee3, this);
    }));
    return function (_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  DBInstance.prototype.getAllData = /*#__PURE__*/function () {
    var _ref4 = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee4(objectStorage, callback) {
      var db, tx, store, request;
      return db_regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            db = this.db;
            tx = db.transaction(objectStorage, "readonly");
            store = tx.objectStore(objectStorage);
            request = store.getAll();
            request.onsuccess = function () {
              console.log("Data retrieved:", request.result);
              if (callback) {
                callback(request.result);
              }
              ;
            };
            request.onerror = function () {
              return console.error("Error retrieving data:", request.error);
            };
            _context4.next = 8;
            return tx.complete;
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4, this);
    }));
    return function (_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();
  DBInstance.prototype.deleteData = /*#__PURE__*/function () {
    var _ref5 = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee5(objectStorage, id) {
      var db, tx, store, request;
      return db_regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            db = this.db;
            tx = db.transaction(objectStorage, "readwrite");
            store = tx.objectStore(objectStorage);
            request = store["delete"](id);
            request.onsuccess = function () {
              return console.log("Data deleted:", id);
            };
            request.onerror = function () {
              return console.error("Error deleting data:", request.error);
            };
            _context5.next = 8;
            return tx.complete;
          case 8:
          case "end":
            return _context5.stop();
        }
      }, _callee5, this);
    }));
    return function (_x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }();
  DBInstance.prototype.updateData = /*#__PURE__*/function () {
    var _ref6 = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee6(objectStorage, data) {
      var db, tx, store, request;
      return db_regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            db = this.db;
            tx = db.transaction(objectStorage, "readwrite");
            store = tx.objectStore(objectStorage);
            request = store.put(data);
            request.onsuccess = function () {
              return console.log("Data updated:", request.result);
            };
            request.onerror = function () {
              return console.error("Error updating data:", request.error);
            };
            _context6.next = 8;
            return tx.complete;
          case 8:
          case "end":
            return _context6.stop();
        }
      }, _callee6, this);
    }));
    return function (_x10, _x11) {
      return _ref6.apply(this, arguments);
    };
  }();
  DBInstance.prototype.getLastIndexOfStorage = /*#__PURE__*/function () {
    var _ref7 = db_asyncToGenerator(/*#__PURE__*/db_regeneratorRuntime().mark(function _callee7(objectStorage) {
      var db, tx, store, request, lastIndex;
      return db_regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            db = this.db;
            tx = db.transaction(objectStorage, "readonly");
            store = tx.objectStore(objectStorage);
            request = store.getAllKeys();
            lastIndex = 0;
            request.onsuccess = function () {
              var keys = request.result;
              if (keys.length > 0) {
                lastIndex = keys[keys.length - 1];
              }
            };
            request.onerror = function () {
              return console.error("Error getting last index of storage:", request.error);
            };
            _context7.next = 9;
            return tx.complete;
          case 9:
            return _context7.abrupt("return", lastIndex);
          case 10:
          case "end":
            return _context7.stop();
        }
      }, _callee7, this);
    }));
    return function (_x12) {
      return _ref7.apply(this, arguments);
    };
  }();
  retObj.DBInstance = new DBInstance();
  return retObj;
})(DBINSTANCE);
/* harmony default export */ const db = (DBINSTANCE);
;// ./dialog.js
function dialog_typeof(o) { "@babel/helpers - typeof"; return dialog_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dialog_typeof(o); }
function dialog_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ dialog_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == dialog_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(dialog_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function dialog_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function dialog_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { dialog_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { dialog_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var dialogHtmlCode = "" + // <dialog id="fast-past-dialog-id">
"<div style=\"\n            display: flex;\n            flex-flow: column;\n            position: relative;\n            \">\n            <div class=\"header\">\n                <h1>Fast Past Items Menu</h1>\n                <div class=\"container column-2\">\n                    <div class=\"column-75\"></div>\n                    <div class=\"column-25\">\n                        <button id=\"close\">Close X</button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"body\">\n                <div class=\"container\">\n                    <div class=\"column-35\">\n                        <div class=\"column-header\">\n                            <div class=\"container column\">\n                                <div class=\"column-75\">\n                                    <h2>Tags</h2>\n                                </div>\n                                <div class=\"column-25\">\n                                    <button id=\"add-tag\">Add +</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"column content tags\"></div>\n                    </div>\n                    <div class=\"vertical-line\" style=\"flex-grow: 1;\"></div>\n                    <div class=\"column-65\">\n                        <div class=\"column-header\">\n                            <div class=\"container column\">\n                                <div class=\"column-75\">\n                                    <h2>Items</h2>\n                                </div>\n                                <div class=\"column-25\">\n                                    <button id=\"add-item\">Add +</button>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"column content items\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>";
// </dialog>`;

var dialogCssCode = "\n#fast-past-dialog-id {\n    all: initial;\n    font-family: system-ui, -apple-system, sans-serif;\n    color: #333;\n    background: white;\n    border-radius: 8px;\n    padding: 0;\n    margin: auto 50%;\n    max-width: 800px;\n    min-width: 250px;\n    max-height: 60vh;\n    min-height: 250px;\n    border: none;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    display: none;\n    inset-block-start: 0px;\n    inset-block-end: 0px;\n    position: fixed;\n    transform: translate(-50%);\n    width: calc(100% - 2em - 6px);\n    height: calc(100% - 2em - 6px);\n}\n\n#fast-past-dialog-id::backdrop {\n    background: rgba(0, 0, 0, 0.5);\n}\n\n#fast-past-dialog-id[open] {\n    display: block;\n}\n\n#fast-past-dialog-id * {\n    all: initial;\n    box-sizing: border-box;\n    font-family: system-ui, -apple-system, sans-serif;\n    font-size: 1rem;\n}\n\n#fast-past-dialog-id .header {\n    padding: .1em .25em;\n    border-bottom: 1px solid #e0e0e0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-height: calc(1.5em + 2px + .5em);\n}\n\n#fast-past-dialog-id .header h1 {\n    padding: .15em .25em;\n    font-size: 1.5em;\n    display: block;\n}\n\n#fast-past-dialog-id .header button#close {\n    cursor: pointer;\n    padding: .25em;\n    border-radius: .25em;\n    border: 1px solid #e0e0e0;\n    font-size: .75em;\n}\n\n#fast-past-dialog-id .body {\n    padding: .25em;\n    display: flex;\n    flex-flow: column;\n    max-height: calc(60vh - calc(1.5em + 2px + .5em));\n}\n\n#fast-past-dialog-id .container {\n    display: flex;\n    flex-flow: row;\n    padding: .25em;\n}\n\n#fast-past-dialog-id .container .column-header {\n    max-height: 30px;\n}\n\n#fast-past-dialog-id .container .column-header {\n    max-height: 30px;\n}\n\n#fast-past-dialog-id .container.column {\n    display: flex;\n}\n\n#fast-past-dialog-id .column-25 {\n    flex-grow: 25;\n}\n\n#fast-past-dialog-id .column-35 {\n    flex-grow: 35;\n}\n\n#fast-past-dialog-id .column-65 {\n    flex-grow: 65;\n}\n\n#fast-past-dialog-id .column-75 {\n    flex-grow: 75;\n}\n\n#fast-past-dialog-id .vertical-line {\n    border-left: 1px solid #e0e0e0;\n    margin: 0;\n}\n\n#fast-past-dialog-id .column-header {\n    border-bottom: 1px solid #e0e0e0;\n    display: block;\n}\n\n#fast-past-dialog-id .column.content.tags, #fast-past-dialog-id .column.content.items {\n    padding: .25em;\n    display: flex;\n    flex-flow: column;\n\n    min-height: 175px;\n    max-height: calc(60vh - calc(1.5em + 2px + .5em) - 30px - 1.5em);\n\n    overflow: auto;\n}\n\n#fast-past-dialog-id .tag-container, #fast-past-dialog-id .item-container {\n    display: flex;\n    flex-flow: row;\n    padding: .25em;\n}\n\n#fast-past-dialog-id .item-container .item-action button, #fast-past-dialog-id .tag-container .tag-action button {\n    cursor: pointer;\n    font-size: .75em;\n    border: 1px solid #e0e0e0;\n    padding: .07em;\n}\n\n#fast-past-dialog-id .item-container .item-action button:hover, #fast-past-dialog-id .tag-container .tag-action button:hover {\n    border: 1px solid #7e7e7e;\n    background-color: #e0e0e0;\n}\n\n#fast-past-dialog-id .add-item, #fast-past-dialog-id .edit-item, #fast-past-dialog-id .delete-item, #fast-past-dialog-id .add-tag, #fast-past-dialog-id .edit-tag, #fast-past-dialog-id .delete-tag {\n    cursor: pointer;\n    font-size: .75em;\n    border: 1px solid #e0e0e0;\n    padding: .07em;\n}\n\n#fast-past-dialog-id #add-tag, #fast-past-dialog-id #add-item{\n    cursor: pointer;\n    border: 1px solid #e0e0e0;\n    border-radius: .25em;\n    padding: .07em;\n}";
function CloseDialog() {
  var dialog = document.getElementById('fast-past-dialog-id');
  dialog.close();
  removeESCEventListenerONDialogClosed(dialog);
  detachCloseEventToCloseButton();
}
function ShowDialog(app) {
  appendDialogToBody();
  var dialog = document.getElementById('fast-past-dialog-id');
  dialog.showModal();
  var focusedInput = document.activeElement;
  var tagsColumn = document.querySelector("#fast-past-dialog-id .column.content.tags");
  var itemsColumn = document.querySelector("#fast-past-dialog-id .column.content.items");
  var addTagButton = document.getElementById("add-tag");
  attachAddTagEvent(app, addTagButton);
  var addItemButton = document.getElementById("add-item");
  addESCEventListenerONDialogOpened(dialog);
  attachCloseEventToCloseButton();
}
function attachAddTagEvent(app, tagbutton) {
  tagbutton.addEventListener("click", function () {
    // Add Tag
    var userinput = window.prompt("Add Tag", "New Tag Name");
    if (userinput == null) {
      // Add Tag to the list
      return;
    }
    var newtagid = dialog_asyncToGenerator(/*#__PURE__*/dialog_regeneratorRuntime().mark(function _callee() {
      return dialog_regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return app.addTag(userinput);
          case 2:
            return _context.abrupt("return", _context.sent);
          case 3:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
    tagRender(newtagid, userinput);
  });
}
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
  if (document.getElementById('fast-past-dialog-id')) {
    return;
  }

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
function tagRender(tagid, tagname) {
  var cont = document.createElement('div');
  cont.classList.add('tag-container');
  var html = "<div class=\"tag-content\">".concat(tagname, "</div>") + "<div class=\"tag-action\">\n        <button class=\"edit-tag\" onclick=\"tagedit(".concat(tagid, ")\">Edit</button>\n        <button class=\"delete-tag\" onclick=\"tagdelete(").concat(tagid, ")\">Del X</button>\n    </div>");
  cont.innerHTML = html;
  return cont;
}
function itemRender(tagid, itemid, itemvalue) {
  var cont = document.createElement('div');
  cont.classList.add('item-container');
  var html = "<div class=\"item-content\">".concat(itemvalue, "</div>") + "<div class=\"item-action\">\n        <button class=\"edit-item\" onclick=\"itemedit(".concat(itemid, ")\">Edit</button>\n        <button class=\"delete-item\" onclick=\"itemdelete(").concat(itemid, ")\">Del X</button>\n    </div>");
  cont.innerHTML = html;
  return cont;
}
;// ./index.js



var APP = new Actions(db);
console.log(APP);
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  AddStyles();
  if (msg.action == 'open_dialog_box') {
    ShowDialog(APP);
  }
  console.log(msg);
  console.log(sender);
  console.log(sendResponse);
  return true;
});
/******/ })()
;