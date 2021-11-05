import View from '../common/view.js';

export default class WeatherView extends View{
    domStr = [
        { name : 'place',             selector : '.weather .place'},
        { name : 'temperature',       selector : '.weather .temperature'},
        { name : 'weatherIcon',       selector : '.weather .weatherIcon'},
        { name : 'weatherCondition',  selector : '.weather .weatherCondition'},
        { name : 'date',              selector : '.weather .date'}
    ];

    constructor(onChangeCity){
        super();
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