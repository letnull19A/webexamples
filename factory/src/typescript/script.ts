import ui = Project.UI;

window.onload = () => {

    var button_menu = document.getElementById("menu") as HTMLElement,
        block_menu = document.getElementById("mobile-menu-id") as HTMLElement,
        menu : ui.Menu = new ui.Menu(button_menu, block_menu);

    button_menu?.addEventListener("click", menu.Toggle);

    console.log(menu.isopen);
    
}