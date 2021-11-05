export default class ListView{
    domStr = [
        { name : 'container', selector : '.list'},
    ];

    linkDOMElements(){
        this.dom = this.domStr.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {});
    }
    constructor(){
        this.linkDOMElements();
    }

    render = list => {
        const listHTML = list.map(this.renderCard);
        this.dom.container.insertAdjacentHTML('beforeend', listHTML);
    }

    renderCard = ({ id, name, icon, amount}) => {
        return `<div class="widget">
        <div class="weatherIcon">
            ${ icon }
        </div>
        <div class="weatherInfo">
          <div class="temperature"><span>${ name }</span></div>
          <div class="description">    
            <div class="weatherCondition"></div>    
            <div class="place"></div>
          </div>
        </div>
        <div class="date">${ amount }</div>
        </div>`
    }
}