import ExchangeModel from "./exchange_model.js";
import ExchangeView from "./exchange_view.js";
import Observer from "../common/observer.js";

export default class ExchangeController{
    constructor(){
        this.model = new ExchangeModel();
        this.view = new ExchangeView();
        Observer.subscribe(Observer.events.onSelectCurInfTbl, this.onSelectCurrency);
        Observer.subscribe(Observer.events.onSelectCurConvMen, this.onSelectCurrencyAnotherComp);
    }

    init = async () => {
        const data = await this.model.getExchange();

        this.view.render(data);
    }

    onSelectCurrency = (currency) => {
        const data = this.model.getCurrency(currency);
        this.view.render(data);
    }

    onSelectCurrencyAnotherComp = (curr) => {
        const data = this.model.getCurrency(curr);
        Observer.notify(Observer.events.sendCurConvMen, data);
    }
}