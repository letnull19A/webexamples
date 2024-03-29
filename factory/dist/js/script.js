"use strict";
var ui = Project.UI;
window.onload = () => {
    var button_menu = document.getElementById("menu"), block_menu = document.getElementById("mobile-menu-id"), parallax = new ui.Parallax(), menu = new ui.Menu(button_menu, block_menu);
    button_menu === null || button_menu === void 0 ? void 0 : button_menu.addEventListener("click", () => { menu.Toggle(); });
    window.onscroll = () => {
        parallax.ParallaxEnable(0, 160);
    };
    window.onresize = () => {
        menu.OnResize();
    };
};
