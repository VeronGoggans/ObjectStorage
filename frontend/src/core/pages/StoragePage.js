import { pageTitle } from "../Application.js";


export class StoragePage extends HTMLElement {
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
        pageTitle.textContent = 'Storage Overview';
    }


    #template()
    {
        return `
            <div class="storage-headers flex-column">
                <h4>450GB</h4>
                <div class="storage-usage-bar">
                    <div class="document-usage"></div>
                    <div class="image-usage"></div>
                    <div class="video-usage"></div>
                    <p class="usage-tag">160GB used</p>
                </div>
            </div>
            <div class="storage-types flex-column">
                <div class="storage-type document-type">
                    <div class="color-blob"></div>
                    <p>Documents</p>
                </div>
                <div class="storage-type image-type">
                    <div class="color-blob"></div>
                    <p>Images</p>
                </div>
                <div class="storage-type video-type">
                    <div class="color-blob"></div>
                    <p>Video's</p>
                </div>
            </div>
        `
    }
}