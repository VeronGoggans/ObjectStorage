import { modalWrapper } from "../Application.js";

export class ModalWrapper extends HTMLElement {
    constructor()
    {
        super();
    }

    connectedCallback() 
    {
        this.render();
    }

    render()
    {
        this.classList.add('flex-center')
    }

    /**
     * @param { string } modal 
     * @param { Object } modalData
     */
    addModal(modalName, modalData = null)
    {
        const modal = document.createElement(modalName);
        if (modalData !== null) {
            modal.insertData(modalData);
        }
        this.style.visibility = 'visible';
        this.appendChild(modal);
    }

    removeModal()
    {
        this.style.visibility = 'hidden';
        this.removeChild(this.firstChild);
    }
}



export class BucketModal extends HTMLElement {
    #selectedTier;

    constructor()
    {
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
        this.innerHTML = `
            <h3>New Bucket</h3>
            <p class="soft modal-explenation">Buckets will hold all your files in one place.</p>
            <input type="text" class="input1 bucket-name-input" placeholder="Bucket name">
            <p class="modal-subtitle bold">Bucket capacity</p>
            <p class="soft modal-explenation">Select a capacity for your new bucket.</p>
            <div class="bucket-tier-container">
                <div class="droplet bucket-tier flex-center" bucket-tier="Droplet">
                    <p class="tier-name">Droplet</p>
                    <p class="tier-size">1 GB</p>
                </div>
                <div class="droplet bucket-tier flex-center" bucket-tier="Stream">
                    <p class="tier-name">Stream</p>
                    <p class="tier-size">10 GB</p>
                </div>
                <div class="droplet bucket-tier flex-center" bucket-tier="Resevior">
                    <p class="tier-name">Resevior</p>
                    <p class="tier-size">50 GB</p>
                </div>
                <div class="droplet bucket-tier flex-center" bucket-tier="Ocean">
                    <p class="tier-name">Ocean</p>
                    <p class="tier-size">100 GB</p>
                </div>
            </div>
            <div class="buttons-container">
                <button class="btn2 cancel-btn">Cancel</button>
                <button class="btn2 save-btn">Create</button>
            </div>
        `
    }

    /**
     * 
     * @param { Element } tier 
     */
    selectBucketTier(tier)
    {
        // Remove the selected tier class from every tier.
        this.bucketTiers.forEach(tier => tier.classList.remove('selected-tier'));

        tier.classList.add('selected-tier');
        this.#selectedTier = tier.getAttribute('bucket-tier') || null;
        
    }

    #elements()
    {
        this.bucketNameInput = this.querySelector('.bucket-name-input');
        this.cancelButton = this.querySelector('.cancel-btn');
        this.bucketTiers = this.querySelectorAll('.bucket-tier');
        this.bucketNameInput.focus();
    }

    #events()
    {
        this.cancelButton.addEventListener('click', () => modalWrapper.removeModal());
        this.bucketTiers.forEach(tier => tier.addEventListener('click', () => this.selectBucketTier(tier)));
    }
}


export class APITokenModal extends HTMLElement {
    constructor()
    {
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
        this.innerHTML = `
            <h3>Add Token</h3>
            <p class="soft modal-explenation">Programmaticaly access and manipulate your data via the HomeCloud REST API.</p>
            <p class="modal-subtitle bold">Token writes</p>
            <input type="text" class="input1 token-access-input" placeholder="Read:Write:Delete" spellcheck="false" maxlength="17">
            <div class="buttons-container">
                <button class="btn2 cancel-btn">Cancel</button>
                <button class="btn2 add-button">Create</button>
            </div>
        `
    }

    #elements()
    {
        this.tokenAccessInput = this.querySelector('.token-access-input');
        this.cancelButton = this.querySelector('.cancel-btn');
        this.tokenAccessInput.focus();
    }

    #events()
    {
        this.cancelButton.addEventListener('click', () => modalWrapper.removeModal());
    }
}