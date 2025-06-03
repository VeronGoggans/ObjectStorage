import { pageTitle } from "../Application.js";


export class HomePage extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback()
    {
        this.render();
        this.#elements();
    }


    render()
    {
        this.innerHTML = this.#template();
        pageTitle.textContent = 'Welcome to HomeCloud!';
    }


    #template()
    {
        return `
            <div class="home-header">
                <div class="searchbar">
                    <i id="search-icon" class="bi bi-search"></i>
                    <input type="text" placeholder="Search for files, buckets, or users...">
                    <p class="searchbar-keybinding soft">Ctrl+Y</p>
                </div>
            </div>
            <div class="content"></div>
        `
    }

    #elements()
    {
        
    }
}