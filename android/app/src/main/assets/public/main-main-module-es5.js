function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>HomePage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-text>\n    Welcome to the Home page {{un}} !\n  </ion-text>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main/main-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: MainPageRoutingModule */

  /***/
  function srcAppMainMainRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function () {
      return MainPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main.page */
    "./src/app/main/main.page.ts");

    var routes = [{
      path: '',
      component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }];

    var MainPageRoutingModule = function MainPageRoutingModule() {
      _classCallCheck(this, MainPageRoutingModule);
    };

    MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MainPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main/main.module.ts":
  /*!*************************************!*\
    !*** ./src/app/main/main.module.ts ***!
    \*************************************/

  /*! exports provided: MainPageModule */

  /***/
  function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
      return MainPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-routing.module */
    "./src/app/main/main-routing.module.ts");
    /* harmony import */


    var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main.page */
    "./src/app/main/main.page.ts");

    var MainPageModule = function MainPageModule() {
      _classCallCheck(this, MainPageModule);
    };

    MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]],
      declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })], MainPageModule);
    /***/
  },

  /***/
  "./src/app/main/main.page.scss":
  /*!*************************************!*\
    !*** ./src/app/main/main.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/main.page.ts":
  /*!***********************************!*\
    !*** ./src/app/main/main.page.ts ***!
    \***********************************/

  /*! exports provided: MainPage */

  /***/
  function srcAppMainMainPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPage", function () {
      return MainPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MainPage = /*#__PURE__*/function () {
      function MainPage() {
        _classCallCheck(this, MainPage);
      }

      _createClass(MainPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.formdata = JSON.parse(localStorage.getItem('form'));
          this.un = this.formdata.fName;
        }
      }]);

      return MainPage;
    }();

    MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main.page.scss */
      "./src/app/main/main.page.scss"))["default"]]
    })], MainPage);
    /***/
  }
}]);
//# sourceMappingURL=main-main-module-es5.js.map