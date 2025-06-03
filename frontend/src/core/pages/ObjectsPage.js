import { pageTitle } from "../Application.js";


export class ObjectsPage extends HTMLElement {
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
        pageTitle.innerHTML = 'My Buckets <span class="page-subtitle soft">Objects</span>';
    }


    #template()
    {
        return `
           <bucket-navigation active-tab="objects-tab"></bucket-navigation>
            <div class="bucket-utils-container">
                <button class="btn2 add-file-btn">Add file</button>
                <button class="btn2 drop-files-btn">Drop files</button>
                <input type="text" class="input2" placeholder="Search in your bucket">
            </div>
            <div class="bucket-object-table">
                <div class="bucket-object-header">
                    <p></p>
                    <p class="soft">#</p>
                    <p class="soft">Name</p>
                    <p class="soft">Shared with</p>
                    <p class="soft">Extention</p>
                    <p class="soft">Size</p>
                    <p class="soft">Date & Time</p>
                </div>
                <div class="bucket-object-content">
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                    <object-item></object-item>
                </div>
            </div>
        `
    }
}