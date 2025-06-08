import { pageTitle, pageSubtitle, modalWrapper } from "../Application.js";
import { ModalComponentNames } from "../enums/Enums.js";


export class MyBucketsPage extends HTMLElement {
    constructor() {
        super();
    }   

    connectedCallback() 
    {
        this.render();
        this.#elements();
        this.#events();        
    }

    render()
    {
        this.innerHTML = this.#template();
        pageTitle.textContent = 'My Buckets';
    }


    #template()
    {
        return `
           <button class="add-bucket-btn btn2">Add bucket</button>
            <div class="my-buckets-table">
                <div class="my-buckets-header">
                    <p></p>
                    <p class="soft">#</p>
                    <p class="soft">Name</p>
                    <p class="soft">Shared with</p>
                    <p class="soft">Capacity</p>
                    <p class="soft">Size</p>
                    <p class="soft">Date & Time</p>
                </div>
                <div class="my-buckets-content">
                    <bucket-item></bucket-item>
                    <bucket-item></bucket-item>
                    <bucket-item></bucket-item>
                    <bucket-item></bucket-item>
                    <bucket-item></bucket-item>
                </div>
            </div>
        `
    }

    #elements()
    {   
        this.addBucketButton = document.querySelector('.add-bucket-btn');
    }

    #events()
    {
        this.addBucketButton.addEventListener('click', () => modalWrapper.addModal(ModalComponentNames.BucketModal));
    }   
}