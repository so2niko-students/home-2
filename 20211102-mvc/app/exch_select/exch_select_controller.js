import ExchSelectView from "./exch_select_view.js";
import Observer from "../common/observer.js";

export default class ExchSelectController{
    constructor(){
        this.view = new ExchSelectView(this.onSelect);
    }

    onSelect = () => {
        const currencyName = this.view.getSelectVal();
        console.log('selected', currencyName);
        Observer.notify(Observer.events.onSelectCurInfTbl, currencyName);
    }
}