'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function(){
    do {
        money = prompt('Ваш месячный доход?');
    }
    while (!isNumber(money));
}

start();

let appData = {
    income: {},
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 1000000,
    period: 3,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ИНТЕРНЕТ, ТаКси, коММуналка');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }
};

// typeof
const showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(appData.income);
showTypeOf(appData.deposit);

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
};
let expensesAmount = getExpensesMonth();
console.log('Расходы на месяц:', expensesAmount);

//getAccumulatedMonth
const getAccumulatedMonth = function(){
    return money - expensesAmount;
};

//getTargetMonth
const getTargetMonth = function(){
    if (getAccumulatedMonth() === 0){
        return 0
    } else {
        return appData.mission / getAccumulatedMonth();
    }  
};

getTargetMonth() <= 0 ? console.log('Цель не будет достигнута') :
console.log('Цель будет достигнута за:', Math.ceil(getTargetMonth()) + ' месяца(ев)');


//budgetDay
let budgetDay = getAccumulatedMonth() / 30;
console.log('Бюджет на день:', Math.floor(budgetDay));

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
};

console.log(getStatusIncome(budgetDay));
