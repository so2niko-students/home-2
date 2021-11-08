import ConverterContoller from "./converter/converter_controller.js";
import ExchangeController from "./exchange/exchange_controller.js";
import ExchSelectController from "./exch_select/exch_select_controller.js";
import ListController from "./list/list_contoller.js";
import WeatherController from "./weather/weather_controller.js";

const weather = new WeatherController();
const exchange = new ExchangeController();
const exchSelect = new ExchSelectController();
const list = new ListController();
const converter = new ConverterContoller();

weather.init();
exchange.init();
list.init();