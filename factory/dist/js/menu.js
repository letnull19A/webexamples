"use strict";
var Project;
(function (Project) {
    var UI;
    (function (UI) {
        class Menu {
            constructor(button, block) {
                this.button = button;
                this.block = block;
                this.isOpen = false;
                this.states = ["fa-bars", "fa-times"];
                this.menuStates = ["hide", "show"];
                this.menu_block = block;
                this.menu_button = button;
            }
            get isopen() { return this.isOpen; }
            Toggle() {
                var _a, _b, _c, _d;
                (_a = this.menu_button) === null || _a === void 0 ? void 0 : _a.classList.remove(this.states[this.isOpen ? 1 : 0]);
                (_b = this.menu_button) === null || _b === void 0 ? void 0 : _b.classList.add(this.states[this.isOpen ? 0 : 1]);
                (_c = this.menu_block) === null || _c === void 0 ? void 0 : _c.classList.remove(this.menuStates[this.isOpen ? 1 : 0]);
                (_d = this.menu_block) === null || _d === void 0 ? void 0 : _d.classList.add(this.menuStates[this.isOpen ? 0 : 1]);
                this.isOpen = !this.isOpen;
            }
        }
        UI.Menu = Menu;
    })(UI = Project.UI || (Project.UI = {}));
})(Project || (Project = {}));
