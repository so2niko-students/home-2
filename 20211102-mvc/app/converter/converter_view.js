import View from '../common/view.js';

export default class ConverterView extends View{
    domStr = [
        { name : 'input', selector : '.converter-inp'},
        { name : 'select', selector : '.converter-select'},
        { name : 'amount', selector : '.converter-amount'},
        { name : 'input', selector : '.converter-inp'},
    ];
    constructor(onConvert){
        super();
        this.baseRender();
        this.linkDOMElements();

        this.dom.input.addEventListener('input', onConvert);
        this.dom.select.addEventListener('input', onConvert);

    }
    baseRender = () => {
        const htmlText = `<div class="weatherIcon">
            <input type="number" class="converter-inp">
            <select class="converter-select">
                <option value="usd">usd</option>
                <option value="eur">eur</option>
                <option value="rur">rur</option>
                <option value="btc">btc</option>
            </select>
        </div>
        <div class="weatherInfo">
            <div class="temperature"><span></span></div>
            <div class="description">    
                <div class="weatherCondition converter-amount"></div>    
                <div class="place"></div>
            </div>
        </div>
        <div class="date">UAH</div>`;
        document.body.querySelector('.converter-container').insertAdjacentHTML('afterbegin', htmlText);
    }

    getData = () => {
        return {
            currency : this.dom.select.value,
            count : this.dom.input.value
        }
    }

    renderExch = data => {
        this.dom.amount.textContent = data;
    }
}