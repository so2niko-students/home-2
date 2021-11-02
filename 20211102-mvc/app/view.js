export default class View{
    domStr = [
        { name : 'place',             selector : '.place'},
        { name : 'temperature',       selector : '.temperature'},
        { name : 'weatherIcon',       selector : '.weatherIcon'},
        { name : 'weatherCondition',  selector : '.weatherCondition'},
        { name : 'date',              selector : '.date'}
    ];

    linkDOMElements(){
        this.dom = this.domStr.reduce((acc, { name, selector }) => {
            acc[name] = document.querySelector(selector);
            return acc;
        }, {});
    }

    constructor(onChangeCity){
        this.linkDOMElements();
        this.dom.place.addEventListener('blur', onChangeCity);
    }

    render(data){
        this.dom.place.textContent = data.city;
        this.dom.temperature.textContent = `${ data.main.tempC }°`;
        this.dom.weatherIcon.innerHTML = data.imgLink;
        this.dom.weatherCondition.textContent = data.weather[0].description;
        this.dom.date.textContent = `${ data.day } ${ data.month }`;
    }

    getPlace(){
        return this.dom.place.textContent;
    }
}