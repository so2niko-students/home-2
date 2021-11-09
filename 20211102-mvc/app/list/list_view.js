import { card } from './template_card.js';

export default class ListView{
    domStr = [
        { name : 'container', selector : '.list'},
    ];

    html = {};

    linkDOMElements(){
        this.dom = this.domStr.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {});
    }
    constructor(){
        this.loadTemplate();
        this.linkDOMElements();
    }

    loadTemplate = () => {
        this.html.card = card;
    }

    parser = (html, data) => {
        return Object.entries(data).reduce((acc, [name, val]) => {
            const reg = new RegExp(`{{[\\s]*${name}[\\s]*}}`, '');
            return acc.replace(reg, val);
        }, html);
    }

    render = list => {
        const listHTML = list.map(this.renderCard);
        this.dom.container.insertAdjacentHTML('beforeend', listHTML);
    }

    renderCard = (data) => {
        return this.parser(this.html.card, data);
    }
}