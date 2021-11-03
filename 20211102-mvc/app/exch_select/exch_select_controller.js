import ExchSelectView from "./exch_select_view.js";

export default class ExchSelectController{
    constructor(onSelectCurrency){
        this.view = new ExchSelectView(this.onSelect);
        this.onSelectCurrency = onSelectCurrency;
    }

    onSelect = () => {
        const currencyName = this.view.getSelectVal();
        console.log('selected', currencyName);
        this.onSelectCurrency(currencyName);
    }
}