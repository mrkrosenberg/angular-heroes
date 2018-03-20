"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mock_heroes_1 = require("./mock-heroes");
var core_1 = require("@angular/core");
var HeroService = (function () {
    function HeroService() {
        // saves HEROES as a new variable in this service so it can be manipulated without changing HEROES
        this.heroes = mock_heroes_1.HEROES;
    }
    HeroService.prototype.getHeroes = function () {
        // this will return a successful promise containing the list of heroes that is specific to this service (maniuplatable)
        return Promise.resolve(this.heroes);
    };
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    // deleteHero function expects a promise to be returned (after getHeroes is called from within)
    // and that promise to be an array of heroes. 
    HeroService.prototype.deleteHero = function (id) {
        // takes heroes, changes its value to the list of heroes after the one with specified
        // id has been filtered out
        this.heroes = this.heroes.filter(function (hero) { return hero.id !== id; });
        // returns the value from getHeroes()
        return this.getHeroes();
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map