(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-trip-create-trip-module"], {
    /***/
    "OZlJ":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trips/create-trip/create-trip.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function OZlJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Create Trip</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <form class=\"container\" [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">search</ion-label>\n      <ion-input formControlName=\"search\" type=\"text\"></ion-input>\n    </ion-item>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.search.errors?.required\">\n      Name is required.\n    </span>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.search.errors?.minlength\">\n      Name should be min 2 chars long.\n    </span>\n    <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n  </form>\n  <ion-list *ngFor=\"let item of places\">\n    <ion-item>\n     {{item.title}}\n   </ion-item>\n   </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "S2yw":
    /*!*********************************************************!*\
      !*** ./src/app/trips/create-trip/create-trip.module.ts ***!
      \*********************************************************/

    /*! exports provided: CreateTripPageModule */

    /***/
    function S2yw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateTripPageModule", function () {
        return CreateTripPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _create_trip_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./create-trip-routing.module */
      "lLgQ");
      /* harmony import */


      var _create_trip_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-trip.page */
      "zmxd");
      /* harmony import */


      var src_app_services_reccomender_reccomender_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/reccomender/reccomender.service */
      "NqCp");

      var CreateTripPageModule = function CreateTripPageModule() {
        _classCallCheck(this, CreateTripPageModule);
      };

      CreateTripPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _create_trip_routing_module__WEBPACK_IMPORTED_MODULE_6__["CreateTripPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_create_trip_page__WEBPACK_IMPORTED_MODULE_7__["CreateTripPage"]],
        providers: [src_app_services_reccomender_reccomender_service__WEBPACK_IMPORTED_MODULE_8__["ReccomenderService"]]
      })], CreateTripPageModule);
      /***/
    },

    /***/
    "lLgQ":
    /*!*****************************************************************!*\
      !*** ./src/app/trips/create-trip/create-trip-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: CreateTripPageRoutingModule */

    /***/
    function lLgQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateTripPageRoutingModule", function () {
        return CreateTripPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _create_trip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-trip.page */
      "zmxd");

      var routes = [{
        path: '',
        component: _create_trip_page__WEBPACK_IMPORTED_MODULE_3__["CreateTripPage"]
      }];

      var CreateTripPageRoutingModule = function CreateTripPageRoutingModule() {
        _classCallCheck(this, CreateTripPageRoutingModule);
      };

      CreateTripPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CreateTripPageRoutingModule);
      /***/
    },

    /***/
    "nYmE":
    /*!*********************************************************!*\
      !*** ./src/app/trips/create-trip/create-trip.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function nYmE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdHJpcC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "zmxd":
    /*!*******************************************************!*\
      !*** ./src/app/trips/create-trip/create-trip.page.ts ***!
      \*******************************************************/

    /*! exports provided: CreateTripPage */

    /***/
    function zmxd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateTripPage", function () {
        return CreateTripPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_create_trip_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./create-trip.page.html */
      "OZlJ");
      /* harmony import */


      var _create_trip_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./create-trip.page.scss */
      "nYmE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_reccomender_reccomender_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/reccomender/reccomender.service */
      "NqCp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CreateTripPage = /*#__PURE__*/function () {
        function CreateTripPage(ReccomenderService, formBuilder) {
          _classCallCheck(this, CreateTripPage);

          this.ReccomenderService = ReccomenderService;
          this.formBuilder = formBuilder;
          this.isSubmitted = false; //console.log(this.ReccomenderService.getRemoteData());
          //this.ReccomenderService.getRemoteData().pipe(map(res => res.json));
          //this.places.subscribe(data =>{ console.log(data);}) //this.title = data.operationalLayers[0].featureCollection.layers[0].featureSet.features[0].attributes.title})
          //this.placeArry.push(this.ReccomenderService.getRemoteData(););
          //this.ReccomenderService.getRemoteData('Kruithuis').subscribe(res=>this.places=res,res =>{ console.log(res);});

          this.ionicForm = this.formBuilder.group({
            search: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2)]]
          });
        }

        _createClass(CreateTripPage, [{
          key: "submitForm",
          value: function submitForm() {
            this.isSubmitted = true;
            console.log(this.ionicForm.get('search').value); //console.log(this.ReccomenderService.getRemoteData(this.ionicForm.get('search').value).subscribe(res=>this.places=res,res =>{ console.log(res);}));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {}
        }, {
          key: "errorControl",
          get: function get() {
            return this.ionicForm.controls;
          }
        }]);

        return CreateTripPage;
      }();

      CreateTripPage.ctorParameters = function () {
        return [{
          type: _services_reccomender_reccomender_service__WEBPACK_IMPORTED_MODULE_4__["ReccomenderService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }];
      };

      CreateTripPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-create-trip',
        template: _raw_loader_create_trip_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_trip_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CreateTripPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=create-trip-create-trip-module-es5.js.map