// TODO: add fabric method
export class Select {
    /**
     *
     * @param selector - Element selector after which will be added select element
     * @param options - config object with params:
     *                                    placeholder - default placeholder
     *                                    data - array of objects in the format {id, value}
     */
    constructor(selector, options) {
        this.options = options;
        this.element = document.querySelector(selector);
        this.selectedId = null;

        this.#render();
        this.#setup();
    }

    open() {
        this.element.classList.add('open');
    }


    // TODO: add logic to close on click to window
    close() {
        this.element.classList.remove('open');
    }


    #render() {
        const {placeholder, data} = this.options;
        this.element.classList.add('select');
        this.element.innerHTML = getSelectTemplate(placeholder, data);
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.element.addEventListener('click', this.clickHandler)
        // for cache in memory
        this.currentValue = this.element.querySelector('[data-type="current"]');
    }

    // TODO: refactor to strategy pattern
    clickHandler(event) {
        const {type} = event.target.dataset;

        switch (type) {
            case 'value':
                this.toggle();
                break;
            case 'item':
                const id = event.target.dataset.id;
                this.select(id);
        }
    }

    get isOpen() {
        return this.element.classList.contains('open');
    }

    /**
     *
     * @returns id of the currently selected item
     */
    get current() {
        return this.options.data.find(item => item.id === this.selectedId);
    }

    /**
     *
     * @param id - the id of the element we want to select
     */
    select(id) {
        this.selectedId = id;
        this.currentValue.textContent = this.current.value;

        // TODO: refactor logic to be able to add multi-select by checkboxes
        this.element.querySelectorAll('[data-type="item"]').forEach(item => {
            item.classList.remove('selected');
        });
        this.element.querySelector(`[data-id='${id}']`).classList.add('selected');

        this.close();
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }


    /**
     *  remove select element from DOM and remove all listeners
     */
    destroy() {
        this.element.removeEventListener('click', this.clickHandler);
        this.element.innerHTML = '';
    }

}
// TODO: extract to templates into module
// TODO: add icon to placeholder
const getSelectTemplate = (_placeholder, data = []) => {
    const placeholder = _placeholder ?? 'placeholder';

    const items = data.map(item => {
        return `<li class="select-item" data-type="item" data-id="${item.id}">${item.value}</li>`;
    });

    return `<div class="select-value" data-type="value">
                <span data-type="current">${placeholder}</span>
            </div>
            <div class="select-dropdown">
                <ul class="select-list">
                    ${items.join('')}
                </ul>
            </div>`;
}