webpackJsonp([0],{

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<bootstrap-growl [alertCount]=\"1\" [autoClose]=\"30000\"></bootstrap-growl>-->\r\n<div class=\"page-loader2\" *ngIf=\"isLoading\">\r\n    <div class=\"page-loader__spinner\">\r\n        <svg viewBox=\"25 25 50 50\">\r\n            <circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n        </svg>\r\n    </div>\r\n</div>\r\n\r\n<section class=\"row\">\r\n    <div class=\"background bgsize\">\r\n        <div class=\"offset-xl-4 col-xl-4 offset-lg-3 col-lg-6 offset-md-2 col-md-8 offset-sm-1 col-sm-10 offset-1 col-10\" align=\"center\">\r\n\r\n            <!--CARD DE AUTENTIFICACION-->\r\n            <div class=\"card p-3 m-t-20 cardLogin-Register {{ view=='registrate'? 'cardRegister':'' }}\"\r\n                 style=\"\">\r\n\r\n                <!--NAVEGACION-->\r\n                <div class=\"card-header p-b-0\" >\r\n                    <ul class=\"nav nav-tabs\">\r\n\r\n                        <li class=\"nav-item {{ view == 'login' ? 'active':'' }}\">\r\n                            <a class=\"nav-link {{ view == 'login' ? 'active':'' }}\" (click)=\"view = 'login';userRegister=[]\"\r\n                               style=\"\">\r\n                                <span>Iniciar sesión</span>\r\n                            </a>\r\n                        </li>\r\n\r\n\r\n                        <li class=\"nav-item {{ view == 'registrate' ? 'active':'' }}\">\r\n                            <a class=\"nav-link {{ view == 'registrate' ? 'active':'' }}\" (click)=\"view = 'registrate';userRegister=[]\"\r\n                               style=\"\">\r\n\r\n                                <span>Registrate</span>\r\n                            </a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n\r\n                <!--LOGIN Y REGISTRO-->\r\n                <div class=\"card-body ml-3 mr-3 cardLogin {{ view=='registrate'? 'card-Register':'' }}\"\r\n                     style=\"\"\r\n                     align=\"left\">\r\n\r\n                    <!--LOGIN-->\r\n                    <div *ngIf=\"view == 'login'\">\r\n                        <!--inicio del form-->\r\n                        <form action=\"\" (submit)=\"loginUser(userRegister)\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-10\">\r\n                                <div class=\"form-group form-group--float mb-0\">\r\n                                    <!--error email-->\r\n                                    <input class=\"form-control p-3\" type=\"email\" formControlFloat autofocus\r\n                                    required [(ngModel)]=\"userRegister.email\" name=\"e\" #email (keyup)=\"errorEmail=false\">\r\n                                    <!--errorColor-->\r\n\r\n                                    <label style=\"\" class=\"{{errorEmail? 'errorColor':''}}\"><i class=\"zmdi zmdi-email m-r-10\" ></i>Correo\r\n\r\n                                        electrónico</label>\r\n                                    <i class=\"form-group__bar\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col-10\">\r\n                                <div class=\"form-group form-group--float mb-0\">\r\n                                    <input class=\"form-control p-3\" type=\"{{showPassLogin? 'text':'password'}}\" formControlFloat autofocus\r\n                                    required [(ngModel)]=\"userRegister.pass\" name=\"e\" #pass (keyup)=\"errorPass=false\">\r\n\r\n                                    <label class=\"{{errorPass? 'errorColor':''}}\"><i class=\"zmdi zmdi-lock m-r-10\"></i>Contraseña</label>\r\n                                    <i class=\"form-group__bar\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-1 m-t-45\" >\r\n                                <i class=\"zmdi zmdi-eye-off zmdi-hc-lg\" *ngIf=\"!showPassLogin\"\r\n                                   (click)=\"showPassLogin=!showPassLogin\"></i>\r\n                                <i class=\"zmdi zmdi-eye zmdi-hc-lg cursor-pointer\" *ngIf=\"showPassLogin\"\r\n                                   (click)=\"showPassLogin=!showPassLogin\"></i>\r\n                            </div>\r\n                            <div align=\"center\" style=\"width: 100%\">\r\n                                <div class=\"m-t-20 cursor-pointer\"><a [routerLink]=\"['/contrasenia-olvidada']\"> ¿Olvidaste tu\r\n                                    contraseña?</a>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div align=\"center\">\r\n                            <button class=\"btn btn-success btn-lg m-t-20 m-b-20\"\r\n                                    style=\" border-radius: 5px 5px 5px 5px\">\r\n                                Ingresar\r\n                            </button>\r\n                        </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                    <!--REGISTRO-->\r\n                    <div *ngIf=\"view == 'registrate'\">\r\n                        <form action=\"\">\r\n                            <!--formulario de registrate-->\r\n                            <div class=\"row\">\r\n                                <div class=\"col-11\">\r\n                                    <div class=\"form-group form-group--float mb-0\">\r\n\r\n                                        <input class=\"form-control p-3\" type=\"email\"\r\n                                               formControlFloat autofocus\r\n                                               required [(ngModel)]=\"userRegister.email\" name=\"e\" #email (keyup)=\"errorEmail=false\"\r\n                                        >\r\n                                        <!--<div *ngIf=\"verifyEmail\"></div>-->\r\n\r\n                                        <label class=\"{{errorEmail? 'errorColor':''}}\"><i\r\n                                                class=\"zmdi zmdi-email IconSpace\"></i> Correo\r\n                                            electrónico</label>\r\n                                        <i class=\"form-group__bar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-11\">\r\n                                    <div class=\"form-group form-group--float mb-0\">\r\n\r\n                                        <input class=\"form-control p-3\" type=\"tel\"\r\n                                               formControlFloat autofocus #phone\r\n                                                [(ngModel)]=\"userRegister.phone\" name=\"phone\" required\r\n                                               (keyup)=\"errorPhone=false\"\r\n                                        >\r\n\r\n                                        <label class=\"{{ errorPhone? 'errorColor' : ' ' }}\" ><i class=\"zmdi zmdi-phone IconSpace \"></i>Telefono</label>\r\n                                        <i class=\"form-group__bar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-10\">\r\n                                    <div class=\"form-group form-group--float mb-0\">\r\n\r\n                                        <input type=\"{{ShowPassRegister? 'text':'password'}}\"\r\n                                               class=\"form-control p-3\"\r\n                                               formControlFloat autofocus required #pass\r\n                                               [(ngModel)]=\"userRegister.pass\" name=\"pass\"\r\n                                               (keyup)=\"errorPass=false\"\r\n                                        >\r\n                                        <label class=\"{{ errorPass? 'errorColor' : ' ' }}\"><i class=\"zmdi zmdi-lock IconSpace\"></i>Contraseña</label>\r\n                                        <i class=\"form-group__bar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-1 marginTopIconView\">\r\n                                    <i class=\"zmdi zmdi-eye-off cursor-pointer zmdi-hc-lg\"\r\n                                       (click)=\"ShowPassRegister=!ShowPassRegister\" *ngIf=\"!ShowPassRegister\"></i>\r\n                                    <i class=\"zmdi zmdi-eye cursor-pointer zmdi-hc-lg\"\r\n                                       (click)=\"ShowPassRegister=!ShowPassRegister\" *ngIf=\"ShowPassRegister\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-10\">\r\n                                    <div class=\"form-group form-group--float mb-0\">\r\n\r\n                                        <input type=\"{{ShowVerifyPass? 'text':'password'}}\"\r\n                                               class=\"form-control p-3\"\r\n                                                formControlFloat autofocus required #verifyPass\r\n                                               [(ngModel)]=\"userRegister.passVerify\" name=\"verifyPass\"\r\n                                               (keyup)=\"errorVerifyPass=false\"\r\n                                        >\r\n\r\n                                        <label class=\"{{ errorVerifyPass? 'errorColor': '' }}\"><i class=\"zmdi zmdi-lock IconSpace\"></i>Repetir Contraseña</label>\r\n                                        <i class=\"form-group__bar\"></i>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-1 marginTopIconView\">\r\n                                    <i class=\"zmdi zmdi-eye-off cursor-pointer zmdi-hc-lg\"\r\n                                       (click)=\"ShowVerifyPass=!ShowVerifyPass\" *ngIf=\"!ShowVerifyPass\"></i>\r\n                                    <i class=\"zmdi zmdi-eye cursor-pointer zmdi-hc-lg\"\r\n                                       (click)=\"ShowVerifyPass=!ShowVerifyPass\" *ngIf=\"ShowVerifyPass\"></i>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"terminos\">\r\n                                <!--Terminos y Condiciones-->\r\n                                <div align=\"center\" class=\"has-success  styleCheckbox\">\r\n                                    <label class=\"custom-control custom-checkbox\">\r\n                                        <input class=\"custom-control-input\" type=\"checkbox\"\r\n                                               [(ngModel)]=\"userRegister.terms\" name=\"terms\" checked=\" {{ errorTerms? '' : 'errorTerms = false' }} \" >\r\n                                        <!-- [(ngModel)]=\"userRegister.radioTerms\" -->\r\n                                        <span class=\"custom-control-indicator\"></span>\r\n                                    </label>\r\n                                    <span style=\"color: #32c787\" class=\" cursor-pointer custom-control-description {{ errorTerms ? 'errorColor' : ' ' }} \" (click)=\"showInfoTerms(userRegister)\">Acepto Términos y Condiciones</span>\r\n                                </div>\r\n                                <button  class=\"cursor-pointer btn btn-success btn-lg btnLogin btn-block\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Verifica todos los campos\" (click)=\"registerUser(userRegister)\">Registrate\r\n                                </button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <!--AUTH CON REDES SOCIALES-->\r\n                <div class=\"card-footer\" style=\"padding-right: 0;padding-left: 0; padding-bottom: 0!important;\">\r\n                    <div class=\"authSocial\" style=\"border-radius: 0 0 10px 10px;width: 100%; height: 115px;\">\r\n\r\n                        <div class=\"row\" style=\"width: 90%;\">\r\n\r\n                            <!--Facebook-->\r\n                            <div class=\"col-4\">\r\n                                <div class=\"circleSocial facebookColor\" (click)=\"authFacebook()\">\r\n                                    <i class=\"zmdi zmdi-facebook\"></i>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--Google-->\r\n                            <div class=\"col-4\">\r\n                                <div class=\"circleSocial googleColor\" (click)=\"authGoogle()\">\r\n                                    <i class=\"zmdi zmdi-google-plus\"></i>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--Twitter-->\r\n                            <div class=\"col-4\">\r\n                                <div class=\"circleSocial twitterColor\" (click)=\"authTwitter()\">\r\n                                    <i class=\"zmdi zmdi-twitter\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div  *ngIf=\"showError\" class=\"alert alert-danger animated {{ showError ? 'bounceIn':'' }}  {{ closeError ? 'bounceOut' : '' }}\" role=\"alert\">\r\n                Verifica los datos en rojo\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".IconSpace {\n  margin-right: 10px; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\n.marginTopIconView {\n  margin-top: 45px; }\n\n.btnLogin {\n  border-radius: 5px 5px 5px 5px;\n  margin-top: 17px;\n  width: 100%; }\n\n.styleCheckbox {\n  margin-top: 17px; }\n\n.background {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/ciudad.png") + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-color: #2c3e50; }\n\n.bgsize {\n  height: 100vh;\n  width: 100vw; }\n\n.bgsize {\n  height: 100vh;\n  width: 100vw; }\n\n.errorColor {\n  color: red; }\n\n.authSocial {\n  margin-bottom: 10px; }\n\n.circleSocial {\n  color: white;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  padding-top: 6px;\n  font-size: 25px;\n  margin-top: 34px;\n  cursor: pointer; }\n\n.facebookColor {\n  background-color: #3b5998 !important; }\n\n.googleColor {\n  background-color: #dd4b39 !important; }\n\n.twitterColor {\n  background-color: #00aced !important; }\n\n.cardLogin {\n  margin-left: 25px !important;\n  margin-right: 18px !important;\n  height: 260px;\n  overflow: hidden;\n  transition: height .5s; }\n\n.card-Register {\n  height: 400px !important; }\n\n.cardRegister {\n  height: 600px !important; }\n\n.cardLogin-Register {\n  height: 470px;\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  padding-bottom: 0 !important;\n  margin-top: 50px;\n  box-shadow: 0px 0px 15px #707070;\n  border-radius: 10px 10px 10px 10px;\n  -moz-border-radius: 10px 10px 10px 10px;\n  -webkit-border-radius: 10px 10px 10px 10px;\n  transition: height .5s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(db, afAuth, alertService) {
        var _this = this;
        this.afAuth = afAuth;
        this.alertService = alertService;
        // Declaracion de variables
        this.ShowVerifyPass = false;
        this.ShowPassRegister = false;
        this.showError = false;
        this.closeError = false;
        this.view = "login";
        this.showPassLogin = false;
        this.userRegister = [];
        this.errorPass = false;
        this.errorVerifyPass = false;
        this.errorEmail = false;
        this.errorTerms = false;
        this.errorPhone = false;
        this.isLoading = false;
        afAuth.auth.onAuthStateChanged(function (user) {
            console.log(user);
            _this.userInfoBasic = user;
        });
        this.userInfo = db.list('/usuarios');
        console.log(this.user);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // Metodos
    LoginComponent.prototype.authFacebook = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
    };
    LoginComponent.prototype.authGoogle = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    LoginComponent.prototype.authTwitter = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider());
    };
    LoginComponent.prototype.registerUser = function (user) {
        var _this = this;
        if (!this.errorInRegisterFields(user)) {
            this.isLoading = true;
            this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pass).then(function (response) {
                _this.afAuth.auth.currentUser.sendEmailVerification().then(function (response) {
                    console.log("Resuelto " + response);
                    // response.emailVerified=true;
                }).catch(function (error) {
                    console.log(error);
                });
                _this.isLoading = false;
                _this.alertService.confirmSuccess("Usuario Registrado Correctamente", "Te hemos enviado un link a tu correo" +
                    " da click en el para entrar a la app");
                _this.userInfo.set(response.uid, {
                    'email': user.email,
                    'telefono': user.phone
                });
            }).catch(function (error) {
                _this.isLoading = false;
                _this.getErrorAuth(error.code);
            });
        }
    };
    LoginComponent.prototype.errorInRegisterFields = function (user) {
        // expresiones regulares
        var patronPhone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        var patronEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        var errors = false;
        // verificacion de email
        if (user.email == "" || user.email == null || !patronEmail.test(user.email)) {
            this.errorEmail = true;
            this.emailRef.nativeElement.focus();
            errors = true;
            this.sendError();
        }
        // verificacion de telefono
        if (!patronPhone.test(user.phone) || user.phone == " " || user.phone == null) {
            this.sendError();
            this.phoneRef.nativeElement.focus();
            errors = true;
            this.errorPhone = true;
        }
        // verificacion de contraseñas iguales
        if (user.pass != user.passVerify) {
            this.verifyPassRef.nativeElement.focus();
            this.sendError();
            this.errorVerifyPass = true;
            errors = true;
        }
        // verificacion de contraseña vacia
        if (user.pass == "" || user.pass == null) {
            this.passRef.nativeElement.focus();
            this.errorPass = true;
            this.sendError();
            errors = true;
        }
        // verificacion de repetir contraseña vacia
        if (user.passVerify == "" || user.passVerify == null) {
            this.verifyPassRef.nativeElement.focus();
            this.errorVerifyPass = true;
            this.sendError();
            errors = true;
        }
        // verificacion de terminos y condiciones vacio
        if (user.terms == false || user.terms == null) {
            errors = true;
            this.sendError();
        }
        return errors;
    };
    LoginComponent.prototype.sendError = function () {
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
    LoginComponent.prototype.loginUser = function (user) {
        var _this = this;
        if (!this.errorInLoginFields(user)) {
            this.isLoading = true;
            this.afAuth.auth.signInWithEmailAndPassword(user.email, user.pass)
                .then(function (response) {
                console.log(response);
                // Redigir a otra vista de principal
                _this.isLoading = false;
            })
                .catch(function (error) {
                _this.getErrorAuth(error.code);
                _this.isLoading = false;
            });
        }
    };
    LoginComponent.prototype.errorInLoginFields = function (user) {
        var regularExpressionEmail = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        var errors = false;
        if (!regularExpressionEmail.test(user.email) || user.email == "" || user.email == null) {
            this.errorEmail = true;
            this.emailRef.nativeElement.focus();
            errors = true;
            this.sendError();
        }
        if (user.pass == "" || user.pass == null) {
            this.errorPass = true;
            this.passRef.nativeElement.focus();
            errors = true;
            this.sendError();
        }
        return errors;
    };
    LoginComponent.prototype.showInfoTerms = function (user) {
        this.alertService.infoTerms('Terminos y Condiciones').then(function (response) {
            user.terms = true;
        });
    };
    LoginComponent.prototype.getErrorAuth = function (codeError) {
        var _this = this;
        switch (codeError) {
            case 'auth/user-not-found':
                this.alertService.confirm("Usuario no encontrado!", "Escriba un usuario valido")
                    .then(function (response) {
                    _this.emailRef.nativeElement.focus();
                    _this.errorEmail = true;
                    // console.log(response);
                });
                break;
            case 'auth/user-disabled':
                this.alertService.confirm("Email deshabilitado!", "Escriba un email valido")
                    .then(function (response) {
                    _this.emailRef.nativeElement.focus();
                    _this.errorEmail = true;
                    console.log(response);
                });
                break;
            case 'auth/wrong-password':
                this.alertService.confirm("Contraseña incorrecta!", "Escriba una contraseña correcta")
                    .then(function (response) {
                    _this.passRef.nativeElement.focus();
                    _this.errorPass = true;
                    console.log(response);
                });
                break;
            case 'auth/email-already-in-use':
                this.alertService.confirm("Email en uso", "Ingrese un nuevo correo")
                    .then(function (response) {
                    _this.emailRef.nativeElement.focus();
                    _this.errorEmail = true;
                });
                break;
            case 'auth/weak-password':
                this.alertService.confirm("Contraseña débil", "La contraseña debe contener al menos 6 digitos")
                    .then(function (response) {
                    _this.passRef.nativeElement.focus();
                    _this.errorPass = true;
                    _this.errorVerifyPass = true;
                });
                break;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('email'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], LoginComponent.prototype, "emailRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pass'),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object)
    ], LoginComponent.prototype, "passRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('phone'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object)
    ], LoginComponent.prototype, "phoneRef", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('verifyPass'),
        __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object)
    ], LoginComponent.prototype, "verifyPassRef", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* alertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* alertService */]) === "function" && _g || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=C:/CityLink/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_sweetalert2__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var alertService = (function () {
    function alertService() {
    }
    alertService.prototype.error = function (title, message) {
        __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()(title, message, 'error');
    };
    alertService.prototype.infoTerms = function (title) {
        return new Promise((function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: title,
                type: 'info',
                html: ' <div style="height: 500px; overflow-y: auto">' +
                    '<p>.kjbñjboho</p>' +
                    '<p>.kjbñjboho</p>' +
                    '<p>.kjbñjboho</p>' +
                    '<p>.kjbñjboho</p>' +
                    '<p>.kjbñjboho</p>' +
                    '</div> ',
                showCloseButton: true,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Acepto'
            }).then(function () {
                resolve();
            });
        }));
    };
    alertService.prototype.confirm = function (title, message) {
        return new Promise((function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: title,
                text: message,
                type: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then(function () {
                resolve();
            });
        }));
    };
    alertService.prototype.confirmSuccess = function (title, message) {
        return new Promise((function (resolve) {
            __WEBPACK_IMPORTED_MODULE_1_sweetalert2___default()({
                title: title,
                text: message,
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok'
            }).then(function () {
                resolve();
            });
        }));
    };
    alertService.prototype.showError = function (code) {
        var title;
        var message;
        switch (code) {
            case 'auth/invalid-email':
                title = "Email Invalido";
                message = "Ingresa un email valido 'ejemplo@ejemplo.com'";
                break;
            case 'auth/user-not-found':
                title = "Usuario no encontrado";
                message = "Introduzca un usuario que esté registrado en la aplicación";
                break;
        }
        this.error(title, message);
    };
    alertService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], alertService);
    return alertService;
}());

//# sourceMappingURL=C:/CityLink/src/alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card widget-contacts\">\n  <div class=\"card-header\">\n    <h2 class=\"card-title\">Contact Information</h2>\n    <small class=\"card-subtitle\">Fusce eget dolor id justo luctus commodo vel pharetra nisi</small>\n  </div>\n  <div class=\"card-block\">\n    <ul class=\"icon-list\">\n      <li><i class=\"zmdi zmdi-phone\"></i> {{ contactData.phone }}</li>\n      <li><i class=\"zmdi zmdi-email\"></i> {{ contactData.email }}</li>\n      <li><i class=\"zmdi zmdi-facebook-box\"></i> {{ contactData.facebook }}</li>\n      <li><i class=\"zmdi zmdi-twitter\"></i> {{ contactData.twitter }}</li>\n      <li><i class=\"zmdi zmdi-pin\"></i>\n        <address>\n          {{ contactData.address }}\n        </address>\n      </li>\n    </ul>\n  </div>\n\n  <a class=\"widget-contacts__map\" href=\"\">\n    <img [src]=\"contactData.map\" alt=\"\">\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-contacts__map {\n  display: block;\n  padding: 3px; }\n  .widget-contacts__map img {\n    width: 100%;\n    border-radius: 2px;\n    margin: -10px 0 -1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
        this.contactData = {
            phone: '00971123456789',
            email: 'malinda.h@gmail.com',
            facebook: 'malinda.hollaway',
            twitter: '@malinda (twitter.com/malinda)',
            address: '44-46 Morningside Road,  Edinburgh, Scotland',
            map: './assets/demo/img/widgets/map.png'
        };
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-contacts',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/contacts/contacts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/contacts/contacts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());

//# sourceMappingURL=C:/CityLink/src/contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/past-days/past-days.component.html":
/***/ (function(module, exports) {

module.exports = "<figure class=\"card card-inverse widget-past-days\">\n  <div class=\"card-header\">\n    <h2 class=\"card-title\">For the past 30 days</h2>\n    <small class=\"card-subtitle\">Pellentesque ornare sem lacinia quam</small>\n  </div>\n\n  <div class=\"widget-past-days__main\">\n    <div flot [options]=\"pastDaysChartOptions\" [dataset]=\"pastDaysChartData\" [height]=\"100\"></div>\n  </div>\n\n  <div class=\"listview listview--dark listview--striped\">\n    <div *ngFor=\"let pastDaysData of pastDaysData\" class=\"listview__item\">\n      <div class=\"widget-past-days__info\">\n        <small>{{ pastDaysData.title }}</small>\n        <h3>{{ pastDaysData.value }}</h3>\n      </div>\n\n      <div class=\"widget-past-days__chart hidden-sm\">\n        <sparkline [dataset]=\"pastDaysData.chartData\" [options]=\"pastDaysSubChartDataOptions\"></sparkline>\n      </div>\n    </div>\n  </div>\n</figure>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/past-days/past-days.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-past-days {\n  background-color: #39bbb0;\n  overflow: hidden; }\n\n.widget-past-days__main {\n  margin: 0 -10px; }\n\n.widget-past-days__chart {\n  opacity: 0.75;\n  margin: 0.55rem 0 0 auto; }\n\n.widget-past-days__info small {\n  font-size: 1rem;\n  color: rgba(255, 255, 255, 0.9); }\n\n.widget-past-days__info h3 {\n  margin: 0;\n  color: #FFFFFF;\n  font-weight: normal; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/past-days/past-days.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastDaysComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PastDaysComponent = (function () {
    function PastDaysComponent() {
        this.pastDaysChartOptions = {
            series: {
                shadowSize: 0,
                curvedLines: {
                    apply: true,
                    active: true,
                    monotonicFit: true
                },
                lines: {
                    show: false,
                    lineWidth: 0
                }
            },
            grid: {
                borderWidth: 0,
                labelMargin: 10,
                hoverable: true,
                clickable: true,
                mouseActiveRadius: 6
            },
            xaxis: {
                tickDecimals: 0,
                ticks: false
            },
            yaxis: {
                tickDecimals: 0,
                ticks: false
            },
            legend: {
                show: false
            }
        };
        this.pastDaysChartData = [{
                label: 'Product 1',
                stack: true,
                color: '#35424b',
                lines: {
                    show: true,
                    fill: 1,
                    fillColor: {
                        colors: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.6)']
                    }
                },
                data: [[1, 3], [2, 9], [3, 8], [4, 6], [5, 11], [6, 4], [7, 7]]
            }];
        this.pastDaysData = [
            {
                title: 'Page Views',
                value: '47,896,536',
                chartData: [6, 9, 5, 6, 3, 7, 5, 4, 6, 5, 6, 4, 2, 5, 8, 2, 6, 9]
            },
            {
                title: 'Site Visitors',
                value: '24,456,799',
                chartData: [5, 7, 2, 5, 2, 8, 6, 7, 6, 5, 3, 1, 9, 3, 5, 8, 2, 4]
            },
            {
                title: 'Total Clicks',
                value: '13,965',
                chartData: [5, 7, 2, 5, 2, 8, 6, 7, 6, 5, 3, 1, 9, 3, 5, 8, 2, 4]
            },
            {
                title: 'Total Returns',
                value: '198',
                chartData: [3, 9, 1, 3, 5, 6, 7, 6, 8, 2, 5, 2, 7, 5, 6, 7, 6, 8]
            },
        ];
        this.pastDaysSubChartDataOptions = {
            type: 'bar',
            height: '36px',
            barWidth: 3,
            barColor: '#fff',
            barSpacing: 2
        };
    }
    PastDaysComponent.prototype.ngOnInit = function () {
    };
    PastDaysComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-past-days',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/past-days/past-days.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/past-days/past-days.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PastDaysComponent);
    return PastDaysComponent;
}());

//# sourceMappingURL=C:/CityLink/src/past-days.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/photos/photos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card widget-pictures\">\n  <div class=\"card-header\">\n    <h2 class=\"card-title\">Augue laoreet rutrum</h2>\n    <small class=\"card-subtitle\">Cras congue nec lorem eget posuere</small>\n  </div>\n\n  <div class=\"widget-pictures__body row\">\n    <a class=\"col-4\" *ngFor=\"let pictureData of picturesData\" href=\"\">\n      <img [src]=\"pictureData\" alt=\"\">\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/photos/photos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-pictures__body {\n  margin: 0;\n  padding: 2px;\n  text-align: center; }\n  .widget-pictures__body::after {\n    display: block;\n    content: \"\";\n    clear: both; }\n  .widget-pictures__body > a {\n    padding: 2px;\n    display: block; }\n    .widget-pictures__body > a img {\n      width: 100%;\n      border-radius: 2px; }\n    .widget-pictures__body > a:hover {\n      opacity: 0.9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/photos/photos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotosComponent = (function () {
    function PhotosComponent() {
        this.picturesData = [
            './assets/demo/img/widgets/headers/1.png',
            './assets/demo/img/widgets/headers/2.png',
            './assets/demo/img/widgets/headers/3.png',
            './assets/demo/img/widgets/headers/4.png',
            './assets/demo/img/widgets/headers/5.png',
            './assets/demo/img/widgets/headers/6.png',
            './assets/demo/img/widgets/headers/7.png',
            './assets/demo/img/widgets/headers/8.png',
            './assets/demo/img/widgets/headers/9.png'
        ];
    }
    PhotosComponent.prototype.ngOnInit = function () {
    };
    PhotosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-photos',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/photos/photos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/photos/photos.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotosComponent);
    return PhotosComponent;
}());

//# sourceMappingURL=C:/CityLink/src/photos.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/pie-charts/pie-charts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse widget-pie\">\n\n  <div class=\"widget-pie__item\">\n    <div EasyPieChart class=\"easy-pie-chart\" [size]=\"80\" data-percent=\"92\">\n      <span class=\"easy-pie-chart__value\">92</span>\n    </div>\n    <div class=\"widget-pie__title\">Email<br> Scheduled</div>\n  </div>\n\n  <div class=\"widget-pie__item\">\n    <div EasyPieChart class=\"easy-pie-chart\" [size]=\"80\" data-percent=\"23\">\n      <span class=\"easy-pie-chart__value\">23</span>\n    </div>\n    <div class=\"widget-pie__title\">Email<br> Bounced</div>\n  </div>\n\n  <div class=\"widget-pie__item\">\n    <div EasyPieChart class=\"easy-pie-chart\" [size]=\"80\" data-percent=\"52\">\n      <span class=\"easy-pie-chart__value\">52</span>\n    </div>\n    <div class=\"widget-pie__title\">Email<br> Opened</div>\n  </div>\n\n  <div class=\"widget-pie__item\">\n    <div EasyPieChart class=\"easy-pie-chart\" [size]=\"80\" data-percent=\"44\">\n      <span class=\"easy-pie-chart__value\">44</span>\n    </div>\n    <div class=\"widget-pie__title\">Storage<br>Remaining</div>\n  </div>\n\n  <div class=\"widget-pie__item\">\n    <div EasyPieChart class=\"easy-pie-chart\" [size]=\"80\" data-percent=\"78\">\n      <span class=\"easy-pie-chart__value\">78</span>\n    </div>\n    <div class=\"widget-pie__title\">Web Page<br> Views</div>\n  </div>\n\n  <div class=\"widget-pie__item\">\n    <div EasyPieChart class=\"easy-pie-chart\" [size]=\"80\" data-percent=\"32\">\n      <span class=\"easy-pie-chart__value\">32</span>\n    </div>\n    <div class=\"widget-pie__title\">Server<br> Processing</div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/pie-charts/pie-charts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-pie {\n  background-color: #ff5652;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .widget-pie::after {\n    display: block;\n    content: \"\";\n    clear: both; }\n\n.widget-pie__item {\n  width: 33.33333%;\n  float: left;\n  text-align: center;\n  padding: 20px 5px; }\n  .widget-pie__item:nth-child(2n) {\n    background-color: rgba(255, 255, 255, 0.1); }\n\n.widget-pie__title {\n  color: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/pie-charts/pie-charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartsComponent = (function () {
    function PieChartsComponent() {
    }
    PieChartsComponent.prototype.ngOnInit = function () {
    };
    PieChartsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-pie-charts',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/pie-charts/pie-charts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/pie-charts/pie-charts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PieChartsComponent);
    return PieChartsComponent;
}());

//# sourceMappingURL=C:/CityLink/src/pie-charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse widget-profile\">\n  <div class=\"card-header\">\n    <img src=\"./assets/demo/img/profile-pics/profile-pic.jpg\" class=\"widget-profile__img\" alt=\"\">\n\n    <h2 class=\"card-title\">Malinda Hollway</h2>\n\n    <div class=\"actions actions--inverse\">\n      <div dropdown class=\"actions__item\">\n        <i dropdownToggle class=\"zmdi zmdi-more-vert\"></i>\n        <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n          <a [routerLink]=\"['/widgets']\" class=\"dropdown-item\">Refresh</a>\n          <a [routerLink]=\"['/widgets']\" class=\"dropdown-item\">Manage Widgets</a>\n          <a [routerLink]=\"['/widgets']\" class=\"dropdown-item\">Settings</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"widget-profile__list\">\n    <div class=\"media\">\n      <div class=\"media-left\">\n        <div class=\"avatar-char\"><i class=\"zmdi zmdi-phone\"></i></div>\n      </div>\n      <div class=\"media-body\">\n        <strong>011 55694785</strong>\n        <small>Home</small>\n      </div>\n    </div>\n    <div class=\"media\">\n      <div class=\"media-left\">\n        <div class=\"avatar-char\"><i class=\"zmdi zmdi-email\"></i></div>\n      </div>\n      <div class=\"media-body\">\n        <strong>m-hollaway@gmail.com</strong>\n        <small>Email</small>\n      </div>\n    </div>\n    <div class=\"media\">\n      <div class=\"media-left\">\n        <div class=\"avatar-char\"><i class=\"zmdi zmdi-twitter\"></i></div>\n      </div>\n      <div class=\"media-body\">\n        <strong>@m-hollaway</strong>\n        <small>Twitter</small>\n      </div>\n    </div>\n    <div class=\"media\">\n      <div class=\"media-left\">\n        <div class=\"avatar-char\"><i class=\"zmdi zmdi-facebook\"></i></div>\n      </div>\n      <div class=\"media-body\">\n        <strong>facebook/hollaway</strong>\n        <small>Facebook</small>\n      </div>\n    </div>\n    <div class=\"media\">\n      <div class=\"media-left\">\n        <div class=\"avatar-char\"><i class=\"zmdi zmdi-github\"></i></div>\n      </div>\n      <div class=\"media-body\">\n        <strong>github.com/hollaway</strong>\n        <small>Github</small>\n      </div>\n\n      <br>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-profile {\n  background-color: #03A9F4; }\n  .widget-profile .card-header {\n    background-color: rgba(255, 255, 255, 0.1);\n    text-align: center; }\n    .widget-profile .card-header .btn--float {\n      color: #03A9F4; }\n  .widget-profile .avatar-char {\n    background-color: rgba(255, 255, 255, 0.95);\n    color: #03A9F4;\n    margin-right: 1.2rem; }\n\n.widget-profile__img {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  margin-bottom: 1.2rem;\n  border: 5px solid rgba(255, 255, 255, 0.1); }\n\n.widget-profile__list {\n  color: #FFFFFF; }\n  .widget-profile__list .media {\n    padding: 1rem 2rem; }\n    .widget-profile__list .media:nth-child(even) {\n      background-color: rgba(255, 255, 255, 0.1); }\n  .widget-profile__list .media-body strong {\n    display: block;\n    font-weight: 500; }\n  .widget-profile__list .media-body small {\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 0.92rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-profile',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());

//# sourceMappingURL=C:/CityLink/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/random-post/random-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"card-img-top\" src=\"./assets/demo/img/widgets/note.png\" alt=\"Card image cap\">\n  <div class=\"card-header\">\n    <h2 class=\"card-title\">Pellentesque Ligula Fringilla</h2>\n    <div class=\"card-subtitle\">by Malinda Hollaway on 19th June 2015 at 09:10 AM\n    </div>\n  </div>\n  <div class=\"card-block\">\n    <p>Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra.</p>\n    <a href=\"\" class=\"view-more text-left\">View Article...</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/random-post/random-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RandomPostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RandomPostComponent = (function () {
    function RandomPostComponent() {
    }
    RandomPostComponent.prototype.ngOnInit = function () {
    };
    RandomPostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-random-post',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/random-post/random-post.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RandomPostComponent);
    return RandomPostComponent;
}());

//# sourceMappingURL=C:/CityLink/src/random-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/ratings/ratings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card widget-ratings\">\n  <div class=\"card-header text-center\">\n    <h2 class=\"card-title\">Average Rating 3.0</h2>\n\n    <div class=\"widget-ratings__star\">\n      <i class=\"zmdi zmdi-star active\"></i>\n      <i class=\"zmdi zmdi-star active\"></i>\n      <i class=\"zmdi zmdi-star active\"></i>\n      <i class=\"zmdi zmdi-star\"></i>\n      <i class=\"zmdi zmdi-star\"></i>\n    </div>\n  </div>\n\n  <div class=\"card-block\">\n    <div class=\"widget-ratings__item\">\n      <div class=\"float-left\">1 <i class=\"zmdi zmdi-star\"></i></div>\n      <div class=\"float-right\">20</div>\n\n      <div class=\"widget-ratings__progress\">\n        <div class=\"progress bg-wa\">\n          <div class=\"progress-bar bg-warning\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"widget-ratings__item\">\n      <div class=\"float-left\">2 <i class=\"zmdi zmdi-star\"></i></div>\n      <div class=\"float-right\">45</div>\n\n      <div class=\"widget-ratings__progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar bg-warning\" style=\"width: 45%\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"widget-ratings__item\">\n      <div class=\"float-left\">3 <i class=\"zmdi zmdi-star\"></i></div>\n      <div class=\"float-right\">60</div>\n\n      <div class=\"widget-ratings__progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar bg-warning\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"widget-ratings__item\">\n      <div class=\"float-left\">4 <i class=\"zmdi zmdi-star\"></i></div>\n      <div class=\"float-right\">78</div>\n\n      <div class=\"widget-ratings__progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar bg-warning\" style=\"width: 78%\" aria-valuenow=\"78\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"widget-ratings__item\">\n      <div class=\"float-left\">5 <i class=\"zmdi zmdi-star\"></i></div>\n      <div class=\"float-right\">52</div>\n\n      <div class=\"widget-ratings__progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar bg-warning\" style=\"width: 52%\" aria-valuenow=\"52\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/ratings/ratings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-ratings__star {\n  font-size: 1.5rem;\n  color: #dedede;\n  margin: 0.5rem 0 0; }\n  .widget-ratings__star .active {\n    color: #ffc107; }\n\n.widget-ratings__item {\n  padding: 0.5rem 0; }\n  .widget-ratings__item::after {\n    display: block;\n    content: \"\";\n    clear: both; }\n  .widget-ratings__item .float-left,\n  .widget-ratings__item .float-right {\n    font-size: 1.15rem; }\n  .widget-ratings__item .float-left .zmdi {\n    font-size: 1.5rem;\n    vertical-align: top;\n    color: #ffc107;\n    position: relative;\n    top: 0.15rem;\n    margin-left: 0.35rem; }\n  .widget-ratings__item:last-child {\n    padding-bottom: 0; }\n\n.widget-ratings__progress {\n  overflow: hidden;\n  padding: 0.6rem 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/ratings/ratings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingsComponent = (function () {
    function RatingsComponent() {
    }
    RatingsComponent.prototype.ngOnInit = function () {
    };
    RatingsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-ratings',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/ratings/ratings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/ratings/ratings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingsComponent);
    return RatingsComponent;
}());

//# sourceMappingURL=C:/CityLink/src/ratings.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/recent-posts/recent-posts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h2 class=\"card-title\">Recent Posts</h2>\n        <small class=\"card-subtitle\">Venenatis portauam Inceptos ameteiam</small>\n    </div>\n\n    <div class=\"listview listview--hover\">\n        <a *ngFor=\"let recentPostData of recentPostData\" class=\"listview__item listview__item--hover\">\n            <img [src]=\"recentPostData.avatar\" class=\"listview__img\" alt=\"\">\n\n            <div class=\"listview__content\">\n                <h3 class=\"listview__heading\">{{ recentPostData.user }}</h3>\n                <p>{{ recentPostData.post }}</p>\n            </div>\n        </a>\n\n        <a href=\"\" class=\"view-more\">View All Posts</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/recent-posts/recent-posts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentPostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentPostsComponent = (function () {
    function RecentPostsComponent() {
        this.recentPostData = [
            {
                user: 'David Villa Jacobs',
                post: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis lobortis sapien non posuere',
                avatar: './assets/demo/img/profile-pics/1.jpg'
            },
            {
                user: 'Candice Barnes',
                post: 'Quisque non tortor ultricies, posuere elit id, lacinia purus curabitur.',
                avatar: './assets/demo/img/profile-pics/2.jpg'
            },
            {
                user: 'Jeannette Lawson',
                post: 'Donec congue tempus ligula, varius hendrerit mi hendrerit sit amet. Duis ac quam sit amet leo feugiat iaculis',
                avatar: './assets/demo/img/profile-pics/3.jpg'
            },
            {
                user: 'Darla Mckinney',
                post: 'Duis tincidunt augue nec sem dignissim scelerisque. Vestibulum rhoncus sapien sed nulla aliquam lacinia',
                avatar: './assets/demo/img/profile-pics/4.jpg'
            },
            {
                user: 'Rudolph Perez',
                post: 'Phasellus a ullamcorper lectus, sit amet viverra quam. In luctus tortor vel nulla pharetra bibendum',
                avatar: './assets/demo/img/profile-pics/5.jpg'
            },
        ];
    }
    RecentPostsComponent.prototype.ngOnInit = function () {
    };
    RecentPostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-recent-posts',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/recent-posts/recent-posts.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RecentPostsComponent);
    return RecentPostsComponent;
}());

//# sourceMappingURL=C:/CityLink/src/recent-posts.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/recent-signups/recent-signups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-inverse widget-signups\">\n  <div class=\"card-header\">\n    <h2 class=\"card-title\">Most Recent Signups</h2>\n    <small class=\"card-subtitle\">Magna cursus malesuada lacinia</small>\n\n    <div class=\"actions actions--inverse\">\n      <div dropdown>\n        <span dropdownToggle><i class=\"zmdi zmdi-more-vert\"></i></span>\n        <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n          <a [routerLink]=\"['/widgets']\" class=\"dropdown-item\">Refresh</a>\n          <a [routerLink]=\"['/widgets']\" class=\"dropdown-item\">Manage Widgets</a>\n          <a [routerLink]=\"['/widgets']\" class=\"dropdown-item\">Settings</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"widget-signups__chart mt-2\">\n      <sparkline [options]=\"signupChartOptions\" [dataset]=\"signupChartData\"></sparkline>\n    </div>\n  </div>\n\n  <div class=\"widget-signups__list\">\n    <a *ngFor=\"let signupData of signupData\" [routerLink]=\"['/widgets']\" >\n      <div *ngIf=\"!signupData.avatar\" class=\"avatar-char\">{{ signupData.letter }}</div>\n      <img *ngIf=\"signupData.avatar\" class=\"avatar-img\" [src]=\"signupData.avatar\" alt=\"\">\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/recent-signups/recent-signups.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-signups {\n  background-color: #607D8B; }\n  .widget-signups .card-header {\n    background-color: rgba(255, 255, 255, 0.08); }\n\n.widget-signups__list {\n  text-align: center;\n  padding: 2rem; }\n  .widget-signups__list > a {\n    vertical-align: top;\n    margin: 4px 2px;\n    display: inline-block; }\n  .widget-signups__list .avatar-char {\n    background-color: rgba(255, 255, 255, 0.1);\n    color: #FFFFFF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/recent-signups/recent-signups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentSignupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentSignupsComponent = (function () {
    function RecentSignupsComponent() {
        this.signupChartOptions = {
            type: 'line',
            width: '100%',
            height: 50,
            lineColor: 'rgba(255, 255, 255, 0.8)',
            fillColor: 'rgba(0,0,0,0)',
            lineWidth: 1,
            maxSpotColor: '#fff',
            minSpotColor: '#fff',
            spotColor: '#fff',
            spotRadius: 4,
            highlightSpotColor: '#fff',
            highlightLineColor: '#fff'
        };
        this.signupChartData = [9, 4, 6, 5, 6, 4, 5, 7, 9, 3, 6, 5, 9];
        this.signupData = [
            {
                name: 'Clint Hugh',
                letter: 'C',
                avatar: './assets/demo/img/profile-pics/1.jpg'
            },
            {
                name: 'Roydon Jem',
                letter: 'R',
                avatar: ''
            },
            {
                name: 'Wynne John',
                letter: 'W',
                avatar: ''
            },
            {
                name: 'Nicholas Roydon',
                letter: 'N',
                avatar: './assets/demo/img/profile-pics/2.jpg'
            },
            {
                name: 'Wat Shaw',
                letter: 'W',
                avatar: './assets/demo/img/profile-pics/3.jpg'
            },
            {
                name: 'Devereux Brad',
                letter: 'D',
                avatar: ''
            },
            {
                name: 'Fulk Delmar',
                letter: 'F',
                avatar: ''
            },
            {
                name: 'Silver Mathew',
                letter: 'S',
                avatar: ''
            },
            {
                name: 'Geffrey Cortney',
                letter: 'G',
                avatar: ''
            },
            {
                name: 'Lonny Dustin',
                letter: 'L',
                avatar: ''
            },
            {
                name: 'Jaycob Ronny',
                letter: 'J',
                avatar: './assets/demo/img/profile-pics/4.jpg'
            },
            {
                name: 'Alvin Norman',
                letter: 'A',
                avatar: './assets/demo/img/profile-pics/5.jpg'
            },
            {
                name: 'Malcom Dutch',
                letter: 'M',
                avatar: ''
            },
            {
                name: 'Cole Ferdinand',
                letter: 'C',
                avatar: ''
            },
            {
                name: 'Pierce Colin',
                letter: 'P',
                avatar: ''
            },
            {
                name: 'Archibald Frederick',
                letter: 'A',
                avatar: ''
            },
            {
                name: 'Sydney Troy',
                letter: 'S',
                avatar: ''
            },
            {
                name: 'Benji Braxton',
                letter: 'B',
                avatar: './assets/demo/img/profile-pics/6.jpg'
            },
            {
                name: 'Chesley Donny',
                letter: 'C',
                avatar: ''
            },
            {
                name: 'Nate Vere',
                letter: 'N',
                avatar: ''
            },
            {
                name: 'Sammie Roy',
                letter: 'S',
                avatar: ''
            },
            {
                name: 'Sebastian Erik',
                letter: 'S',
                avatar: ''
            }, {
                name: 'Maria Mack',
                letter: 'M',
                avatar: ''
            },
            {
                name: 'Sylvanus Delano',
                letter: 'S',
                avatar: './assets/demo/img/profile-pics/7.jpg'
            }
        ];
    }
    RecentSignupsComponent.prototype.ngOnInit = function () {
    };
    RecentSignupsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-recent-signups',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/recent-signups/recent-signups.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/recent-signups/recent-signups.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RecentSignupsComponent);
    return RecentSignupsComponent;
}());

//# sourceMappingURL=C:/CityLink/src/recent-signups.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        <h2 class=\"card-title\">Ongoing Tasks</h2>\n        <small class=\"card-subtitle\">Maecenas seddiam eget risusvarius blandit</small>\n    </div>\n\n    <div class=\"listview\">\n        <a href=\"\" class=\"listview__item\">\n            <div class=\"listview__content\">\n                <div class=\"listview__heading\">HTML5 Validation Report</div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </a>\n\n        <a href=\"\" class=\"listview__item\">\n            <div class=\"listview__content\">\n                <div class=\"listview__heading\">Google Chrome Extension</div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-warning\" style=\"width: 43%\" aria-valuenow=\"43\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </a>\n\n        <a href=\"\" class=\"listview__item\">\n            <div class=\"listview__content\">\n                <div class=\"listview__heading\">Social Intranet Projects</div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-success\" style=\"width: 20%\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </a>\n\n        <a href=\"\" class=\"listview__item\">\n            <div class=\"listview__content\">\n                <div class=\"listview__heading\">Bootstrap Admin Template</div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-info\" style=\"width: 60%\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </a>\n\n        <a href=\"\" class=\"listview__item\">\n            <div class=\"listview__content\">\n                <div class=\"listview__heading\">Youtube Client App</div>\n\n                <div class=\"progress\">\n                    <div class=\"progress-bar bg-danger\" style=\"width: 80%\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n            </div>\n        </a>\n\n        <a href=\"\" class=\"view-more\">View All Tasks</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/tasks/tasks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TasksComponent = (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-tasks',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/tasks/tasks.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());

//# sourceMappingURL=C:/CityLink/src/tasks.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/todo-lists/todo-lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card todo\">\n    <div class=\"card-header\">\n        <h2 class=\"card-title\">Todo lists</h2>\n        <small class=\"card-subtitle\">Venenatis portauam Inceptos ameteiam</small>\n    </div>\n\n    <div class=\"listview\">\n        <div *ngFor=\"let todoListData of todoListData\" class=\"listview__item\">\n            <label class=\"custom-control custom-control--char todo__item\">\n                <input class=\"custom-control-input\" type=\"checkbox\" value=\"\" checked=\"{{ todoListData.checked }}\">\n                <span class=\"custom-control--char__helper\"><i class=\"{{ todoListData.color }}\">{{ todoListData.letter }}</i></span>\n                <div class=\"todo__info\">\n                    <span>{{ todoListData.todo }}</span>\n                    <small>{{ todoListData.venue }}</small>\n                </div>\n\n                <div class=\"listview__attrs\">\n                    <span>{{ todoListData.category }}</span>\n                    <span>{{ todoListData.priority }}</span>\n                </div>\n            </label>\n\n            <div class=\"actions listview__actions\">\n                <div class=\"dropdown actions__item\">\n                    <i class=\"zmdi zmdi-more-vert\" data-toggle=\"dropdown\"></i>\n                    <div class=\"dropdown-menu dropdown-menu-right\">\n                        <a class=\"dropdown-item\" href=\"\">Mark as completed</a>\n                        <a class=\"dropdown-item\" href=\"\">Delete</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <a href=\"\" class=\"view-more\">View More</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/todo-lists/todo-lists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".todo__item {\n  padding-left: 4.5rem;\n  display: block; }\n  .todo__item small {\n    display: block;\n    font-size: 0.95rem;\n    margin-top: 0.2rem; }\n  .todo__item .custom-control-input:checked ~ .todo__info {\n    text-decoration: line-through; }\n  .todo__item .custom-control-input:checked ~ .custom-control--char__helper > i {\n    background-color: #e9e9e9 !important; }\n  .todo__item .custom-control-input:checked ~ .custom-control--char__helper:after {\n    color: #5E5E5E; }\n\n.todo__info > span {\n  color: #333; }\n\n.todo__info > small {\n  color: #9c9c9c; }\n\n.todo__labels > a {\n  color: #ffc107;\n  border: 2px solid #ffdb6d;\n  border-radius: 2px;\n  padding: 0.35rem 0.8rem;\n  display: inline-block;\n  margin: 0 0.1rem 0.4rem;\n  transition: color 300ms, border-color 300ms; }\n  .todo__labels > a:hover {\n    color: #edb100; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/todo-lists/todo-lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListsComponent = (function () {
    function TodoListsComponent() {
        this.todoListData = [
            {
                letter: 'F',
                todo: 'Fivamus sagittis lacus vel augue laoreet rutrum faucibus dolor',
                venue: 'Today at 8.30 AM',
                category: '#Messages',
                priority: '!!!',
                checked: 'checked',
                color: 'bg-amber'
            },
            {
                letter: 'N',
                todo: 'Nullam id dolor id nibh ultricies vehicula ut id elit',
                venue: 'Today at 12.30 PM',
                category: '#Clients',
                priority: '!!',
                checked: 'checked',
                color: 'bg-light-blue'
            },
            {
                letter: 'C',
                todo: 'Cras mattis consectetur purus sit amet fermentum',
                venue: 'Tomorrow at 10.30 AM',
                category: '#Clients',
                priority: '!!',
                completed: '',
                color: 'bg-purple'
            },
            {
                letter: 'I',
                todo: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet',
                venue: '05/08/2017 at 08.00 AM',
                category: '#Server',
                priority: '!',
                completed: '',
                color: 'bg-lime'
            },
            {
                letter: 'P',
                todo: 'Praesent commodo cursus magnavel scelerisque nisl consectetur',
                venue: '10/08/2016 at 04.00 AM',
                category: '#Server',
                priority: '!!!',
                completed: '',
                color: 'bg-red'
            },
        ];
    }
    TodoListsComponent.prototype.ngOnInit = function () {
    };
    TodoListsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-todo-lists',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/todo-lists/todo-lists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/todo-lists/todo-lists.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TodoListsComponent);
    return TodoListsComponent;
}());

//# sourceMappingURL=C:/CityLink/src/todo-lists.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/visitors/visitors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card widget-visitors\">\n    <div class=\"card-header\">\n        <h2 class=\"card-title\">Realtime Visitors</h2>\n        <small class=\"card-subtitle\">Nullam dolor isnibh ultricies vehicula adipiscing</small>\n    </div>\n\n    <div class=\"card-block\">\n        <div class=\"widget-visitors__stats\">\n            <div>\n                <strong>23528</strong>\n                <small>Visitor for last 24 hours</small>\n            </div>\n            <div>\n                <strong>746</strong>\n                <small>Visitors last 30 minutes</small>\n            </div>\n        </div>\n\n        <div JqvMap [options]=\"visitorsMap\" [height]=\"250\"></div>\n    </div>\n\n    <div class=\"listview listview--bordered\">\n        <div *ngFor=\"let visitorData of visitorsData\" class=\"listview__item\">\n            <div class=\"listview__content\">\n                <p>{{ visitorData.date }}</p>\n\n                <div class=\"listview__attrs\">\n                    <span><img class=\"widget-visitors__country\" [src]=\"visitorData.img\" alt=\"\"> {{ visitorData.country }}</span>\n                    <span>{{ visitorData.browser }}</span>\n                    <span>{{ visitorData.os }}</span>\n                </div>\n            </div>\n        </div>\n\n        <a href=\"\" class=\"view-more\">View All</a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/visitors/visitors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget-visitors__stats {\n  margin: 0 -0.5rem 2rem; }\n  .widget-visitors__stats::after {\n    display: block;\n    content: \"\";\n    clear: both; }\n  .widget-visitors__stats > div {\n    border: 1px solid #ebeaea;\n    padding: 1.1rem 1.5rem;\n    float: left;\n    margin: 0 0.5rem;\n    width: calc(50% - 1rem); }\n    .widget-visitors__stats > div > strong {\n      font-size: 1.9rem;\n      font-weight: normal;\n      line-height: 100%;\n      color: #333; }\n    .widget-visitors__stats > div > small {\n      display: block;\n      color: #9c9c9c;\n      font-size: 0.9rem;\n      line-height: 100%;\n      margin-top: 0.25rem; }\n\n.widget-visitors__country {\n  height: 1rem;\n  width: 1.5rem;\n  vertical-align: top;\n  position: relative;\n  margin-right: 0.25rem;\n  left: -0.1rem;\n  border-radius: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/widgets/visitors/visitors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisitorsComponent = (function () {
    function VisitorsComponent() {
        this.visitorsMap = {
            map: 'world_en',
            backgroundColor: '#fff',
            color: '#ebebeb',
            borderColor: '#ebebeb',
            hoverOpacity: 1,
            selectedColor: '#00BCD4',
            enableZoom: false,
            showTooltip: true,
            normalizeFunction: 'polynomial',
            selectedRegions: ['US', 'EN', 'NZ', 'CN', 'JP', 'SL', 'BR', 'AU'],
            onRegionClick: function (event) {
                event.preventDefault();
            }
        };
        this.visitorsData = [
            {
                date: 'Sunday, September 4, 21:44:02 (2 Mins 56 Seconds)',
                country: 'United States',
                browser: 'Firefox',
                os: 'Mac OSX',
                img: './assets/demo/img/flags/United_States_of_America.png'
            },
            {
                date: 'Sunday, September 4, 20:21:01 (5 Mins 12 Seconds)',
                country: 'Australia',
                browser: 'Chrome',
                os: 'Android',
                img: './assets/demo/img/flags/Australia.png'
            },
            {
                date: 'Sunday, September 4, 20:21:10 (10 Mins 43 Seconds)',
                country: 'Brazil',
                browser: 'Edge',
                os: 'Windows',
                img: './assets/demo/img/flags/Brazil.png'
            },
            {
                date: 'Sunday, September 4, 20:59:04 (1 Min 02 Seconds)',
                country: 'South Korea',
                browser: 'Chrome',
                os: 'Android',
                img: './assets/demo/img/flags/South_Korea.png'
            },
            {
                date: 'Sunday, September 4, 20:58:12 (3 Min 44 Seconds)',
                country: 'Japan',
                browser: 'Chrome',
                os: 'Windows',
                img: './assets/demo/img/flags/Japan.png'
            }
        ];
    }
    VisitorsComponent.prototype.ngOnInit = function () {
    };
    VisitorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'widget-visitors',
            template: __webpack_require__("../../../../../src/app/shared/components/widgets/visitors/visitors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/components/widgets/visitors/visitors.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VisitorsComponent);
    return VisitorsComponent;
}());

//# sourceMappingURL=C:/CityLink/src/visitors.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/autosize/autosize.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_autosize_dist_autosize_js__ = __webpack_require__("../../../../autosize/dist/autosize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_autosize_dist_autosize_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_autosize_dist_autosize_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutosizeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutosizeDirective = (function () {
    function AutosizeDirective(el) {
        this.el = el;
    }
    AutosizeDirective.prototype.ngOnInit = function () {
        var initAutosize = $(this.el.nativeElement);
        autosize(initAutosize);
    };
    AutosizeDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[Autosize]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], AutosizeDirective);
    return AutosizeDirective;
    var _a;
}());

//# sourceMappingURL=C:/CityLink/src/autosize.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/dropzone/dropzone.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference types="dropzone/"/>

var DropzoneDirective = (function () {
    function DropzoneDirective(el) {
        this.el = el;
    }
    DropzoneDirective.prototype.ngOnInit = function () {
        var initDropzone = jQuery(this.el.nativeElement);
        initDropzone.dropzone({
            url: this.posturl,
            addRemoveLinks: true
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DropzoneDirective.prototype, "posturl", void 0);
    DropzoneDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[dropzone]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], DropzoneDirective);
    return DropzoneDirective;
    var _a;
}());

//# sourceMappingURL=C:/CityLink/src/dropzone.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/easy-pie-chart/easy-pie-chart.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyPieChartDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasyPieChartDirective = (function () {
    function EasyPieChartDirective(el) {
        this.el = el;
    }
    EasyPieChartDirective.prototype.ngOnInit = function () {
        var initEasyPieChart = jQuery(this.el.nativeElement);
        initEasyPieChart.find('.easy-pie-chart__value').css({
            lineHeight: (this.size) + 'px',
            fontSize: (this.size / 4) + 'px'
        });
        initEasyPieChart.easyPieChart({
            easing: 'easeOutBounce',
            barColor: '#fff',
            trackColor: 'rgba(0,0,0,0.08)',
            scaleColor: 'rgba(0,0,0,0)',
            lineCap: 'round',
            lineWidth: 2,
            size: this.size,
            animate: 3000
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EasyPieChartDirective.prototype, "size", void 0);
    EasyPieChartDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[EasyPieChart]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], EasyPieChartDirective);
    return EasyPieChartDirective;
    var _a;
}());

//# sourceMappingURL=C:/CityLink/src/easy-pie-chart.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/flot/flot.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlotDirective = (function () {
    function FlotDirective(el) {
        this.el = el;
        this.initFlot = jQuery(this.el.nativeElement);
    }
    FlotDirective.prototype.onResize = function () {
        this.initFlot.plot(this.dataset, this.options);
    };
    FlotDirective.prototype.ngOnInit = function () {
        this.initFlot.css({
            height: this.height
        });
        jQuery.plot(this.initFlot, this.dataset, this.options);
        // Tooltips
        this.initFlot.on('plothover', function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2), y = item.datapoint[1].toFixed(2);
                jQuery('.flot-tooltip').html(item.series.label + ' of ' + x + ' = ' + y).css({ top: item.pageY + 5, left: item.pageX + 5 }).show();
            }
            else {
                jQuery('.flot-tooltip').hide();
            }
        });
        jQuery('body').append('<div class="flot-tooltip" />');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FlotDirective.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FlotDirective.prototype, "dataset", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], FlotDirective.prototype, "height", void 0);
    FlotDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[flot]',
            host: {
                '(window:resize)': 'onResize($event)'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], FlotDirective);
    return FlotDirective;
    var _a;
}());

//# sourceMappingURL=C:/CityLink/src/flot.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/input-float/input-float.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputFloatDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputFloatDirective = (function () {
    function InputFloatDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.elem = this.el.nativeElement;
    }
    InputFloatDirective.prototype.onBlur = function () {
        var status = true ? this.elem.value : false;
        this.renderer.setElementClass(this.elem, 'form-control--active', status);
    };
    InputFloatDirective.prototype.ngOnInit = function () {
        if (this.elem.value) {
            this.renderer.setElementClass(this.elem, 'form-control--active', true);
        }
    };
    InputFloatDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[formControlFloat]',
            host: {
                '(blur)': 'onBlur()'
            }
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
    ], InputFloatDirective);
    return InputFloatDirective;
    var _a, _b;
}());

//# sourceMappingURL=C:/CityLink/src/input-float.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/jqvmap/jqvmap.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JqvMapDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JqvMapDirective = (function () {
    function JqvMapDirective(el) {
        this.el = el;
    }
    JqvMapDirective.prototype.ngOnInit = function () {
        var initJqvMap = jQuery(this.el.nativeElement);
        initJqvMap.css({
            height: this.height,
            width: '100%'
        });
        initJqvMap.vectorMap(this.options);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], JqvMapDirective.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], JqvMapDirective.prototype, "height", void 0);
    JqvMapDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[JqvMap]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], JqvMapDirective);
    return JqvMapDirective;
    var _a;
}());

//# sourceMappingURL=C:/CityLink/src/jqvmap.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/directives/sparklines/sparkline.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(el) {
        this.el = el;
    }
    SparklineDirective.prototype.ngOnInit = function () {
        var initSparkline = jQuery(this.el.nativeElement);
        // Initiate Sparkline Chart
        initSparkline.sparkline(this.dataset, this.options);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SparklineDirective.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineDirective.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SparklineDirective.prototype, "dataset", void 0);
    SparklineDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'sparkline'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
    ], SparklineDirective);
    return SparklineDirective;
    var _a;
}());

//# sourceMappingURL=C:/CityLink/src/sparkline.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_easy_pie_chart_easy_pie_chart_directive__ = __webpack_require__("../../../../../src/app/shared/directives/easy-pie-chart/easy-pie-chart.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_jqvmap_jqvmap_directive__ = __webpack_require__("../../../../../src/app/shared/directives/jqvmap/jqvmap.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_flot_flot_directive__ = __webpack_require__("../../../../../src/app/shared/directives/flot/flot.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_sparklines_sparkline_directive__ = __webpack_require__("../../../../../src/app/shared/directives/sparklines/sparkline.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_autosize_autosize_directive__ = __webpack_require__("../../../../../src/app/shared/directives/autosize/autosize.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_dropzone_dropzone_directive__ = __webpack_require__("../../../../../src/app/shared/directives/dropzone/dropzone.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_widgets_todo_lists_todo_lists_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/todo-lists/todo-lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widgets_pie_charts_pie_charts_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/pie-charts/pie-charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widgets_random_post_random_post_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/random-post/random-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widgets_recent_posts_recent_posts_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/recent-posts/recent-posts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widgets_visitors_visitors_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/visitors/visitors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widgets_past_days_past_days_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/past-days/past-days.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widgets_photos_photos_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/photos/photos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widgets_tasks_tasks_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/tasks/tasks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widgets_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widgets_ratings_ratings_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/ratings/ratings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widgets_profile_profile_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widgets_recent_signups_recent_signups_component__ = __webpack_require__("../../../../../src/app/shared/components/widgets/recent-signups/recent-signups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_input_float_input_float_directive__ = __webpack_require__("../../../../../src/app/shared/directives/input-float/input-float.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                // Directives
                __WEBPACK_IMPORTED_MODULE_3__directives_easy_pie_chart_easy_pie_chart_directive__["a" /* EasyPieChartDirective */],
                __WEBPACK_IMPORTED_MODULE_4__directives_jqvmap_jqvmap_directive__["a" /* JqvMapDirective */],
                __WEBPACK_IMPORTED_MODULE_5__directives_flot_flot_directive__["a" /* FlotDirective */],
                __WEBPACK_IMPORTED_MODULE_6__directives_sparklines_sparkline_directive__["a" /* SparklineDirective */],
                __WEBPACK_IMPORTED_MODULE_7__directives_autosize_autosize_directive__["a" /* AutosizeDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_dropzone_dropzone_directive__["a" /* DropzoneDirective */],
                __WEBPACK_IMPORTED_MODULE_21__directives_input_float_input_float_directive__["a" /* InputFloatDirective */],
                // Components
                __WEBPACK_IMPORTED_MODULE_14__components_widgets_past_days_past_days_component__["a" /* PastDaysComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_widgets_todo_lists_todo_lists_component__["a" /* TodoListsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_widgets_pie_charts_pie_charts_component__["a" /* PieChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_widgets_random_post_random_post_component__["a" /* RandomPostComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_widgets_recent_posts_recent_posts_component__["a" /* RecentPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_widgets_visitors_visitors_component__["a" /* VisitorsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_widgets_photos_photos_component__["a" /* PhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_widgets_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_widgets_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widgets_ratings_ratings_component__["a" /* RatingsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widgets_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widgets_recent_signups_recent_signups_component__["a" /* RecentSignupsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
            ],
            exports: [
                // Directives
                __WEBPACK_IMPORTED_MODULE_3__directives_easy_pie_chart_easy_pie_chart_directive__["a" /* EasyPieChartDirective */],
                __WEBPACK_IMPORTED_MODULE_4__directives_jqvmap_jqvmap_directive__["a" /* JqvMapDirective */],
                __WEBPACK_IMPORTED_MODULE_5__directives_flot_flot_directive__["a" /* FlotDirective */],
                __WEBPACK_IMPORTED_MODULE_6__directives_sparklines_sparkline_directive__["a" /* SparklineDirective */],
                __WEBPACK_IMPORTED_MODULE_7__directives_autosize_autosize_directive__["a" /* AutosizeDirective */],
                __WEBPACK_IMPORTED_MODULE_8__directives_dropzone_dropzone_directive__["a" /* DropzoneDirective */],
                __WEBPACK_IMPORTED_MODULE_21__directives_input_float_input_float_directive__["a" /* InputFloatDirective */],
                // Components
                __WEBPACK_IMPORTED_MODULE_14__components_widgets_past_days_past_days_component__["a" /* PastDaysComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_widgets_todo_lists_todo_lists_component__["a" /* TodoListsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_widgets_pie_charts_pie_charts_component__["a" /* PieChartsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_widgets_random_post_random_post_component__["a" /* RandomPostComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_widgets_recent_posts_recent_posts_component__["a" /* RecentPostsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_widgets_visitors_visitors_component__["a" /* VisitorsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_widgets_photos_photos_component__["a" /* PhotosComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_widgets_tasks_tasks_component__["a" /* TasksComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_widgets_contacts_contacts_component__["a" /* ContactsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widgets_ratings_ratings_component__["a" /* RatingsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widgets_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widgets_recent_signups_recent_signups_component__["a" /* RecentSignupsComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=C:/CityLink/src/shared.module.js.map

/***/ }),

/***/ "../../../../../src/assets/images/ciudad.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ciudad.cf80c70ee37347dfee7a.png";

/***/ }),

/***/ "../../../../autosize/dist/autosize.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Autosize 3.0.21
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		factory(exports, module);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, mod);
		global.autosize = mod.exports;
	}
})(this, function (exports, module) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : (function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			'delete': function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	})();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function (name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = ta.clientWidth;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			var originalHeight = ta.style.height;
			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = 'auto';

			var endHeight = ta.scrollHeight + heightOffset;

			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				ta.style.height = originalHeight;
				return;
			}

			ta.style.height = endHeight + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight !== styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = (function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map['delete'](ta);
		}).bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function (el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function (el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	module.exports = autosize;
});

/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/component-loader.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_triggers__ = __webpack_require__("../../../../ngx-bootstrap/utils/triggers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/content-ref.class.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoader; });



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    // todo: appendChild to element or document.querySelector(this.container)
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_triggers__["a" /* listenToTriggers */])(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            if (this._viewContainerRef) {
                var viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([viewRef_1.rootNodes], viewRef_1);
            }
            var viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var modalContentInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers.concat([content]), this._injector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_2__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText(null, "" + content)]]);
    };
    return ComponentLoader;
}());
//# sourceMappingURL=component-loader.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/component-loader.factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.class.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoaderFactory; });



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ApplicationRef"], },
    ]; };
    return ComponentLoaderFactory;
}());
//# sourceMappingURL=component-loader.factory.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/content-ref.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
//# sourceMappingURL=content-ref.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/component-loader/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.class.js");
/* unused harmony reexport ComponentLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/component-loader.factory.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/content-ref.class.js");
/* unused harmony reexport ContentRef */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownContainerComponent; });


var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state, cd) {
        var _this = this;
        this._state = _state;
        this.cd = cd;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
            _this.cd.markForCheck();
            _this.cd.detectChanges();
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], },
    ]; };
    return BsDropdownContainerComponent;
}());
//# sourceMappingURL=bs-dropdown-container.component.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownMenuDirective; });


var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());
//# sourceMappingURL=bs-dropdown-menu.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownToggleDirective; });


var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.disabled',] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
        'onDocumentClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());
//# sourceMappingURL=bs-dropdown-toggle.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownConfig; });

/** Default dropdown configuration */
var BsDropdownConfig = (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownConfig.ctorParameters = function () { return []; };
    return BsDropdownConfig;
}());
//# sourceMappingURL=bs-dropdown.config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__ = __webpack_require__("../../../../ngx-bootstrap/utils/ng2-bootstrap-config.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownDirective; });







var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "_showInline", {
        get: function () {
            return !this.container;
        },
        enumerable: true,
        configurable: true
    });
    ;
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .filter(function (value) { return value === true; })
            .subscribe(function (value) { return _this.hide(); }));
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            if (!this._inlinedMenu) {
                this._state.dropdownMenu
                    .then(function (dropdownMenu) {
                    _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
                });
            }
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */]],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__["a" /* BsDropdownConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], },
    ]; };
    BsDropdownDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDropdownDirective;
}());
//# sourceMappingURL=bs-dropdown.directive.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader__ = __webpack_require__("../../../../ngx-bootstrap/component-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownModule; });









var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule, providers: [
                __WEBPACK_IMPORTED_MODULE_1__component_loader__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__["a" /* BsDropdownState */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__["a" /* BsDropdownConfig */], useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    BsDropdownModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    BsDropdownModule.ctorParameters = function () { return []; };
    return BsDropdownModule;
}());
//# sourceMappingURL=bs-dropdown.module.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownState; });

var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());
//# sourceMappingURL=bs-dropdown.state.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/dropdown/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_dropdown_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.directive.js");
/* unused harmony reexport BsDropdownDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_menu_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-menu.directive.js");
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_dropdown_toggle_directive__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-toggle.directive.js");
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown-container.component.js");
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_state__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.state.js");
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_config__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.config.js");
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/bs-dropdown.module.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/positioning/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/ng-positioning.js");
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__("../../../../ngx-bootstrap/positioning/positioning.service.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/positioning/ng-positioning.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/positioning/positioning.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__("../../../../ngx-bootstrap/positioning/ng-positioning.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositioningService; });


var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());
//# sourceMappingURL=positioning.service.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/facade/browser.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return document; });
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/ng2-bootstrap-config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__("../../../../ngx-bootstrap/utils/facade/browser.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/trigger.class.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
//# sourceMappingURL=trigger.class.js.map

/***/ }),

/***/ "../../../../ngx-bootstrap/utils/triggers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__("../../../../ngx-bootstrap/utils/trigger.class.js");
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;

var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
//# sourceMappingURL=triggers.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var filter_1 = __webpack_require__("../../../../rxjs/operator/filter.js");
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "../../../../sweetalert2/dist/sweetalert2.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v6.10.1
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  customClass: '',
  target: 'body',
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onOpen: null,
  onClose: null,
  useRejections: true
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousWindowKeyDown: null,
  previousActiveElement: null,
  previousBodyPadding: null

  /*
   * Add modal + overlay to DOM
   */
};var init = function init(params) {
  // Clean up the old modal if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
  }

  if (typeof document === 'undefined') {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var modal = getModal();
  var input = getChildByClass(modal, swalClasses.input);
  var file = getChildByClass(modal, swalClasses.file);
  var range = modal.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(modal, swalClasses.select);
  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(modal, swalClasses.textarea);

  input.oninput = function () {
    sweetAlert.resetValidationError();
  };

  input.onkeydown = function (event) {
    setTimeout(function () {
      if (event.keyCode === 13 && params.allowEnterKey) {
        event.stopPropagation();
        sweetAlert.clickConfirm();
      }
    }, 0);
  };

  file.onchange = function () {
    sweetAlert.resetValidationError();
  };

  range.oninput = function () {
    sweetAlert.resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    sweetAlert.resetValidationError();
    range.previousSibling.value = range.value;
  };

  select.onchange = function () {
    sweetAlert.resetValidationError();
  };

  checkbox.onchange = function () {
    sweetAlert.resetValidationError();
  };

  textarea.oninput = function () {
    sweetAlert.resetValidationError();
  };

  return modal;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getModal = function getModal() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
};

var getIcons = function getIcons() {
  var modal = getModal();
  return modal.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.from(getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addClass = function addClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.add(className);
  });
};

var removeClass = function removeClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.remove(className);
  });
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jqeury $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  window.onkeydown = states.previousWindowKeyDown;
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (x && y) {
      // IE has no scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// JavaScript Debounce Function
// Simplivied version of https://davidwalsh.name/javascript-debounce-function
var debounce = function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    var later = function later() {
      timeout = null;
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var modalParams = _extends({}, defaultParams);
var queue = [];
var swal2Observer = void 0;

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
}

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  // If a custom element is set, determine if it is valid
  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var modal = void 0;
  var oldModal = getModal();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the modal
  if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
    modal = init(params);
  } else {
    modal = oldModal || init(params);
  }

  for (var param in params) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
  }

  // Set modal width
  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

  modal.style.padding = params.padding + 'px';
  modal.style.background = params.background;
  var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Custom Class
  modal.className = swalClasses.modal;
  if (params.customClass) {
    addClass(modal, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass(confirmButton, swalClasses.styled);
    addClass(cancelButton, swalClasses.styled);
  } else {
    removeClass(confirmButton, swalClasses.styled);
    removeClass(cancelButton, swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(modal, swalClasses.noanimation);
  } else {
    addClass(modal, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
  }
};

/*
 * Animations
 */
var openModal = function openModal(animation, onComplete) {
  var container = getContainer();
  var modal = getModal();

  if (animation) {
    addClass(modal, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(modal, swalClasses.hide);
  } else {
    removeClass(modal, swalClasses.fade);
  }
  show(modal);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass(document.documentElement, swalClasses.shown);
  addClass(document.body, swalClasses.shown);
  addClass(container, swalClasses.shown);
  fixScrollbar();
  iOSfix();
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args[0] === undefined) {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, modalParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        params.inputValidator = function (email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
      }

      if (params.input === 'url' && params.inputValidator === null) {
        params.inputValidator = function (url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var modal = getModal();

  return new Promise(function (resolve, reject) {
    // Close on timer
    if (params.timer) {
      modal.timeout = setTimeout(function () {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('timer');
        } else {
          resolve({ dismiss: 'timer' });
        }
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(modal, swalClasses[inputType]);
        case 'checkbox':
          return modal.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return modal.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(modal, swalClasses.input);
      }
    };

    // Get the value of the modal input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
          sweetAlert.closeModal(params.onClose);
          resolve(preConfirmValue || value);
        }, function (error$$1) {
          sweetAlert.hideLoading();
          if (error$$1) {
            sweetAlert.showValidationError(error$$1);
          }
        });
      } else {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          resolve(value);
        } else {
          resolve({ value: value });
        }
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                params.inputValidator(inputValue, params.extraParams).then(function () {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  confirm(inputValue);
                }, function (error$$1) {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  if (error$$1) {
                    sweetAlert.showValidationError(error$$1);
                  }
                });
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            sweetAlert.closeModal(params.onClose);
            if (params.useRejections) {
              reject('cancel');
            } else {
              resolve({ dismiss: 'cancel' });
            }
          }
          break;
        default:
      }
    };

    var buttons = modal.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing modal by close button
    getCloseButton().onclick = function () {
      sweetAlert.closeModal(params.onClose);
      if (params.useRejections) {
        reject('close');
      } else {
        resolve({ dismiss: 'close' });
      }
    };

    // Closing modal by overlay click
    container.onclick = function (e) {
      if (e.target !== container) {
        return;
      }
      if (params.allowOutsideClick) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('overlay');
        } else {
          resolve({ dismiss: 'overlay' });
        }
      }
    };

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;
      var keyCode = e.keyCode || e.which;

      if ([9, 13, 32, 27, 37, 38, 39, 40].indexOf(keyCode) === -1) {
        // Don't do work on keys we don't care about.
        return;
      }

      var targetElement = e.target || e.srcElement;

      var focusableElements = getFocusableElements(params.focusCancel);
      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
      for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
        if (targetElement === focusableElements[_i4]) {
          btnIndex = _i4;
          break;
        }
      }

      // TAB
      if (keyCode === 9) {
        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if (keyCode === 27 && params.allowEscapeKey === true) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('esc');
        } else {
          resolve({ dismiss: 'esc' });
        }
      }
    };

    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
      states.previousWindowKeyDown = window.onkeydown;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass(buttonsWrapper, swalClasses.loading);
      removeClass(modal, swalClasses.loading);
      modal.removeAttribute('aria-busy');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Set modal min-height to disable scrolling inside the modal
    sweetAlert.recalculateHeight = debounce(function () {
      var modal = getModal();
      if (!modal) {
        return;
      }
      var prevState = modal.style.display;
      modal.style.minHeight = '';
      show(modal);
      modal.style.minHeight = modal.scrollHeight + 1 + 'px';
      modal.style.display = prevState;
    }, 50);

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);
      sweetAlert.recalculateHeight();

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(modal, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(modal, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(modal, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(modal, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(modal, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(modal, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(modal, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(modal, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openModal(params.animation, params.onOpen);

    if (!params.allowEnterKey) {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    } else if (params.focusCancel && isVisible(cancelButton)) {
      cancelButton.focus();
    } else if (params.focusConfirm && isVisible(confirmButton)) {
      confirmButton.focus();
    } else {
      setFocus(-1, 1);
    }

    // fix scroll
    getContainer().scrollTop = 0;

    // Observe changes inside the modal and adjust height
    if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
      swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
      swal2Observer.observe(modal, { childList: true, characterData: true, subtree: true });
    }
  });
};

/*
 * Global function to determine if swal2 modal is shown
 */
sweetAlert.isVisible = function () {
  return !!getModal();
};

/*
 * Global function for chaining sweetAlert modals
 */
sweetAlert.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert(queue[i]).then(function (result) {
          queueResult.push(result);
          step(i + 1, callback);
        }, function (dismiss) {
          resetQueue();
          reject(dismiss);
        });
      } else {
        resetQueue();
        resolve(queueResult);
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current modal in queue
 */
sweetAlert.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a modal to the queue
 */
sweetAlert.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a modal from the queue
 */
sweetAlert.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
  var container = getContainer();
  var modal = getModal();
  if (!modal) {
    return;
  }
  removeClass(modal, swalClasses.show);
  addClass(modal, swalClasses.hide);
  clearTimeout(modal.timeout);

  resetPrevState();

  var removeModalAndResetState = function removeModalAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass(document.documentElement, swalClasses.shown);
    removeClass(document.body, swalClasses.shown);
    undoScrollbar();
    undoIOSfix();
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(modal, swalClasses.hide)) {
        removeModalAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removeModalAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = function () {
  var modal = getModal();
  if (!modal) {
    sweetAlert('');
  }
  modal = getModal();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass(buttonsWrapper, swalClasses.loading);
  addClass(modal, swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  modal.setAttribute('aria-busy', true);
  modal.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
* Set default params for each popup
* @param {Object} userParams
*/
sweetAlert.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  for (var param in userParams) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
      delete userParams[param];
    }
  }

  _extends(modalParams, userParams);
};

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = function () {
  modalParams = _extends({}, defaultParams);
};

sweetAlert.noop = function () {};

sweetAlert.version = '6.10.1';

sweetAlert.default = sweetAlert;

return sweetAlert;

})));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ })

});
//# sourceMappingURL=0.chunk.js.map