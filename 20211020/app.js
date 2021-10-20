import { city } from './main.js';
console.log(city);

//объявление функции
//declaration
function show(element){
    console.log(element);
}

//expression
const log = function(text){
    localStorage.setItem((new Date()), text);
}

const log2 = text => localStorage.setItem((new Date()), text);

//arrow
const logExt = (date, text) => {
    console.log('Log:', date, text);
    localStorage.setItem(date, text);
    return true;
}

//IIFE
(function(){
    console.log('Init');
})();

(() => {
    console.log('Init2');
})();

//?setTimeOut
// console.time('for start');
// for(let i = 0; i < 5; i += 1){
//     setTimeout(() => console.log(i), 1000 * i);
// }

// console.timeEnd('for start');

// let timerCount = 0;
// const timer = () => {
//     console.count('timer');
//     timerCount += 1;
//     if(timerCount < 5){
//         setTimeout(timer, 1000);
//     }
// }

// setTimeout(timer, 1000, );

const backTimer = data => {
    data.count -= 1;
    data.count < 0 ? data.count = 9 : null;
    console.clear();
    console.log(data.count);
    setTimeout(backTimer, 1000, data);
}

// setTimeout(backTimer, 1000, { count : 10 });

//?setInterval

const interv = setInterval(data => {
    data.count -= 1;
    data.count < 0 ? clearInterval(interv) : null;
    console.clear();
    console.log(data.count, interv);
}, 1000, { count: 10 });