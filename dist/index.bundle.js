"use strict";
(self["webpackChunktodos"] = self["webpackChunktodos"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles/main.css */
body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }
  
  #app {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    flex: 0 0 250px;
    background-color: #f1f3f4;
    padding: 20px;
    border-right: 1px solid #e0e0e0;
  }
  
  .sidebar button {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: none;
    background-color: transparent;
    text-align: left;
    font-size: 14px;
    color: #5f6368;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .sidebar button:hover {
    background-color: #e8eaed;
  }
  
  .sidebar .inbox-section,
  .sidebar .task-type-section {
    margin-bottom: 20px;
  }
  
  .add-task-btn {
    display: block;
    width: 100%;
    padding: 15px;
    margin-bottom: 20px;
    border: none;
    background-color: #c2e7ff;
    color: #001d35;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
    border-radius: 24px;
  }
  
  .add-task-btn:hover {
    background-color: #a6d5fa;
  }
  
  .main-content {
    flex: 1;
    padding: 20px;
    background-color: #ffffff;
    overflow-y: auto;
  }
  
  .todo-items-container {
    margin-top: 20px;
  }
  
  .todo-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .todo-item:hover {
    background-color: #f5f5f5;
  }
  
  .todo-item-title {
    flex: 1;
    margin-right: 20px;
  }
  
  .todo-item-title h3 {
    margin: 0;
    font-size: 16px;
    color: #202124;
  }
  
  .todo-item-details {
    flex: 2;
    margin-right: 20px;
  }
  
  .todo-item-details p {
    margin: 0;
    font-size: 14px;
    color: #5f6368;
  }
  
  .todo-item-tag {
    font-size: 12px;
    color: #5f6368;
    margin-right: 10px;
    padding: 2px 6px;
    border-radius: 4px;
  }
  
  .todo-item-tag.family {
    background-color: #e8f0fe;
  }
  
  .todo-item-tag.work {
    background-color: #fce8e6;
  }
  
  .todo-item-tag.gym {
    background-color: #e6f4ea;
  }
  
  .todo-item-tag.personal {
    background-color: #fef7e0;
  }
  
  .todo-item-due-date {
    font-size: 12px;
    color: #5f6368;
    white-space: nowrap;
  }
  
  .dialog {
    border: none;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  
  .dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
  
  .add-task-form {
    padding: 20px;
  }
  
  .add-task-form h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 22px;
    color: #202124;
  }
  
  .add-task-form label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #5f6368;
  }
  
  .add-task-form input,
  .add-task-form select,
  .add-task-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    color: #202124;
  }
  
  .add-task-form button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .add-task-form button[type="submit"] {
    background-color: #1a73e8;
    color: white;
    margin-right: 10px;
  }
  
  .add-task-form button[type="submit"]:hover {
    background-color: #1765cc;
  }
  
  .add-task-form button[type="button"] {
    background-color: #f1f3f4;
    color: #202124;
  }
  
  .add-task-form button[type="button"]:hover {
    background-color: #e8eaed;
  }

/* ... */

.todo-items-container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
  
  .todo-item {
    display: grid;
    grid-template-columns: 1fr 2fr auto;
    align-items: center;
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .todo-item:hover {
    background-color: #f5f5f5;
  }
  
  .todo-item-title {
    margin-right: 20px;
  }
  
  .todo-item-title h3 {
    margin: 0;
    font-size: 16px;
    color: #202124;
  }
  
  .todo-item-details {
    margin-right: 20px;
  }
  
  .todo-item-details p {
    margin: 0;
    font-size: 14px;
    color: #5f6368;
  }
  
  .todo-item-tag {
    font-size: 12px;
    color: #5f6368;
    margin-right: 10px;
    padding: 2px 6px;
    border-radius: 4px;
  }
  
  .todo-item-tag.family {
    background-color: #e8f0fe;
  }
  
  .todo-item-tag.work {
    background-color: #fce8e6;
  }
  
  .todo-item-tag.gym {
    background-color: #e6f4ea;
  }
  
  .todo-item-tag.personal {
    background-color: #fef7e0;
  }
  
  .todo-item-due-date {
    font-size: 12px;
    color: #5f6368;
    white-space: nowrap;
  }
  
  .buttons-container {
    margin-top: 10px;
}

.buttons-container button {
    margin-right: 5px;
}

.todo-item.completed {
    background-color: #e0e0e0;
    text-decoration: line-through;
}
  /* ... */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/styles/main.css */\nbody {\n    font-family: 'Roboto', sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f5f5f5;\n  }\n  \n  #app {\n    display: flex;\n    height: 100vh;\n  }\n  \n  .sidebar {\n    flex: 0 0 250px;\n    background-color: #f1f3f4;\n    padding: 20px;\n    border-right: 1px solid #e0e0e0;\n  }\n  \n  .sidebar button {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: none;\n    background-color: transparent;\n    text-align: left;\n    font-size: 14px;\n    color: #5f6368;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n  \n  .sidebar button:hover {\n    background-color: #e8eaed;\n  }\n  \n  .sidebar .inbox-section,\n  .sidebar .task-type-section {\n    margin-bottom: 20px;\n  }\n  \n  .add-task-btn {\n    display: block;\n    width: 100%;\n    padding: 15px;\n    margin-bottom: 20px;\n    border: none;\n    background-color: #c2e7ff;\n    color: #001d35;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    cursor: pointer;\n    transition: background-color 0.3s;\n    border-radius: 24px;\n  }\n  \n  .add-task-btn:hover {\n    background-color: #a6d5fa;\n  }\n  \n  .main-content {\n    flex: 1;\n    padding: 20px;\n    background-color: #ffffff;\n    overflow-y: auto;\n  }\n  \n  .todo-items-container {\n    margin-top: 20px;\n  }\n  \n  .todo-item {\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    border-bottom: 1px solid #e0e0e0;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n  \n  .todo-item:hover {\n    background-color: #f5f5f5;\n  }\n  \n  .todo-item-title {\n    flex: 1;\n    margin-right: 20px;\n  }\n  \n  .todo-item-title h3 {\n    margin: 0;\n    font-size: 16px;\n    color: #202124;\n  }\n  \n  .todo-item-details {\n    flex: 2;\n    margin-right: 20px;\n  }\n  \n  .todo-item-details p {\n    margin: 0;\n    font-size: 14px;\n    color: #5f6368;\n  }\n  \n  .todo-item-tag {\n    font-size: 12px;\n    color: #5f6368;\n    margin-right: 10px;\n    padding: 2px 6px;\n    border-radius: 4px;\n  }\n  \n  .todo-item-tag.family {\n    background-color: #e8f0fe;\n  }\n  \n  .todo-item-tag.work {\n    background-color: #fce8e6;\n  }\n  \n  .todo-item-tag.gym {\n    background-color: #e6f4ea;\n  }\n  \n  .todo-item-tag.personal {\n    background-color: #fef7e0;\n  }\n  \n  .todo-item-due-date {\n    font-size: 12px;\n    color: #5f6368;\n    white-space: nowrap;\n  }\n  \n  .dialog {\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  }\n  \n  .dialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  \n  .add-task-form {\n    padding: 20px;\n  }\n  \n  .add-task-form h2 {\n    margin-top: 0;\n    margin-bottom: 20px;\n    font-size: 22px;\n    color: #202124;\n  }\n  \n  .add-task-form label {\n    display: block;\n    margin-bottom: 8px;\n    font-size: 14px;\n    color: #5f6368;\n  }\n  \n  .add-task-form input,\n  .add-task-form select,\n  .add-task-form textarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 16px;\n    border: 1px solid #dadce0;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 14px;\n    color: #202124;\n  }\n  \n  .add-task-form button {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 14px;\n    transition: background-color 0.3s;\n  }\n  \n  .add-task-form button[type=\"submit\"] {\n    background-color: #1a73e8;\n    color: white;\n    margin-right: 10px;\n  }\n  \n  .add-task-form button[type=\"submit\"]:hover {\n    background-color: #1765cc;\n  }\n  \n  .add-task-form button[type=\"button\"] {\n    background-color: #f1f3f4;\n    color: #202124;\n  }\n  \n  .add-task-form button[type=\"button\"]:hover {\n    background-color: #e8eaed;\n  }\n\n/* ... */\n\n.todo-items-container {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 10px;\n  }\n  \n  .todo-item {\n    display: grid;\n    grid-template-columns: 1fr 2fr auto;\n    align-items: center;\n    padding: 10px 20px;\n    border-bottom: 1px solid #e0e0e0;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n  \n  .todo-item:hover {\n    background-color: #f5f5f5;\n  }\n  \n  .todo-item-title {\n    margin-right: 20px;\n  }\n  \n  .todo-item-title h3 {\n    margin: 0;\n    font-size: 16px;\n    color: #202124;\n  }\n  \n  .todo-item-details {\n    margin-right: 20px;\n  }\n  \n  .todo-item-details p {\n    margin: 0;\n    font-size: 14px;\n    color: #5f6368;\n  }\n  \n  .todo-item-tag {\n    font-size: 12px;\n    color: #5f6368;\n    margin-right: 10px;\n    padding: 2px 6px;\n    border-radius: 4px;\n  }\n  \n  .todo-item-tag.family {\n    background-color: #e8f0fe;\n  }\n  \n  .todo-item-tag.work {\n    background-color: #fce8e6;\n  }\n  \n  .todo-item-tag.gym {\n    background-color: #e6f4ea;\n  }\n  \n  .todo-item-tag.personal {\n    background-color: #fef7e0;\n  }\n  \n  .todo-item-due-date {\n    font-size: 12px;\n    color: #5f6368;\n    white-space: nowrap;\n  }\n  \n  .buttons-container {\n    margin-top: 10px;\n}\n\n.buttons-container button {\n    margin-right: 5px;\n}\n\n.todo-item.completed {\n    background-color: #e0e0e0;\n    text-decoration: line-through;\n}\n  /* ... */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTodoItems: () => (/* binding */ renderTodoItems)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
// src/domHandler.js


// Get references to DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const inboxBtn = document.getElementById('inbox-btn');
const todayBtn = document.getElementById('today-btn');
const upcomingBtn = document.getElementById('upcoming-btn');
const gymBtn = document.getElementById('gym-btn');
const workBtn = document.getElementById('work-btn');
const personalBtn = document.getElementById('personal-btn');
const familyBtn = document.getElementById('family-btn');
const mainContentDiv = document.querySelector('.main-content');
const addTaskDialog = document.getElementById('add-task-dialog');
const addTaskForm = document.querySelector('.add-task-form');
const cancelBtn = document.getElementById('cancel-btn');

// Add event listeners to buttons
addTaskBtn.addEventListener('click', openModal);
inboxBtn.addEventListener('click', () => (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleProjectClick)('Inbox'));
todayBtn.addEventListener('click', () => (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleProjectClick)('Today'));
upcomingBtn.addEventListener('click', () => (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleProjectClick)('Upcoming'));
gymBtn.addEventListener('click', () => (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleProjectClick)('Gym'));
workBtn.addEventListener('click', () => (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleProjectClick)('Work'));
personalBtn.addEventListener('click', () => (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleProjectClick)('Personal'));
familyBtn.addEventListener('click', () => (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleProjectClick)('Family'));
addTaskForm.addEventListener('submit', handleAddTask);
cancelBtn.addEventListener('click', closeModal);

// Event handler for adding a new task
function handleAddTask(event) {
  event.preventDefault();

  const title = document.getElementById('title-input').value;
  const description = document.getElementById('description-input').value;
  const dueDate = document.getElementById('due-date-input').value;
  const priority = document.getElementById('priority-input').value;
  const type = document.getElementById('type-input').value;
  const notes = document.getElementById('notes-input').value;

  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.addTodoItem)(title, description, dueDate, priority, type, notes);
  closeModal();
}

// Function to render the todo items
function renderTodoItems(todoItems) {
  // Clear the main content
  mainContentDiv.innerHTML = '';

  // Create a container for the todo items
  const todoItemsContainer = document.createElement('div');
  todoItemsContainer.classList.add('todo-items-container');

  // Render each todo item
  todoItems.forEach(todoItem => {
    const todoItemElement = createTodoItemElement(todoItem);
    todoItemsContainer.appendChild(todoItemElement);
  });

  // Append the todo items container to the main content
  mainContentDiv.appendChild(todoItemsContainer);
}

// Function to create a todo item element
function createTodoItemElement(todoItem) {
  const todoItemElement = document.createElement('div');
  todoItemElement.classList.add('todo-item');

  const titleElement = document.createElement('h3');
  titleElement.textContent = todoItem.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = todoItem.description;

  const dueDateElement = document.createElement('p');
  dueDateElement.textContent = `Due: ${todoItem.dueDate}`;

  const priorityElement = document.createElement('p');
  priorityElement.textContent = `Priority: ${todoItem.priority}`;

  const typeElement = document.createElement('p');
  typeElement.textContent = `Type: ${todoItem.type}`;

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
      // Handle edit functionality
      console.log('Edit button clicked');
      openEditModal(todoItem);
  });

  const markCompleteButton = document.createElement('button');
  markCompleteButton.textContent = todoItem.completed ? 'Unmark' : 'Mark as Complete';
  markCompleteButton.addEventListener('click', () => {
      // Handle mark as complete functionality
      todoItem.completed = !todoItem.completed;
      markCompleteButton.textContent = todoItem.completed ? 'Unmark' : 'Mark as Complete';
      todoItemElement.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
      // Handle delete functionality
      console.log('Delete button clicked');
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoItem)(todoItem);
  });

  buttonsContainer.appendChild(editButton);
  buttonsContainer.appendChild(markCompleteButton);
  buttonsContainer.appendChild(deleteButton);

  todoItemElement.appendChild(titleElement);
  todoItemElement.appendChild(descriptionElement);
  todoItemElement.appendChild(dueDateElement);
  todoItemElement.appendChild(priorityElement);
  todoItemElement.appendChild(typeElement);
  todoItemElement.appendChild(buttonsContainer);

  if (todoItem.completed) {
      todoItemElement.classList.add('completed');
  }

  return todoItemElement;
}

function openEditModal(todoItem) {
  document.getElementById('edit-title-input').value = todoItem.title;
  document.getElementById('edit-description-input').value = todoItem.description;
  document.getElementById('edit-due-date-input').value = todoItem.dueDate;
  document.getElementById('edit-priority-input').value = todoItem.priority;
  document.getElementById('edit-type-input').value = todoItem.type;
  document.getElementById('edit-notes-input').value = todoItem.notes;

  const editTaskForm = document.querySelector('.edit-task-form');
  editTaskForm.dataset.todoIndex = todoItems.indexOf(todoItem);

  const editTaskDialog = document.getElementById('edit-task-dialog');
  editTaskDialog.showModal();
}

const editTaskForm = document.querySelector('.edit-task-form');
editTaskForm.addEventListener('submit', handleEditTask);


function handleEditTask(event) {
  event.preventDefault();

  const index = parseInt(editTaskForm.dataset.todoIndex);
  const title = document.getElementById('edit-title-input').value;
  const description = document.getElementById('edit-description-input').value;
  const dueDate = document.getElementById('edit-due-date-input').value;
  const priority = document.getElementById('edit-priority-input').value;
  const type = document.getElementById('edit-type-input').value;
  const notes = document.getElementById('edit-notes-input').value;

  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.editTodoItem)(index, title, description, dueDate, priority, type, notes);
  closeEditModal();
}

const cancelEditBtn = document.getElementById('cancel-edit-btn');
cancelEditBtn.addEventListener('click', closeEditModal);

function closeEditModal() {
  const editTaskDialog = document.getElementById('edit-task-dialog');
  editTaskDialog.close();
  editTaskForm.reset();
}

function openModal() {
  addTaskDialog.showModal();
  document.getElementById('title-input').focus();
}

function closeModal() {
  addTaskDialog.close();
  addTaskForm.reset();
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTodoItem: () => (/* binding */ addTodoItem),
/* harmony export */   deleteTodoItem: () => (/* binding */ deleteTodoItem),
/* harmony export */   editTodoItem: () => (/* binding */ editTodoItem),
/* harmony export */   handleProjectClick: () => (/* binding */ handleProjectClick)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoItem.js */ "./src/todoItem.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _domHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domHandler.js */ "./src/domHandler.js");
// index.js





let todoItems = [];
let projects = [];

function initializeApp() {
    // Initialize your app here
    todoItems = [
        (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)('Buy groceries', 'Buy milk, bread, and eggs', '2024-06-15', 'high', 'personal', 'grocery list'),
        (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)('Doctor Appointment', 'Annual checkup', '2024-07-01', 'high', 'personal', ''),
        (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)('Finish project report', 'Complete the quarterly project report', '2024-04-21', 'high', 'work', ''),
        (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)('Gym workout', 'Cardio and strength training', '2024-06-16', 'medium', 'gym', ''),
    ];

    projects = [
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('Inbox'),
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('Today'),
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('Upcoming'),
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('Gym'),
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('Work'),
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('Personal'),
        (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('Family'),
    ];

    // Render your app with the initial "Inbox" project
    console.log(projects)
    renderProject(projects[0]);
}


function renderProject(selectedProject) {
    const filteredTodoItems = selectedProject.getFilteredTodoItems(todoItems);
    (0,_domHandler_js__WEBPACK_IMPORTED_MODULE_3__.renderTodoItems)(filteredTodoItems);
}

// Function to add a new todo item
function addTodoItem(title, description, dueDate, priority, type, notes) {
    const newTodoItem = (0,_todoItem_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(title, description, dueDate, priority, type, notes);
    todoItems.push(newTodoItem);
    renderProject(projects[0]); // Re-render the current project
}
function handleProjectClick(projectName) {
    const selectedProject = projects.find(project => project.name === projectName);
    renderProject(selectedProject);
}

function renderApp(selectedProject, todoItems) {
    const mainContentDiv = document.querySelector('.main-content');
    // Clear the main content
    mainContentDiv.innerHTML = '';
    
    // Get the filtered todo items based on the selected project
    const filteredTodoItems = selectedProject.getFilteredTodoItems(todoItems);
    
    // Create a container for the todo items
    const todoItemsContainer = document.createElement('div');
    todoItemsContainer.classList.add('todo-items-container');
    
    // Render each filtered todo item
    filteredTodoItems.forEach(todoItem => {
        const todoItemElement = createTodoItemElement(todoItem);
        todoItemsContainer.appendChild(todoItemElement);
    });
    
    // Append the todo items container to the main content
    mainContentDiv.appendChild(todoItemsContainer);
}

function deleteTodoItem(todoItem) {
    const index = todoItems.indexOf(todoItem);
    if (index !== -1) {
      todoItems.splice(index, 1);
      renderProject(projects[0]);
    }
}

function editTodoItem(index, title, description, dueDate, priority, type, notes) {
    if (index >= 0 && index < todoItems.length) {
      const todoItem = todoItems[index];
      todoItem.title = title;
      todoItem.description = description;
      todoItem.dueDate = dueDate;
      todoItem.priority = priority;
      todoItem.type = type;
      todoItem.notes = notes;
      renderProject(projects[0]);
    }
}
// Initialize the app when the DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProject: () => (/* binding */ createProject)
/* harmony export */ });
// src/project.js

function createProject(name) {
    return {
        name,
        getFilteredTodoItems(todoItems) {
            switch (name) {
                case 'Inbox':
                    return todoItems;
                case 'Today':
                    return todoItems.filter(item => isToday(item.dueDate));
                case 'Upcoming':
                    return todoItems.filter(item => isUpcoming(item.dueDate));
                case 'Gym':
                    return todoItems.filter(item => item.type === 'gym');
                case 'Work':
                    return todoItems.filter(item => item.type === 'work');
                case 'Personal':
                    return todoItems.filter(item => item.type === 'personal');
                case 'Family':
                    return todoItems.filter(item => item.type === 'family');
                default:
                    return [];
            }
        },
    };
}

function isToday(date) {
    const today = new Date();
    return date === today.toISOString().slice(0, 10);
}

function isUpcoming(date) {
    const today = new Date();
    return date > today.toISOString().slice(0, 10);
}

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTodoItem: () => (/* binding */ createTodoItem)
/* harmony export */ });
// src/todoItem.js

function createTodoItem(title, description, dueDate, priority,type, notes) {
    return {
        title,
        description,
        dueDate,
        priority,
        type,
        notes,
        completed: false,
    };
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1RkFBdUYsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9B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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdGQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvZG9tSGFuZGxlci5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3RvZG9JdGVtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBzcmMvc3R5bGVzL21haW4uY3NzICovXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgfVxuICBcbiAgI2FwcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG4gIFxuICAuc2lkZWJhciB7XG4gICAgZmxleDogMCAwIDI1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xuICB9XG4gIFxuICAuc2lkZWJhciBidXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1ZjYzNjg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgfVxuICBcbiAgLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWVkO1xuICB9XG4gIFxuICAuc2lkZWJhciAuaW5ib3gtc2VjdGlvbixcbiAgLnNpZGViYXIgLnRhc2stdHlwZS1zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAuYWRkLXRhc2stYnRuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMmU3ZmY7XG4gICAgY29sb3I6ICMwMDFkMzU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmQ1ZmE7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB9XG4gIFxuICAudG9kby1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10aXRsZSBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzIwMjEyNDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS1kZXRhaWxzIHtcbiAgICBmbGV4OiAyO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS1kZXRhaWxzIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1ZjYzNjg7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGFnIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1ZjYzNjg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZy5mYW1pbHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGYwZmU7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGFnLndvcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U4ZTY7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGFnLmd5bSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjRlYTtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10YWcucGVyc29uYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWY3ZTA7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tZHVlLWRhdGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzVmNjM2ODtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG4gIFxuICAuZGlhbG9nIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgXG4gIC5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAuYWRkLXRhc2stZm9ybSBoMiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogIzIwMjEyNDtcbiAgfVxuICBcbiAgLmFkZC10YXNrLWZvcm0gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1ZjYzNjg7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGlucHV0LFxuICAuYWRkLXRhc2stZm9ybSBzZWxlY3QsXG4gIC5hZGQtdGFzay1mb3JtIHRleHRhcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGNlMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyMDIxMjQ7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTc2NWNjO1xuICB9XG4gIFxuICAuYWRkLXRhc2stZm9ybSBidXR0b25bdHlwZT1cImJ1dHRvblwiXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcbiAgICBjb2xvcjogIzIwMjEyNDtcbiAgfVxuICBcbiAgLmFkZC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZWQ7XG4gIH1cblxuLyogLi4uICovXG5cbi50b2RvLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG4gIFxuICAudG9kby1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10aXRsZSBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzIwMjEyNDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS1kZXRhaWxzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tZGV0YWlscyBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNWY2MzY4O1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNWY2MzY4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10YWcuZmFtaWx5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMGZlO1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZy53b3JrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlOGU2O1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZy5neW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY0ZWE7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGFnLnBlcnNvbmFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmN2UwO1xuICB9XG4gIFxuICAudG9kby1pdGVtLWR1ZS1kYXRlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1ZjYzNjg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICBcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRvZG8taXRlbS5jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4gIC8qIC4uLiAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3QjtBQUN4QjtJQUNJLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixh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QWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQztFQUNFLFFBQVFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3JjL3N0eWxlcy9tYWluLmNzcyAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIH1cXG4gIFxcbiAgI2FwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuICBcXG4gIC5zaWRlYmFyIHtcXG4gICAgZmxleDogMCAwIDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y0O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWVkO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciAuaW5ib3gtc2VjdGlvbixcXG4gIC5zaWRlYmFyIC50YXNrLXR5cGUtc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZTdmZjtcXG4gICAgY29sb3I6ICMwMDFkMzU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZkNWZhO1xcbiAgfVxcbiAgXFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbXMtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10aXRsZSBoMyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzIwMjEyNDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS1kZXRhaWxzIHtcXG4gICAgZmxleDogMjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLWRldGFpbHMgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzVmNjM2ODtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjNWY2MzY4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcuZmFtaWx5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjBmZTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcud29yayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U4ZTY7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0tdGFnLmd5bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY0ZWE7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0tdGFnLnBlcnNvbmFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjdlMDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxuICBcXG4gIC5kaWFsb2cge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIFxcbiAgLmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1mb3JtIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIFxcbiAgLmFkZC10YXNrLWZvcm0gaDIge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDIycHg7XFxuICAgIGNvbG9yOiAjMjAyMTI0O1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stZm9ybSBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1mb3JtIGlucHV0LFxcbiAgLmFkZC10YXNrLWZvcm0gc2VsZWN0LFxcbiAgLmFkZC10YXNrLWZvcm0gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGNlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjMjAyMTI0O1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stZm9ybSBidXR0b24ge1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIH1cXG4gIFxcbiAgLmFkZC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NjVjYztcXG4gIH1cXG4gIFxcbiAgLmFkZC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcXG4gICAgY29sb3I6ICMyMDIxMjQ7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVxcXCJidXR0b25cXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZWQ7XFxuICB9XFxuXFxuLyogLi4uICovXFxuXFxuLnRvZG8taXRlbXMtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10aXRsZSBoMyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzIwMjEyNDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS1kZXRhaWxzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLWRldGFpbHMgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzVmNjM2ODtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjNWY2MzY4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcuZmFtaWx5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjBmZTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcud29yayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U4ZTY7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0tdGFnLmd5bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY0ZWE7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0tdGFnLnBlcnNvbmFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjdlMDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxuICBcXG4gIC5idXR0b25zLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnRvZG8taXRlbS5jb21wbGV0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuICAvKiAuLi4gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIHNyYy9kb21IYW5kbGVyLmpzXG5pbXBvcnQgeyBhZGRUb2RvSXRlbSwgaGFuZGxlUHJvamVjdENsaWNrLCBkZWxldGVUb2RvSXRlbSwgZWRpdFRvZG9JdGVtIH0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbi8vIEdldCByZWZlcmVuY2VzIHRvIERPTSBlbGVtZW50c1xuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idG4nKTtcbmNvbnN0IGluYm94QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYm94LWJ0bicpO1xuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktYnRuJyk7XG5jb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGNvbWluZy1idG4nKTtcbmNvbnN0IGd5bUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdneW0tYnRuJyk7XG5jb25zdCB3b3JrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dvcmstYnRuJyk7XG5jb25zdCBwZXJzb25hbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJzb25hbC1idG4nKTtcbmNvbnN0IGZhbWlseUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYW1pbHktYnRuJyk7XG5jb25zdCBtYWluQ29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKTtcbmNvbnN0IGFkZFRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stZGlhbG9nJyk7XG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1mb3JtJyk7XG5jb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWJ0bicpO1xuXG4vLyBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIGJ1dHRvbnNcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpO1xuaW5ib3hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2soJ0luYm94JykpO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2soJ1RvZGF5JykpO1xudXBjb21pbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2soJ1VwY29taW5nJykpO1xuZ3ltQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlUHJvamVjdENsaWNrKCdHeW0nKSk7XG53b3JrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlUHJvamVjdENsaWNrKCdXb3JrJykpO1xucGVyc29uYWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2soJ1BlcnNvbmFsJykpO1xuZmFtaWx5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlUHJvamVjdENsaWNrKCdGYW1pbHknKSk7XG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVBZGRUYXNrKTtcbmNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xuXG4vLyBFdmVudCBoYW5kbGVyIGZvciBhZGRpbmcgYSBuZXcgdGFza1xuZnVuY3Rpb24gaGFuZGxlQWRkVGFzayhldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlLWRhdGUtaW5wdXQnKS52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcbiAgY29uc3QgdHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0eXBlLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzLWlucHV0JykudmFsdWU7XG5cbiAgYWRkVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdHlwZSwgbm90ZXMpO1xuICBjbG9zZU1vZGFsKCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgdG9kbyBpdGVtc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvZG9JdGVtcyh0b2RvSXRlbXMpIHtcbiAgLy8gQ2xlYXIgdGhlIG1haW4gY29udGVudFxuICBtYWluQ29udGVudERpdi5pbm5lckhUTUwgPSAnJztcblxuICAvLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSB0b2RvIGl0ZW1zXG4gIGNvbnN0IHRvZG9JdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtcy1jb250YWluZXInKTtcblxuICAvLyBSZW5kZXIgZWFjaCB0b2RvIGl0ZW1cbiAgdG9kb0l0ZW1zLmZvckVhY2godG9kb0l0ZW0gPT4ge1xuICAgIGNvbnN0IHRvZG9JdGVtRWxlbWVudCA9IGNyZWF0ZVRvZG9JdGVtRWxlbWVudCh0b2RvSXRlbSk7XG4gICAgdG9kb0l0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtRWxlbWVudCk7XG4gIH0pO1xuXG4gIC8vIEFwcGVuZCB0aGUgdG9kbyBpdGVtcyBjb250YWluZXIgdG8gdGhlIG1haW4gY29udGVudFxuICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvSXRlbXNDb250YWluZXIpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgYSB0b2RvIGl0ZW0gZWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW1FbGVtZW50KHRvZG9JdGVtKSB7XG4gIGNvbnN0IHRvZG9JdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdG9kb0l0ZW0udGl0bGU7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgRHVlOiAke3RvZG9JdGVtLmR1ZURhdGV9YDtcblxuICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b2RvSXRlbS5wcmlvcml0eX1gO1xuXG4gIGNvbnN0IHR5cGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0eXBlRWxlbWVudC50ZXh0Q29udGVudCA9IGBUeXBlOiAke3RvZG9JdGVtLnR5cGV9YDtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKTtcblxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBIYW5kbGUgZWRpdCBmdW5jdGlvbmFsaXR5XG4gICAgICBjb25zb2xlLmxvZygnRWRpdCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgb3BlbkVkaXRNb2RhbCh0b2RvSXRlbSk7XG4gIH0pO1xuXG4gIGNvbnN0IG1hcmtDb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtYXJrQ29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSB0b2RvSXRlbS5jb21wbGV0ZWQgPyAnVW5tYXJrJyA6ICdNYXJrIGFzIENvbXBsZXRlJztcbiAgbWFya0NvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gSGFuZGxlIG1hcmsgYXMgY29tcGxldGUgZnVuY3Rpb25hbGl0eVxuICAgICAgdG9kb0l0ZW0uY29tcGxldGVkID0gIXRvZG9JdGVtLmNvbXBsZXRlZDtcbiAgICAgIG1hcmtDb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IHRvZG9JdGVtLmNvbXBsZXRlZCA/ICdVbm1hcmsnIDogJ01hcmsgYXMgQ29tcGxldGUnO1xuICAgICAgdG9kb0l0ZW1FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlZCcpO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIC8vIEhhbmRsZSBkZWxldGUgZnVuY3Rpb25hbGl0eVxuICAgICAgY29uc29sZS5sb2coJ0RlbGV0ZSBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgZGVsZXRlVG9kb0l0ZW0odG9kb0l0ZW0pO1xuICB9KTtcblxuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcmtDb21wbGV0ZUJ1dHRvbik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICB0b2RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcbiAgdG9kb0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRWxlbWVudCk7XG4gIHRvZG9JdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkdWVEYXRlRWxlbWVudCk7XG4gIHRvZG9JdGVtRWxlbWVudC5hcHBlbmRDaGlsZChwcmlvcml0eUVsZW1lbnQpO1xuICB0b2RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQodHlwZUVsZW1lbnQpO1xuICB0b2RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uc0NvbnRhaW5lcik7XG5cbiAgaWYgKHRvZG9JdGVtLmNvbXBsZXRlZCkge1xuICAgICAgdG9kb0l0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICB9XG5cbiAgcmV0dXJuIHRvZG9JdGVtRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RhbCh0b2RvSXRlbSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZS1pbnB1dCcpLnZhbHVlID0gdG9kb0l0ZW0udGl0bGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUgPSB0b2RvSXRlbS5kZXNjcmlwdGlvbjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZSA9IHRvZG9JdGVtLmR1ZURhdGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5LWlucHV0JykudmFsdWUgPSB0b2RvSXRlbS5wcmlvcml0eTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdHlwZS1pbnB1dCcpLnZhbHVlID0gdG9kb0l0ZW0udHlwZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtbm90ZXMtaW5wdXQnKS52YWx1ZSA9IHRvZG9JdGVtLm5vdGVzO1xuXG4gIGNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuICBlZGl0VGFza0Zvcm0uZGF0YXNldC50b2RvSW5kZXggPSB0b2RvSXRlbXMuaW5kZXhPZih0b2RvSXRlbSk7XG5cbiAgY29uc3QgZWRpdFRhc2tEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10YXNrLWRpYWxvZycpO1xuICBlZGl0VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbn1cblxuY29uc3QgZWRpdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtJyk7XG5lZGl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRWRpdFRhc2spO1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUVkaXRUYXNrKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgaW5kZXggPSBwYXJzZUludChlZGl0VGFza0Zvcm0uZGF0YXNldC50b2RvSW5kZXgpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRpdGxlLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJpb3JpdHktaW5wdXQnKS52YWx1ZTtcbiAgY29uc3QgdHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXR5cGUtaW5wdXQnKS52YWx1ZTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1ub3Rlcy1pbnB1dCcpLnZhbHVlO1xuXG4gIGVkaXRUb2RvSXRlbShpbmRleCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdHlwZSwgbm90ZXMpO1xuICBjbG9zZUVkaXRNb2RhbCgpO1xufVxuXG5jb25zdCBjYW5jZWxFZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1lZGl0LWJ0bicpO1xuY2FuY2VsRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRWRpdE1vZGFsKTtcblxuZnVuY3Rpb24gY2xvc2VFZGl0TW9kYWwoKSB7XG4gIGNvbnN0IGVkaXRUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay1kaWFsb2cnKTtcbiAgZWRpdFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgZWRpdFRhc2tGb3JtLnJlc2V0KCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcbiAgYWRkVGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlLWlucHV0JykuZm9jdXMoKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgYWRkVGFza0RpYWxvZy5jbG9zZSgpO1xuICBhZGRUYXNrRm9ybS5yZXNldCgpO1xufSIsIi8vIGluZGV4LmpzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVRvZG9JdGVtIH0gZnJvbSAnLi90b2RvSXRlbS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCB7IHJlbmRlclRvZG9JdGVtcyB9IGZyb20gJy4vZG9tSGFuZGxlci5qcyc7XG5cbmxldCB0b2RvSXRlbXMgPSBbXTtcbmxldCBwcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKCkge1xuICAgIC8vIEluaXRpYWxpemUgeW91ciBhcHAgaGVyZVxuICAgIHRvZG9JdGVtcyA9IFtcbiAgICAgICAgY3JlYXRlVG9kb0l0ZW0oJ0J1eSBncm9jZXJpZXMnLCAnQnV5IG1pbGssIGJyZWFkLCBhbmQgZWdncycsICcyMDI0LTA2LTE1JywgJ2hpZ2gnLCAncGVyc29uYWwnLCAnZ3JvY2VyeSBsaXN0JyksXG4gICAgICAgIGNyZWF0ZVRvZG9JdGVtKCdEb2N0b3IgQXBwb2ludG1lbnQnLCAnQW5udWFsIGNoZWNrdXAnLCAnMjAyNC0wNy0wMScsICdoaWdoJywgJ3BlcnNvbmFsJywgJycpLFxuICAgICAgICBjcmVhdGVUb2RvSXRlbSgnRmluaXNoIHByb2plY3QgcmVwb3J0JywgJ0NvbXBsZXRlIHRoZSBxdWFydGVybHkgcHJvamVjdCByZXBvcnQnLCAnMjAyNC0wNC0yMScsICdoaWdoJywgJ3dvcmsnLCAnJyksXG4gICAgICAgIGNyZWF0ZVRvZG9JdGVtKCdHeW0gd29ya291dCcsICdDYXJkaW8gYW5kIHN0cmVuZ3RoIHRyYWluaW5nJywgJzIwMjQtMDYtMTYnLCAnbWVkaXVtJywgJ2d5bScsICcnKSxcbiAgICBdO1xuXG4gICAgcHJvamVjdHMgPSBbXG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ0luYm94JyksXG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ1RvZGF5JyksXG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ1VwY29taW5nJyksXG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ0d5bScpLFxuICAgICAgICBjcmVhdGVQcm9qZWN0KCdXb3JrJyksXG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ1BlcnNvbmFsJyksXG4gICAgICAgIGNyZWF0ZVByb2plY3QoJ0ZhbWlseScpLFxuICAgIF07XG5cbiAgICAvLyBSZW5kZXIgeW91ciBhcHAgd2l0aCB0aGUgaW5pdGlhbCBcIkluYm94XCIgcHJvamVjdFxuICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgIHJlbmRlclByb2plY3QocHJvamVjdHNbMF0pO1xufVxuXG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgY29uc3QgZmlsdGVyZWRUb2RvSXRlbXMgPSBzZWxlY3RlZFByb2plY3QuZ2V0RmlsdGVyZWRUb2RvSXRlbXModG9kb0l0ZW1zKTtcbiAgICByZW5kZXJUb2RvSXRlbXMoZmlsdGVyZWRUb2RvSXRlbXMpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBhZGQgYSBuZXcgdG9kbyBpdGVtXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdHlwZSwgbm90ZXMpIHtcbiAgICBjb25zdCBuZXdUb2RvSXRlbSA9IGNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHR5cGUsIG5vdGVzKTtcbiAgICB0b2RvSXRlbXMucHVzaChuZXdUb2RvSXRlbSk7XG4gICAgcmVuZGVyUHJvamVjdChwcm9qZWN0c1swXSk7IC8vIFJlLXJlbmRlciB0aGUgY3VycmVudCBwcm9qZWN0XG59XG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlUHJvamVjdENsaWNrKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpO1xuICAgIHJlbmRlclByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXBwKHNlbGVjdGVkUHJvamVjdCwgdG9kb0l0ZW1zKSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50Jyk7XG4gICAgLy8gQ2xlYXIgdGhlIG1haW4gY29udGVudFxuICAgIG1haW5Db250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgIC8vIEdldCB0aGUgZmlsdGVyZWQgdG9kbyBpdGVtcyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb0l0ZW1zID0gc2VsZWN0ZWRQcm9qZWN0LmdldEZpbHRlcmVkVG9kb0l0ZW1zKHRvZG9JdGVtcyk7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciB0aGUgdG9kbyBpdGVtc1xuICAgIGNvbnN0IHRvZG9JdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9JdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW1zLWNvbnRhaW5lcicpO1xuICAgIFxuICAgIC8vIFJlbmRlciBlYWNoIGZpbHRlcmVkIHRvZG8gaXRlbVxuICAgIGZpbHRlcmVkVG9kb0l0ZW1zLmZvckVhY2godG9kb0l0ZW0gPT4ge1xuICAgICAgICBjb25zdCB0b2RvSXRlbUVsZW1lbnQgPSBjcmVhdGVUb2RvSXRlbUVsZW1lbnQodG9kb0l0ZW0pO1xuICAgICAgICB0b2RvSXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0l0ZW1FbGVtZW50KTtcbiAgICB9KTtcbiAgICBcbiAgICAvLyBBcHBlbmQgdGhlIHRvZG8gaXRlbXMgY29udGFpbmVyIHRvIHRoZSBtYWluIGNvbnRlbnRcbiAgICBtYWluQ29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvSXRlbXNDb250YWluZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0odG9kb0l0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IHRvZG9JdGVtcy5pbmRleE9mKHRvZG9JdGVtKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICB0b2RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIHJlbmRlclByb2plY3QocHJvamVjdHNbMF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb2RvSXRlbShpbmRleCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdHlwZSwgbm90ZXMpIHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRvZG9JdGVtcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRvZG9JdGVtID0gdG9kb0l0ZW1zW2luZGV4XTtcbiAgICAgIHRvZG9JdGVtLnRpdGxlID0gdGl0bGU7XG4gICAgICB0b2RvSXRlbS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgdG9kb0l0ZW0uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICB0b2RvSXRlbS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdG9kb0l0ZW0udHlwZSA9IHR5cGU7XG4gICAgICB0b2RvSXRlbS5ub3RlcyA9IG5vdGVzO1xuICAgICAgcmVuZGVyUHJvamVjdChwcm9qZWN0c1swXSk7XG4gICAgfVxufVxuLy8gSW5pdGlhbGl6ZSB0aGUgYXBwIHdoZW4gdGhlIERPTSBjb250ZW50IGlzIGxvYWRlZFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXRpYWxpemVBcHApOyIsIi8vIHNyYy9wcm9qZWN0LmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBnZXRGaWx0ZXJlZFRvZG9JdGVtcyh0b2RvSXRlbXMpIHtcbiAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ0luYm94JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9JdGVtcztcbiAgICAgICAgICAgICAgICBjYXNlICdUb2RheSc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXNUb2RheShpdGVtLmR1ZURhdGUpKTtcbiAgICAgICAgICAgICAgICBjYXNlICdVcGNvbWluZyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXNVcGNvbWluZyhpdGVtLmR1ZURhdGUpKTtcbiAgICAgICAgICAgICAgICBjYXNlICdHeW0nOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0l0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ2d5bScpO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1dvcmsnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0l0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ3dvcmsnKTtcbiAgICAgICAgICAgICAgICBjYXNlICdQZXJzb25hbCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50eXBlID09PSAncGVyc29uYWwnKTtcbiAgICAgICAgICAgICAgICBjYXNlICdGYW1pbHknOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0l0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ2ZhbWlseScpO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGRhdGUgPT09IHRvZGF5LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xufVxuXG5mdW5jdGlvbiBpc1VwY29taW5nKGRhdGUpIHtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgcmV0dXJuIGRhdGUgPiB0b2RheS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbn0iLCIvLyBzcmMvdG9kb0l0ZW0uanNcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksdHlwZSwgbm90ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LFxuICAgICAgICB0eXBlLFxuICAgICAgICBub3RlcyxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICB9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==