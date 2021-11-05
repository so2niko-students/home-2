import { spreadsheet } from '../common/config.js';

export default class ListModel{

    load = async () => {
        const r = await fetch(spreadsheet);
        const text = await r.text();
        this.data = this.parseCSV(text);

        return this.data;
    }

    parseCSV = text => {
        const rows = text.split(/\r\n/);
        const table = rows.map(row => row.split(',').map(this.parseQuotes));
        const names = table.shift();
        const data = table.map(r => r.reduce((acc, val, i) => {
                acc[names[i]] = val;
                return acc;
            }, {})
            );

        return data;
    }

    parseQuotes = str => {
        return str.replace(/\"\"/g, '"').replace(/^"(.*)"$/, '$1');
    }
}