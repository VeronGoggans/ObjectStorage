import { pageTitle } from "../Application.js";


export class PropertiesPage extends HTMLElement {
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
        pageTitle.innerHTML = 'My Buckets <span class="page-subtitle soft">Properties</span>';
    }


    #template()
    {
        return `
           <bucket-navigation active-tab="properties-tab"></bucket-navigation>
            <div class="properties-container">
                <div class="overview-container">
                    <h3>Overview</h3>
                    <p>Objects <span class="soft">6</span></p>
                    <p>Capacity <span class="soft">100mb</span></p>
                    <p>Size <span class="soft">39.5mb</span></p>
                    <p>Storage left <span class="soft">60.5mb</span></p>
                    <p>Last accessed <span class="soft">27 April 2025  14:35</span></p>
                    <p>Created at <span class="soft">26 April 2025  14:45</span></p>
                    <p>Encryption <span class="soft">AES 256</span></p>
                    <p>Logging <button class="btn2">Enabled</button></p>
                </div>
                <div class="email-container">
                    <h3>Email notifications</h3>
                    <p class="soft">Receive emails about important events tied to your account, buckets and objects.</p>
                    <div class="email-input-container">
                        <p>Receiving email</p>
                        <input type="text" class="input1" placeholder="example@gmail.com">
                    </div>
                    <p>Emails <button class="btn2">Disabled</button></p>
                </div>
            </div>
        `
    }
}