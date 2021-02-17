/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let arg = [].slice.call(arguments)
    if (arg.length === 1) return arg[0]
    else {
        for (let i = 1; i < arg.length; i++) {

        }
    }
}

/**
 * @params {String[]}
 */
function select() {
    return 'it is select'
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return 'it is filter'
}

let friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'roachpugh@example.com',
        favoriteFruit: 'Яблоко'
    }
];
console.log(query(friends))
// module.exports = {
//     query: query,
//     select: select,
//     filterIn: filterIn
// };
