export class Modal {

    constructor(selector, options) {
        this.options = options;
        this.element = document.querySelector(selector);

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

    };

    #render() {
        this.element.classList.add('modal');
        this.element.innerHTML = this.#getModalTemplate();
    };

    #getModalTemplate() {
        return `<div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span class="modal-title">${this.options ?? 'Title'}</span>
                        ${this.options.closable ? `<span class="modal-close">&times;</span>` : ''}
                    </div>
                    <div class="modal-body">
                        
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
            </div>`
    }
}



