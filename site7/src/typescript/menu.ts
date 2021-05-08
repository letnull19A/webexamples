namespace Project.UI 
{
    export class Menu {

        private isOpen : boolean = false;
        private isEnabe : boolean = false;
        private menu_button : HTMLElement;
        private menu_block : HTMLElement;
        private bodyElement : HTMLElement;
        private states = ["fa-bars", "fa-times"];
        private menuStates = ["hide", "show"];
        private statesScroll = ['hidden', 'visible'];

        get isopen() { return this.isOpen; }
        get isenable() { return this.isEnabe }

        constructor(public button : HTMLElement, public block : HTMLElement) 
        {
            this.menu_block = block;
            this.menu_button = button;
            this.bodyElement = document.getElementById('scroll') as HTMLElement;
            // Initialize
            this.isEnabe = (window.innerWidth < 1100);
        }

        public Toggle() 
        {
            this.ToggleMenu();
            // this.ToggleScrollBar();
            this.isOpen = !this.isOpen;
        }

        private ToggleScrollBar() 
        {
            if (this.isEnabe)
                this.bodyElement.style.overflowY = this.isOpen ? this.statesScroll[1] : this.statesScroll[0];
            else
                this.bodyElement.style.overflowY = this.statesScroll[1];    
        }

        private ToggleMenu() 
        {
            this.menu_button?.classList.remove(this.states[this.isOpen ? 1 : 0]);
            this.menu_button?.classList.add(this.states[this.isOpen ? 0 : 1]);
            this.menu_block?.classList.remove(this.menuStates[this.isOpen ? 1 : 0]);
            this.menu_block?.classList.add(this.menuStates[this.isOpen ? 0 : 1]);
        }

        public OnResize() 
        {
            this.isEnabe = (window.innerWidth < 1100);
            if (this.isEnabe == false) 
            {
                // this.ToggleMenu();
            }
        }
    }
}