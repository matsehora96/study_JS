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
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 1000000,
    period: 3,
    asking: function() {

        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let cashIncome,
                itemIncome;

            do {
                itemIncome = prompt('Какой у вас дополнительный заработок', 'Таксую');
            }
            while(itemIncome.replace( /\D/g, ''));
            
            do {
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            }
            while(!isNumber(cashIncome));
            
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'ИНТЕРНЕТ, ТаКси, коММуналка');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
        for (let i = 0; i < 2; i++) {
            
            let expenseName,
                message;
            
            do {
                expenseName = prompt('Введите обязательную статью расходов?')
            }
            while((expenseName.replace( /\D/g, '')));
            
            do {
                message = prompt('Во сколько это обойдется?');
            }
            while (!isNumber(message));
            
            appData.expenses[expenseName] = +message;
        }
    },
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    getExpensesMonth: function() {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    },
    getBudget: function() {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    },
    getTargetMonth: function() {
        if (appData.budgetMonth === 0){
            return 0
        } else {
            return appData.mission / appData.budgetMonth;
        }  
    },
    getStatusIncome: function() {
        if (Math.floor(appData.budgetDay) >= 1200) {
            return ('У вас высокий уровень дохода');
        } else if ((Math.floor(appData.budgetDay) < 1200) && (Math.floor(appData.budgetDay) >= 600)){
            return ('У вас средний уровень дохода');
        } else if ((Math.floor(appData.budgetDay) < 600) && (Math.floor(appData.budgetDay) >= 0)) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else if (Math.floor(appData.budgetDay) < 0) {
            return ('Что то пошло не так');
        }
    },
    getInfoDeposit: function() {
        if (appData.deposit) {
            do {
                appData.percentDeposit = prompt('Какой годовой процент?', 10);
            }
            while(!isNumber(appData.percentDeposit));
            
            do {
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
            while(!isNumber(appData.moneyDeposit));
        }
    },
    calcSavedMoney: function() {
        return appData.budgetMonth * appData.period;
    },
    getCapitalLetter: function() {
        
        for (let i = 0; i < appData.addExpenses.length; i++) {
            appData.addExpenses[i] = appData.addExpenses[i].charAt(0).toUpperCase() + appData.addExpenses[i].substring(1);
        }
        return appData.addExpenses.join(', ');
    }
};

appData.asking();

appData.getExpensesMonth();

appData.getBudget();

console.log(appData);


//getExpensesMonth
console.log('Расходы на месяц:', appData.expensesMonth);

//getTargetMonth
appData.getTargetMonth() <= 0 ? console.log('Цель не будет достигнута') :
console.log('Цель будет достигнута за:', Math.ceil(appData.getTargetMonth()) + ' месяца(ев)');

//getStatusIncome
console.log(appData.getStatusIncome());

//Our program include
for (let key in appData) {
    console.log('Наша программа включает в себя данные:\n' + key + ':' + appData[key]);
}

appData.getInfoDeposit();

console.log(appData.getCapitalLetter());
