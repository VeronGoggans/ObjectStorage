import { pageTitle } from "../Application.js";

export class NotificationsPage extends HTMLElement {
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
        pageTitle.textContent = 'Notifications';
    }


    #template()
    {
        return `
            <div class="notifications flex-column">
                <user-notification></user-notification>
                <app-notification></app-notification>
                <user-notification></user-notification>
            </div>
        `
    }
}