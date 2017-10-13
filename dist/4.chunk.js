webpackJsonp([4],{

/***/ "../../../../../src/app/pages/categorias/categorias.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content content-standard\" style=\" height:100vh\">\r\n    <h1 align=\"center\">Servicios</h1>\r\n    <div class=\"card card-size card-outline-info\" style=\"margin-bottom: 20px!important;cursor: pointer;\">\r\n\r\n        <div class=\"card-body style-CardBody card\" style=\"\">\r\n\r\n            <img src=\"../../../assets/images/plomero.jpg\" class=\"imagen\" alt=\"\">\r\n        </div>\r\n        <div class=\"card-footer p-b-0 style-CardFooter\" align=\"center\" style=\"background-color: #607d8b\">\r\n            <span style=\"color: white; font-size: 26px;margin-top:50%!important;\">Plomeros</span>\r\n        </div>\r\n    </div>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/categorias/categorias.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-size {\n  height: 300px;\n  width: 300px; }\n\n.style-CardHeader {\n  height: 5px !important; }\n\n.style-CardBody {\n  height: 100%; }\n\n.style-CardFooter {\n  position: absolute;\n  text-align: center;\n  transition: height 1s, padding-top 1s;\n  height: 50px !important;\n  width: 100%;\n  bottom: 0;\n  opacity: .9; }\n\n.style-CardFooter:hover {\n  height: 100% !important;\n  width: 100% !important;\n  padding-top: 40%; }\n\n.imagen {\n  height: 235px;\n  width: 100%;\n  margin-top: 3%;\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/categorias/categorias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoriasComponent = (function () {
    function CategoriasComponent() {
    }
    CategoriasComponent.prototype.ngOnInit = function () {
    };
    CategoriasComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categorias',
            template: __webpack_require__("../../../../../src/app/pages/categorias/categorias.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/categorias/categorias.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CategoriasComponent);
    return CategoriasComponent;
}());

//# sourceMappingURL=C:/CityLink/src/categorias.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/categorias/categorias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categorias_component__ = __webpack_require__("../../../../../src/app/pages/categorias/categorias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasModule", function() { return CategoriasModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Services

var CATEGORIAS_ROUTE = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__categorias_component__["a" /* CategoriasComponent */] }
];
var CategoriasModule = (function () {
    function CategoriasModule() {
    }
    CategoriasModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__categorias_component__["a" /* CategoriasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(CATEGORIAS_ROUTE)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_alert_service__["a" /* alertService */]
            ]
        })
    ], CategoriasModule);
    return CategoriasModule;
}());

//# sourceMappingURL=C:/CityLink/src/categorias.module.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map