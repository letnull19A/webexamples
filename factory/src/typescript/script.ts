import ui = Project.UI;

var parallax : ui.Parallax = new ui.Parallax();

window.onload = () => {

    var button_menu = document.getElementById("menu") as HTMLElement,
        block_menu = document.getElementById("mobile-menu-id") as HTMLElement,
        menu : ui.Menu = new ui.Menu(button_menu, block_menu);

    button_menu?.addEventListener("click", () => { menu.Toggle() });

}

window.onscroll = () => {

    parallax.ParallaxEnable(0, 160);
    
}