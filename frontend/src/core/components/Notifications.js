export class UserNotification extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = this.#template();
    }

    #template() {
        return `
            <div class="user-circle flex-center">
                <i class="bi bi-person-fill"></i>
            </div>
            <div class="notification">
                <div class="unread-indicator"></div>
                <p class="notify-date soft">2 hours ago</p>
                <p class="user-action bold">User 1 shared a document with you!</p>
                <p class="user-message">Hi, I gave you access to my design document. Feel free to take a look around</p>
            </div>
        `;
    }

}



export class AppNotification extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = this.#template();
    }

    #template() {
        return `
            <div class="unread-indicator"></div>
            <p class="notify-date">1 day ago</p>
            <p class="app-action">You are close to your storage limit!</p>
            <p class="app-message">Try to remove some unused files or clear your trash bin.</p>
        `;
    }
}