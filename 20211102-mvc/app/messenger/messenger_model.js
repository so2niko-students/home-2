import { tgBase, tgToken, tgChatId } from '../common/config.js';

export default class MessengerModel{
    sendMsg = msg => {
        const url = `${ tgBase }${ tgToken }/sendMessage?parse_mode=HTML&chat_id=${ tgChatId }&text=${ msg }`;

        fetch(url);
    }
}

// const mess = new MessengerModel();
// const msg = encodeURIComponent(`<b>Msg: 7</b> 
// <i>Name</i>: Nick 
// text: Hello`);

// console.log(msg);
// mess.sendMsg(msg);