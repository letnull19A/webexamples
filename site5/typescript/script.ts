window.onload = () => {
    var button_menu = document.getElementById("menu");
    var states = ["fa-bars", "fa-times"];
    var isOpen = false;

    button_menu?.addEventListener("click", () => {
        if (!isOpen) {
            button_menu?.classList.remove(states[0]);
            button_menu?.classList.add(states[1]);
        } else {
            button_menu?.classList.remove(states[1]);
            button_menu?.classList.add(states[0]);
        }

        isOpen = !isOpen;
    });
}