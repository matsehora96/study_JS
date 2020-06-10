'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

let money,
    income = 'фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ИНТЕРНЕТ, ТаКси, коММуналка'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 1000000,
    period = 7;

let start = function(){
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
}

start();

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

let expenses = [];
//getExpensesMonth
const getExpensesMonth = function(){
    let sum = 0;
    let expenseAmount;
    for (let i = 0; i < 2; i++){
        
        expenses[i] = prompt('Введите обязательную статью расходов?');
        
        do {
            expenseAmount = prompt('Во сколько это обойдется?');
        }
        while (!isNumber(expenseAmount));
        
        sum = sum + Number(expenseAmount);
    }
    console.log(expenses);
    return sum;
}
let expensesAmount = getExpensesMonth();
console.log('Расходы на месяц:', expensesAmount);

//getAccumulatedMonth
const getAccumulatedMonth = function(){
    return money - expensesAmount;
}

let accumulatedMonth = getAccumulatedMonth();

//getTargetMonth
const getTargetMonth = function(){
    if (accumulatedMonth === 0){
        return 0
    } else {
        return mission / accumulatedMonth;
    }  
}

getTargetMonth() <= 0 ? console.log('Цель не будет достигнута') :
console.log('Цель будет достигнута за:', Math.ceil(getTargetMonth()) + ' месяца(ев)');


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
