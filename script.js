'use strict';
let money = +prompt('Ваш месячный доход?' , '60000');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ИНТЕРНЕТ, ТаКси, коММуналка')
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 1000000;
let period = 7;
// typeof
const showTypeOf = function(data){
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
//addExpenses
let lowerString = addExpenses.toLowerCase();
console.log(lowerString.split(', '));
//
let expenses1 = +prompt('Введите обязательную статью расходов?' , '12500');
let expenses2 = +prompt('Введите обязательную статью расходов?' , '20000');
let amount1 = prompt('Во сколько это обойдется?', '1000');
let amount2 = prompt('Во сколько это обойдется?', '1000');
//getExpensesMonth
const getExpensesMonth = function(expense1, expense2){
    return expense1 + expense2;
}
let expensesMonth = getExpensesMonth(expenses1,expenses2);
console.log('Расходы на месяц:', expensesMonth);
//getAccumulatedMonth
const getAccumulatedMonth = function(income, expenses){
    return income - expenses;
}
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);
//getTargetMonth
const getTargetMonth = function(mission, moneyMonth){
    return mission / moneyMonth;
}
let targetMonth = getTargetMonth(mission, accumulatedMonth);
console.log('Цель будет достигнута за:', Math.ceil(targetMonth) + ' месяца(ев)');
//budgetDay
let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день:', Math.floor(budgetDay))
//getStatusIncome
const getStatusIncome = function(moneyDay){
    if (moneyDay >= 1200) {
        return ('У вас высокий уровень дохода');
    } else if ((moneyDay < 1200) && (moneyDay >= 600)){
        return ('У вас средний уровень дохода');
    } else if ((moneyDay < 600) && (moneyDay >= 0)) {
        return ('К сожалению у вас уровень дохода ниже среднего');
    } else if (moneyDay < 0) {
        return ('Что то пошло не так');
    }
}
let statusIncome = getStatusIncome(budgetDay);
console.log(statusIncome);
