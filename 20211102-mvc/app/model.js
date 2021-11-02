export default class Model{
    cityAPI = 'http://ip-api.com/json';
    weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
    weatherAPIKey = 'a34a6cba2483a2867968ae2f62ed684e';

    async loadCity(){
        const ipResponse = await fetch(this.cityAPI);
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
        return `${ this.weatherAPI }?q=${ city }&appid=${ this.weatherAPIKey }`;
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