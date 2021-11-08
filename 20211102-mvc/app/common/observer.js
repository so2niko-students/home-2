export default class Observer{
    static listeners = {};

    static subscribe(name, listener){
        if(!this.listeners[name]){
            this.listeners[name] = [];
        }
            
        this.listeners[name].push(listener);
    }

    static unsubscribe(){

    }

    static notify(name, data){
        if(!this.listeners[name]){
            this.listeners[name] = [];
        }

        this.listeners[name].forEach(fn => fn(data));
    }

    static events = {
        onSelectCurInfTbl : 'SELECT CURRENCY. INFO TABLE',
        onSelectCurConvMen : 'SELECT CURRENCY. CONVERTER MENU',
        sendCurConvMen : 'SEND CURRENCY. CONVERTER MENU'
    }
}