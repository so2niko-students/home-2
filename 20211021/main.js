//!Loops

//while
// let i = 10;
// while(i > 0){
//     console.log(i);
//     i -= 1;
// }
//for
// let i = 10;
// for(; i;){
//     console.log(i);
//     i -= 1;
// }

//do-while
// let j = 10;
// do{
//     console.log(j);
//     j -= 1;
// }while(j > 0);

//?Party
const races = ['Human', 'Orc', 'Elf', 'Dwarv', 'Undead', 'Goblin'];
const classes = ['Warrior', 'Monk', 'Assasin', 'Rogue', 'Paladin', 'Priest', 'Mage', 'Warlock'];
const gamers = ['Nick', 'Maria', 'Alex', 'Oleg', 'Tatiana'];

const random = arr => arr[Math.floor(Math.random() * arr.length)];

const party = gamers.map(name => {
    return {
        name,
        race : random(races),
        classs : random(classes),
        lvl : Math.floor(Math.random() * 10 + 1)
    }
});

party.forEach((el, i, arr) => console.log(el));

const elfs = party.filter(({ race }) => race === 'Elf');

//Хотя-бы один == ЛОГИЧЕСКИЙ ИЛИ, +
const isPaladin = party.some(({ classs }) => classs === 'Paladin');

console.log('someone is Paladin: ', isPaladin);

// Все/каждый  == ЛОГИЧЕСКИЙ И, *
const allWarriors = party.every(({ classs }) => classs === 'Warrior');

for(let i = 0, allWarriors = true; i < party.length; i += 1){
    if(party[i].classs === 'Warrior'){
        allWarriors = true;
    }else{
        allWarriors = false;
        break;
    }
}

console.log('All wariors: ', allWarriors);

//Reduce
const summLvls = party.reduce((acc, { lvl }) => acc + lvl, 0);

for(let i = 0, acc = 0; i < party.length; i += 1){
    acc += party[i].lvl;
}

console.log(summLvls);

console.log(elfs);

// console.log(party);

fetch('https://randomuser.me/api/?results=5000')
    .then(r => r.json())
    .then(d => {
        console.log(d.results);

        const statistic = d.results.reduce((acc, user) => {
            acc[user.gender] += 1; //'male' / 'female'
            acc.countries.add(user.location.country);
            acc.countriesSort = [...acc.countries].sort();
            acc.nat.add(user.nat);
            return acc;
        }, { 
            male : 0, 
            female: 0, 
            countries : new Set(), 
            countriesSort : [], 
            nat : new Set()});

        console.log(statistic);
    });
