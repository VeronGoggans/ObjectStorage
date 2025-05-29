import { router } from "../Application.js";



export class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
        this.#elements();
        this.#events();
    }


    render() 
    {
        this.innerHTML = `
            <div class="logo-container">
                <div class="logo">
                    <div class="square1"></div>
                    <div class="square2"></div>
                </div>
                <h3>HomeCloud</h3>
            </div>
            <div class="sidebar-tabs flex-column">
                <button class="tab active-tab" data-page="home"><i class="bi bi-house-fill"></i> <span>Home</span></button>
                <button class="tab" data-page="my_buckets"><i class="bi bi-bucket-fill"></i><span>My buckets</span></button>
                <button class="tab" data-page="shared_with_me"><i class="bi bi-people-fill"></i><span>Shared with me</span></button>
                <button class="tab" data-page="notifications"><i class="bi bi-bell-fill"></i><span>Notifications</span></button>
                <button class="tab" data-page="trash"><i class="bi bi-trash3-fill"></i><span>Trash</span></button>
                <button class="tab" data-page="storage"><i class="bi bi-database-fill"></i><span>Storage</span></button>
            </div>
        `
    }


    /**
     * 
     * @param { Element } tab - The tab element that was clicked. 
     */
    reRoute(tab)
    {

        this.tabs.forEach(t => t.classList.remove('active-tab'));
        tab.classList.add('active-tab');

        router.routeTo({pageId: tab.getAttribute('data-page')});
    }




    #elements() 
    {
        this.tabs = this.querySelectorAll('.tab');
    }


    #events() 
    {
        this.tabs.forEach(tab => tab.addEventListener('click', () => this.reRoute(tab)))
    }
}