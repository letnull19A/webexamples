namespace Project.UI 
{
    export class Menu {

        private isOpen : boolean = false;
        private menu_button : HTMLElement;
        private menu_block : HTMLElement;
        private states = ["fa-bars", "fa-times"];
        private menuStates = ["hide", "show"];

        get isopen() { return this.isOpen; }

        constructor(button : HTMLElement, block : HTMLElement) 
        {
            this.menu_block = block;
            this.menu_button = button;
            if (this.menu_block == null || this.menu_button == null) console.error('Error! [initialization]');
        }

        public Toggle() 
        {   

            if ((this.menu_block == null) || (this.menu_button == null)) console.error('Error [toggle]');

            this.menu_button?.classList.remove(this.states[this.isOpen ? 1 : 0]);
            this.menu_button?.classList.add(this.states[this.isOpen ? 0 : 1]);
            this.menu_block?.classList.remove(this.menuStates[this.isOpen ? 1 : 0]);
            this.menu_block?.classList.add(this.menuStates[this.isOpen ? 0 : 1]);
            this.isOpen = !this.isOpen;
        }
    }
}