export class ProjectItem {
    constructor ({name, task, image, tags, link}) {
        this.name = name;
        this.task = task;
        this.image = image;
        this.tags = tags;
        this.link = link;
    }

    generateItem(index) {
        const item = document.createElement('li');
        item.classList = 'projects__item';
        item.setAttribute('data-index', index);
        item.setAttribute('data-aos', 'fade-up');
        item.setAttribute('data-aos-id', 'super-duper');

        const template = `
            <div class="item">
                <img class="item__image" src=${this.image} alt=${this.name}>
                <h3 class="item__title">${this.name}</h3>
                <p class="item__desc">${this.task}</p>
            </div>`;

        item.innerHTML = template;
        return item;
    }

    generateModal() {
        const modal = document.querySelector('.modal');
        const template = `
        <button class="modal__close"></button>
        <img src=${this.image} alt=${this.name}/>
        <div class="modal__wrapper">
            <h3 class="modal__title">${this.name}</h3>
            <p class="modal__desc">${this.task}</p>
            <p class="modal__tags">${this.tags}</p>
            <a class="button modal__link" href=${this.link}>View</a>
        </div>`;
        modal.classList.add('show');
        return modal.innerHTML = template;
    }
}

{/* <section class="modal">
        <img src="./src/img/mole.png" alt="">
        <div class="modal__wrapper">
            <h3 class="modal__title">Singolo</h3>
            <p class="modal__desc">The layout of the page according to the design. Using JavaScript to create an
                adaptive menu, slider, and switch tabs in the Portfolio block</p>
            <p class="modal__tags">#vscode</p>
            <a class="button modal__link" href="">View project</a>
        </div>
    </section> */}