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
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
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
    },
    getAccumulatedMonth: function() {
        return money - expensesAmount;
    },
    getTargetMonth: function() {
        if (appData.getAccumulatedMonth() === 0){
            return 0
        } else {
            return appData.mission / appData.getAccumulatedMonth();
        }  
    },
    getStatusIncome: function(moneyDay) {
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
};

appData.asking();

let expenses = [];
//getExpensesMonth
let expensesAmount = appData.getExpensesMonth();
console.log('Расходы на месяц:', expensesAmount);

//getTargetMonth
appData.getTargetMonth() <= 0 ? console.log('Цель не будет достигнута') :
console.log('Цель будет достигнута за:', Math.ceil(appData.getTargetMonth()) + ' месяца(ев)');


//budgetDay
let budgetDay = appData.getAccumulatedMonth() / 30;
console.log('Бюджет на день:', Math.floor(budgetDay));

//getStatusIncome
console.log(appData.getStatusIncome(budgetDay));
