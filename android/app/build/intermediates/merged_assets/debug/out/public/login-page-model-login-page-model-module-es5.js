function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-page-model-login-page-model-module"], {
  /***/
  "./src/app/login-page-model/login-page-model-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/login-page-model/login-page-model-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LoginPageModelPageRoutingModule */

  /***/
  function srcAppLoginPageModelLoginPageModelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModelPageRoutingModule", function () {
      return LoginPageModelPageRoutingModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _login_page_model_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login-page-model.page */
    "./src/app/login-page-model/login-page-model.page.ts");

    var routes = [{
      path: '',
      component: _login_page_model_page__WEBPACK_IMPORTED_MODULE_4__["LoginPageModelPage"]
    }];

    var LoginPageModelPageRoutingModule = function LoginPageModelPageRoutingModule() {
      _classCallCheck(this, LoginPageModelPageRoutingModule);
    };

    LoginPageModelPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageModelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login-page-model/login-page-model.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/login-page-model/login-page-model.module.ts ***!
    \*************************************************************/

  /*! exports provided: LoginPageModelPageModule */

  /***/
  function srcAppLoginPageModelLoginPageModelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModelPageModule", function () {
      return LoginPageModelPageModule;
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


    var _login_page_model_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-page-model-routing.module */
    "./src/app/login-page-model/login-page-model-routing.module.ts");
    /* harmony import */


    var _login_page_model_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-page-model.page */
    "./src/app/login-page-model/login-page-model.page.ts");

    var LoginPageModelPageModule = function LoginPageModelPageModule() {
      _classCallCheck(this, LoginPageModelPageModule);
    };

    LoginPageModelPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _login_page_model_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageModelPageRoutingModule"]],
      declarations: [_login_page_model_page__WEBPACK_IMPORTED_MODULE_6__["LoginPageModelPage"]]
    })], LoginPageModelPageModule);
    /***/
  }
}]);
//# sourceMappingURL=login-page-model-login-page-model-module-es5.js.map