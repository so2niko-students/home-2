import Observer from "../common/observer.js";
import ConverterModel from "./converter_model.js";
import ConverterView from "./converter_view.js";

export default class ConverterContoller{
    constructor(){
        this.view = new ConverterView(this.onConvert);
        this.model = new ConverterModel();
        Observer.subscribe(Observer.events.sendCurConvMen, this.onReceiveExchangeData);
    }

    onConvert = () => {
        const { currency } = this.view.getData();
        Observer.notify(Observer.events.onSelectCurConvMen, currency);
    }

    onReceiveExchangeData = (exch) => {
        const { count } = this.view.getData();
        const data = this.model.convert(count, exch);
        this.sendConverData(data, exch, count);
        this.view.renderExch(data);
    }

    sendConverData = (data, { ccy, base_ccy }, count) => {
        const str = `${ count } ${ ccy } = ${ data } ${ base_ccy }`;
        Observer.notify(Observer.events.sendMsgToTG, str);
    }
}