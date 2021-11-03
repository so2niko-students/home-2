import ExchangeModel from "./exchange_model.js";
import ExchangeView from "./exchange_view.js";

export default class ExchangeController{
    constructor(){
        this.model = new ExchangeModel();
        this.view = new ExchangeView();
    }

    init = async () => {
        const data = await this.model.getExchange();

        this.view.render(data);
    }

    onSelectCurrency = (currency) => {
        const data = this.model.getCurrency(currency);
        this.view.render(data);
    }
}