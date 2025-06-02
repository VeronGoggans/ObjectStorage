import { pageTitle, pageSubtitle } from "../Application.js";


export class SharedWithMePage extends HTMLElement {
    constructor() {
        super();
    }   

    connectedCallback() 
    {
        this.render();        
    }

    render()
    {
        this.innerHTML = this.#template();
        pageTitle.textContent = 'Shared With Me';
    }


    #template()
    {
        return `
            <div class="shared-with-me-table">
                <div class="shared-with-me-header">
                    <p class="soft">#</p>
                    <p class="soft">Name</p>
                    <p class="soft">Owner</p>
                    <p class="soft">Date & Time</p>
                </div>
                <div class="shared-with-me-content">
                    <shared-item></shared-item>
                    <shared-item></shared-item>
                    <shared-item></shared-item>
                    <shared-item></shared-item>
                    <shared-item></shared-item>
                    <shared-item></shared-item>
                    
                </div>
            </div>
        `
    }
}