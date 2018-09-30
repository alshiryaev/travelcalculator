const { v4 } = require('uuid');

module.exports.products = [
    {        
        id: v4(),
        name: 'Молоко',
        protein: 2.8,
        fat: 3.2,
        carbohydrates: 4.7,
        calories: 58
    },
    {
        id: v4(),
        name: 'Крупа гречневая',
        protein: 12.6,
        fat: 2.6,
        carbohydrates: 68.0,
        calories: 345
    },
    {
        id: v4(),
        name: 'Рис',
        protein: 8.0,
        fat: 1,
        carbohydrates: 76.0,
        calories: 345
    },
    {
        id: v4(),
        name: 'Яйцо куриное',
        protein: 12.7,
        fat: 11.5,
        carbohydrates: 0.7,
        calories: 157
    },
    {
        id: v4(),
        name: 'Крупа ячневая',
        protein: 10.4,
        fat: 1.3,
        carbohydrates: 71.7,
        calories: 340
    },
    {
        id: v4(),
        name: 'Крупа пшеничная',
        protein: 12.7,
        fat: 1.1,
        carbohydrates: 70.6,
        calories: 343
    },
    {
        id: v4(),
        name: 'Картофель',
        protein: 2,
        fat: 0.1,
        carbohydrates: 19.7,
        calories: 87
    }
];
