/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_get_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code/get-selection */ "./src/code/get-selection.ts");
/* harmony import */ var _code_code_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./code/code-messages */ "./src/code/code-messages.ts");
/* harmony import */ var _ui_ui_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ui-messages */ "./src/ui/ui-messages.ts");



figma.showUI(__html__);
figma.ui.resize(375, 400);
let selection = Object(_code_get_selection__WEBPACK_IMPORTED_MODULE_0__["getSelection"])(_code_get_selection__WEBPACK_IMPORTED_MODULE_0__["filterTextFields"]);
figma.ui.postMessage({ type: _code_code_messages__WEBPACK_IMPORTED_MODULE_1__["codeMessages"].SET_SELECTION, selection });
figma.on('selectionchange', () => {
    selection = Object(_code_get_selection__WEBPACK_IMPORTED_MODULE_0__["getSelection"])(_code_get_selection__WEBPACK_IMPORTED_MODULE_0__["filterTextFields"]);
    figma.ui.postMessage({ type: _code_code_messages__WEBPACK_IMPORTED_MODULE_1__["codeMessages"].SET_SELECTION, selection });
});
figma.ui.onmessage = msg => {
    switch (msg.type) {
        case _ui_ui_messages__WEBPACK_IMPORTED_MODULE_2__["uiMessages"].UPDATE_TEXT:
            const idEdit = msg.id;
            const value = msg.value;
            let nodeUpd = selection[idEdit].node;
            figma.loadFontAsync({ family: "Inter", style: "Medium" })
                .then(() => {
                nodeUpd.deleteCharacters(0, nodeUpd.characters.length);
                nodeUpd.insertCharacters(0, value);
                selection[idEdit] = Object(_code_get_selection__WEBPACK_IMPORTED_MODULE_0__["createNodeTransferObject"])(nodeUpd);
                figma.ui.postMessage({ type: _code_code_messages__WEBPACK_IMPORTED_MODULE_1__["codeMessages"].SET_SELECTION, selection });
            });
            break;
        case _ui_ui_messages__WEBPACK_IMPORTED_MODULE_2__["uiMessages"].CLEAR_TEXT:
            const id = msg.id;
            let node = selection[id].node;
            figma.loadFontAsync({ family: "Inter", style: "Medium" })
                .then(() => {
                node.deleteCharacters(0, 1);
                selection[id] = Object(_code_get_selection__WEBPACK_IMPORTED_MODULE_0__["createNodeTransferObject"])(node);
                figma.ui.postMessage({ type: _code_code_messages__WEBPACK_IMPORTED_MODULE_1__["codeMessages"].SET_SELECTION, selection });
            });
            break;
        default:
            return;
    }
};


/***/ }),

/***/ "./src/code/code-messages.ts":
/*!***********************************!*\
  !*** ./src/code/code-messages.ts ***!
  \***********************************/
/*! exports provided: codeMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMessages", function() { return codeMessages; });
const codeMessages = {
    SET_SELECTION: 'SET_SELECTION'
};


/***/ }),

/***/ "./src/code/get-selection.ts":
/*!***********************************!*\
  !*** ./src/code/get-selection.ts ***!
  \***********************************/
/*! exports provided: getSelection, filterTextFields, createNodeTransferObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTextFields", function() { return filterTextFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNodeTransferObject", function() { return createNodeTransferObject; });
;
;
let selectedNodes = {};
const getSelection = function getSelection(filteringFunction) {
    selectedNodes = {};
    const selection = figma.currentPage.selection;
    function traverse(node) {
        if (!('children' in node)) {
            if (node.type === 'TEXT') {
                filteringFunction(node, (node) => selectedNodes[node.id] = node);
            }
            return [];
        }
        for (let j = 0; j < node.children.length; j++) {
            filteringFunction(node.children[j], (node) => selectedNodes[node.id] = node);
        }
        if (node.type !== 'COMPONENT' && node.type !== 'COMPONENT_SET') {
            for (const child of node.children) {
                if (child.type !== 'COMPONENT' && child.type !== 'COMPONENT_SET') {
                    traverse(child);
                }
            }
        }
    }
    if (selection.length !== 0) {
        for (let i = 0; i < selection.length; i++) {
            traverse(selection[i]);
        }
    }
    return selectedNodes;
};
const filterTextFields = function (node, callback) {
    if (node.type === 'TEXT') {
        callback(createNodeTransferObject(node));
    }
};
const createNodeTransferObject = (node) => ({
    id: node.id,
    name: node.name,
    characters: node.characters,
    node: node
});


/***/ }),

/***/ "./src/ui/ui-messages.ts":
/*!*******************************!*\
  !*** ./src/ui/ui-messages.ts ***!
  \*******************************/
/*! exports provided: uiMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiMessages", function() { return uiMessages; });
const uiMessages = {
    CLEAR_TEXT: 'CLEAR_TEXT',
    UPDATE_TEXT: 'UPDATE_TEXT'
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvY29kZS1tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9nZXQtc2VsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS91aS1tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQzVDO0FBQ047QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix3RUFBWSxDQUFDLG9FQUFnQjtBQUM3QyxzQkFBc0IsT0FBTyxnRUFBWSwyQkFBMkI7QUFDcEU7QUFDQSxnQkFBZ0Isd0VBQVksQ0FBQyxvRUFBZ0I7QUFDN0MsMEJBQTBCLE9BQU8sZ0VBQVksMkJBQTJCO0FBQ3hFLENBQUM7QUFDRDtBQUNBO0FBQ0EsYUFBYSwwREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvRkFBd0I7QUFDNUQsc0NBQXNDLE9BQU8sZ0VBQVksMkJBQTJCO0FBQ3BGLGFBQWE7QUFDYjtBQUNBLGFBQWEsMERBQVU7QUFDdkI7QUFDQTtBQUNBLGlDQUFpQyxtQ0FBbUM7QUFDcEU7QUFDQTtBQUNBLGdDQUFnQyxvRkFBd0I7QUFDeEQsc0NBQXNDLE9BQU8sZ0VBQVksMkJBQTJCO0FBQ3BGLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDekNEO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImltcG9ydCB7IGdldFNlbGVjdGlvbiwgZmlsdGVyVGV4dEZpZWxkcywgY3JlYXRlTm9kZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnLi9jb2RlL2dldC1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgY29kZU1lc3NhZ2VzIH0gZnJvbSAnLi9jb2RlL2NvZGUtbWVzc2FnZXMnO1xuaW1wb3J0IHsgdWlNZXNzYWdlcyB9IGZyb20gJy4vdWkvdWktbWVzc2FnZXMnO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbmZpZ21hLnVpLnJlc2l6ZSgzNzUsIDQwMCk7XG5sZXQgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKGZpbHRlclRleHRGaWVsZHMpO1xuZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBjb2RlTWVzc2FnZXMuU0VUX1NFTEVDVElPTiwgc2VsZWN0aW9uIH0pO1xuZmlnbWEub24oJ3NlbGVjdGlvbmNoYW5nZScsICgpID0+IHtcbiAgICBzZWxlY3Rpb24gPSBnZXRTZWxlY3Rpb24oZmlsdGVyVGV4dEZpZWxkcyk7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBjb2RlTWVzc2FnZXMuU0VUX1NFTEVDVElPTiwgc2VsZWN0aW9uIH0pO1xufSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSB1aU1lc3NhZ2VzLlVQREFURV9URVhUOlxuICAgICAgICAgICAgY29uc3QgaWRFZGl0ID0gbXNnLmlkO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBtc2cudmFsdWU7XG4gICAgICAgICAgICBsZXQgbm9kZVVwZCA9IHNlbGVjdGlvbltpZEVkaXRdLm5vZGU7XG4gICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIk1lZGl1bVwiIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVVcGQuZGVsZXRlQ2hhcmFjdGVycygwLCBub2RlVXBkLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBub2RlVXBkLmluc2VydENoYXJhY3RlcnMoMCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbltpZEVkaXRdID0gY3JlYXRlTm9kZVRyYW5zZmVyT2JqZWN0KG5vZGVVcGQpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogY29kZU1lc3NhZ2VzLlNFVF9TRUxFQ1RJT04sIHNlbGVjdGlvbiB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgdWlNZXNzYWdlcy5DTEVBUl9URVhUOlxuICAgICAgICAgICAgY29uc3QgaWQgPSBtc2cuaWQ7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHNlbGVjdGlvbltpZF0ubm9kZTtcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiTWVkaXVtXCIgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbm9kZS5kZWxldGVDaGFyYWN0ZXJzKDAsIDEpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbltpZF0gPSBjcmVhdGVOb2RlVHJhbnNmZXJPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiBjb2RlTWVzc2FnZXMuU0VUX1NFTEVDVElPTiwgc2VsZWN0aW9uIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybjtcbiAgICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvZGVNZXNzYWdlcyA9IHtcbiAgICBTRVRfU0VMRUNUSU9OOiAnU0VUX1NFTEVDVElPTidcbn07XG4iLCI7XG47XG5sZXQgc2VsZWN0ZWROb2RlcyA9IHt9O1xuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGlvbiA9IGZ1bmN0aW9uIGdldFNlbGVjdGlvbihmaWx0ZXJpbmdGdW5jdGlvbikge1xuICAgIHNlbGVjdGVkTm9kZXMgPSB7fTtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSkge1xuICAgICAgICBpZiAoISgnY2hpbGRyZW4nIGluIG5vZGUpKSB7XG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJpbmdGdW5jdGlvbihub2RlLCAobm9kZSkgPT4gc2VsZWN0ZWROb2Rlc1tub2RlLmlkXSA9IG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbm9kZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgZmlsdGVyaW5nRnVuY3Rpb24obm9kZS5jaGlsZHJlbltqXSwgKG5vZGUpID0+IHNlbGVjdGVkTm9kZXNbbm9kZS5pZF0gPSBub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS50eXBlICE9PSAnQ09NUE9ORU5UJyAmJiBub2RlLnR5cGUgIT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgIT09ICdDT01QT05FTlQnICYmIGNoaWxkLnR5cGUgIT09ICdDT01QT05FTlRfU0VUJykge1xuICAgICAgICAgICAgICAgICAgICB0cmF2ZXJzZShjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShzZWxlY3Rpb25baV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZE5vZGVzO1xufTtcbmV4cG9ydCBjb25zdCBmaWx0ZXJUZXh0RmllbGRzID0gZnVuY3Rpb24gKG5vZGUsIGNhbGxiYWNrKSB7XG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ1RFWFQnKSB7XG4gICAgICAgIGNhbGxiYWNrKGNyZWF0ZU5vZGVUcmFuc2Zlck9iamVjdChub2RlKSk7XG4gICAgfVxufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVOb2RlVHJhbnNmZXJPYmplY3QgPSAobm9kZSkgPT4gKHtcbiAgICBpZDogbm9kZS5pZCxcbiAgICBuYW1lOiBub2RlLm5hbWUsXG4gICAgY2hhcmFjdGVyczogbm9kZS5jaGFyYWN0ZXJzLFxuICAgIG5vZGU6IG5vZGVcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IHVpTWVzc2FnZXMgPSB7XG4gICAgQ0xFQVJfVEVYVDogJ0NMRUFSX1RFWFQnLFxuICAgIFVQREFURV9URVhUOiAnVVBEQVRFX1RFWFQnXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==