"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_deprecated_1 = require('@angular/router-deprecated');
var app_component_1 = require("../app.component");
var playlists_component_1 = require("../playlist/playlists.component");
var Routes = (function () {
    function Routes() {
    }
    Routes = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Home',
                component: app_component_1.AppComponent
            },
            {
                path: '/playlists',
                name: 'Playlists',
                component: playlists_component_1.Playlists
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], Routes);
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=app.route.js.map