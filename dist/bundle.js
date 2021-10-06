/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #fff;\r\n  font-family: Poppins, Arial, Helvetica, sans-serif;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nh1 {\r\n  font-size: 60px;\r\n}\r\n\r\n.container {\r\n  height: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.main-header {\r\n  padding-left: 2%;\r\n}\r\n\r\n.fa-sync {\r\n  font-size: 1.2rem;\r\n  margin-right: 5px;\r\n  transition: transform 0.5s linear;\r\n}\r\n\r\n.rotate {\r\n  transform: rotate(720deg);\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  margin: 10px;\r\n  padding: 0 20px;\r\n  border: 1px solid #789;\r\n}\r\n\r\n.menu-list {\r\n  list-style: none;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n  margin-left: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.menu-item.one,\r\n.menu-item.two,\r\n.menu-item.three {\r\n  flex: 1;\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n.menu-item.one,\r\n.menu-item.two {\r\n  border-right: 1px solid #789;\r\n}\r\n\r\n.menu-item:hover {\r\n  color: #444;\r\n  background: rgb(173, 216, 230, 0.4);\r\n  cursor: pointer;\r\n}\r\n\r\n.current-time {\r\n  justify-content: flex-end;\r\n  padding: 0 20px;\r\n}\r\n\r\ntbody,\r\n.score-header,\r\n.score-table,\r\n.container,\r\n.table-entry,\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.List-section,\r\n.Add-section,\r\n.main-content {\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-content {\r\n  width: 100%;\r\n  height: 70vh;\r\n  flex-direction: row;\r\n}\r\n\r\n.Add-section,\r\n.List-section {\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n.score-table {\r\n  width: 94%;\r\n  min-width: 280px;\r\n  border: 1px solid #789;\r\n  margin: 0% 0% 0% 3%;\r\n  height: 250px;\r\n  overflow-y: scroll;\r\n}\r\n\r\ntbody {\r\n  width: 100%;\r\n}\r\n\r\n.table-entry,\r\n.table-row {\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.table-row:nth-child(even) {\r\n  background: #add8e6;\r\n}\r\n\r\n.table-entry {\r\n  margin: 2%;\r\n  width: 96%;\r\n}\r\n\r\n.table-entry div {\r\n  justify-content: space-between;\r\n  width: 60%;\r\n}\r\n\r\n.removeButton {\r\n  height: 30px;\r\n  align-self: center;\r\n  margin-left: 10px;\r\n}\r\n\r\n.List-section-hr {\r\n  border: 1px solid #789;\r\n  width: 40%;\r\n  margin: 20px 0;\r\n}\r\n\r\n.score-header {\r\n  width: 100%;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.refreshButton {\r\n  align-self: center;\r\n  width: auto;\r\n  height: 35px;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  width: 60%;\r\n  padding: 0;\r\n}\r\n\r\ntbody,\r\n.score-table,\r\n.container,\r\n.form {\r\n  flex-direction: column;\r\n}\r\n\r\n.form-item {\r\n  height: 40px;\r\n}\r\n\r\n.addButton {\r\n  align-self: flex-end;\r\n}\r\n\r\n.margin-bottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.slash-div {\r\n  height: 100%;\r\n  border: 1px solid;\r\n  background: #789;\r\n  text-align: right;\r\n  padding: 0 10px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  /* Desktop [768px -> 1220px] */\r\n  .menu-list {\r\n    width: 35%;\r\n  }\r\n\r\n  .table-entry {\r\n    margin: 1%;\r\n    width: 98%;\r\n  }\r\n\r\n  .main-content {\r\n    height: 80vh;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,kDAAkD;EAClD,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,8BAA8B;EAC9B,UAAU;EACV,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;;EAGE,OAAO;EACP,kBAAkB;EAClB,YAAY;AACd;;AAEA;;EAEE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;;;;;;EAME,aAAa;AACf;;AAEA;;;EAGE,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,UAAU;EACV,YAAY;AACd;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,UAAU;AACZ;;AAEA;;;;EAIE,sBAAsB;AACxB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B;IACE,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,UAAU;EACZ;;EAEA;IACE,YAAY;EACd;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background: #fff;\r\n  font-family: Poppins, Arial, Helvetica, sans-serif;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\nh1 {\r\n  font-size: 60px;\r\n}\r\n\r\n.container {\r\n  height: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.main-header {\r\n  padding-left: 2%;\r\n}\r\n\r\n.fa-sync {\r\n  font-size: 1.2rem;\r\n  margin-right: 5px;\r\n  transition: transform 0.5s linear;\r\n}\r\n\r\n.rotate {\r\n  transform: rotate(720deg);\r\n}\r\n\r\n.navbar {\r\n  justify-content: space-between;\r\n  margin: 10px;\r\n  padding: 0 20px;\r\n  border: 1px solid #789;\r\n}\r\n\r\n.menu-list {\r\n  list-style: none;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n  margin-left: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.menu-item.one,\r\n.menu-item.two,\r\n.menu-item.three {\r\n  flex: 1;\r\n  text-align: center;\r\n  padding: 5px;\r\n}\r\n\r\n.menu-item.one,\r\n.menu-item.two {\r\n  border-right: 1px solid #789;\r\n}\r\n\r\n.menu-item:hover {\r\n  color: #444;\r\n  background: rgb(173, 216, 230, 0.4);\r\n  cursor: pointer;\r\n}\r\n\r\n.current-time {\r\n  justify-content: flex-end;\r\n  padding: 0 20px;\r\n}\r\n\r\ntbody,\r\n.score-header,\r\n.score-table,\r\n.container,\r\n.table-entry,\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.List-section,\r\n.Add-section,\r\n.main-content {\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.main-content {\r\n  width: 100%;\r\n  height: 70vh;\r\n  flex-direction: row;\r\n}\r\n\r\n.Add-section,\r\n.List-section {\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n.score-table {\r\n  width: 94%;\r\n  min-width: 280px;\r\n  border: 1px solid #789;\r\n  margin: 0% 0% 0% 3%;\r\n  height: 250px;\r\n  overflow-y: scroll;\r\n}\r\n\r\ntbody {\r\n  width: 100%;\r\n}\r\n\r\n.table-entry,\r\n.table-row {\r\n  width: 100%;\r\n  justify-content: space-between;\r\n}\r\n\r\n.table-row:nth-child(even) {\r\n  background: #add8e6;\r\n}\r\n\r\n.table-entry {\r\n  margin: 2%;\r\n  width: 96%;\r\n}\r\n\r\n.table-entry div {\r\n  justify-content: space-between;\r\n  width: 60%;\r\n}\r\n\r\n.removeButton {\r\n  height: 30px;\r\n  align-self: center;\r\n  margin-left: 10px;\r\n}\r\n\r\n.List-section-hr {\r\n  border: 1px solid #789;\r\n  width: 40%;\r\n  margin: 20px 0;\r\n}\r\n\r\n.score-header {\r\n  width: 100%;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.refreshButton {\r\n  align-self: center;\r\n  width: auto;\r\n  height: 35px;\r\n}\r\n\r\nfieldset {\r\n  border: none;\r\n  width: 60%;\r\n  padding: 0;\r\n}\r\n\r\ntbody,\r\n.score-table,\r\n.container,\r\n.form {\r\n  flex-direction: column;\r\n}\r\n\r\n.form-item {\r\n  height: 40px;\r\n}\r\n\r\n.addButton {\r\n  align-self: flex-end;\r\n}\r\n\r\n.margin-bottom {\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.slash-div {\r\n  height: 100%;\r\n  border: 1px solid;\r\n  background: #789;\r\n  text-align: right;\r\n  padding: 0 10px;\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n  /* Desktop [768px -> 1220px] */\r\n  .menu-list {\r\n    width: 35%;\r\n  }\r\n\r\n  .table-entry {\r\n    margin: 1%;\r\n    width: 98%;\r\n  }\r\n\r\n  .main-content {\r\n    height: 80vh;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scores.js":
/*!***********************!*\
  !*** ./src/scores.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getScores": () => (/* binding */ getScores),
/* harmony export */   "postScore": () => (/* binding */ postScore)
/* harmony export */ });
const getScores = async () => {
  const getData = async () => (await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6yEIG5Vp5OYTpXbZZPsD/scores/')).json();

  const data = await getData();
  const scores = data.result;

  if (typeof scores !== 'undefined' && scores !== null) {
    scores.sort((a, b) => a.score - b.score).reverse();
  }
  return scores;
};

const postScore = async (player, score) => {
  if (player || score) {
    const boardItem = {
      user: player,
      score,
    };

    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6yEIG5Vp5OYTpXbZZPsD/scores/';
    const message = async () => (await fetch(url, {
      method: 'POST',
      body: JSON.stringify(boardItem),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })).json();

    const updateStatus = await message();
    const status = updateStatus.result;
    return status;
  }
  return '';
};



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _scores__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scores */ "./src/scores.js");



class LeaderBoard {
  constructor() {
    this.boardArray = [];
  }

  displayScores = async () => {
    this.boardArray = await (0,_scores__WEBPACK_IMPORTED_MODULE_1__.getScores)();
    if (typeof this.boardArray !== 'undefined' && this.boardArray !== null) {
      const table = document.getElementById('scoreTable');
      table.innerHTML = '';

      this.boardArray.forEach((item) => {
        const tr = document.createElement('tr');
        tr.className = 'table-row';
        const td = document.createElement('td');
        td.className = 'table-entry';
        const div = document.createElement('div');
        div.innerHTML = `${item.user}: ${item.score}`;

        td.appendChild(div);
        tr.appendChild(td);
        table.appendChild(tr);
      });
    }
  }

  refresh() {
    const button = document.getElementById('refreshButton');
    button.addEventListener('click', async () => {
      document.querySelector('.fa-sync').classList.toggle('rotate');
      this.displayScores();
    });
  }

  addNewScore = () => {
    const nameInput = document.getElementById('player_name');
    const scoreInput = document.getElementById('player_score');
    (0,_scores__WEBPACK_IMPORTED_MODULE_1__.postScore)(nameInput.value, scoreInput.value);
    nameInput.value = ' ';
    scoreInput.value = ' ';
  }

  addsubmitEvent() {
    const button = document.getElementById('addButton');
    button.addEventListener('click', async () => {
      this.addNewScore();
      await this.displayScores();
    });
  }
}

const app = new LeaderBoard();
app.refresh();
app.addsubmitEvent();
app.displayScores();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQyxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDakNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQzJCOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixrREFBUztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVUsSUFBSSxXQUFXOztBQUVwRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVM7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTGVhZGVyQm9hcmQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0xlYWRlckJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9MZWFkZXJCb2FyZC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL0xlYWRlckJvYXJkLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL0xlYWRlckJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0xlYWRlckJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9MZWFkZXJCb2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9MZWFkZXJCb2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9MZWFkZXJCb2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL0xlYWRlckJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vTGVhZGVyQm9hcmQvLi9zcmMvc2NvcmVzLmpzIiwid2VicGFjazovL0xlYWRlckJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0xlYWRlckJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0xlYWRlckJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9MZWFkZXJCb2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0xlYWRlckJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vTGVhZGVyQm9hcmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4taGVhZGVyIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxufVxcclxcblxcclxcbi5mYS1zeW5jIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBsaW5lYXI7XFxyXFxufVxcclxcblxcclxcbi5yb3RhdGUge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg5O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saXN0IHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtLm9uZSxcXHJcXG4ubWVudS1pdGVtLnR3byxcXHJcXG4ubWVudS1pdGVtLnRocmVlIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ub25lLFxcclxcbi5tZW51LWl0ZW0udHdvIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3ODk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW06aG92ZXIge1xcclxcbiAgY29sb3I6ICM0NDQ7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMTczLCAyMTYsIDIzMCwgMC40KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtdGltZSB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG50Ym9keSxcXHJcXG4uc2NvcmUtaGVhZGVyLFxcclxcbi5zY29yZS10YWJsZSxcXHJcXG4uY29udGFpbmVyLFxcclxcbi50YWJsZS1lbnRyeSxcXHJcXG4uZC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5MaXN0LXNlY3Rpb24sXFxyXFxuLkFkZC1zZWN0aW9uLFxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDcwdmg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbn1cXHJcXG5cXHJcXG4uQWRkLXNlY3Rpb24sXFxyXFxuLkxpc3Qtc2VjdGlvbiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtdGFibGUge1xcclxcbiAgd2lkdGg6IDk0JTtcXHJcXG4gIG1pbi13aWR0aDogMjgwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg5O1xcclxcbiAgbWFyZ2luOiAwJSAwJSAwJSAzJTtcXHJcXG4gIGhlaWdodDogMjUwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbnRib2R5IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUtZW50cnksXFxyXFxuLnRhYmxlLXJvdyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlLXJvdzpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgYmFja2dyb3VuZDogI2FkZDhlNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYmxlLWVudHJ5IHtcXHJcXG4gIG1hcmdpbjogMiU7XFxyXFxuICB3aWR0aDogOTYlO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUtZW50cnkgZGl2IHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVCdXR0b24ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5MaXN0LXNlY3Rpb24taHIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4OTtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBtYXJnaW46IDIwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNjb3JlLWhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVmcmVzaEJ1dHRvbiB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuXFxyXFxuZmllbGRzZXQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbnRib2R5LFxcclxcbi5zY29yZS10YWJsZSxcXHJcXG4uY29udGFpbmVyLFxcclxcbi5mb3JtIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWl0ZW0ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFyZ2luLWJvdHRvbSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xhc2gtZGl2IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgYmFja2dyb3VuZDogIzc4OTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgcGFkZGluZzogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuICAvKiBEZXNrdG9wIFs3NjhweCAtPiAxMjIwcHhdICovXFxyXFxuICAubWVudS1saXN0IHtcXHJcXG4gICAgd2lkdGg6IDM1JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWJsZS1lbnRyeSB7XFxyXFxuICAgIG1hcmdpbjogMSU7XFxyXFxuICAgIHdpZHRoOiA5OCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1jb250ZW50IHtcXHJcXG4gICAgaGVpZ2h0OiA4MHZoO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0RBQWtEO0VBQ2xELGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBOztFQUVFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0FBQ2Y7O0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsV0FBVztFQUNYLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFFQTs7OztFQUlFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogUG9wcGlucywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1oZWFkZXIge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZhLXN5bmMge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGxpbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdGF0ZSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpc3Qge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ub25lLFxcclxcbi5tZW51LWl0ZW0udHdvLFxcclxcbi5tZW51LWl0ZW0udGhyZWUge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS5vbmUsXFxyXFxuLm1lbnUtaXRlbS50d28ge1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzc4OTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzQ0NDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigxNzMsIDIxNiwgMjMwLCAwLjQpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC10aW1lIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbnRib2R5LFxcclxcbi5zY29yZS1oZWFkZXIsXFxyXFxuLnNjb3JlLXRhYmxlLFxcclxcbi5jb250YWluZXIsXFxyXFxuLnRhYmxlLWVudHJ5LFxcclxcbi5kLWZsZXgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLkxpc3Qtc2VjdGlvbixcXHJcXG4uQWRkLXNlY3Rpb24sXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNzB2aDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbi5BZGQtc2VjdGlvbixcXHJcXG4uTGlzdC1zZWN0aW9uIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS10YWJsZSB7XFxyXFxuICB3aWR0aDogOTQlO1xcclxcbiAgbWluLXdpZHRoOiAyODBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODk7XFxyXFxuICBtYXJnaW46IDAlIDAlIDAlIDMlO1xcclxcbiAgaGVpZ2h0OiAyNTBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxudGJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS1lbnRyeSxcXHJcXG4udGFibGUtcm93IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUtcm93Om50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWRkOGU2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFibGUtZW50cnkge1xcclxcbiAgbWFyZ2luOiAyJTtcXHJcXG4gIHdpZHRoOiA5NiU7XFxyXFxufVxcclxcblxcclxcbi50YWJsZS1lbnRyeSBkaXYge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlbW92ZUJ1dHRvbiB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLkxpc3Qtc2VjdGlvbi1ociB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjNzg5O1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbjogMjBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmUtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5yZWZyZXNoQnV0dG9uIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxudGJvZHksXFxyXFxuLnNjb3JlLXRhYmxlLFxcclxcbi5jb250YWluZXIsXFxyXFxuLmZvcm0ge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taXRlbSB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRCdXR0b24ge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5tYXJnaW4tYm90dG9tIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbGFzaC1kaXYge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNzg5O1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC8qIERlc2t0b3AgWzc2OHB4IC0+IDEyMjBweF0gKi9cXHJcXG4gIC5tZW51LWxpc3Qge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnRhYmxlLWVudHJ5IHtcXHJcXG4gICAgbWFyZ2luOiAxJTtcXHJcXG4gICAgd2lkdGg6IDk4JTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLWNvbnRlbnQge1xcclxcbiAgICBoZWlnaHQ6IDgwdmg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZ2V0U2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4gKGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWpzLWNhcHN0b25lLWJhY2tlbmQuY2xvdWRmdW5jdGlvbnMubmV0L2FwaS9nYW1lcy82eUVJRzVWcDVPWVRwWGJaWlBzRC9zY29yZXMvJykpLmpzb24oKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCBzY29yZXMgPSBkYXRhLnJlc3VsdDtcblxuICBpZiAodHlwZW9mIHNjb3JlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgc2NvcmVzICE9PSBudWxsKSB7XG4gICAgc2NvcmVzLnNvcnQoKGEsIGIpID0+IGEuc2NvcmUgLSBiLnNjb3JlKS5yZXZlcnNlKCk7XG4gIH1cbiAgcmV0dXJuIHNjb3Jlcztcbn07XG5cbmNvbnN0IHBvc3RTY29yZSA9IGFzeW5jIChwbGF5ZXIsIHNjb3JlKSA9PiB7XG4gIGlmIChwbGF5ZXIgfHwgc2NvcmUpIHtcbiAgICBjb25zdCBib2FyZEl0ZW0gPSB7XG4gICAgICB1c2VyOiBwbGF5ZXIsXG4gICAgICBzY29yZSxcbiAgICB9O1xuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLzZ5RUlHNVZwNU9ZVHBYYlpaUHNEL3Njb3Jlcy8nO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhc3luYyAoKSA9PiAoYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvYXJkSXRlbSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pKS5qc29uKCk7XG5cbiAgICBjb25zdCB1cGRhdGVTdGF0dXMgPSBhd2FpdCBtZXNzYWdlKCk7XG4gICAgY29uc3Qgc3RhdHVzID0gdXBkYXRlU3RhdHVzLnJlc3VsdDtcbiAgICByZXR1cm4gc3RhdHVzO1xuICB9XG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydCB7IGdldFNjb3JlcywgcG9zdFNjb3JlIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0U2NvcmVzLCBwb3N0U2NvcmUgfSBmcm9tICcuL3Njb3Jlcyc7XG5cbmNsYXNzIExlYWRlckJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZEFycmF5ID0gW107XG4gIH1cblxuICBkaXNwbGF5U2NvcmVzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuYm9hcmRBcnJheSA9IGF3YWl0IGdldFNjb3JlcygpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmJvYXJkQXJyYXkgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlVGFibGUnKTtcbiAgICAgIHRhYmxlLmlubmVySFRNTCA9ICcnO1xuXG4gICAgICB0aGlzLmJvYXJkQXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIHRyLmNsYXNzTmFtZSA9ICd0YWJsZS1yb3cnO1xuICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRkLmNsYXNzTmFtZSA9ICd0YWJsZS1lbnRyeSc7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gYCR7aXRlbS51c2VyfTogJHtpdGVtLnNjb3JlfWA7XG5cbiAgICAgICAgdGQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZWZyZXNoKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoQnV0dG9uJyk7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLXN5bmMnKS5jbGFzc0xpc3QudG9nZ2xlKCdyb3RhdGUnKTtcbiAgICAgIHRoaXMuZGlzcGxheVNjb3JlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTmV3U2NvcmUgPSAoKSA9PiB7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcl9uYW1lJyk7XG4gICAgY29uc3Qgc2NvcmVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJfc2NvcmUnKTtcbiAgICBwb3N0U2NvcmUobmFtZUlucHV0LnZhbHVlLCBzY29yZUlucHV0LnZhbHVlKTtcbiAgICBuYW1lSW5wdXQudmFsdWUgPSAnICc7XG4gICAgc2NvcmVJbnB1dC52YWx1ZSA9ICcgJztcbiAgfVxuXG4gIGFkZHN1Ym1pdEV2ZW50KCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRCdXR0b24nKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLmFkZE5ld1Njb3JlKCk7XG4gICAgICBhd2FpdCB0aGlzLmRpc3BsYXlTY29yZXMoKTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBuZXcgTGVhZGVyQm9hcmQoKTtcbmFwcC5yZWZyZXNoKCk7XG5hcHAuYWRkc3VibWl0RXZlbnQoKTtcbmFwcC5kaXNwbGF5U2NvcmVzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9