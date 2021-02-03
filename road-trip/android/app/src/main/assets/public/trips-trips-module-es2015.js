(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trips-trips-module"],{

/***/ "AYfz":
/*!***************************************!*\
  !*** ./src/app/trips/trips.module.ts ***!
  \***************************************/
/*! exports provided: TripsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPageModule", function() { return TripsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _trips_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trips-routing.module */ "Cxrk");
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trips.page */ "G+Gn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let TripsPageModule = class TripsPageModule {
};
TripsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _trips_routing_module__WEBPACK_IMPORTED_MODULE_4__["TripsPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ],
        declarations: [_trips_page__WEBPACK_IMPORTED_MODULE_5__["TripsPage"]]
    })
], TripsPageModule);



/***/ }),

/***/ "Cxrk":
/*!***********************************************!*\
  !*** ./src/app/trips/trips-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TripsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPageRoutingModule", function() { return TripsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trips_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trips.page */ "G+Gn");




const routes = [
    {
        path: '',
        component: _trips_page__WEBPACK_IMPORTED_MODULE_3__["TripsPage"]
    },
    {
        path: 'create-trip',
        loadChildren: () => __webpack_require__.e(/*! import() | create-trip-create-trip-module */ "create-trip-create-trip-module").then(__webpack_require__.bind(null, /*! ./create-trip/create-trip.module */ "S2yw")).then(m => m.CreateTripPageModule)
    }
];
let TripsPageRoutingModule = class TripsPageRoutingModule {
};
TripsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TripsPageRoutingModule);



/***/ }),

/***/ "G+Gn":
/*!*************************************!*\
  !*** ./src/app/trips/trips.page.ts ***!
  \*************************************/
/*! exports provided: TripsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripsPage", function() { return TripsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_trips_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./trips.page.html */ "vNvJ");
/* harmony import */ var _trips_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trips.page.scss */ "VtUj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let TripsPage = class TripsPage {
    constructor(router) {
        this.router = router;
    }
    gotoCreateTrip() {
        this.router.navigateByUrl('create-trip');
    }
    ngOnInit() {
    }
};
TripsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TripsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-trips',
        template: _raw_loader_trips_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_trips_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TripsPage);



/***/ }),

/***/ "VtUj":
/*!***************************************!*\
  !*** ./src/app/trips/trips.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmlwcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "vNvJ":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trips/trips.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>trips</ion-title>\n    \n\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-button expand=\"block\" fill=\"outline\" href=\"/trips/create-trip\">Create</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\">Load</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\">Edit</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\">Share</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\">Delete</ion-button>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=trips-trips-module-es2015.js.map