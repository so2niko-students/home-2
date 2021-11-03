export default class ExchangeModel{
    url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

    getExchange = async () => {
        const resp = await fetch(this.url);
        this.data = await resp.json();
        const uahusd = this.getCurrency();
        return uahusd;
    }

    getCurrency = (curr = 'USD') => {
        const currUp = curr.toUpperCase();
        return this.data.find(({ ccy }) => ccy === currUp);
    }

}