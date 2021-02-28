/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function sel(collection, fields) {
    let newCollection = []
    for (let item of collection) {
        let tempObj = {}
        for (let field in item) {
            if (fields.includes(field)) {
                tempObj[field] = item[field]
            }
        }
        newCollection.push(tempObj)
    }
    return newCollection
}
function filt(collection, prop, val) {
    let newCollection = []
    // console.log(collection)
    for (let item of collection) {
        for (let field in item) {
            if (field === prop && val.includes(item[field])) {
                newCollection.push(item)
            }
        }
    }
    return newCollection
}
function query(collection) {
    let arg = [].slice.call(arguments)
    if (arg.length === 1) return arg[0]
    else {
        commands = []
        for (let i = 1; i < arg.length; i++) {
            commands.push(arg[i])
        }
        for (let command of commands) {
            if (command.name === 'filter') {
                collection = filt(collection, command.field, command.values)
            }
        }
        for (let command of commands) {
            if (command.name === 'select') {
                collection = sel(collection, command.property)
            }
        }

        return collection
    }
}

/**
 * @params {String[]}
 */
function select() {
    let args = [].slice.call(arguments)
    let newObj = {
        name: 'select',
        property: args
    }
    return newObj
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    // let args = [].slice.call(arguments)
    let newObj = {
        name: 'filter',
        field: property,
        values: values
    }
    return newObj
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
    },
    {
        name: 'Егор',
        gender: 'Мужской',
        email: 'egor@example.com',
        favoriteFruit: 'Огурец'
    },
    {
        name: 'Вика',
        gender: 'Мужской',
        email: 'egor@example.com',
        favoriteFruit: 'Арбуз'
    }
];

// console.log(bestFriends = query(

//     friends,
//     select('name', 'gender', 'email'),
//     filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
// ))
module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
