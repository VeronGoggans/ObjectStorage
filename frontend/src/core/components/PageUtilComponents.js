import { router } from "../Application.js";



export class BucketNavigation extends HTMLElement {
    constructor() {
        super();
    }


    connectedCallback() 
    {
        this.render();
        this.#events();
    }


    render()
    {
        this.innerHTML = `
            <button class="objects-tab" page-id="objects">Objects</button>
            <button class="properties-tab" page-id="properties">Properties</button>
            <button class="permissions-tab" page-id="permissions">Permissions</button>
            <button class="access-tab" page-id="access">Access</button>
        `
        this.querySelector(`.${this.getAttribute('active-tab')}`).classList.add('active-bucket-tab');        
    }

    


    #events() 
    {
        this.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                router.routeTo({
                    pageId: button.getAttribute('page-id')
                })
            })
        })
    }
}