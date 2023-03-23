(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker"],{

/***/ 261:
/*!*************************************************************************************************************!*\
  !*** D:/code/bishe/weixin-mypro/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-file-picker.vue?vue&type=template&id=363ace0e& */ 262);
/* harmony import */ var _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-file-picker.vue?vue&type=script&lang=js& */ 264);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uni_file_picker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uni-file-picker.vue?vue&type=style&index=0&lang=css& */ 268);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 262:
/*!********************************************************************************************************************************************!*\
  !*** D:/code/bishe/weixin-mypro/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue?vue&type=template&id=363ace0e& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-file-picker.vue?vue&type=template&id=363ace0e& */ 263);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_template_id_363ace0e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 263:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/bishe/weixin-mypro/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue?vue&type=template&id=363ace0e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 264:
/*!**************************************************************************************************************************************!*\
  !*** D:/code/bishe/weixin-mypro/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-file-picker.vue?vue&type=script&lang=js& */ 265);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 265:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/bishe/weixin-mypro/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
























var _chooseAndUploadFile = __webpack_require__(/*! ./choose-and-upload-file.js */ 266);



var _utils = __webpack_require__(/*! ./utils.js */ 267);function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);enumerableOnly && (symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;})), keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = null != arguments[i] ? arguments[i] : {};i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {_defineProperty(target, key, source[key]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _regeneratorRuntime() {"use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime = function _regeneratorRuntime() {return exports;};var exports = {},Op = Object.prototype,hasOwn = Op.hasOwnProperty,$Symbol = "function" == typeof Symbol ? Symbol : {},iteratorSymbol = $Symbol.iterator || "@@iterator",asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];}try {define({}, "");} catch (err) {define = function define(obj, key, value) {return obj[key] = value;};}function wrap(innerFn, outerFn, self, tryLocsList) {var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,generator = Object.create(protoGenerator.prototype),context = new Context(tryLocsList || []);return generator._invoke = function (innerFn, self, context) {var state = "suspendedStart";return function (method, arg) {if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {if ("throw" === method) throw arg;return doneResult();}for (context.method = method, context.arg = arg;;) {var delegate = context.delegate;if (delegate) {var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {if (delegateResult === ContinueSentinel) continue;return delegateResult;}}if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);} else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };}"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);}};}(innerFn, self, context), generator;}function tryCatch(fn, obj, arg) {try {return { type: "normal", arg: fn.call(obj, arg) };} catch (err) {return { type: "throw", arg: err };}}exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {return this;});var getProto = Object.getPrototypeOf,NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {["next", "throw", "return"].forEach(function (method) {define(prototype, method, function (arg) {return this._invoke(method, arg);});});}function AsyncIterator(generator, PromiseImpl) {function invoke(method, arg, resolve, reject) {var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {var result = record.arg,value = result.value;return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {invoke("next", value, resolve, reject);}, function (err) {invoke("throw", err, resolve, reject);}) : PromiseImpl.resolve(value).then(function (unwrapped) {result.value = unwrapped, resolve(result);}, function (error) {return invoke("throw", error, resolve, reject);});}reject(record.arg);}var previousPromise;this._invoke = function (method, arg) {function callInvokeWithMethodAndArg() {return new PromiseImpl(function (resolve, reject) {invoke(method, arg, resolve, reject);});}return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();};}function maybeInvokeDelegate(delegate, context) {var method = delegate.iterator[context.method];if (undefined === method) {if (context.delegate = null, "throw" === context.method) {if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");}return ContinueSentinel;}var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);}function pushTryEntry(locs) {var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);}function resetTryEntry(entry) {var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;}function Context(tryLocsList) {this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);}function values(iterable) {if (iterable) {var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {var i = -1,next = function next() {for (; ++i < iterable.length;) {if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;}return next.value = undefined, next.done = !0, next;};return next.next = next;}}return { next: doneResult };}function doneResult() {return { value: undefined, done: !0 };}return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));}, exports.mark = function (genFun) {return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;}, exports.awrap = function (arg) {return { __await: arg };}, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {return this;}), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {return result.done ? result.value : iter.next();});}, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {return this;}), define(Gp, "toString", function () {return "[object Generator]";}), exports.keys = function (object) {var keys = [];for (var key in object) {keys.push(key);}return keys.reverse(), function next() {for (; keys.length;) {var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;}return next.done = !0, next;};}, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {"t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);}}, stop: function stop() {this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;}, dispatchException: function dispatchException(exception) {if (this.done) throw exception;var context = this;function handle(loc, caught) {return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;}for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i],record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {var hasCatch = hasOwn.call(entry, "catchLoc"),hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);} else if (hasCatch) {if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);} else {if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);}}}}, abrupt: function abrupt(type, arg) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {var finallyEntry = entry;break;}}finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);}, complete: function complete(record, afterLoc) {if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;}, finish: function finish(finallyLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;}}, catch: function _catch(tryLoc) {for (var i = this.tryEntries.length - 1; i >= 0; --i) {var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {var record = entry.completion;if ("throw" === record.type) {var thrown = record.arg;resetTryEntry(entry);}return thrown;}}throw new Error("illegal catch attempt");}, delegateYield: function delegateYield(iterable, resultName, nextLoc) {return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;} }, exports;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var uploadImage = function uploadImage() {__webpack_require__.e(/*! require.ensure | uni_modules/uni-file-picker/components/uni-file-picker/upload-image */ "uni_modules/uni-file-picker/components/uni-file-picker/upload-image").then((function () {return resolve(__webpack_require__(/*! ./upload-image.vue */ 342));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uploadFile = function uploadFile() {__webpack_require__.e(/*! require.ensure | uni_modules/uni-file-picker/components/uni-file-picker/upload-file */ "uni_modules/uni-file-picker/components/uni-file-picker/upload-file").then((function () {return resolve(__webpack_require__(/*! ./upload-file.vue */ 349));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};








var fileInput = null;
/**
 * FilePicker 文件选择上传
 * @description 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
 * @tutorial https://ext.dcloud.net.cn/plugin?id=4079
 * @property {Object|Array}	value	组件数据，通常用来回显 ,类型由return-type属性决定
 * @property {Boolean}	disabled = [true|false]	组件禁用
 * 	@value true 	禁用
 * 	@value false 	取消禁用
 * @property {Boolean}	readonly = [true|false]	组件只读，不可选择，不显示进度，不显示删除按钮
 * 	@value true 	只读
 * 	@value false 	取消只读
 * @property {String}	return-type = [array|object]	限制 value 格式，当为 object 时 ，组件只能单选，且会覆盖
 * 	@value array	规定 value 属性的类型为数组
 * 	@value object	规定 value 属性的类型为对象
 * @property {Boolean}	disable-preview = [true|false]	禁用图片预览，仅 mode:grid 时生效
 * 	@value true 	禁用图片预览
 * 	@value false 	取消禁用图片预览
 * @property {Boolean}	del-icon = [true|false]	是否显示删除按钮
 * 	@value true 	显示删除按钮
 * 	@value false 	不显示删除按钮
 * @property {Boolean}	auto-upload = [true|false]	是否自动上传，值为true则只触发@select,可自行上传
 * 	@value true 	自动上传
 * 	@value false 	取消自动上传
 * @property {Number|String}	limit	最大选择个数 ，h5 会自动忽略多选的部分
 * @property {String}	title	组件标题，右侧显示上传计数
 * @property {String}	mode = [list|grid]	选择文件后的文件列表样式
 * 	@value list 	列表显示
 * 	@value grid 	宫格显示
 * @property {String}	file-mediatype = [image|video|all]	选择文件类型
 * 	@value image	只选择图片
 * 	@value video	只选择视频
 * 	@value all		选择所有文件
 * @property {Array}	file-extname	选择文件后缀，根据 file-mediatype 属性而不同
 * @property {Object}	list-style	mode:list 时的样式
 * @property {Object}	image-styles	选择文件后缀，根据 file-mediatype 属性而不同
 * @event {Function} select 	选择文件后触发
 * @event {Function} progress 文件上传时触发
 * @event {Function} success 	上传成功触发
 * @event {Function} fail 		上传失败触发
 * @event {Function} delete 	文件从列表移除时触发
 */var _default2 =
{
  name: 'uniFilePicker',
  components: {
    uploadImage: uploadImage,
    uploadFile: uploadFile },

  options: {
    virtualHost: true },

  emits: ['select', 'success', 'fail', 'progress', 'delete', 'update:modelValue', 'input'],
  props: {










    value: {
      type: [Array, Object],
      default: function _default() {
        return [];
      } },



    disabled: {
      type: Boolean,
      default: false },

    disablePreview: {
      type: Boolean,
      default: false },

    delIcon: {
      type: Boolean,
      default: true },

    // 自动上传
    autoUpload: {
      type: Boolean,
      default: true },

    // 最大选择个数 ，h5只能限制单选或是多选
    limit: {
      type: [Number, String],
      default: 9 },

    // 列表样式 grid | list | list-card
    mode: {
      type: String,
      default: 'grid' },

    // 选择文件类型  image/video/all
    fileMediatype: {
      type: String,
      default: 'image' },

    // 文件类型筛选
    fileExtname: {
      type: [Array, String],
      default: function _default() {
        return [];
      } },

    title: {
      type: String,
      default: '' },

    listStyles: {
      type: Object,
      default: function _default() {
        return {
          // 是否显示边框
          border: true,
          // 是否显示分隔线
          dividline: true,
          // 线条样式
          borderStyle: {} };

      } },

    imageStyles: {
      type: Object,
      default: function _default() {
        return {
          width: 'auto',
          height: 'auto' };

      } },

    readonly: {
      type: Boolean,
      default: false },

    returnType: {
      type: String,
      default: 'array' },

    sizeType: {
      type: Array,
      default: function _default() {
        return ['original', 'compressed'];
      } } },


  data: function data() {
    return {
      files: [],
      localValue: [] };

  },
  watch: {

    value: {
      handler: function handler(newVal, oldVal) {
        this.setValue(newVal, oldVal);
      },
      immediate: true } },











  computed: {
    filesList: function filesList() {
      var files = [];
      this.files.forEach(function (v) {
        files.push(v);
      });
      return files;
    },
    showType: function showType() {
      if (this.fileMediatype === 'image') {
        return this.mode;
      }
      return 'list';
    },
    limitLength: function limitLength() {
      if (this.returnType === 'object') {
        return 1;
      }
      if (!this.limit) {
        return 1;
      }
      if (this.limit >= 9) {
        return 9;
      }
      return this.limit;
    } },

  created: function created() {
    // TODO 兼容不开通服务空间的情况
    if (!(uniCloud.config && uniCloud.config.provider)) {
      this.noSpace = true;
      uniCloud.chooseAndUploadFile = _chooseAndUploadFile.chooseAndUploadFile;
    }
    this.form = this.getForm('uniForms');
    this.formItem = this.getForm('uniFormsItem');
    if (this.form && this.formItem) {
      if (this.formItem.name) {
        this.rename = this.formItem.name;
        this.form.inputChildrens.push(this);
      }
    }
  },
  methods: {
    /**
     * 公开用户使用，清空文件
     * @param {Object} index
     */
    clearFiles: function clearFiles(index) {var _this = this;
      if (index !== 0 && !index) {
        this.files = [];
        this.$nextTick(function () {
          _this.setEmit();
        });
      } else {
        this.files.splice(index, 1);
      }
      this.$nextTick(function () {
        _this.setEmit();
      });
    },
    /**
     * 公开用户使用，继续上传
     */
    upload: function upload() {
      var files = [];
      this.files.forEach(function (v, index) {
        if (v.status === 'ready' || v.status === 'error') {
          files.push(Object.assign({}, v));
        }
      });
      return this.uploadFiles(files);
    },
    setValue: function setValue(newVal, oldVal) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {var newData, i, v, filesData;return _regeneratorRuntime().wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                newData = /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(v) {var reg, url;return _regeneratorRuntime().wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                            reg = /cloud:\/\/([\w.]+\/?)\S*/;
                            url = '';
                            if (v.fileID) {
                              url = v.fileID;
                            } else {
                              url = v.url;
                            }if (!
                            reg.test(url)) {_context.next = 8;break;}
                            v.fileID = url;_context.next = 7;return (
                              _this2.getTempFileURL(url));case 7:v.url = _context.sent;case 8:

                            if (v.url) v.path = v.url;return _context.abrupt("return",
                            v);case 10:case "end":return _context.stop();}}}, _callee);}));return function newData(_x) {return _ref.apply(this, arguments);};}();if (!(

                _this2.returnType === 'object')) {_context2.next = 10;break;}if (!
                newVal) {_context2.next = 7;break;}_context2.next = 5;return (
                  newData(newVal));case 5:_context2.next = 8;break;case 7:

                newVal = {};case 8:_context2.next = 19;break;case 10:


                if (!newVal) newVal = [];
                i = 0;case 12:if (!(i < newVal.length)) {_context2.next = 19;break;}
                v = newVal[i];_context2.next = 16;return (
                  newData(v));case 16:i++;_context2.next = 12;break;case 19:


                _this2.localValue = newVal;
                if (_this2.form && _this2.formItem && !_this2.is_reset) {
                  _this2.is_reset = false;
                  _this2.formItem.setValue(_this2.localValue);
                }
                filesData = Object.keys(newVal).length > 0 ? newVal : [];
                _this2.files = [].concat(filesData);case 23:case "end":return _context2.stop();}}}, _callee2);}))();
    },

    /**
     * 选择文件
     */
    choose: function choose() {

      if (this.disabled) return;
      if (this.files.length >= Number(this.limitLength) && this.showType !== 'grid' && this.returnType ===
      'array') {
        uni.showToast({
          title: "\u60A8\u6700\u591A\u9009\u62E9 ".concat(this.limitLength, " \u4E2A\u6587\u4EF6"),
          icon: 'none' });

        return;
      }
      this.chooseFiles();
    },

    /**
     * 选择文件并上传
     */
    chooseFiles: function chooseFiles() {var _this3 = this;
      var _extname = (0, _utils.get_extname)(this.fileExtname);
      // 获取后缀
      uniCloud.
      chooseAndUploadFile({
        type: this.fileMediatype,
        compressed: false,
        sizeType: this.sizeType,
        // TODO 如果为空，video 有问题
        extension: _extname.length > 0 ? _extname : undefined,
        count: this.limitLength - this.files.length, //默认9
        onChooseFile: this.chooseFileCallback,
        onUploadProgress: function onUploadProgress(progressEvent) {
          _this3.setProgress(progressEvent, progressEvent.index);
        } }).

      then(function (result) {
        _this3.setSuccessAndError(result.tempFiles);
      }).
      catch(function (err) {
        console.log('选择失败', err);
      });
    },

    /**
     * 选择文件回调
     * @param {Object} res
     */
    chooseFileCallback: function chooseFileCallback(res) {var _this4 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {var _extname, is_one, _get_files_and_is_max, filePaths, files, currentData, i, filedata;return _regeneratorRuntime().wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                _extname = (0, _utils.get_extname)(_this4.fileExtname);
                is_one = Number(_this4.limitLength) === 1 &&
                _this4.disablePreview &&
                !_this4.disabled ||
                _this4.returnType === 'object';
                // 如果这有一个文件 ，需要清空本地缓存数据
                if (is_one) {
                  _this4.files = [];
                }_get_files_and_is_max =




                (0, _utils.get_files_and_is_max)(res, _extname), filePaths = _get_files_and_is_max.filePaths, files = _get_files_and_is_max.files;
                if (!(_extname && _extname.length > 0)) {
                  filePaths = res.tempFilePaths;
                  files = res.tempFiles;
                }

                currentData = [];
                i = 0;case 7:if (!(i < files.length)) {_context3.next = 21;break;}if (!(
                _this4.limitLength - _this4.files.length <= 0)) {_context3.next = 10;break;}return _context3.abrupt("break", 21);case 10:
                files[i].uuid = Date.now();_context3.next = 13;return (
                  (0, _utils.get_file_data)(files[i], _this4.fileMediatype));case 13:filedata = _context3.sent;
                filedata.progress = 0;
                filedata.status = 'ready';
                _this4.files.push(filedata);
                currentData.push(_objectSpread(_objectSpread({},
                filedata), {}, {
                  file: files[i] }));case 18:i++;_context3.next = 7;break;case 21:


                _this4.$emit('select', {
                  tempFiles: currentData,
                  tempFilePaths: filePaths });

                res.tempFiles = files;
                // 停止自动上传
                if (!_this4.autoUpload || _this4.noSpace) {
                  res.tempFiles = [];
                }case 24:case "end":return _context3.stop();}}}, _callee3);}))();
    },

    /**
     * 批传
     * @param {Object} e
     */
    uploadFiles: function uploadFiles(files) {var _this5 = this;
      files = [].concat(files);
      return _chooseAndUploadFile.uploadCloudFiles.call(this, files, 5, function (res) {
        _this5.setProgress(res, res.index, true);
      }).
      then(function (result) {
        _this5.setSuccessAndError(result);
        return result;
      }).
      catch(function (err) {
        console.log(err);
      });
    },

    /**
     * 成功或失败
     */
    setSuccessAndError: function setSuccessAndError(res, fn) {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {var successData, errorData, tempFilePath, errorTempFilePath, _loop, i, _ret;return _regeneratorRuntime().wrap(function _callee4$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                successData = [];
                errorData = [];
                tempFilePath = [];
                errorTempFilePath = [];_loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(
                i) {var item, index, reg;return _regeneratorRuntime().wrap(function _loop$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                          item = res[i];
                          index = item.uuid ? _this6.files.findIndex(function (p) {return p.uuid === item.uuid;}) : item.index;if (!(

                          index === -1 || !_this6.files)) {_context4.next = 4;break;}return _context4.abrupt("return", "break");case 4:if (!(
                          item.errMsg === 'request:fail')) {_context4.next = 12;break;}
                          _this6.files[index].url = item.path;
                          _this6.files[index].status = 'error';
                          _this6.files[index].errMsg = item.errMsg;
                          // this.files[index].progress = -1
                          errorData.push(_this6.files[index]);
                          errorTempFilePath.push(_this6.files[index].url);_context4.next = 26;break;case 12:

                          _this6.files[index].errMsg = '';
                          _this6.files[index].fileID = item.url;
                          reg = /cloud:\/\/([\w.]+\/?)\S*/;if (!
                          reg.test(item.url)) {_context4.next = 21;break;}_context4.next = 18;return (
                            _this6.getTempFileURL(item.url));case 18:_this6.files[index].url = _context4.sent;_context4.next = 22;break;case 21:

                          _this6.files[index].url = item.url;case 22:


                          _this6.files[index].status = 'success';
                          _this6.files[index].progress += 1;
                          successData.push(_this6.files[index]);
                          tempFilePath.push(_this6.files[index].fileID);case 26:case "end":return _context4.stop();}}}, _loop);});i = 0;case 6:if (!(i < res.length)) {_context5.next = 14;break;}return _context5.delegateYield(_loop(i), "t0", 8);case 8:_ret = _context5.t0;if (!(_ret === "break")) {_context5.next = 11;break;}return _context5.abrupt("break", 14);case 11:i++;_context5.next = 6;break;case 14:



                if (successData.length > 0) {
                  _this6.setEmit();
                  // 状态改变返回
                  _this6.$emit('success', {
                    tempFiles: _this6.backObject(successData),
                    tempFilePaths: tempFilePath });

                }

                if (errorData.length > 0) {
                  _this6.$emit('fail', {
                    tempFiles: _this6.backObject(errorData),
                    tempFilePaths: errorTempFilePath });

                }case 16:case "end":return _context5.stop();}}}, _callee4);}))();
    },

    /**
     * 获取进度
     * @param {Object} progressEvent
     * @param {Object} index
     * @param {Object} type
     */
    setProgress: function setProgress(progressEvent, index, type) {
      var fileLenth = this.files.length;
      var percentNum = index / fileLenth * 100;
      var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
      var idx = index;
      if (!type) {
        idx = this.files.findIndex(function (p) {return p.uuid === progressEvent.tempFile.uuid;});
      }
      if (idx === -1 || !this.files[idx]) return;
      // fix by mehaotian 100 就会消失，-1 是为了让进度条消失
      this.files[idx].progress = percentCompleted - 1;
      // 上传中
      this.$emit('progress', {
        index: idx,
        progress: parseInt(percentCompleted),
        tempFile: this.files[idx] });

    },

    /**
     * 删除文件
     * @param {Object} index
     */
    delFile: function delFile(index) {var _this7 = this;
      this.$emit('delete', {
        tempFile: this.files[index],
        tempFilePath: this.files[index].url });

      this.files.splice(index, 1);
      this.$nextTick(function () {
        _this7.setEmit();
      });
    },

    /**
     * 获取文件名和后缀
     * @param {Object} name
     */
    getFileExt: function getFileExt(name) {
      var last_len = name.lastIndexOf('.');
      var len = name.length;
      return {
        name: name.substring(0, last_len),
        ext: name.substring(last_len + 1, len) };

    },

    /**
     * 处理返回事件
     */
    setEmit: function setEmit() {
      var data = [];
      if (this.returnType === 'object') {
        data = this.backObject(this.files)[0];
        this.localValue = data ? data : null;
      } else {
        data = this.backObject(this.files);
        if (!this.localValue) {
          this.localValue = [];
        }
        this.localValue = _toConsumableArray(data);
      }




      this.$emit('input', this.localValue);

    },

    /**
     * 处理返回参数
     * @param {Object} files
     */
    backObject: function backObject(files) {
      var newFilesData = [];
      files.forEach(function (v) {
        newFilesData.push({
          extname: v.extname,
          fileType: v.fileType,
          image: v.image,
          name: v.name,
          path: v.path,
          size: v.size,
          fileID: v.fileID,
          url: v.url });

      });
      return newFilesData;
    },
    getTempFileURL: function getTempFileURL(fileList) {return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {var urls;return _regeneratorRuntime().wrap(function _callee5$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:
                fileList = {
                  fileList: [].concat(fileList) };_context6.next = 3;return (

                  uniCloud.getTempFileURL(fileList));case 3:urls = _context6.sent;return _context6.abrupt("return",
                urls.fileList[0].tempFileURL || '');case 5:case "end":return _context6.stop();}}}, _callee5);}))();
    },
    /**
     * 获取父元素实例
     */
    getForm: function getForm() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniForms';
      var parent = this.$parent;
      var parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      return parent;
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 256)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 268:
/*!**********************************************************************************************************************************************!*\
  !*** D:/code/bishe/weixin-mypro/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./uni-file-picker.vue?vue&type=style&index=0&lang=css& */ 269);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_uni_file_picker_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 269:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/bishe/weixin-mypro/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component',
    {
        'uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(261))
        })
    },
    [['uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker-create-component']]
]);
