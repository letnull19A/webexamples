import ui = Project.UI;

window.onload = () => {

var button_menu = document.getElementById("menu") as HTMLElement,
    block_menu = document.getElementById("mobile-menu-id") as HTMLElement,
    parallax = new ui.Parallax(),
    menu = new ui.Menu(button_menu, block_menu);

    button_menu?.addEventListener("click", () => { menu.Toggle() });

    window.onscroll = () => {
        parallax.ParallaxEnable(0, 160);   
    }
    
    window.onresize = () => { 
        menu.OnResize();
    }

}