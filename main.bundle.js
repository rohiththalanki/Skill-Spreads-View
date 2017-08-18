webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(data, router) {
        this.data = data;
        this.router = router;
        this.data.navshow = true;
        this.myloginform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({ 'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'repassword': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        $('body').css({
            'background-color': '#f4f4ef'
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        $('body').css({
            'background-color': '#f4f4ef'
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        $('body').css({
            'background-color': 'white'
        });
    };
    SignupComponent.prototype.signup = function () {
        if (this.myloginform.get('password').value === this.myloginform.get('repassword').value) {
            this.data.signup(this.myloginform.value);
            this.myloginform.reset();
        }
    };
    SignupComponent.prototype.logincheck = function () {
        if (this.data.isAuthenticated()) {
            this.router.navigate(['../home']);
        }
        else {
            return true;
        }
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__(170),
        styles: [__webpack_require__(162)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpreadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpreadComponent = (function () {
    function SpreadComponent(data, route) {
        this.data = data;
        this.route = route;
        this.title = 'None';
        this.type = 'None';
        this.changed = true;
        this.until = 0;
        this.data.navshow = true;
        this.datas = this.data.data;
    }
    SpreadComponent.prototype.ngAfterViewInit = function () {
        $('.ui.radio.checkbox')
            .checkbox();
        $('.selection.dropdown')
            .dropdown();
    };
    SpreadComponent.prototype.category = function (s, d) {
        if (s === void 0) { s = this.title; }
        if (d === void 0) { d = this.type; }
        this.title = s;
        this.type = d;
        if (s === 'None' && d === 'None') {
            this.datas = this.data.data;
        }
        else if (s !== 'None' && d === 'None') {
            var re_1 = [];
            this.data.data.forEach(function (r) {
                if (r.course === s) {
                    re_1.push(r);
                }
            });
            this.datas = re_1;
        }
        else if (s === 'None' && d !== 'None') {
            var re_2 = [];
            this.data.data.forEach(function (r) {
                if (r.type === d) {
                    re_2.push(r);
                }
            });
            this.datas = re_2;
        }
        else {
            var re_3 = [];
            this.data.data.forEach(function (r) {
                if (r.course === s && r.type === d) {
                    re_3.push(r);
                }
            });
            this.datas = re_3;
        }
    };
    SpreadComponent.prototype.check = function () {
        if (this.data.data && this.until == 0) {
            this.datas = this.data.data;
            console.log(this.datas);
            this.until = 1;
        }
        return true;
    };
    SpreadComponent.prototype.move = function (s) {
        var cache = [];
        var t = JSON.stringify(s, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                console.log(value);
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
        cache = null;
        this.route.navigate(['../course'], { queryParams: { id: t } });
    };
    return SpreadComponent;
}());
SpreadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-spread',
        template: __webpack_require__(171),
        styles: [__webpack_require__(163)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SpreadComponent);

var _a, _b;
//# sourceMappingURL=spread.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['../login']);
        }
        return this.authService.isAuthenticated();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n.ui.vertical.stripe {\r\n  padding: 8em 0em;\r\n}\r\n.ui.vertical.stripe h3 {\r\n  font-size: 2em;\r\n}\r\n.ui.vertical.stripe .button + h3,\r\n.ui.vertical.stripe p + h3 {\r\n  margin-top: 3em;\r\n}\r\n.ui.vertical.stripe .floated.image {\r\n  clear: both;\r\n}\r\n.ui.vertical.stripe p {\r\n  font-size: 1.33em;\r\n}\r\n.ui.vertical.stripe .horizontal.divider {\r\n  margin: 3em 0em;\r\n}\r\n\r\n.quote.stripe.segment {\r\n  padding: 0em;\r\n}\r\n.quote.stripe.segment .grid .column {\r\n  padding-top: 5em;\r\n  padding-bottom: 5em;\r\n}\r\n\r\n.footer.segment {\r\n  padding: 5em 0em;\r\n}\r\n\r\n.secondary.pointing.menu .toc.item {\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n\r\n  .secondary.pointing.menu .item,\r\n  .secondary.pointing.menu .menu {\r\n    display: none;\r\n  }\r\n  .secondary.pointing.menu .toc.item {\r\n    display: block;\r\n  }\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "\r\n\r\n.masthead {\r\n  min-height: 700px;\r\n  padding: 1em 0em;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n.masthead:before{\r\n  background-image: linear-gradient(160deg,#133d5f 0,#b71f38 100%);\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 200%;\r\n  height: 200%;\r\n  top: -50%;\r\n  left:-60%;\r\n  z-index: -1;\r\n  -webkit-transform-origin: left bottom;\r\n          transform-origin: left bottom;\r\n  -webkit-transform: skew(0deg,-20deg);\r\n          transform: skew(0deg,-20deg);\r\n}\r\n.masthead .logo.item img {\r\n  margin-right: 1em;\r\n}\r\n.masthead .ui.menu .ui.button {\r\n  margin-left: 0.5em;\r\n}\r\n.masthead h1.ui.header {\r\n  margin-top: 3em;\r\n  margin-bottom: 0em;\r\n  font-size: 4em;\r\n  font-weight: normal;\r\n}\r\n.masthead h2 {\r\n  font-size: 1.7em;\r\n  font-weight: normal;\r\n}\r\n\r\n.ui.vertical.stripe {\r\n  padding: 8em 0em;\r\n}\r\n.ui.vertical.stripe h3 {\r\n  font-size: 2em;\r\n}\r\n.ui.vertical.stripe .button + h3,\r\n.ui.vertical.stripe p + h3 {\r\n  margin-top: 3em;\r\n}\r\n.ui.vertical.stripe .floated.image {\r\n  clear: both;\r\n}\r\n.ui.vertical.stripe p {\r\n  font-size: 1.33em;\r\n}\r\n.ui.vertical.stripe .horizontal.divider {\r\n  margin: 3em 0em;\r\n}\r\n\r\n.quote.stripe.segment {\r\n  padding: 0em;\r\n}\r\n.quote.stripe.segment .grid .column {\r\n  padding-top: 5em;\r\n  padding-bottom: 5em;\r\n}\r\n\r\n.footer.segment {\r\n  padding: 5em 0em;\r\n}\r\n\r\n.secondary.pointing.menu .toc.item {\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n\r\n  .secondary.pointing.menu .item,\r\n  .secondary.pointing.menu .menu {\r\n    display: none;\r\n  }\r\n  .secondary.pointing.menu .toc.item {\r\n    display: block;\r\n  }\r\n  .masthead {\r\n    min-height: 350px;\r\n  }\r\n  .masthead h1.ui.header {\r\n    font-size: 2em;\r\n    margin-top: 1.5em;\r\n  }\r\n  .masthead h2 {\r\n    margin-top: 0.5em;\r\n    font-size: 1.5em;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "\r\n.image {\r\n  margin-top: -100px;\r\n}\r\n.column {\r\n  max-width: 450px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "\r\n.image {\r\n  margin-top: -100px;\r\n}\r\n.column {\r\n  max-width: 450px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "\r\n  <div *ngIf=\"this.data.navshow\" class=\"ui large secondary inverted pointing menu\" style=\"border: 0;padding-bottom: 1%;margin-bottom: 0;\r\n  background-image: linear-gradient(160deg,#133d5f 0,#b71f38 100%);\">\r\n    <a class=\"toc item\">\r\n      <i class=\"sidebar icon\"></i>\r\n    </a>\r\n    <a class=\"\" style=\"padding:1%\" routerLink=\"../home\"><img style=\"background-color: white\" class=\"ui small   image\" src=\"./assets/logo.png\"></a>\r\n\r\n    <div class=\"right item\">\r\n      <a class=\"item\" routerLink=\"../spread\">Spreads</a>\r\n      <a class=\"item\">Company</a>\r\n      <a class=\"item\">Careers</a>\r\n      <a routerLink=\"../profile\" class=\"item\" style=\"color: black\" *ngIf=\"data.isAuthenticated()\">Profile</a>\r\n      <a *ngIf=\"!data.isAuthenticated()\" class=\"ui item button\" style=\"background-color: #1d5f96;color:white\" routerLink=\"../login\">Log in</a>\r\n      <a *ngIf=\"data.isAuthenticated()\" class=\"ui item button\" style=\"background-color: #1d5f96;color:white\" (click)=\"logout()\">Log out</a>\r\n      <a *ngIf=\"!data.isAuthenticated()\" class=\"ui item button\" style=\"background-color:#e21745;color:white\" routerLink=\"../signup\">Sign Up</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui negative message\" *ngIf=\"data.loginerror\" style=\"margin: 0;color:red\">\r\n\r\n    <div class=\"header\" style=\"margin: 0\">\r\n      {{data.loginerror}}\r\n    </div>\r\n  </div>\r\n<router-outlet></router-outlet>\r\n\r\n  <div class=\"ui  vertical footer segment\" style=\"background-image: linear-gradient(160deg,#133d5f 0,#b71f38 100%);\">\r\n    <div class=\"ui container\">\r\n      <div class=\"ui stackable inverted divided equal height stackable grid\">\r\n        <div class=\"three wide column\">\r\n\r\n          <a class=\"\" style=\"padding:1%\" routerLink=\"../home\"><img style=\"background-color: white\" class=\"ui small   image\" src=\"./assets/logo.png\"></a>\r\n\r\n        </div>\r\n        <div class=\"three wide column\" >\r\n          <h4 class=\"ui inverted header\" >Links</h4>\r\n          <div class=\"ui inverted link list\">\r\n            <a routerLink=\"../spread\" class=\"item\" >Spreads</a>\r\n            <a routerLink=\"../spread\" class=\"item\" >Company</a>\r\n            <a routerLink=\"../spread\" class=\"item\" >Careers</a>\r\n            <a routerLink=\"../profile\" class=\"item\"  *ngIf=\"data.isAuthenticated()\">Profile</a>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"seven wide column\" >\r\n          <h4 class=\"ui inverted header\" >Connect</h4>\r\n          <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-dribbble fa-2x\"></i></a>\r\n          <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-twitter fa-2x\" ></i></a>\r\n          <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-linkedin fa-2x\"></i></a>\r\n          <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-facebook fa-2x\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment container\" style=\"margin: 4%;border: 1px solid #1d5f96\">\r\n  <div class=\"ui stackable grid\" style=\"text-align: center\">\r\n    <div class=\"four wide column\">\r\n      <img class=\"ui centered small image\" src=\"https://semantic-ui.com/images/avatar2/large/matthew.png\">\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <h1 style=\"color: #1d5f96 \">{{data.author.name}}</h1>\r\n\r\n      <h4>Worked In</h4>\r\n      <img src=\"https://s3-us-west-1.amazonaws.com/udacity-content/partner/logo-color-facebook-c5d8bda.svg\" class=\"ui centered image\">\r\n    </div>\r\n\r\n  </div>\r\n  <hr width=\"60%\">\r\n  <div style=\"padding: 3%;\">\r\n    <h2 style=\"color: #1d5f96\">Qualifications</h2>\r\n    <div style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\">\r\n      <a class=\"ui tag label\" *ngFor=\"let i of data.author.qualifications\">{{i}}</a>\r\n\r\n    </div>\r\n  <h2 style=\"color: #1d5f96\">About</h2>\r\n  <div style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\">\r\n    In 1998 {{data.author.name}} came up with the idea for Diary of a Wimpy Kid, a story about a middle-school weakling named {{data.author.name}} Heffley. {{data.author.name}} worked on his book for almost eight years before showing it to a publisher in New York.\r\n\r\n    {{data.author.name}} Kinney was born in 1971 in Maryland and attended the University of Maryland in the early 1990s. It was there that {{data.author.name}} ran a comic strip called “Igdoof” in the campus newspaper, and he knew he wanted to be a cartoonist.\r\n\r\n    However, {{data.author.name}} was not successful in getting his comic strip syndicated after college, and in 1998 he started writing down ideas for Diary of a Wimpy Kid, which he hoped to turn into a book. {{data.author.name}} worked on the book for six years before publishing it online on Funbrain.com in daily installments. To date, the online version of Diary of a Wimpy Kid has more than 80 million visits, and is typically read by more than 70,000 kids a day.\r\n\r\n    In 2006, {{data.author.name}} signed a multi-book deal with publisher Harry N. Abrams, Inc. to turn Diary of a Wimpy Kid into a print series. The first Diary of a Wimpy Kid book was published in 2007 and became an instant bestseller. Just a year later, more than 100,000 copies were in print in the United States alone. With each subsequent book, in-print numbers continue to grow exponentially both in the U.S. and abroad. There are now more than 180 million copies of the series in print worldwide.\r\n  </div>\r\n    <h2 style=\"color: #1d5f96\">Publications</h2>\r\n    <div style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\">\r\n      <div class=\"ui middle aligned divided list\">\r\n        <div class=\"item\" *ngFor=\"let i of data.author.publications\">\r\n          <div class=\"right floated content\">\r\n            <div *ngIf=\"i.type == 'book'\"  class=\"ui button\">Read</div>\r\n            <div *ngIf=\"i.type == 'course'\"  class=\"ui button\">Take Course</div>\r\n          </div>\r\n          <i *ngIf=\"i.type == 'book'\"  class=\"large book icon\"></i>\r\n          <i *ngIf=\"i.type == 'course'\" class=\"large video play icon\"></i>\r\n          <div class=\"content\">\r\n            <h2>{{i.course}}</h2>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n    <h2 style=\"color: #1d5f96\">Free Books Register</h2>\r\n    <div style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\">\r\n      <form class=\"ui form\">\r\n        <div class=\"field\">\r\n          <label>Email</label>\r\n          <input type=\"email\" name=\"email\" placeholder=\"Email\">\r\n        </div>\r\n        <div class=\"ui submit button\">Request</div>\r\n      </form>\r\n    </div>\r\n    <h2 style=\"color: #1d5f96\">Contact</h2>\r\n    <div style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\">\r\n    </div>\r\n    <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-dribbble fa-2x\"></i></a>\r\n    <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-twitter fa-2x\" ></i></a>\r\n    <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-linkedin fa-2x\"></i></a>\r\n    <a href=\"#\" style=\"padding: 2%;\"><i class=\"fa fa-facebook fa-2x\"></i></a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui segment container\" style=\"margin: 4%;border: 1px solid #1d5f96\">\r\n  <div class=\"ui stackable grid\" style=\"text-align: center\">\r\n    <div class=\"four wide column\">\r\n  <img class=\"ui fluid image\" src=\"./assets/images/{{data.course.replace(' ','')}}.jpg\">\r\n    </div>\r\n    <div class=\"ten wide column\">\r\n      <h1 style=\"color: #1d5f96 \">{{data.course}}</h1>\r\n\r\n      <div class=\"meta\" *ngIf=\"data.type == 'book'\" style=\"font-size: 140%;\">\r\n        <i class=\"{{data.type}} icon\"></i>Book\r\n      </div>\r\n      <div class=\"meta\" *ngIf=\"data.type == 'course'\" style=\"font-size: 140%;\">\r\n        <i class=\"video play icon\"></i>Course\r\n      </div>\r\n<h4>CO-CREATED  WITH</h4>\r\n      <img src=\"https://s3-us-west-1.amazonaws.com/udacity-content/partner/logo-color-facebook-c5d8bda.svg\" class=\"ui centered image\">\r\n    </div>\r\n    <div class=\"two wide column\">\r\n      <img class=\"ui centered small image\" src=\"https://semantic-ui.com/images/avatar2/large/matthew.png\">\r\n     <a (click)=\"author()\"><h4 style=\"color: #1d5f96;text-align: center\">{{data.author.name}}</h4></a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ui stackable grid\">\r\n    <div class=\"eight wide column\" *ngIf=\"data.course == 'Data Analytics'\" style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\"><p></p><p>As long as there is data, there will be data scientists needed. To the extent, that NASSCOM predicts that the analytics market in India could reach $2.3 billion by the end of 2017-18.</p><p>This Nanodegree program will equip you to be an industry-ready scientist who can mine relevant data and clearly communicate critical findings.</p><p>You’ll learn everything from cleaning some OpenStreetMap data to identifying fraud from Enron emails. We’ve built this program with expert analysts and scientists leading technology companies to ensure you master the exact skills necessary to build a career in data science.</p><p>Market leader US is expected to have a shortage of 140,000 – 190,000 analytics professionals by 2018, which will open up a huge opportunity for product and service companies in India.</p><p></p></div>\r\n    <div class=\"eight wide column\" *ngIf=\"data.course == 'Web Development'\" style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\"> <p></p><p>This Nanodegree program is the most efficient curriculum to prepare you for a job as a Full Stack Web Developer. Participants in the program will learn to build complex server-side web applications that make use of powerful relational databases to persistently store data. You'll then learn how to secure and configure your very own Linux-based server to host your applications. Finally, you'll explore the challenges in horizontally scaling an application to support thousands of users with a cloud-based application hosting provider.</p><p>You'll also have the opportunity to prepare for your new career with reviews of your online presence (resume, LinkedIn, portfolio), prepare for interviews, take part in workshops covering topics like networking and salary negotiation as well as take part in a new program facilitating job placement.</p><p></p></div>\r\n    <div class=\"eight wide column\" *ngIf=\"data.course == 'Ethical Hacking'\" style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\"><p>The Internshala Online Training Program on Hacking will be a 4 weeks training program in Hacking and Internet Security. In this training, students will learn to hack live websites. Students will practice hacking on dummy vulnerable websites developed for this course. They will be able to practice password cracking, dictionary attacks etc. and will be able to exploit vulnerabilities such as stored and reflected XSS, session hijacking, file upload vulnerability, phishing, and CSRF & file inclusion vulnerability.</p></div>\r\n    <div class=\"eight wide column\" *ngIf=\"data.course == 'Computer Networks'\" style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\"><p> In the cloud networking course, we will see what the network needs to do to enable cloud computing. We will explore current practice by talking to leading industry experts, as well as looking into interesting new research that might shape the cloud network’s future.\r\n\r\n      This course will allow us to explore in-depth the challenges for cloud networking—how do we build a network infrastructure that provides the agility to deploy virtual networks on a shared infrastructure, that enables both efficient transfer of big data and low latency communication, and that enables applications to be federated across countries and continents? Examining how these objectives are met will set the stage for the rest of the course.\r\n\r\n      This course places an emphasis on both operations and design rationale—i.e., how things work and why they were designed this way. We're excited to start the course with you and take a look inside what has become the critical communications infrastructure for many applications today.</p></div>\r\n <div class=\"eight wide column\" style=\"font-family: 'Open Sans',sans-serif,sans-serif;color: #888086\">\r\n\r\n      <span><ul class=\"features\"><li>Rich learning content</li><li>Interactive Quizzes</li><li>Taught by Industry Professionals</li><li>Self-Paced Learning</li><li>1-on-1 Coaching and Mentorship</li><li>Fast and Effective Human Feedback</li><li>Personalized Career Guidance</li><li>Tailored Project Portfolio</li><li>Coach supported forums</li></ul></span>\r\n    </div>\r\n  </div>\r\n<h1 style=\"color: #1d5f96;text-align: center\">Links</h1>\r\n  <div class=\"ui aligned divided list\" *ngIf=\"data.type == 'book'\">\r\n    <div class=\"item\">\r\n      <div class=\"right floated content\">\r\n        <div class=\"ui button\">Check</div>\r\n      </div>\r\n      <img class=\"ui tiny image\" src=\"./assets/images/flipkart.jpg\">\r\n      <div class=\"content\">\r\n        <h3>Flipkart</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <div class=\"right floated content\">\r\n        <div class=\"ui button\">Check</div>\r\n      </div>\r\n      <img class=\"ui tiny image\" src=\"./assets/images/amazon.jpeg\">\r\n      <div class=\"content\">\r\n        <h3>Amazon</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <div class=\"right floated content\">\r\n        <div class=\"ui button\">Check</div>\r\n      </div>\r\n      <img class=\"ui tiny image\" src=\"./assets/images/ebay.jpg\">\r\n      <div class=\"content\">\r\n        <h3>Ebay</h3>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"ui aligned divided list\" *ngIf=\"data.type == 'course'\">\r\n    <div class=\"item\">\r\n      <div class=\"right floated content\">\r\n        <div class=\"ui button\">Check</div>\r\n      </div>\r\n      <img class=\"ui tiny image\" src=\"./assets/images/udacity.png\">\r\n      <div class=\"content\">\r\n        <h3>Udacity</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <div class=\"right floated content\">\r\n        <div class=\"ui button\">Check</div>\r\n      </div>\r\n      <img class=\"ui tiny image\" src=\"./assets/images/udemy.png\">\r\n      <div class=\"content\">\r\n        <h3>Udemy</h3>\r\n      </div>\r\n    </div>\r\n    <div class=\"item\">\r\n      <div class=\"right floated content\">\r\n        <div class=\"ui button\">Check</div>\r\n      </div>\r\n      <img class=\"ui tiny image\" src=\"./assets/images/coursera.png\">\r\n      <div class=\"content\">\r\n        <h3>Coursera</h3>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Sidebar Menu -->\r\n<div class=\"ui vertical inverted sidebar menu\">\r\n  <a class=\"item\" routerLink=\"../spread\">Spreads</a>\r\n\r\n  <a class=\"item\">Company</a>\r\n  <a class=\"item\">Careers</a>\r\n  <a class=\"ui item button\" style=\"background-color: #1d5f96;color:white\" routerLink=\"../login\">Log in</a>\r\n  <a class=\"ui item button\" style=\"background-color: #e21745;color:white\" routerLink=\"../signup\">Sign Up</a>\r\n</div>\r\n\r\n\r\n<!-- Page Contents -->\r\n<div class=\"pusher\">\r\n  <div class=\"ui vertical masthead center aligned \" id=\"trans\">\r\n\r\n    <div class=\"ui container\">\r\n      <div class=\"ui large secondary inverted pointing menu\" style=\"border: 0\">\r\n        <a class=\"toc item\">\r\n          <i class=\"sidebar icon\"></i>\r\n        </a>\r\n        <a class=\"\" style=\"padding-top:2%;padding-right:2%;\"><img style=\"background-color: white\" class=\"ui small   image\" src=\"./assets/logo.png\"></a>\r\n\r\n        <div class=\"right item\">\r\n          <a class=\"item\" routerLink=\"../spread\">Spreads</a>\r\n\r\n          <a class=\"item\">Company</a>\r\n          <a class=\"item\">Careers</a>\r\n          <a routerLink=\"../profile\" class=\"item\" style=\"color: black\" *ngIf=\"data.isAuthenticated()\">Profile</a>\r\n          <a *ngIf=\"!data.isAuthenticated()\" class=\"ui item button\" style=\"background-color: #1d5f96;color:white\" routerLink=\"../login\">Log in</a>\r\n          <a *ngIf=\"data.isAuthenticated()\" class=\"ui item button\" style=\"background-color: #1d5f96;color:white\" (click)=\"logout()\">Log out</a>\r\n          <a *ngIf=\"!data.isAuthenticated()\" class=\"ui item button\" style=\"background-color:#e21745;color:white\" routerLink=\"../signup\">Sign Up</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui text \" style=\"padding: 7%;\">\r\n      <div class=\"ui stackable grid\">\r\n        <div class=\"ui center aligned  eight wide column\" style=\"background: url('./assets/images/1.png') center no-repeat;padding-bottom: 2%;\">\r\n          <div class=\"ui segment\" style=\"background: transparent;border: 0;margin-top: 3%;\">\r\n           <h2 style=\"text-align: center;color: white\">Sharing knowledge is first step to humanity</h2>\r\n\r\n            <h4 style=\"text-align: center;color: white\">Spread your skills because ... <br>\r\n              <span style=\"text-align: right\">Our small life is someone else's big dream</span></h4>\r\n            <button class=\"large ui button\" style=\"background-color:#e21745;color: white \" *ngIf=\"!data.isAuthenticated()\" routerLink=\"../login\">\r\n              Login\r\n            </button>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"ui center aligned  eight wide column\" style=\"background: url('./assets/images/2.png') center no-repeat\">\r\n          <div class=\"ui segment\" style=\"background: transparent;border: 0;margin-top: 3%;\">\r\n            <h2 style=\"text-align: center;color: white\">It's the will, Not the skill.</h2>\r\n\r\n            <h4 style=\"text-align: center;color: white\">We Spreaders help you to improve skills because ... <br>\r\n              <span style=\"text-align: right\">In the end we are all just humans, <br> stuck on the idea that success, <br>only succcess matters and there is no success without skills.</span></h4>\r\n            <button class=\"large ui button\" style=\"background-color:#1d5f96;color: white \" routerLink=\"../spread\">\r\n              Spreads\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <hr width=\"50%;\">\r\n  <div style=\"padding: 4%;\">\r\n  <div class=\"ui container\" >\r\n    <h1 style=\"text-align: center;font-family: 'Lobster', cursive;color: #1d5f96\"> The Spreads Advantage</h1>\r\n    <h4 style=\"text-align: center;font-family: 'Arvo', serif;\">\r\n      We Rise by Lifting Others. When a dream becomes life, Hardwork becomes obsession & Skills become a barrier, We at <b><i>SKILL SPREADS</i></b> help you to destiny.\r\n      <br> <b>Welcome to Spreads Family.</b>\r\n    </h4>\r\n  </div>\r\n  </div>\r\n  <div style=\"padding: 4%;background: url('./assets/images/3.jpg') no-repeat center center;background-size: cover\">\r\n    <div class=\"ui container center aligned\" >\r\n      <h1 style=\"text-align: center;font-family: 'Lobster', cursive;color: white\">Contact Us</h1>\r\n      <h4 style=\"text-align: center;font-family: 'Arvo', serif;color: white\">\r\n        If you have a question, we have an answer. If you need something, we’ll help you. Contact us anytime.\r\n\r\n      </h4>\r\n      <button class=\"large ui button\" style=\"background-color:#e21745;color: white \" routerLink=\"../login\">\r\n        Company\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"ui middle aligned center aligned grid\" style=\"padding: 6%;\" *ngIf=\"logincheck()\">\r\n  <div class=\"ui stacked segment column\" id=\"loginbox\">\r\n    <h2 class=\"ui   header\">\r\n\r\n      <div class=\"content\" style=\"color:#e21745\">\r\n        Log-in to your account\r\n      </div>\r\n    </h2>\r\n    <form class=\"ui large form\" [formGroup]=\"myloginform\">\r\n\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\" formControlName=\"email\" name=\"email\" placeholder=\"E-mail address\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"lock icon\"></i>\r\n            <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n        <button (click)=\"login()\" class=\"ui fluid large teal submit button\" [disabled]=\"myloginform.invalid\"  style=\"background-color: #1d5f96;border-radius:0 \">Login</button>\r\n\r\n\r\n      <div class=\"ui error message\"></div>\r\n\r\n    </form>\r\n\r\n    <div class=\"ui message\">\r\n      New to us? <a routerLink=\"../signup\">Sign Up</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr width=\"70%;\">\r\n"

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.userdet\">\r\n<div class=\"ui segment\" >\r\n\r\n<h1 style=\"text-align: center;font-family: 'Lobster', cursive;color: #1d5f96\">Profile</h1>\r\n  <div class=\"ui container comments\" style=\"margin-bottom: 2%\">\r\n\r\n    <div class=\"comment\">\r\n      <a class=\"avatar\">\r\n        <img src=\"https://semantic-ui.com/images/avatar/small/matt.jpg\">\r\n      </a>\r\n      <div class=\"content\">\r\n        <a class=\"author\">{{data.userdet.name}}</a>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <div class=\"ui container\" >\r\n    <div class=\"ui negative message\" *ngIf=\"error\">\r\n      <div class=\"header\">\r\n       {{errormessage}}\r\n      </div>\r\n      </div>\r\n\r\n<form class=\"ui form\">\r\n  <div class=\"inline fields\">\r\n    <div class=\"eight wide field\" style=\"margin: 2%;\">\r\n      <label>Name</label>\r\n      <input type=\"text\" name=\"name\" placeholder=\"Name\" [(ngModel)]=\"data.userdet.name\">\r\n    </div>\r\n    <div class=\"eight wide disabled field\" style=\"margin: 2%;\">\r\n      <label>Email</label>\r\n      <input type=\"email\" name=\"email\" placeholder=\"Email\" [(ngModel)]=\"data.userdet.email\">\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"inline fields\">\r\n    <div class=\"eight wide field\" style=\"margin: 2%;\">\r\n      <label>Companies Worked</label>\r\n      <input type=\"text\" placeholder=\"Names with comma\" name=\"company\" [(ngModel)]=\"data.userdet.company\">\r\n    </div>\r\n    <div class=\"eight wide field\" style=\"margin: 2%;\">\r\n      <label>phone</label>\r\n      <input type=\"text\" placeholder=\"Phone number\" name=\"phone\" [(ngModel)]=\"data.userdet.phone\">\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <h3>About</h3>\r\n  <div class=\"field\" style=\"margin: 2%;\">\r\n\r\n    <textarea rows=\"2\" name=\"about\" [(ngModel)]=\"data.userdet.about\"></textarea>\r\n  </div>\r\n  <h3>Qualifications</h3>\r\n  <div class=\"inline fields\">\r\n    <div class=\"eight wide field\" style=\"margin: 2%;\">\r\n\r\n      <input type=\"text\" placeholder=\"Name\" #f>\r\n      <button class=\"ui button\" (click)=\"addqual(f.value)\" style=\"background-color: #1d5f96;color: white\">Add</button>\r\n    </div>\r\n    <div class=\"eight wide field\" style=\"margin: 2%;\">\r\n      <div class=\"ui image label\" id=\"{{i+'qual'}}\" *ngFor=\"let i of data.userdet.qualifications\" style=\"background-color: #1d5f96;color: white\">\r\n\r\n        {{i}}\r\n        <i class=\"delete icon\" (click)=\"qualdelete(i)\"></i>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <h3>Publications</h3>\r\n  <div class=\"inline fields\">\r\n    <div class=\"field\">\r\n\r\n      <div class=\"ui selection dropdown\">\r\n        <input type=\"hidden\" placeholder=\"Name\" name=\"name\" #pn>\r\n        <i class=\"dropdown icon\"></i>\r\n        <div class=\"default text\">Name</div>\r\n        <div class=\"menu\">\r\n          <div class=\"item\" data-value=\"Web Development\">Web Development</div>\r\n          <div class=\"item\" data-value=\"Ethical Hacking\">Ethical Hacking</div>\r\n          <div class=\"item\" data-value=\"Computer Networks\">Computer Networks</div>\r\n          <div class=\"item\" data-value=\"Data Analytics\">Data Analytics</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui selection dropdown\">\r\n      <input type=\"hidden\" placeholder=\"Type\" name=\"type\" #pt>\r\n      <i class=\"dropdown icon\"></i>\r\n      <div class=\"default text\">Type</div>\r\n      <div class=\"menu\">\r\n        <div class=\"item\" data-value=\"book\">book</div>\r\n        <div class=\"item\" data-value=\"Course\">Course</div>\r\n\r\n      </div>\r\n    </div><div class=\"field\">\r\n    <input type=\"text\" name=\"\" placeholder=\"Links\" #pl>\r\n  </div><div class=\"field\">\r\n    <input type=\"text\" name=\"\" placeholder=\"Content\" #pc>\r\n  </div>\r\n\r\n    <button class=\"ui button\"  (click)=\"pubadd(pn.value,pt.value,pl.value,pc.value)\" style=\"background-color: #1d5f96;color:white \">Add</button>\r\n  </div>\r\n  <div class=\"ui link cards\" style=\"margin: 3%\">\r\n    <div class=\"ui raised link card\" *ngFor=\"let i of data.userdet.publications\">\r\n\r\n      <div class=\"content\">\r\n        <div class=\"header\">{{i.course}}</div>\r\n        <div class=\"meta\">\r\n          <span class=\"category\">{{i.type}}</span>\r\n        </div>\r\n        <div class=\"description\">\r\n          <p></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"extra content\">\r\n        <div class=\"right floated author\">\r\n          <button class=\"ui button\" (click)=\"pubdel(i)\" style=\"background-color: #1d5f96;color: white\">Delete</button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <button class=\"ui button\" (click)=\"save()\" style=\"background-color: #1d5f96;color: white\">Save</button>\r\n</form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"ui middle aligned center aligned grid\" style=\"padding: 3%;\" *ngIf=\"logincheck()\">\r\n    <div class=\"ui stacked segment column\" id=\"signupbox\">\r\n      <h2 class=\"ui   header\">\r\n\r\n        <div class=\"content\" style=\"color:#e21745\">\r\n         Sign-up to your account\r\n        </div>\r\n      </h2>\r\n      <form class=\"ui large form\" [formGroup]=\"myloginform\">\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\" formControlName=\"name\"  name=\"name\" placeholder=\"Name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"user icon\"></i>\r\n            <input type=\"text\" formControlName=\"email\"  name=\"email\" placeholder=\"E-mail address\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"lock icon\"></i>\r\n            <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui left icon input\">\r\n            <i class=\"lock icon\"></i>\r\n            <input type=\"password\" formControlName=\"repassword\" name=\"password\" placeholder=\"Retype your Password\">\r\n          </div>\r\n        </div>\r\n        <p style=\"color:red;text-align: left;\" *ngIf=\"myloginform.get('password').value != myloginform.get('repassword').value\">*Passwords didn't match</p>\r\n        <button class=\"ui fluid large teal submit button\" style=\"background-color: #1d5f96;border-radius: 0;\" (click)=\"signup()\">Sign-Up</button>\r\n\r\n\r\n        <div class=\"ui error message\"></div>\r\n\r\n      </form>\r\n\r\n      <div class=\"ui message\">\r\n        Already with us? <a routerLink=\"../login\">Log-In</a>\r\n      </div>\r\n\r\n  </div>\r\n</div>\r\n<hr width=\"70%;\">\r\n"

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\">\r\n  <div class=\"four wide column\" style=\"padding: 3%;\">\r\n\r\n    <h3 style=\"text-align: center\">Filter</h3>\r\n    <div class=\"ui form\">\r\n      <div class=\"field\">\r\n        <label>Category</label>\r\n        <div class=\"ui selection dropdown\">\r\n          <input type=\"hidden\" name=\"title\">\r\n          <i class=\"dropdown icon\"></i>\r\n          <div class=\"default text\">Title</div>\r\n          <div class=\"menu\">\r\n            <div class=\"item\" (click)=\"category('None')\" >All</div>\r\n            <div class=\"item\" (click)=\"category('Web Development')\" data-value=\"Web Development\">Web Development</div>\r\n            <div class=\"item\" (click)=\"category('Computer Networks')\" >Computer Networks</div>\r\n            <div class=\"item\" (click)=\"category('Data Analytics')\">Data Analytics</div>\r\n            <div class=\"item\" (click)=\"category('Ethical Hacking')\">Ethical Hacking</div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grouped fields\">\r\n        <div class=\"field\">\r\n          <div class=\"ui radio checkbox\">\r\n            <input (change)=\"category(this.title,'None')\" type=\"radio\" name=\"type\" tabindex=\"0\" class=\"hidden\">\r\n            <label>All</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui radio checkbox\">\r\n            <input (change)=\"category(this.title,'book')\" type=\"radio\" name=\"type\" tabindex=\"0\" class=\"hidden\">\r\n            <label>Books</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"ui radio checkbox\">\r\n            <input (change)=\"category(this.title,'course')\" type=\"radio\" name=\"type\" tabindex=\"0\" class=\"hidden\">\r\n            <label>Courses</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <h3 style=\"text-align: center\">OR</h3>\r\n    <div class=\"ui form\">\r\n      <div class=\"field\">\r\n        <label>Keyword Search</label>\r\n        <input type=\"text\" name=\"keyword\" placeholder=\"Keyword Search\">\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"twelve wide column\">\r\n    <h1 style=\"text-align: center;padding: 2%;color:#1d5f96;\"> Choose Your Interest </h1>\r\n    <hr width=\"50%;\">\r\n    <div class=\"ui cards\" *ngIf=\"check()\">\r\n\r\n      <div class=\"ui card\"*ngFor=\"let i of datas \"  style=\"margin: 3%;\" >\r\n        <div class=\"image\">\r\n          <img src=\"./assets/images/{{i.course.replace(' ','')}}.jpg\">\r\n        </div>\r\n        <div class=\"content\">\r\n          <div class=\"header\">{{i.course}}</div>\r\n          <div class=\"meta\" *ngIf=\"i.type == 'book'\">\r\n            <i class=\"{{i.type}} icon\"></i>Book\r\n          </div>\r\n          <div class=\"meta\" *ngIf=\"i.type == 'course'\">\r\n            <i class=\"video play icon\"></i>Course\r\n          </div>\r\n          <div class=\"description\">\r\n            <b>Author - </b> <i>{{i.author.name}}</i>\r\n          </div>\r\n        </div>\r\n        <div class=\"extra content\" style=\"padding: 0\">\r\n          <button class=\"fluid ui button\" style=\"background-color: #1d5f96;color:white\" (click)=\"move(i)\">Check Here</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<hr width=\"70%;\">\r\n"

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(87);


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = (function () {
    function DataService(router) {
        var _this = this;
        this.router = router;
        this.navshow = false;
        firebase.database().ref('details').on('value', function (snapshot) {
            var courses = [];
            var det = Object.keys(snapshot.val()).map(function (k) { return snapshot.val()[k]; });
            det.forEach(function (e) {
                e.publications.forEach(function (d) {
                    d['author'] = e;
                    courses.push(d);
                });
            });
            _this.data = courses;
        });
    }
    DataService.prototype.login = function (user) {
        var _this = this;
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function (data) {
            console.log('logged in');
            _this.getdata();
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                console.log('wrong password');
            }
            else {
                console.log('wrong password');
            }
            _this.loginerror = 'Sorry, ' + error.code;
            $('#loginbox').css({
                'border': '1px solid red'
            });
            setTimeout(function () {
                _this.loginerror = '';
            }, 5000);
        });
    };
    DataService.prototype.getdata = function () {
        var _this = this;
        var user = firebase.auth().currentUser;
        if (user) {
            firebase.database().ref().child("details").orderByChild("email").equalTo(user.email).once('value', function (snap) {
                _this.userdet = snap.val();
                _this.userkey = Object.keys(_this.userdet).map(function (k) { return k; })[0];
                _this.userdet = Object.keys(_this.userdet).map(function (k) {
                    return _this.userdet[k];
                })[0];
            });
        }
    };
    DataService.prototype.signup = function (s) {
        var _this = this;
        firebase.auth().createUserWithEmailAndPassword(s.email, s.password).catch(function (error) {
            var _this = this;
            // Handle Errors here.
            this.loginerror = 'Sorry, ' + error.code; // ...
            setTimeout(function () {
                _this.loginerror = '';
            }, 5000);
            $('#signupbox').css({
                'border': '1px solid red'
            });
        }).then(function () {
            var nee = {
                name: s.name,
                phone: '',
                links: '',
                email: s.email,
                company: '',
                about: '',
                publications: [],
                qualifications: []
            };
            firebase.database().ref('details').push(nee).then(function () {
                _this.loginerror = 'Successfully signed up ';
                setTimeout(function () {
                    _this.loginerror = '';
                }, 5000);
            });
        });
    };
    DataService.prototype.isAuthenticated = function () {
        var user = firebase.auth().currentUser;
        if (user) {
            if (!this.userdet) {
                this.getdata();
            }
            return true;
        }
        else {
            return false;
        }
    };
    DataService.prototype.logout = function () {
        var _this = this;
        console.log("asdf");
        firebase.auth().signOut().then(function () {
            _this.router.navigate(['../login']);
        }, function (error) {
            console.log(error);
        });
    };
    DataService.prototype.update = function () {
        firebase.database().ref("details/" + this.userkey).remove();
        firebase.database().ref("details").push(this.userdet);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 86:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 86;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(103);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(data) {
        this.data = data;
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');
    }
    AppComponent.prototype.logout = function () {
        this.data.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(164),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_spreads_spread_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_course_course_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_author_author_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_guard__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__(99);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_8__components_spreads_spread_component__["a" /* SpreadComponent */], __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_11__components_course_course_component__["a" /* CourseComponent */], __WEBPACK_IMPORTED_MODULE_12__components_author_author_component__["a" /* AuthorComponent */], __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__components_home_home_component__["a" /* HomeComponent */] },
                { path: 'spread', component: __WEBPACK_IMPORTED_MODULE_8__components_spreads_spread_component__["a" /* SpreadComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
                { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__["a" /* SignupComponent */] },
                { path: 'course', component: __WEBPACK_IMPORTED_MODULE_11__components_course_course_component__["a" /* CourseComponent */] },
                { path: 'author', component: __WEBPACK_IMPORTED_MODULE_12__components_author_author_component__["a" /* AuthorComponent */] },
                { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */] }
            ])
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_13__services_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorComponent = (function () {
    function AuthorComponent(datas, route) {
        this.datas = datas;
        this.route = route;
        this.datas.navshow = true;
    }
    AuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.data = JSON.parse(params['id']);
            var i = 0;
            _this.data.author.publications.forEach(function (e) {
                if (e == null) {
                    _this.data.author.publications[i] = {
                        "course": _this.data.course,
                        "type": _this.data.type
                    };
                }
            });
            console.log(params['id']);
        });
    };
    AuthorComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return AuthorComponent;
}());
AuthorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-author',
        template: __webpack_require__(165),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], AuthorComponent);

var _a, _b;
//# sourceMappingURL=author.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseComponent = (function () {
    function CourseComponent(route, datas, rou) {
        this.route = route;
        this.datas = datas;
        this.rou = rou;
        this.datas.navshow = true;
    }
    CourseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            _this.data = JSON.parse(params['id']);
            console.log(params['id']);
        });
    };
    CourseComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CourseComponent.prototype.author = function () {
        var cache = [];
        var t = JSON.stringify(this.data, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
        cache = null;
        console.log(t);
        this.rou.navigate(['../author'], { queryParams: { id: t } });
    };
    return CourseComponent;
}());
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-course',
        template: __webpack_require__(166),
        styles: [__webpack_require__(159)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], CourseComponent);

var _a, _b, _c;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(data) {
        this.data = data;
        this.data.navshow = false;
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');
    };
    HomeComponent.prototype.logout = function () {
        this.data.logout();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(167),
        styles: [__webpack_require__(160)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(13);
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
    function LoginComponent(data, router) {
        this.data = data;
        this.router = router;
        this.data.navshow = true;
        this.myloginform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({ 'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        $('body').css({
            'background-color': '#f4f4ef'
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        $('body').css({
            'background-color': '#f4f4ef'
        });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        $('body').css({
            'background-color': 'white'
        });
    };
    LoginComponent.prototype.login = function () {
        this.data.login(this.myloginform.value);
    };
    LoginComponent.prototype.logincheck = function () {
        if (this.data.isAuthenticated()) {
            this.router.navigate(['../home']);
        }
        else {
            return true;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(168),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
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
    function ProfileComponent(data) {
        this.data = data;
        this.error = false;
        this.errormessage = '';
        this.data.navshow = true;
        this.data.getdata();
        this.profileform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            'phone': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            'links': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])
        });
    }
    ProfileComponent.prototype.ngAfterViewInit = function () {
        $('.selection.dropdown')
            .dropdown();
    };
    ProfileComponent.prototype.qualdelete = function (i) {
        this.data.userdet.qualifications.splice(this.data.userdet.qualifications.indexOf(i), 1);
    };
    ProfileComponent.prototype.addqual = function (i) {
        var _this = this;
        if (i == '') {
            this.error = true;
            this.errormessage = 'please check the input';
            setTimeout(function () {
                _this.error = false;
            }, 5000);
        }
        else {
            if ("qualifications" in this.data.userdet) {
                this.data.userdet.qualifications.push(i);
            }
            else {
                this.data.userdet["qualifications"] = [];
                this.data.userdet.qualifications.push(i);
            }
        }
    };
    ProfileComponent.prototype.pubdel = function (i) {
        this.data.userdet.publications.splice(this.data.userdet.publications.indexOf(i), 1);
    };
    ProfileComponent.prototype.pubadd = function (a, b, c, d) {
        var _this = this;
        if (a == '' && b == '' && c == '' && d == '') {
            this.error = true;
            this.errormessage = 'please check the input';
            setTimeout(function () {
                _this.error = false;
            }, 5000);
        }
        else {
            if ("publications" in this.data.userdet) {
                this.data.userdet.publications.push({
                    'course': a,
                    'type': b,
                    'link': c,
                    'content': d
                });
            }
            else {
                this.data.userdet["publications"] = [];
                this.data.userdet.publications.push({
                    'course': a,
                    'type': b,
                    'link': c,
                    'content': d
                });
            }
        }
    };
    ProfileComponent.prototype.save = function () {
        this.data.update();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(169)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
/**
 * Created by harsh on 14-08-2017.
 */
//# sourceMappingURL=profile.component.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.bundle.js.map