import View from '../common/view.js';

export default class ExchSelectView extends View{
    domStr = [
        { name : 'select',    selector : '#exch-select'}
    ];

    constructor(onSelect){
        super();
        this.linkDOMElements();
        this.dom.select.addEventListener('input', onSelect);
    }

    getSelectVal = () => this.dom.select.value;
}