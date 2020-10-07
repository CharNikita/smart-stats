import {Select} from './source/select.js';


const select = new Select('#select', {
    placeholder: "my placeholder",
    data: [
        {id: '1', value: 'test1'},
        {id: '2', value: 'test2'},
        {id: '3', value: 'test3'},
        {id: '4', value: 'test4'},
        {id: '5', value: 'test5'},
        {id: '6', value: 'test6'},
        {id: '7', value: 'test7'},
    ]
});