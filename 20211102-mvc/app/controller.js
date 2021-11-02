import Model from "./model.js";
import View from "./view.js";

export default class Controller{
    constructor(){
        this.model = new Model();
        this.view = new View(this.onChangeCity);
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