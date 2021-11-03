export default class ExchangeView{
    domStr = [
        { name : 'name',    selector : '.exch-name'},
        { name : 'buySale',    selector : '.exch-buy-sale'}
    ];

    constructor(){
        this.linkDOMElements();
    }

    linkDOMElements = () => {
        this.dom = this.domStr.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {});
    }

    render = ({ ccy, base_ccy, buy, sale }) => {
        this.dom.name.textContent = `${ ccy }/${ base_ccy }`;
        this.dom.buySale.textContent = `${ buy }/${ sale }`;
    }
}