/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/electron.ts":
/*!*************************!*\
  !*** ./src/electron.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var _a = __webpack_require__(/*! electron */ \"electron\"), app = _a.app, BrowserWindow = _a.BrowserWindow;\n// const electronReload = require('electron-reload')\n// const path = require('path')\n// require('electron-reload')(__dirname, {\n//   electron: path.join(__dirname, 'node_modules', '.bin', 'electron')\n// });\nfunction createWindow() {\n    // Create the browser window.\n    var win = new BrowserWindow({\n        width: 800,\n        height: 600,\n        webPreferences: {\n            nodeIntegration: true\n        }\n    });\n    // Load the index.html of the app.\n    win.loadFile('index.html');\n    // Open the DevTools.\n    win.webContents.openDevTools();\n}\n// This method will be called when Electron has finished\n// initialization and is ready to create browser windows.\n// Some APIs can only be used after this event occurs.\n// This method is equivalent to 'app.on('ready', function())'\napp.whenReady().then(createWindow);\n// Quit when all windows are closed.\napp.on('window-all-closed', function () {\n    // On macOS it is common for applications and their \n    // menu bar to stay active until the user quits \n    // explicitly with Cmd + Q\n    if (process.platform !== 'darwin') {\n        app.quit();\n    }\n});\napp.on('activate', function () {\n    // On macOS it's common to re-create a window in the \n    // app when the dock icon is clicked and there are no \n    // other windows open.\n    if (BrowserWindow.getAllWindows().length === 0) {\n        createWindow();\n    }\n});\n// In this file, you can include the rest of your \n// app's specific main process code. You can also \n// put them in separate files and require them here.\n\n\n//# sourceURL=webpack://galumphing/./src/electron.ts?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/electron.ts");
/******/ 	
/******/ })()
;