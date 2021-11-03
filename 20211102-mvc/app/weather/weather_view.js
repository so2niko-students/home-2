export default class WeatherView{
    domStr = [
        { name : 'place',             selector : '.weather .place'},
        { name : 'temperature',       selector : '.weather .temperature'},
        { name : 'weatherIcon',       selector : '.weather .weatherIcon'},
        { name : 'weatherCondition',  selector : '.weather .weatherCondition'},
        { name : 'date',              selector : '.weather .date'}
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