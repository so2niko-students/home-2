import View from '../common/view.js';

export default class ExchangeView extends View{
    domStr = [
        { name : 'name',    selector : '.exch-name'},
        { name : 'buySale',    selector : '.exch-buy-sale'}
    ];

    constructor(){
        super();
        this.linkDOMElements();
    }

    render = ({ ccy, base_ccy, buy, sale }) => {
        this.dom.name.textContent = `${ ccy }/${ base_ccy }`;
        this.dom.buySale.textContent = `${ buy }/${ sale }`;
    }
}