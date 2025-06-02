export class SharedItem extends HTMLElement {
    constructor() {
        super();
    }

    insertData(data)
    {
        this.data = data;
    }

    connectedCallback() 
    {
        this.render();
    }

    render() 
    {
        this.innerHTML = `
            <p class="index">1</p>
            <p class="item-name">Figma Designs</p>
            <div class="shared-item-owner-container">
                <div class="table-user-circle flex-center">
                    <i id="user-icon" class="bi bi-person-fill"></i>
                </div>
                <p>Sara</p>
            </div>
            <p class="date-time soft">26 April 2025 14:45</p>
        `
    }
}


export class BucketItem extends HTMLElement {
    constructor() {
        super();
    }

    insertData(data)
    {
        this.data = data;
    }

    connectedCallback() 
    {
        this.render();
        this.determineSizeColor();
    }

    render() 
    {
        this.innerHTML = `
            <input type="checkbox">
            <p class="index">1</p>
            <p class="name">Family Pictures</p>
            <div class="shared-with-container">
                <div class="table-user-circle flex-center">
                    <i id="user-icon" class="bi bi-person-fill"></i>
                </div>
            </div>
            <p class="capacity">100 GB</p>
            <p class="size">55 GB</p>
            <p class="date-time">2 May 2020 12:05</p>
        `
    }

    determineSizeColor()
    {
        const size = parseFloat(this.querySelector('.size').textContent);
        const capacity = parseFloat(this.querySelector('.capacity').textContent);
        
        if (size / capacity > 0.75) {
            this.querySelector('.size').style.color = 'var(--blue5';
        } else {
            this.querySelector('.size').style.color = 'var(--blue3';
        }
    }
}