webpackJsonp([5],{

/***/ "../../../../../src/app/pages/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"row\">\r\n    <div class=\"background bgsize\">\r\n        <div class=\"offset-xl-4 col-xl-4 offset-lg-3 col-lg-6 offset-md-2 col-md-8 offset-sm-1 col-sm-10 offset-1 col-10\"\r\n             align=\"center\">\r\n\r\n            <!--CARD DE VERIFICAR EMAIL-->\r\n            <div class=\"card p-3 m-t-20 cardLogin-Register\"\r\n                 style=\"height: 430px!important;\" *ngIf=\"view=='verifyEmail'\">\r\n                <div class=\"card-header\" align=\"center\">\r\n                    <h2>Has verificado tu email con éxito!</h2>\r\n                </div>\r\n                <div class=\"card-body\" align=\"center\">\r\n                    <i class=\"zmdi zmdi-thumb-up iconStyle animated {{ animatedIcon? 'tada' : '' }}\"></i>\r\n                    <p class=\"f-s-18\">Pulsa el siguiente botón para solicitar tu primer servicio</p>\r\n                </div>\r\n                <div class=\"card-footer\">\r\n                    <button class=\"btn btn-success btn-block f-s-18\" (click)=\"verifyEmail()\"><a\r\n                            [routerLink]=\"['/usuarios']\" style=\"color: white;\">Ir a la app</a></button>\r\n                </div>\r\n            </div>\r\n\r\n            <!--CARD DE CAMBIAR CONTRASEÑA-->\r\n            <div class=\"card p-3 m-t-20 cardLogin-Register\"\r\n                 style=\"\" *ngIf=\"view=='resetPassword'\">\r\n                <!--Card header/cambiar contraseña-->\r\n                <div class=\"card-header\">\r\n                    <h2>Restablecer tu contraseña</h2>\r\n                </div>\r\n                <!--Card body/cambiar contraseña-->\r\n                <div class=\"card-body m-l-25 m-r-15\">\r\n                    <form>\r\n                        <!--Contraseña/cambiar contraseña-->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-10\">\r\n                                <div class=\"form-group form-group--float mb-0 pl-2 m-t-0\" style=\"text-align: left\">\r\n                                    <input class=\"form-control p-3 m-t-20 \"\r\n                                           type=\"{{ShowPassRegister? 'text':'password'}}\" formControlFloat autofocus\r\n                                           required [(ngModel)]=\"user.pass\" name=\"pass\" #pass (keyup)=\"errorPass=false\">\r\n                                    <label class=\"{{errorPass? 'errorColor':''}}\"><i class=\"zmdi zmdi-lock m-r-10\"></i>Nueva\r\n                                        contraseña</label>\r\n                                    <i class=\"form-group__bar\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-1 m-t-20\">\r\n                                <i class=\"zmdi zmdi-eye-off zmdi-hc-lg m-t-20\" *ngIf=\"!ShowPassRegister\"\r\n                                   (click)=\"ShowPassRegister=!ShowPassRegister\"></i>\r\n                                <i class=\"zmdi zmdi-eye zmdi-hc-lg cursor-pointer m-t-20\" *ngIf=\"ShowPassRegister\"\r\n                                   (click)=\"ShowPassRegister=!ShowPassRegister\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <!--Confirmar contraseña-->\r\n                        <div class=\"row\">\r\n                            <div class=\"col-10\">\r\n                                <div class=\"form-group form-group--float mb-0 pl-2 m-t-0\" style=\"text-align: left\">\r\n                                    <input class=\"form-control p-3 m-t-20\" type=\"{{ShowVerifyPass? 'text':'password'}}\"\r\n                                           formControlFloat autofocus\r\n                                           required [(ngModel)]=\"user.passVerify\" name=\"verifyPass\" #verifyPass\r\n                                           (keyup)=\"errorVerifyPass=false\">\r\n                                    <label class=\"{{errorVerifyPass? 'errorColor':''}}\"><i\r\n                                            class=\"zmdi zmdi-lock m-r-10\"></i>Confirmar contraseña</label>\r\n                                    <i class=\"form-group__bar\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-1 m-t-20\">\r\n                                <i class=\"zmdi zmdi-eye-off zmdi-hc-lg m-t-20\" *ngIf=\"!ShowVerifyPass\"\r\n                                   (click)=\"ShowVerifyPass=!ShowVerifyPass\"></i>\r\n                                <i class=\"zmdi zmdi-eye zmdi-hc-lg cursor-pointer m-t-20\" *ngIf=\"ShowVerifyPass\"\r\n                                   (click)=\"ShowVerifyPass=!ShowVerifyPass\"></i>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!--Card footer-->\r\n                <div class=\"card-footer m-t-30\">\r\n                    <button class=\"btn btn-success btn-block f-s-18\" (click)=\"restorePass(user)\"><a\r\n                            style=\"color: white\">Enviar</a>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"showError\"\r\n                 class=\"alert alert-danger animated {{ showError ? 'bounceIn':'' }}  {{ closeError ? 'bounceOut' : '' }}\"\r\n                 role=\"alert\">\r\n                Verifica los datos en rojo\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".IconSpace {\n  margin-right: 10px; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\n.marginTopIconView {\n  margin-top: 45px; }\n\n.btnLogin {\n  border-radius: 5px 5px 5px 5px;\n  margin-top: 17px;\n  width: 100%; }\n\n.styleCheckbox {\n  margin-top: 17px; }\n\n.background {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/ciudad.png") + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-color: #2c3e50; }\n\n.bgsize {\n  height: 100vh;\n  width: 100vw; }\n\n.bgsize {\n  height: 100vh;\n  width: 100vw; }\n\n.errorColor {\n  color: red; }\n\n.authSocial {\n  margin-bottom: 10px; }\n\n.circleSocial {\n  color: white;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  padding-top: 6px;\n  font-size: 25px;\n  margin-top: 34px;\n  cursor: pointer; }\n\n.facebookColor {\n  background-color: #3b5998 !important; }\n\n.googleColor {\n  background-color: #dd4b39 !important; }\n\n.twitterColor {\n  background-color: #00aced !important; }\n\n.cardLogin {\n  margin-left: 25px !important;\n  margin-right: 18px !important;\n  height: 260px;\n  overflow: hidden;\n  transition: height .5s; }\n\n.card-Register {\n  height: 400px !important; }\n\n.cardRegister {\n  height: 600px !important; }\n\n.cardLogin-Register {\n  height: 470px;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  padding-bottom: 0 !important;\n  margin-top: 50px;\n  box-shadow: 0px 0px 15px #707070;\n  border-radius: 10px 10px 10px 10px;\n  -moz-border-radius: 10px 10px 10px 10px;\n  -webkit-border-radius: 10px 10px 10px 10px;\n  transition: height .5s; }\n\n.cardStyle {\n  width: 400px;\n  height: 400px;\n  border-radius: 3%; }\n\n.cardBodyStyle {\n  height: 300px; }\n\n.iconStyle {\n  font-size: 150px;\n  color: #32c787; }\n\n.f-s-18 {\n  font-size: 18px;\n  padding: 10px; }\n\n.f-s-20 {\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(afAuth, alertService) {
        var _this = this;
        this.afAuth = afAuth;
        this.alertService = alertService;
        this.errorPass = false;
        this.errorVerifyPass = false;
        this.showError = false;
        this.closeError = false;
        this.isLoading = false;
        this.animatedIcon = true;
        this.user = [];
        this.view = this.getParameterByName("mode");
        if (this.view == "verifyEmail") {
            this.verifyEmail();
        }
        setInterval(function () {
            _this.animatedIcon = !_this.animatedIcon;
        }, 2000);
        afAuth.auth.onAuthStateChanged(function (user) {
            // console.log(user)
            _this.userInfoBasic = user;
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.verifyEmail = function () {
        var _this = this;
        // this.afAuth.auth.applyActionCode(code);
        this.afAuth.auth.applyActionCode(this.getParameterByName("oobCode"))
            .then(function (response) {
        }).catch(function (error) {
            _this.getFirebaseErrors(error.code);
        });
    };
    AuthComponent.prototype.getFirebaseErrors = function (error) {
        switch (error) {
            case 'auth/expired-action-code':
                this.alertService.confirm("Oooops!, huston we have a problem!", "Este enlace ya ha sido utilizado");
                break;
            case 'auth/invalid-action-code':
                this.alertService.confirm("Enlace invalido", "Este enlace no existe, intente con otro");
                break;
            case 'auth/user-disabled':
                this.alertService.confirm("Usuario deshabilitado", "Tu usuario ha sido bloqueado por " +
                    "alguna razon contacta al administrador");
                break;
            case 'auth/user-not-found':
                this.alertService.confirm("Usuario no encontrado", "No pudimos enviarte el codigo de verificacion" +
                    " debido a que no encontramos tu usuario");
                break;
        }
    };
    AuthComponent.prototype.getParameterByName = function (name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.hash);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    AuthComponent.prototype.restorePass = function (user) {
        var _this = this;
        if (!this.errorInRestorePassword(user)) {
            this.isLoading = true;
            this.afAuth.auth.confirmPasswordReset(this.getParameterByName("oobCode"), user.pass)
                .then(function (response) {
                _this.alertService.confirmSuccess("Contraseña restablecida", "Inicie sesion para ingresar a la app")
                    .then(function () {
                    window.location.href = '#/login';
                });
            }).catch(function (error) {
                _this.getFirebaseErrors(error.code);
            });
        }
    };
    AuthComponent.prototype.errorInRestorePassword = function (user) {
        var errors = false;
        // verificacion de contraseña vacia
        if (user.pass == "" || user.pass == null) {
            this.passRef.nativeElement.focus();
            this.errorPass = true;
            this.sendError();
            errors = true;
        }
        // verificacion de contraseñas iguales
        if (user.pass != user.passVerify) {
            this.verifyPassRef.nativeElement.focus();
            this.errorVerifyPass = true;
            errors = true;
            this.sendError();
        }
        // verificacion de repetir contraseña vacia
        if (user.passVerify == "" || user.passVerify == null) {
            this.verifyPassRef.nativeElement.focus();
            this.errorVerifyPass = true;
            this.sendError();
            errors = true;
        }
        return errors;
    };
    AuthComponent.prototype.sendError = function () {
        var _this = this;
        this.showError = true;
        this.closeError = false;
        setTimeout(function () {
            _this.closeError = true;
            setTimeout(function () {
                _this.showError = false;
            }, 1000);
        }, 2000);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pass'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], AuthComponent.prototype, "passRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('verifyPass'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], AuthComponent.prototype, "verifyPassRef", void 0);
    AuthComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/pages/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* alertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_alert_service__["a" /* alertService */]) === "function" && _d || Object])
    ], AuthComponent);
    return AuthComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=C:/CityLink/src/auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_component__ = __webpack_require__("../../../../../src/app/pages/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//Services

var AUTH_ROUTE = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */] }
];
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__auth_component__["a" /* AuthComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(AUTH_ROUTE)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_alert_service__["a" /* alertService */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());

//# sourceMappingURL=C:/CityLink/src/auth.module.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map