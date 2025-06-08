import { pageTitle, modalWrapper } from "../Application.js";
import { ModalComponentNames } from "../enums/Enums.js";


export class AccessPage extends HTMLElement {
    constructor() {
        super();
    }   

    connectedCallback() 
    {
        this.render();  
        this.#element();
        this.#events();      
    }

    render()
    {
        this.innerHTML = this.#template();
        pageTitle.innerHTML = 'My Buckets <span class="page-subtitle soft">Access</span>';
    }


    #template()
    {
        return `
            <bucket-navigation active-tab="access-tab"></bucket-navigation>
            <div class="access-container">
                <div class="tokens-container">
                    <h3>API Tokens <button class="btn2 add-token-btn">Add Token</button></h3>
                    <p class="soft explenation">Create API tokens to programmatically interact with your data.</p>
                    
                    <div class="tokens-table">
                        <div class="tokens-table-header">
                            <p class="soft">Token</p>
                            <p class="soft">Persmissions</p>
                            <p class="soft">Created at</p>
                        </div>
                        <div class="tokens-table-content">
                            <api-token-item></api-token-item>
                        </div>
                    </div>
                </div>
                <div class="image-container">
                    <img src="../../../public/security_image.svg" alt="">
                </div>
            </div>
        `
    }

    #element()
    {
        this.addTokenButton = this.querySelector('.add-token-btn');
    }

    #events()
    {
        this.addTokenButton.addEventListener('click', () => modalWrapper.addModal(ModalComponentNames.ApiTokenModal));
    }
}