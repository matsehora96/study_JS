'use strict';
let money = prompt('Ваш месячный доход?' , '22000');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ИНТЕРНЕТ, ТаКси, коММуналка')
let deposit = confirm('Есть ли у вас депозит в банке?');
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
//5
let expenses1 = +prompt('Введите обязательную статью расходов?' , '22500');
let expenses2 = +prompt('Введите обязательную статью расходов?' , '20000');
let amount1 = prompt('Во сколько это обойдется?', '1000');
let amount2 = prompt('Во сколько это обойдется?', '1000');
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