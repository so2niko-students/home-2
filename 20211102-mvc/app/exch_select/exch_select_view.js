export default class ExchSelectView{
    domStr = [
        { name : 'select',    selector : '#exch-select'}
    ];

    constructor(onSelect){
        this.linkDOMElements();
        this.dom.select.addEventListener('input', onSelect);
    }

    linkDOMElements = () => {
        this.dom = this.domStr.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {});
    }

    getSelectVal = () => this.dom.select.value;
}