export class Modal {

    constructor(selector, options) {
        this.options = options;
        this.element = document.querySelector(selector);

        this.#setup();
        this.#render();
    };

    open() {
        this.element.classList.add('open');
    };

    close() {
        this.element.classList.remove('open');
    };

    addComponent(component) {
        this.element.querySelector('[data-body]').appendChild(component);
    };

    destroy() {
        this.element.parentNode.removeChild(this.element);
        this.element.removeEventListener('click', this.#clickListener);
    };

    #setup() {
        this.element.addEventListener('click', this.#clickListener);
    };

    #render() {
        this.element.classList.add('modal');
        this.element.innerHTML = this.#getModalTemplate();
        this.#makeFooter(this.options.footerButtons);
    };

    #clickListener = event => {
        if (event.target.dataset.close) {
            this.close();
        }
    }

    #makeFooter(buttons = []) {
        for (const button of buttons) {
            this.element.querySelector('[data-footer]').appendChild(this.#makeButton(button));
        }
    }

    //  TODO: add default style
    #makeButton(btn) {
        const button = document.createElement('button');
        button.innerText = btn.name ?? 'name';
        button.addEventListener('click', btn.handler ?? new Function());
        return button;
    }

    #getModalTemplate() {
        return `<div class="modal-overlay" data-close="true">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">${this.options.title ?? 'Title'}</span>
                        ${this.options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                    </div>
                    <div class="modal-body" data-body></div>
                    <div class="modal-footer" data-footer></div>
                </div>
            </div>`
    }
}



