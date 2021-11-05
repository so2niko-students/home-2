import { privat } from '../common/config.js';

export default class ExchangeModel{

    getExchange = async () => {
        const resp = await fetch(privat);
        this.data = await resp.json();
        const uahusd = this.getCurrency();
        return uahusd;
    }

    getCurrency = (curr = 'USD') => {
        const currUp = curr.toUpperCase();
        return this.data.find(({ ccy }) => ccy === currUp);
    }

}