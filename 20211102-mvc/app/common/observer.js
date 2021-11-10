export default class Observer{
    static listeners = {};

    static set listener(name){
        if(!this.listeners[name]){
            this.listeners[name] = [];
        }
    }
    
    static subscribe(name, listener){
        this.listener = name;
        this.listeners[name].push(listener);
    }

    static unsubscribe(name, fn){
        this.listener = name;
        this.listeners[name] = this.listeners[name].filter(cb => cb != fn);
    }

    static notify(name, data){
        this.listener = name;
        this.listeners[name].forEach(fn => fn(data));
    }

    static events = {
        onSelectCurInfTbl   : 'SELECT CURRENCY. INFO TABLE',
        onSelectCurConvMen  : 'SELECT CURRENCY. CONVERTER MENU',
        sendCurConvMen      : 'SEND CURRENCY. CONVERTER MENU',
        sendMsgToTG         : 'SEND MESSAGE TO TELEGRAM'
    }
}