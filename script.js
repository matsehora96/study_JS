let money = 30000;
let income = 'фриланс';
let addExpenses = 'ИНТЕРНЕТ, ТаКси, коММуналка';
let deposit = true;
let mission = 1000000;
let period = 7;

// typeof
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

//length
console.log(addExpenses.length);

//Period and objective
console.log('Период равен', period + ' месяцев');
console.log('Цель заработать', mission + ' долларов');

//toLowerCase
let lowerString = addExpenses.toLowerCase();
console.log(lowerString.split(', '));

//budgetDay
let budgetDay = money / 30;
console.log(budgetDay);