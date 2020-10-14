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

    };

    deleteComponent() {

    };

    destroy() {
        this.element.innerHTML = '';
    };

    #setup() {
        this.element.addEventListener('click', event => {
            if (event.target.dataset.close) {
                this.close();
            }
        })
    };

    #render() {
        this.element.classList.add('modal');
        this.element.innerHTML = this.#getModalTemplate();
    };

    #getModalTemplate() {
        return `<div class="modal-overlay" data-close="true">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">${this.options.title ?? 'Title'}</span>
                        ${this.options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                    </div>
                    <div class="modal-body">
                        
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>`
    }
}



