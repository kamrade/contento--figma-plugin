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
        case _ui_ui_messages__WEBPACK_IMPORTED_MODULE_2__["uiMessages"].CLEAR_TEXT:
            const index = msg.index;
            let node = selection[index].node;
            figma.loadFontAsync({ family: "Inter", style: "Medium" })
                .then(() => node.deleteCharacters(0, selection[index].characters.length));
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
/*! exports provided: getSelection, filterTextFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelection", function() { return getSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTextFields", function() { return filterTextFields; });
;
const selectedNodes = [];
const getSelection = function getSelection(filteringFunction) {
    selectedNodes.splice(0, selectedNodes.length);
    const selectionNodes = figma.currentPage.selection;
    function traverse(node) {
        if (!('children' in node)) {
            return [];
        }
        for (let j = 0; j < node.children.length; j++) {
            filteringFunction(node.children[j], (node) => selectedNodes.push(node));
        }
        if (node.type !== 'COMPONENT' && node.type !== 'COMPONENT_SET') {
            for (const child of node.children) {
                if (child.type !== 'COMPONENT' && child.type !== 'COMPONENT_SET') {
                    traverse(child);
                }
            }
        }
    }
    if (selectionNodes.length !== 0) {
        for (let i = 0; i < selectionNodes.length; i++) {
            traverse(selectionNodes[i]);
        }
    }
    return selectedNodes;
};
const filterTextFields = function (node, callback) {
    if (node.type === 'TEXT') {
        callback({
            id: node.id,
            name: node.name,
            characters: node.characters,
            node: node
        });
    }
};


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
    CLEAR_TEXT: 'CLEAR_TEXT'
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUvY29kZS1tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29kZS9nZXQtc2VsZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91aS91aS1tZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQXNFO0FBQ2xCO0FBQ047QUFDOUM7QUFDQTtBQUNBLGdCQUFnQix3RUFBWSxDQUFDLG9FQUFnQjtBQUM3QyxzQkFBc0IsT0FBTyxnRUFBWSwyQkFBMkI7QUFDcEU7QUFDQSxnQkFBZ0Isd0VBQVksQ0FBQyxvRUFBZ0I7QUFDN0MsMEJBQTBCLE9BQU8sZ0VBQVksMkJBQTJCO0FBQ3hFLENBQUM7QUFDRDtBQUNBO0FBQ0EsYUFBYSwwREFBVTtBQUN2QjtBQUNBO0FBQ0EsaUNBQWlDLG1DQUFtQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQkFBMEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUFPO0FBQ1A7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImltcG9ydCB7IGdldFNlbGVjdGlvbiwgZmlsdGVyVGV4dEZpZWxkcyB9IGZyb20gJy4vY29kZS9nZXQtc2VsZWN0aW9uJztcbmltcG9ydCB7IGNvZGVNZXNzYWdlcyB9IGZyb20gJy4vY29kZS9jb2RlLW1lc3NhZ2VzJztcbmltcG9ydCB7IHVpTWVzc2FnZXMgfSBmcm9tICcuL3VpL3VpLW1lc3NhZ2VzJztcbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUoMzc1LCA0MDApO1xubGV0IHNlbGVjdGlvbiA9IGdldFNlbGVjdGlvbihmaWx0ZXJUZXh0RmllbGRzKTtcbmZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogY29kZU1lc3NhZ2VzLlNFVF9TRUxFQ1RJT04sIHNlbGVjdGlvbiB9KTtcbmZpZ21hLm9uKCdzZWxlY3Rpb25jaGFuZ2UnLCAoKSA9PiB7XG4gICAgc2VsZWN0aW9uID0gZ2V0U2VsZWN0aW9uKGZpbHRlclRleHRGaWVsZHMpO1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZTogY29kZU1lc3NhZ2VzLlNFVF9TRUxFQ1RJT04sIHNlbGVjdGlvbiB9KTtcbn0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgdWlNZXNzYWdlcy5DTEVBUl9URVhUOlxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtc2cuaW5kZXg7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IHNlbGVjdGlvbltpbmRleF0ubm9kZTtcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiTWVkaXVtXCIgfSlcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiBub2RlLmRlbGV0ZUNoYXJhY3RlcnMoMCwgc2VsZWN0aW9uW2luZGV4XS5jaGFyYWN0ZXJzLmxlbmd0aCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBjb2RlTWVzc2FnZXMgPSB7XG4gICAgU0VUX1NFTEVDVElPTjogJ1NFVF9TRUxFQ1RJT04nXG59O1xuIiwiO1xuY29uc3Qgc2VsZWN0ZWROb2RlcyA9IFtdO1xuZXhwb3J0IGNvbnN0IGdldFNlbGVjdGlvbiA9IGZ1bmN0aW9uIGdldFNlbGVjdGlvbihmaWx0ZXJpbmdGdW5jdGlvbikge1xuICAgIHNlbGVjdGVkTm9kZXMuc3BsaWNlKDAsIHNlbGVjdGVkTm9kZXMubGVuZ3RoKTtcbiAgICBjb25zdCBzZWxlY3Rpb25Ob2RlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbjtcbiAgICBmdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XG4gICAgICAgIGlmICghKCdjaGlsZHJlbicgaW4gbm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGZpbHRlcmluZ0Z1bmN0aW9uKG5vZGUuY2hpbGRyZW5bal0sIChub2RlKSA9PiBzZWxlY3RlZE5vZGVzLnB1c2gobm9kZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnR5cGUgIT09ICdDT01QT05FTlQnICYmIG5vZGUudHlwZSAhPT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSAhPT0gJ0NPTVBPTkVOVCcgJiYgY2hpbGQudHlwZSAhPT0gJ0NPTVBPTkVOVF9TRVQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYXZlcnNlKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNlbGVjdGlvbk5vZGVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdGlvbk5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZShzZWxlY3Rpb25Ob2Rlc1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkTm9kZXM7XG59O1xuZXhwb3J0IGNvbnN0IGZpbHRlclRleHRGaWVsZHMgPSBmdW5jdGlvbiAobm9kZSwgY2FsbGJhY2spIHtcbiAgICBpZiAobm9kZS50eXBlID09PSAnVEVYVCcpIHtcbiAgICAgICAgY2FsbGJhY2soe1xuICAgICAgICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICBuYW1lOiBub2RlLm5hbWUsXG4gICAgICAgICAgICBjaGFyYWN0ZXJzOiBub2RlLmNoYXJhY3RlcnMsXG4gICAgICAgICAgICBub2RlOiBub2RlXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCJleHBvcnQgY29uc3QgdWlNZXNzYWdlcyA9IHtcbiAgICBDTEVBUl9URVhUOiAnQ0xFQVJfVEVYVCdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9