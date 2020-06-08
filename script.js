'use strict';
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
console.log('Цель заработать', mission + ' рублей/долларов/гривен/юаней');

//toLowerCase
let lowerString = addExpenses.toLowerCase();
console.log(lowerString.split(', '));

//----------------------------------Lesson 3------------------------------------------//
//2
money = prompt('Ваш месячный доход?');
//3
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//4
deposit = confirm('Есть ли у вас депозит в банке?');
//5
let expenses1 = +prompt('Введите обязательную статью расходов?');
let expenses2 = +prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');
//6
let budgetMonth = expenses1 + expenses2;
console.log('Бюджет на месяц:', budgetMonth);
//7
let missionMonth = mission / budgetMonth;
console.log('Цель будет достигнута за:', Math.ceil(missionMonth) + ' месяца(ев)');
//8
let budgetDay = budgetMonth / 30;
console.log('Бюджет на день:', Math.floor(budgetDay));
//9
if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if ((budgetDay < 1200) && (budgetDay >= 600)){
    console.log('У вас средний уровень дохода');
} else if ((budgetDay < 600) && (budgetDay >= 0)) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');
}