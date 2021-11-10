import Observer from '../common/observer.js';
import MessengerModel from './messenger_model.js';

export default class MessengerController{
    constructor(){
        this.model = new MessengerModel();
        Observer.subscribe(Observer.events.sendMsgToTG, this.onSendMsg);
    }

    onSendMsg = msg => {
        this.model.sendMsg(msg);
    }
}