import { pageTitle } from "../Application.js";


export class PermissionsPage extends HTMLElement {
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
        pageTitle.innerHTML = 'My Buckets <span class="page-subtitle soft">Permissions</span>';
    }


    #template()
    {
        return `
           <bucket-navigation active-tab="permissions-tab"></bucket-navigation>
            <div class="permissions-container">
                <div class="accounts-container">
                    <h3>Accounts<button class="btn2 give-access-btn">Give access</button></h3>
                    <p class="soft explenation">Below are all the Home Cloud accounts that have access to this bucket.</p>
                    <div class="accounts-table">
                        <div class="accounts-table-header">
                            <p class="soft">Account</p>
                            <p class="soft">Persmissions</p>
                            <p class="soft">Status</p>
                        </div>
                        <div class="accounts-table-content">
                            <account-permission></account-permission>
                        </div>
                    </div>
                </div>
                <div class="image-container">
                    <img src="../../../public/permissions_image.svg">
                </div>
            </div>
        `
    }
}