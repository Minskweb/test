// 'use strict';

let money = +prompt("ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
    

for (let i = 0; i < 2; i++) {

    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("Gandone");
        appData.expenses[a] = b;
    } else {

    }

    
}

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный для выживания уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <200) {
    console.log("Средний уровень достатка но все-равно хуйня");
} else if (appData.moneyPerDay >= 200) {
   console.log("Выше среднего уровень достатка можно жить");
} else {
    console.log("Произошла какая-то хуйня");
}

// alert(appData.budget / 30);


// lukashenkoMoney = 0;
// names = ['Olegka - ', 'Reutski - ', 'Mjasnikovish - ', 'Pasha - '];
// money = [10000, 2000, 1000, 500];

// for (let zaza = 0; zaza <names.length; zaza++) {
    
//     console.log(
//         names[zaza] +
//         ' в ахуе от того что Лукашенко отжал у него ' + money[zaza]
//     );

//     lukashenkoMoney = lukashenkoMoney + money[zaza];
//     money[zaza] = 0;
// }

// console.log(lukashenkoMoney +' - У луки стало дохера бабулек на ментов');

