(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["navigation-navigation-module"],{

/***/ "OUQp":
/*!***********************************************!*\
  !*** ./src/app/navigation/navigation.page.ts ***!
  \***********************************************/
/*! exports provided: NavigationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPage", function() { return NavigationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navigation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navigation.page.html */ "VEe1");
/* harmony import */ var _navigation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.page.scss */ "e8EO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_map_map_box_map_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/map/map-box/map-box.component */ "R/Rj");





let NavigationPage = class NavigationPage {
    constructor() { }
    ngOnInit() {
        src_app_map_map_box_map_box_component__WEBPACK_IMPORTED_MODULE_4__["MapBoxComponent"].ionViewDidEnter();
        //this.ionViewDidEnter();
    }
};
NavigationPage.ctorParameters = () => [];
NavigationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navigation',
        template: _raw_loader_navigation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navigation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavigationPage);



/***/ }),

/***/ "VEe1":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/navigation.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>navigation</ion-title>\n  </ion-toolbar>\n</ion-header>\n<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.js'></script>\n    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css' rel='stylesheet' />\n<ion-content>\n  \n  <div id='map'></div>\n<div id='inputs'></div>\n<div id='errors'></div>\n<div id='directions'>\n  <div id='routes'></div>\n  <div id='instructions'></div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "e8EO":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 100%;\n}\n\n#instructions {\n  margin: 20px;\n  width: 100%;\n  top: 75%;\n  bottom: 0%;\n  padding: 0px;\n  background-color: rgba(255, 255, 255, 0.9);\n  overflow-y: scroll;\n  font-family: sans-serif;\n  font-size: 0.8em;\n  line-height: 2em;\n}\n\n.duration {\n  font-size: 2em;\n}\n\n#inputs,\n#errors,\n#directions {\n  width: 33.3333%;\n  max-width: 300px;\n  min-width: 200px;\n}\n\n#inputs {\n  z-index: 10;\n  top: 10px;\n  left: 10px;\n}\n\n#directions {\n  z-index: 99;\n  background: rgba(0, 0, 0, 0.8);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n}\n\n#errors {\n  z-index: 8;\n  opacity: 0;\n  padding: 10px;\n  border-radius: 0 0 3px 3px;\n  background: rgba(0, 0, 0, 0.25);\n  top: 90px;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdmlnYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRztFQUVDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUVFOzs7RUFJRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJuYXZpZ2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICB9XHJcblxyXG4gICAjaW5zdHJ1Y3Rpb25zIHtcclxuICAgIFxyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDc1JTtcclxuICAgIGJvdHRvbTogMDAlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmR1cmF0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gIH1cclxuICAjaW5wdXRzLFxyXG4jZXJyb3JzLFxyXG4jZGlyZWN0aW9ucyB7XHJcbiAgICBcclxuICAgIHdpZHRoOiAzMy4zMzMzJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4jaW5wdXRzIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxufVxyXG5cclxuI2RpcmVjdGlvbnMge1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbiNlcnJvcnMge1xyXG4gICAgei1pbmRleDogODtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4yNSk7XHJcbiAgICB0b3A6IDkwcHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "sO0u":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageModule", function() { return NavigationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation-routing.module */ "vn2g");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.page */ "OUQp");







let NavigationPageModule = class NavigationPageModule {
};
NavigationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _navigation_routing_module__WEBPACK_IMPORTED_MODULE_5__["NavigationPageRoutingModule"]
        ],
        declarations: [_navigation_page__WEBPACK_IMPORTED_MODULE_6__["NavigationPage"]]
    })
], NavigationPageModule);



/***/ }),

/***/ "vn2g":
/*!*********************************************************!*\
  !*** ./src/app/navigation/navigation-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: NavigationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationPageRoutingModule", function() { return NavigationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navigation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.page */ "OUQp");




const routes = [
    {
        path: '',
        component: _navigation_page__WEBPACK_IMPORTED_MODULE_3__["NavigationPage"]
    }
];
let NavigationPageRoutingModule = class NavigationPageRoutingModule {
};
NavigationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NavigationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=navigation-navigation-module-es2015.js.map