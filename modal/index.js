import {Modal} from './source/modal.js';


const modal = new Modal('#modal', {
    title: "title",
    closable: true,
    components: [],
    footerButtons: [
        {
            name: 'ok', handler() {
                console.log('ok is clicked')
            }
        },
        {
            name: 'deny', handler() {
                console.log('deny is clicked')
            }
        }
    ]
});

modal.open()