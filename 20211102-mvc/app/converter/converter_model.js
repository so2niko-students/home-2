export default class ConverterModel{
    currencies = {};

    convert = (count, { ccy, sale }) => {
        const btcMulti = ccy === 'BTC' ? this.currencies.USD : 1;
        this.currencies[ccy] = sale;
        return count * sale * btcMulti;
    }
}