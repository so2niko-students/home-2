import { cityAPI, weatherAPI, weatherAPIKey } from '../common/config.js';

export default class WeatherModel{

    async loadCity(){
        const ipResponse = await fetch(cityAPI);
        const ipData = await ipResponse.json();
        return ipData.city;
    }

    async loadWeather(city){
        const response = await fetch(this.getWeatherLink(city));
        return await response.json();
    }

    async getWeather(city = ''){
        if(city === ''){
            city = await this.loadCity();
        }
        const data = await this.loadWeather(city);
        this.data = this.formatWeather(data, city);
        return this.data;
    }

    getWeatherLink(city){
        return `${ weatherAPI }?q=${ city }&appid=${ weatherAPIKey }`;
    }

    formatWeather(data, city) {
        const months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        let now = new Date();
        data.day = now.getDate();
        data.month = months[now.getMonth()];
        data.main.tempC = Math.floor(data.main.temp) - 273;
        data.imgLink = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png">`;
        data.city = city;
        return data;
    }
}