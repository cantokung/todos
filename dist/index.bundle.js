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
  
  .add-task-form,
  .edit-task-form {
    padding: 20px;
  }
  
  
  .add-task-form h2,
  .edit-task-form h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 22px;
    color: #202124;
  }
  
  .add-task-form label,
  .edit-task-form label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #5f6368;
  }
  
  .add-task-form input,
  .add-task-form select,
  .add-task-form textarea,
  .edit-task-form input,
  .edit-task-form select,
  .edit-task-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 14px;
    color: #202124;
  }
  
  .add-task-form button,
  .edit-task-form button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }
  
  .add-task-form button[type="submit"],
  .edit-task-form button[type="submit"] {
    background-color: #1a73e8;
    color: white;
    margin-right: 10px;
  }
  
  .add-task-form button[type="submit"]:hover,
  .edit-task-form button[type="submit"]:hover {
    background-color: #1765cc;
  }
  
  .add-task-form button[type="button"],
  .edit-task-form button[type="button"] {
    background-color: #f1f3f4;
    color: #202124;
  }
  
  .add-task-form button[type="button"]:hover,
  .edit-task-form button[type="button"]:hover {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* src/styles/main.css */\nbody {\n    font-family: 'Roboto', sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f5f5f5;\n  }\n  \n  #app {\n    display: flex;\n    height: 100vh;\n  }\n  \n  .sidebar {\n    flex: 0 0 250px;\n    background-color: #f1f3f4;\n    padding: 20px;\n    border-right: 1px solid #e0e0e0;\n  }\n  \n  .sidebar button {\n    display: block;\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: none;\n    background-color: transparent;\n    text-align: left;\n    font-size: 14px;\n    color: #5f6368;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n  \n  .sidebar button:hover {\n    background-color: #e8eaed;\n  }\n  \n  .sidebar .inbox-section,\n  .sidebar .task-type-section {\n    margin-bottom: 20px;\n  }\n  \n  .add-task-btn {\n    display: block;\n    width: 100%;\n    padding: 15px;\n    margin-bottom: 20px;\n    border: none;\n    background-color: #c2e7ff;\n    color: #001d35;\n    font-size: 16px;\n    font-weight: bold;\n    text-align: center;\n    cursor: pointer;\n    transition: background-color 0.3s;\n    border-radius: 24px;\n  }\n  \n  .add-task-btn:hover {\n    background-color: #a6d5fa;\n  }\n  \n  .main-content {\n    flex: 1;\n    padding: 20px;\n    background-color: #ffffff;\n    overflow-y: auto;\n  }\n  \n  .todo-items-container {\n    margin-top: 20px;\n  }\n  \n  .todo-item {\n    display: flex;\n    align-items: center;\n    padding: 10px 20px;\n    border-bottom: 1px solid #e0e0e0;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n  \n  .todo-item:hover {\n    background-color: #f5f5f5;\n  }\n  \n  .todo-item-title {\n    flex: 1;\n    margin-right: 20px;\n  }\n  \n  .todo-item-title h3 {\n    margin: 0;\n    font-size: 16px;\n    color: #202124;\n  }\n  \n  .todo-item-details {\n    flex: 2;\n    margin-right: 20px;\n  }\n  \n  .todo-item-details p {\n    margin: 0;\n    font-size: 14px;\n    color: #5f6368;\n  }\n  \n  .todo-item-tag {\n    font-size: 12px;\n    color: #5f6368;\n    margin-right: 10px;\n    padding: 2px 6px;\n    border-radius: 4px;\n  }\n  \n  .todo-item-tag.family {\n    background-color: #e8f0fe;\n  }\n  \n  .todo-item-tag.work {\n    background-color: #fce8e6;\n  }\n  \n  .todo-item-tag.gym {\n    background-color: #e6f4ea;\n  }\n  \n  .todo-item-tag.personal {\n    background-color: #fef7e0;\n  }\n  \n  .todo-item-due-date {\n    font-size: 12px;\n    color: #5f6368;\n    white-space: nowrap;\n  }\n  \n  .dialog {\n    border: none;\n    border-radius: 8px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  }\n  \n  .dialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.6);\n  }\n  \n  .add-task-form,\n  .edit-task-form {\n    padding: 20px;\n  }\n  \n  \n  .add-task-form h2,\n  .edit-task-form h2 {\n    margin-top: 0;\n    margin-bottom: 20px;\n    font-size: 22px;\n    color: #202124;\n  }\n  \n  .add-task-form label,\n  .edit-task-form label {\n    display: block;\n    margin-bottom: 8px;\n    font-size: 14px;\n    color: #5f6368;\n  }\n  \n  .add-task-form input,\n  .add-task-form select,\n  .add-task-form textarea,\n  .edit-task-form input,\n  .edit-task-form select,\n  .edit-task-form textarea {\n    width: 100%;\n    padding: 10px;\n    margin-bottom: 16px;\n    border: 1px solid #dadce0;\n    border-radius: 4px;\n    box-sizing: border-box;\n    font-size: 14px;\n    color: #202124;\n  }\n  \n  .add-task-form button,\n  .edit-task-form button {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    font-size: 14px;\n    transition: background-color 0.3s;\n  }\n  \n  .add-task-form button[type=\"submit\"],\n  .edit-task-form button[type=\"submit\"] {\n    background-color: #1a73e8;\n    color: white;\n    margin-right: 10px;\n  }\n  \n  .add-task-form button[type=\"submit\"]:hover,\n  .edit-task-form button[type=\"submit\"]:hover {\n    background-color: #1765cc;\n  }\n  \n  .add-task-form button[type=\"button\"],\n  .edit-task-form button[type=\"button\"] {\n    background-color: #f1f3f4;\n    color: #202124;\n  }\n  \n  .add-task-form button[type=\"button\"]:hover,\n  .edit-task-form button[type=\"button\"]:hover {\n    background-color: #e8eaed;\n  }\n\n/* ... */\n\n.todo-items-container {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n    gap: 10px;\n  }\n  \n  .todo-item {\n    display: grid;\n    grid-template-columns: 1fr 2fr auto;\n    align-items: center;\n    padding: 10px 20px;\n    border-bottom: 1px solid #e0e0e0;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n  \n  .todo-item:hover {\n    background-color: #f5f5f5;\n  }\n  \n  .todo-item-title {\n    margin-right: 20px;\n  }\n  \n  .todo-item-title h3 {\n    margin: 0;\n    font-size: 16px;\n    color: #202124;\n  }\n  \n  .todo-item-details {\n    margin-right: 20px;\n  }\n  \n  .todo-item-details p {\n    margin: 0;\n    font-size: 14px;\n    color: #5f6368;\n  }\n  \n  .todo-item-tag {\n    font-size: 12px;\n    color: #5f6368;\n    margin-right: 10px;\n    padding: 2px 6px;\n    border-radius: 4px;\n  }\n  \n  .todo-item-tag.family {\n    background-color: #e8f0fe;\n  }\n  \n  .todo-item-tag.work {\n    background-color: #fce8e6;\n  }\n  \n  .todo-item-tag.gym {\n    background-color: #e6f4ea;\n  }\n  \n  .todo-item-tag.personal {\n    background-color: #fef7e0;\n  }\n  \n  .todo-item-due-date {\n    font-size: 12px;\n    color: #5f6368;\n    white-space: nowrap;\n  }\n  \n  .buttons-container {\n    margin-top: 10px;\n}\n\n.buttons-container button {\n    margin-right: 5px;\n}\n\n.todo-item.completed {\n    background-color: #e0e0e0;\n    text-decoration: line-through;\n}\n\n\n  /* ... */\n"],"sourceRoot":""}]);
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
    const todoItemElement = createTodoItemElement(todoItem, todoItems);
    todoItemsContainer.appendChild(todoItemElement);
  });

  // Append the todo items container to the main content
  mainContentDiv.appendChild(todoItemsContainer);
}

// Function to create a todo item element
function createTodoItemElement(todoItem, todoItems) {
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
      openEditModal(todoItem, todoItems);
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

function openEditModal(todoItem, todoItems) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxPQUFPLHVGQUF1RixNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcENBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9kb21IYW5kbGVyLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvdG9kb0l0ZW0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIHNyYy9zdHlsZXMvbWFpbi5jc3MgKi9cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICB9XG4gIFxuICAjYXBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIHtcbiAgICBmbGV4OiAwIDAgMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzVmNjM2ODtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB9XG4gIFxuICAuc2lkZWJhciBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZWQ7XG4gIH1cbiAgXG4gIC5zaWRlYmFyIC5pbmJveC1zZWN0aW9uLFxuICAuc2lkZWJhciAudGFzay10eXBlLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1idG4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZTdmZjtcbiAgICBjb2xvcjogIzAwMWQzNTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgfVxuICBcbiAgLmFkZC10YXNrLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2E2ZDVmYTtcbiAgfVxuICBcbiAgLm1haW4tY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxuICBcbiAgLnRvZG8taXRlbXMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG4gIFxuICAudG9kby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRpdGxlIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjMjAyMTI0O1xuICB9XG4gIFxuICAudG9kby1pdGVtLWRldGFpbHMge1xuICAgIGZsZXg6IDI7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAudG9kby1pdGVtLWRldGFpbHMgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzVmNjM2ODtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10YWcge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzVmNjM2ODtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcGFkZGluZzogMnB4IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGFnLmZhbWlseSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjBmZTtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10YWcud29yayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZThlNjtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10YWcuZ3ltIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmNGVhO1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZy5wZXJzb25hbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjdlMDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS1kdWUtZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNWY2MzY4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgXG4gIC5kaWFsb2cge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICBcbiAgLmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgfVxuICBcbiAgLmFkZC10YXNrLWZvcm0sXG4gIC5lZGl0LXRhc2stZm9ybSB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgXG4gIC5hZGQtdGFzay1mb3JtIGgyLFxuICAuZWRpdC10YXNrLWZvcm0gaDIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6ICMyMDIxMjQ7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGxhYmVsLFxuICAuZWRpdC10YXNrLWZvcm0gbGFiZWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM1ZjYzNjg7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGlucHV0LFxuICAuYWRkLXRhc2stZm9ybSBzZWxlY3QsXG4gIC5hZGQtdGFzay1mb3JtIHRleHRhcmVhLFxuICAuZWRpdC10YXNrLWZvcm0gaW5wdXQsXG4gIC5lZGl0LXRhc2stZm9ybSBzZWxlY3QsXG4gIC5lZGl0LXRhc2stZm9ybSB0ZXh0YXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRjZTA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMjAyMTI0O1xuICB9XG4gIFxuICAuYWRkLXRhc2stZm9ybSBidXR0b24sXG4gIC5lZGl0LXRhc2stZm9ybSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB9XG4gIFxuICAuYWRkLXRhc2stZm9ybSBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSxcbiAgLmVkaXQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3M2U4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyLFxuICAuZWRpdC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzY1Y2M7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdLFxuICAuZWRpdC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XCJidXR0b25cIl0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjQ7XG4gICAgY29sb3I6ICMyMDIxMjQ7XG4gIH1cbiAgXG4gIC5hZGQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVwiYnV0dG9uXCJdOmhvdmVyLFxuICAuZWRpdC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XCJidXR0b25cIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOGVhZWQ7XG4gIH1cblxuLyogLi4uICovXG5cbi50b2RvLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG4gIFxuICAudG9kby1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGl0bGUge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10aXRsZSBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzIwMjEyNDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS1kZXRhaWxzIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tZGV0YWlscyBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNWY2MzY4O1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZyB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNWY2MzY4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgLnRvZG8taXRlbS10YWcuZmFtaWx5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMGZlO1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZy53b3JrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlOGU2O1xuICB9XG4gIFxuICAudG9kby1pdGVtLXRhZy5neW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY0ZWE7XG4gIH1cbiAgXG4gIC50b2RvLWl0ZW0tdGFnLnBlcnNvbmFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmN2UwO1xuICB9XG4gIFxuICAudG9kby1pdGVtLWR1ZS1kYXRlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM1ZjYzNjg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuICBcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnRvZG8taXRlbS5jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cblxuICAvKiAuLi4gKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7QUFDeEI7SUFDSSxpQ0FBaUM7SUFDakMsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLE9BQU87SUFDUCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxPQUFPO0lBQ1Asa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsU0FBUztJQUNULGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7O0lBRUUsYUFBYTtFQUNmOzs7RUFHQTs7SUFFRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7O0VBRUE7Ozs7OztJQU1FLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0VBQ2hCOztFQUVBOztJQUVFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUNBQWlDO0VBQ25DOztFQUVBOztJQUVFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjs7RUFFQTs7SUFFRSx5QkFBeUI7RUFDM0I7O0FBRUYsUUFBUTs7QUFFUjtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsZUFBZTtJQUNmLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7OztFQUdFLFFBQVFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogc3JjL3N0eWxlcy9tYWluLmNzcyAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIH1cXG4gIFxcbiAgI2FwcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICB9XFxuICBcXG4gIC5zaWRlYmFyIHtcXG4gICAgZmxleDogMCAwIDI1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmM2Y0O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTBlMGUwO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWVkO1xcbiAgfVxcbiAgXFxuICAuc2lkZWJhciAuaW5ib3gtc2VjdGlvbixcXG4gIC5zaWRlYmFyIC50YXNrLXR5cGUtc2VjdGlvbiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1idG4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MyZTdmZjtcXG4gICAgY29sb3I6ICMwMDFkMzU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTZkNWZhO1xcbiAgfVxcbiAgXFxuICAubWFpbi1jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbXMtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10aXRsZSBoMyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogIzIwMjEyNDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS1kZXRhaWxzIHtcXG4gICAgZmxleDogMjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLWRldGFpbHMgcCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzVmNjM2ODtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGNvbG9yOiAjNWY2MzY4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcuZmFtaWx5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjBmZTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcud29yayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2U4ZTY7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0tdGFnLmd5bSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY0ZWE7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0tdGFnLnBlcnNvbmFsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZjdlMDtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS1kdWUtZGF0ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB9XFxuICBcXG4gIC5kaWFsb2cge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIH1cXG4gIFxcbiAgLmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1mb3JtLFxcbiAgLmVkaXQtdGFzay1mb3JtIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG4gIFxcbiAgXFxuICAuYWRkLXRhc2stZm9ybSBoMixcXG4gIC5lZGl0LXRhc2stZm9ybSBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gICAgY29sb3I6ICMyMDIxMjQ7XFxuICB9XFxuICBcXG4gIC5hZGQtdGFzay1mb3JtIGxhYmVsLFxcbiAgLmVkaXQtdGFzay1mb3JtIGxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzVmNjM2ODtcXG4gIH1cXG4gIFxcbiAgLmFkZC10YXNrLWZvcm0gaW5wdXQsXFxuICAuYWRkLXRhc2stZm9ybSBzZWxlY3QsXFxuICAuYWRkLXRhc2stZm9ybSB0ZXh0YXJlYSxcXG4gIC5lZGl0LXRhc2stZm9ybSBpbnB1dCxcXG4gIC5lZGl0LXRhc2stZm9ybSBzZWxlY3QsXFxuICAuZWRpdC10YXNrLWZvcm0gdGV4dGFyZWEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGNlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjMjAyMTI0O1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stZm9ybSBidXR0b24sXFxuICAuZWRpdC10YXNrLWZvcm0gYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIH1cXG4gIFxcbiAgLmFkZC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbiAgLmVkaXQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTczZTg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stZm9ybSBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIsXFxuICAuZWRpdC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3NjVjYztcXG4gIH1cXG4gIFxcbiAgLmFkZC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgLmVkaXQtdGFzay1mb3JtIGJ1dHRvblt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjQ7XFxuICAgIGNvbG9yOiAjMjAyMTI0O1xcbiAgfVxcbiAgXFxuICAuYWRkLXRhc2stZm9ybSBidXR0b25bdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIsXFxuICAuZWRpdC10YXNrLWZvcm0gYnV0dG9uW3R5cGU9XFxcImJ1dHRvblxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWFlZDtcXG4gIH1cXG5cXG4vKiAuLi4gKi9cXG5cXG4udG9kby1pdGVtcy1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLXRpdGxlIGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjMjAyMTI0O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLWRldGFpbHMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICB9XFxuICBcXG4gIC50b2RvLWl0ZW0tZGV0YWlscyBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjNWY2MzY4O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLXRhZyB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgY29sb3I6ICM1ZjYzNjg7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgcGFkZGluZzogMnB4IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLXRhZy5mYW1pbHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmMGZlO1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLXRhZy53b3JrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZThlNjtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcuZ3ltIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjRlYTtcXG4gIH1cXG4gIFxcbiAgLnRvZG8taXRlbS10YWcucGVyc29uYWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmN2UwO1xcbiAgfVxcbiAgXFxuICAudG9kby1pdGVtLWR1ZS1kYXRlIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBjb2xvcjogIzVmNjM2ODtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmJ1dHRvbnMtY29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG5cXG4udG9kby1pdGVtLmNvbXBsZXRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5cXG4gIC8qIC4uLiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gc3JjL2RvbUhhbmRsZXIuanNcbmltcG9ydCB7IGFkZFRvZG9JdGVtLCBoYW5kbGVQcm9qZWN0Q2xpY2ssIGRlbGV0ZVRvZG9JdGVtLCBlZGl0VG9kb0l0ZW0gfSBmcm9tICcuL2luZGV4LmpzJztcblxuLy8gR2V0IHJlZmVyZW5jZXMgdG8gRE9NIGVsZW1lbnRzXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrLWJ0bicpO1xuY29uc3QgaW5ib3hCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3gtYnRuJyk7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1idG4nKTtcbmNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwY29taW5nLWJ0bicpO1xuY29uc3QgZ3ltQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2d5bS1idG4nKTtcbmNvbnN0IHdvcmtCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd29yay1idG4nKTtcbmNvbnN0IHBlcnNvbmFsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlcnNvbmFsLWJ0bicpO1xuY29uc3QgZmFtaWx5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhbWlseS1idG4nKTtcbmNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuY29uc3QgYWRkVGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1kaWFsb2cnKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrLWZvcm0nKTtcbmNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtYnRuJyk7XG5cbi8vIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gYnV0dG9uc1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XG5pbmJveEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVByb2plY3RDbGljaygnSW5ib3gnKSk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVByb2plY3RDbGljaygnVG9kYXknKSk7XG51cGNvbWluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVByb2plY3RDbGljaygnVXBjb21pbmcnKSk7XG5neW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2soJ0d5bScpKTtcbndvcmtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2soJ1dvcmsnKSk7XG5wZXJzb25hbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhhbmRsZVByb2plY3RDbGljaygnUGVyc29uYWwnKSk7XG5mYW1pbHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVQcm9qZWN0Q2xpY2soJ0ZhbWlseScpKTtcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUFkZFRhc2spO1xuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG5cbi8vIEV2ZW50IGhhbmRsZXIgZm9yIGFkZGluZyBhIG5ldyB0YXNrXG5mdW5jdGlvbiBoYW5kbGVBZGRUYXNrKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKS52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWUtZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eS1pbnB1dCcpLnZhbHVlO1xuICBjb25zdCB0eXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3R5cGUtaW5wdXQnKS52YWx1ZTtcbiAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMtaW5wdXQnKS52YWx1ZTtcblxuICBhZGRUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0eXBlLCBub3Rlcyk7XG4gIGNsb3NlTW9kYWwoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSB0b2RvIGl0ZW1zXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9kb0l0ZW1zKHRvZG9JdGVtcykge1xuICAvLyBDbGVhciB0aGUgbWFpbiBjb250ZW50XG4gIG1haW5Db250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuXG4gIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIHRvZG8gaXRlbXNcbiAgY29uc3QgdG9kb0l0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRvZG9JdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW1zLWNvbnRhaW5lcicpO1xuXG4gIC8vIFJlbmRlciBlYWNoIHRvZG8gaXRlbVxuICB0b2RvSXRlbXMuZm9yRWFjaCh0b2RvSXRlbSA9PiB7XG4gICAgY29uc3QgdG9kb0l0ZW1FbGVtZW50ID0gY3JlYXRlVG9kb0l0ZW1FbGVtZW50KHRvZG9JdGVtLCB0b2RvSXRlbXMpO1xuICAgIHRvZG9JdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSXRlbUVsZW1lbnQpO1xuICB9KTtcblxuICAvLyBBcHBlbmQgdGhlIHRvZG8gaXRlbXMgY29udGFpbmVyIHRvIHRoZSBtYWluIGNvbnRlbnRcbiAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9kb0l0ZW1zQ29udGFpbmVyKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGEgdG9kbyBpdGVtIGVsZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtRWxlbWVudCh0b2RvSXRlbSwgdG9kb0l0ZW1zKSB7XG4gIGNvbnN0IHRvZG9JdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0b2RvSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtJyk7XG5cbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gdG9kb0l0ZW0udGl0bGU7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSB0b2RvSXRlbS5kZXNjcmlwdGlvbjtcblxuICBjb25zdCBkdWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZHVlRGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgRHVlOiAke3RvZG9JdGVtLmR1ZURhdGV9YDtcblxuICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9yaXR5RWxlbWVudC50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHt0b2RvSXRlbS5wcmlvcml0eX1gO1xuXG4gIGNvbnN0IHR5cGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICB0eXBlRWxlbWVudC50ZXh0Q29udGVudCA9IGBUeXBlOiAke3RvZG9JdGVtLnR5cGV9YDtcblxuICBjb25zdCBidXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucy1jb250YWluZXInKTtcblxuICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBIYW5kbGUgZWRpdCBmdW5jdGlvbmFsaXR5XG4gICAgICBjb25zb2xlLmxvZygnRWRpdCBidXR0b24gY2xpY2tlZCcpO1xuICAgICAgb3BlbkVkaXRNb2RhbCh0b2RvSXRlbSwgdG9kb0l0ZW1zKTtcbiAgfSk7XG5cbiAgY29uc3QgbWFya0NvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1hcmtDb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IHRvZG9JdGVtLmNvbXBsZXRlZCA/ICdVbm1hcmsnIDogJ01hcmsgYXMgQ29tcGxldGUnO1xuICBtYXJrQ29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBIYW5kbGUgbWFyayBhcyBjb21wbGV0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICB0b2RvSXRlbS5jb21wbGV0ZWQgPSAhdG9kb0l0ZW0uY29tcGxldGVkO1xuICAgICAgbWFya0NvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gdG9kb0l0ZW0uY29tcGxldGVkID8gJ1VubWFyaycgOiAnTWFyayBhcyBDb21wbGV0ZSc7XG4gICAgICB0b2RvSXRlbUVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGVkJyk7XG4gIH0pO1xuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gSGFuZGxlIGRlbGV0ZSBmdW5jdGlvbmFsaXR5XG4gICAgICBjb25zb2xlLmxvZygnRGVsZXRlIGJ1dHRvbiBjbGlja2VkJyk7XG4gICAgICBkZWxldGVUb2RvSXRlbSh0b2RvSXRlbSk7XG4gIH0pO1xuXG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobWFya0NvbXBsZXRlQnV0dG9uKTtcbiAgYnV0dG9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gIHRvZG9JdGVtRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICB0b2RvSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25FbGVtZW50KTtcbiAgdG9kb0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGR1ZURhdGVFbGVtZW50KTtcbiAgdG9kb0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKHByaW9yaXR5RWxlbWVudCk7XG4gIHRvZG9JdGVtRWxlbWVudC5hcHBlbmRDaGlsZCh0eXBlRWxlbWVudCk7XG4gIHRvZG9JdGVtRWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25zQ29udGFpbmVyKTtcblxuICBpZiAodG9kb0l0ZW0uY29tcGxldGVkKSB7XG4gICAgICB0b2RvSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gIH1cblxuICByZXR1cm4gdG9kb0l0ZW1FbGVtZW50O1xufVxuXG5mdW5jdGlvbiBvcGVuRWRpdE1vZGFsKHRvZG9JdGVtLCB0b2RvSXRlbXMpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGl0bGUtaW5wdXQnKS52YWx1ZSA9IHRvZG9JdGVtLnRpdGxlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlID0gdG9kb0l0ZW0uZGVzY3JpcHRpb247XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWR1ZS1kYXRlLWlucHV0JykudmFsdWUgPSB0b2RvSXRlbS5kdWVEYXRlO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcmlvcml0eS1pbnB1dCcpLnZhbHVlID0gdG9kb0l0ZW0ucHJpb3JpdHk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXR5cGUtaW5wdXQnKS52YWx1ZSA9IHRvZG9JdGVtLnR5cGU7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LW5vdGVzLWlucHV0JykudmFsdWUgPSB0b2RvSXRlbS5ub3RlcztcblxuICBjb25zdCBlZGl0VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWZvcm0nKTtcbiAgZWRpdFRhc2tGb3JtLmRhdGFzZXQudG9kb0luZGV4ID0gdG9kb0l0ZW1zLmluZGV4T2YodG9kb0l0ZW0pO1xuXG4gIGNvbnN0IGVkaXRUYXNrRGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay1kaWFsb2cnKTtcbiAgZWRpdFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybScpO1xuZWRpdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUVkaXRUYXNrKTtcblxuXG5mdW5jdGlvbiBoYW5kbGVFZGl0VGFzayhldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZWRpdFRhc2tGb3JtLmRhdGFzZXQudG9kb0luZGV4KTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10aXRsZS1pbnB1dCcpLnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByaW9yaXR5LWlucHV0JykudmFsdWU7XG4gIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10eXBlLWlucHV0JykudmFsdWU7XG4gIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtbm90ZXMtaW5wdXQnKS52YWx1ZTtcblxuICBlZGl0VG9kb0l0ZW0oaW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHR5cGUsIG5vdGVzKTtcbiAgY2xvc2VFZGl0TW9kYWwoKTtcbn1cblxuY29uc3QgY2FuY2VsRWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZWRpdC1idG4nKTtcbmNhbmNlbEVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZUVkaXRNb2RhbCk7XG5cbmZ1bmN0aW9uIGNsb3NlRWRpdE1vZGFsKCkge1xuICBjb25zdCBlZGl0VGFza0RpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stZGlhbG9nJyk7XG4gIGVkaXRUYXNrRGlhbG9nLmNsb3NlKCk7XG4gIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIGFkZFRhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZS1pbnB1dCcpLmZvY3VzKCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGFkZFRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgYWRkVGFza0Zvcm0ucmVzZXQoKTtcbn0iLCIvLyBpbmRleC5qc1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVUb2RvSXRlbSB9IGZyb20gJy4vdG9kb0l0ZW0uanMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyByZW5kZXJUb2RvSXRlbXMgfSBmcm9tICcuL2RvbUhhbmRsZXIuanMnO1xuXG5sZXQgdG9kb0l0ZW1zID0gW107XG5sZXQgcHJvamVjdHMgPSBbXTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcCgpIHtcbiAgICAvLyBJbml0aWFsaXplIHlvdXIgYXBwIGhlcmVcbiAgICB0b2RvSXRlbXMgPSBbXG4gICAgICAgIGNyZWF0ZVRvZG9JdGVtKCdCdXkgZ3JvY2VyaWVzJywgJ0J1eSBtaWxrLCBicmVhZCwgYW5kIGVnZ3MnLCAnMjAyNC0wNi0xNScsICdoaWdoJywgJ3BlcnNvbmFsJywgJ2dyb2NlcnkgbGlzdCcpLFxuICAgICAgICBjcmVhdGVUb2RvSXRlbSgnRG9jdG9yIEFwcG9pbnRtZW50JywgJ0FubnVhbCBjaGVja3VwJywgJzIwMjQtMDctMDEnLCAnaGlnaCcsICdwZXJzb25hbCcsICcnKSxcbiAgICAgICAgY3JlYXRlVG9kb0l0ZW0oJ0ZpbmlzaCBwcm9qZWN0IHJlcG9ydCcsICdDb21wbGV0ZSB0aGUgcXVhcnRlcmx5IHByb2plY3QgcmVwb3J0JywgJzIwMjQtMDQtMjEnLCAnaGlnaCcsICd3b3JrJywgJycpLFxuICAgICAgICBjcmVhdGVUb2RvSXRlbSgnR3ltIHdvcmtvdXQnLCAnQ2FyZGlvIGFuZCBzdHJlbmd0aCB0cmFpbmluZycsICcyMDI0LTA2LTE2JywgJ21lZGl1bScsICdneW0nLCAnJyksXG4gICAgXTtcblxuICAgIHByb2plY3RzID0gW1xuICAgICAgICBjcmVhdGVQcm9qZWN0KCdJbmJveCcpLFxuICAgICAgICBjcmVhdGVQcm9qZWN0KCdUb2RheScpLFxuICAgICAgICBjcmVhdGVQcm9qZWN0KCdVcGNvbWluZycpLFxuICAgICAgICBjcmVhdGVQcm9qZWN0KCdHeW0nKSxcbiAgICAgICAgY3JlYXRlUHJvamVjdCgnV29yaycpLFxuICAgICAgICBjcmVhdGVQcm9qZWN0KCdQZXJzb25hbCcpLFxuICAgICAgICBjcmVhdGVQcm9qZWN0KCdGYW1pbHknKSxcbiAgICBdO1xuXG4gICAgLy8gUmVuZGVyIHlvdXIgYXBwIHdpdGggdGhlIGluaXRpYWwgXCJJbmJveFwiIHByb2plY3RcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICByZW5kZXJQcm9qZWN0KHByb2plY3RzWzBdKTtcbn1cblxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCkge1xuICAgIGNvbnN0IGZpbHRlcmVkVG9kb0l0ZW1zID0gc2VsZWN0ZWRQcm9qZWN0LmdldEZpbHRlcmVkVG9kb0l0ZW1zKHRvZG9JdGVtcyk7XG4gICAgcmVuZGVyVG9kb0l0ZW1zKGZpbHRlcmVkVG9kb0l0ZW1zKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gYWRkIGEgbmV3IHRvZG8gaXRlbVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHR5cGUsIG5vdGVzKSB7XG4gICAgY29uc3QgbmV3VG9kb0l0ZW0gPSBjcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0eXBlLCBub3Rlcyk7XG4gICAgdG9kb0l0ZW1zLnB1c2gobmV3VG9kb0l0ZW0pO1xuICAgIHJlbmRlclByb2plY3QocHJvamVjdHNbMF0pOyAvLyBSZS1yZW5kZXIgdGhlIGN1cnJlbnQgcHJvamVjdFxufVxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVByb2plY3RDbGljayhwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcbiAgICByZW5kZXJQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFwcChzZWxlY3RlZFByb2plY3QsIHRvZG9JdGVtcykge1xuICAgIGNvbnN0IG1haW5Db250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudCcpO1xuICAgIC8vIENsZWFyIHRoZSBtYWluIGNvbnRlbnRcbiAgICBtYWluQ29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICAvLyBHZXQgdGhlIGZpbHRlcmVkIHRvZG8gaXRlbXMgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHByb2plY3RcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9JdGVtcyA9IHNlbGVjdGVkUHJvamVjdC5nZXRGaWx0ZXJlZFRvZG9JdGVtcyh0b2RvSXRlbXMpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgdGhlIHRvZG8gaXRlbXNcbiAgICBjb25zdCB0b2RvSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvSXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtcy1jb250YWluZXInKTtcbiAgICBcbiAgICAvLyBSZW5kZXIgZWFjaCBmaWx0ZXJlZCB0b2RvIGl0ZW1cbiAgICBmaWx0ZXJlZFRvZG9JdGVtcy5mb3JFYWNoKHRvZG9JdGVtID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1FbGVtZW50ID0gY3JlYXRlVG9kb0l0ZW1FbGVtZW50KHRvZG9JdGVtKTtcbiAgICAgICAgdG9kb0l0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JdGVtRWxlbWVudCk7XG4gICAgfSk7XG4gICAgXG4gICAgLy8gQXBwZW5kIHRoZSB0b2RvIGl0ZW1zIGNvbnRhaW5lciB0byB0aGUgbWFpbiBjb250ZW50XG4gICAgbWFpbkNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9kb0l0ZW1zQ29udGFpbmVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvZG9JdGVtKHRvZG9JdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSB0b2RvSXRlbXMuaW5kZXhPZih0b2RvSXRlbSk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdG9kb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICByZW5kZXJQcm9qZWN0KHByb2plY3RzWzBdKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kb0l0ZW0oaW5kZXgsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHR5cGUsIG5vdGVzKSB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0b2RvSXRlbXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCB0b2RvSXRlbSA9IHRvZG9JdGVtc1tpbmRleF07XG4gICAgICB0b2RvSXRlbS50aXRsZSA9IHRpdGxlO1xuICAgICAgdG9kb0l0ZW0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRvZG9JdGVtLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdG9kb0l0ZW0ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHRvZG9JdGVtLnR5cGUgPSB0eXBlO1xuICAgICAgdG9kb0l0ZW0ubm90ZXMgPSBub3RlcztcbiAgICAgIHJlbmRlclByb2plY3QocHJvamVjdHNbMF0pO1xuICAgIH1cbn1cbi8vIEluaXRpYWxpemUgdGhlIGFwcCB3aGVuIHRoZSBET00gY29udGVudCBpcyBsb2FkZWRcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0aWFsaXplQXBwKTsiLCIvLyBzcmMvcHJvamVjdC5qc1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZ2V0RmlsdGVyZWRUb2RvSXRlbXModG9kb0l0ZW1zKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdJbmJveCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b2RvSXRlbXM7XG4gICAgICAgICAgICAgICAgY2FzZSAnVG9kYXknOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0l0ZW1zLmZpbHRlcihpdGVtID0+IGlzVG9kYXkoaXRlbS5kdWVEYXRlKSk7XG4gICAgICAgICAgICAgICAgY2FzZSAnVXBjb21pbmcnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0l0ZW1zLmZpbHRlcihpdGVtID0+IGlzVXBjb21pbmcoaXRlbS5kdWVEYXRlKSk7XG4gICAgICAgICAgICAgICAgY2FzZSAnR3ltJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9JdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdneW0nKTtcbiAgICAgICAgICAgICAgICBjYXNlICdXb3JrJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9JdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICd3b3JrJyk7XG4gICAgICAgICAgICAgICAgY2FzZSAnUGVyc29uYWwnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9kb0l0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udHlwZSA9PT0gJ3BlcnNvbmFsJyk7XG4gICAgICAgICAgICAgICAgY2FzZSAnRmFtaWx5JzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvZG9JdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09ICdmYW1pbHknKTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaXNUb2RheShkYXRlKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBkYXRlID09PSB0b2RheS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gaXNVcGNvbWluZyhkYXRlKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHJldHVybiBkYXRlID4gdG9kYXkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG59IiwiLy8gc3JjL3RvZG9JdGVtLmpzXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LHR5cGUsIG5vdGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbm90ZXMsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=