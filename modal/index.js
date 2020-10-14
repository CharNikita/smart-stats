import {Modal} from './source/modal.js';


const modal = new Modal('#modal', {
    title: "title",
    closable: true,
});

modal.open()