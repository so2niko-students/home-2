import WeatherModel from "./weather_model.js";
import WeatherView from "./weather_view.js";

export default class WeatherController{
    constructor(){
        this.model = new WeatherModel();
        this.view = new WeatherView(this.onChangeCity);
    }

    async init(){
        const data = await this.model.getWeather();
        this.view.render(data);
    }

    onChangeCity = async () => {
        const city = this.view.getPlace();
        const data = await this.model.getWeather(city);
        this.view.render(data);
    }
}