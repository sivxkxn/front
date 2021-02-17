// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let words = command.split(' ')
    myCommand = words[0]
    if (myCommand === 'ADD') {
        let name = words[1]
        let phones = words[2].split(',')
        let flag = true
        for (key in phoneBook) {
            if (key === name) {
                phones.forEach(x => phoneBook[name].push(x))
                flag = false
            }
        }
        if (flag) {
            phoneBook[name] = []
            phones.forEach(x => phoneBook[name].push(x))
        }
    }
    else if (myCommand === 'REMOVE_PHONE') {
        let phone = words[1]
        for (key in phoneBook) {
            if (phoneBook[key].includes(phone)) {
                let index = phoneBook[key].indexOf(phone)
                phoneBook[key].splice(index, 1)
                return true
            }
        }
        return false
    }
    else if (myCommand === 'SHOW') {
        let result = []
        for (key in phoneBook) {
            if (phoneBook[key].length !== 0) {
                result.push(`${key}: ${phoneBook[key].join(', ')}`)
            }
        }
        result.sort()
        return result

    }

}
// task3('ADD Contact2 phone4,phone3')
// task3('ADD Contact1 phone1')
// task3('ADD Contact1 phone2,phone6')
// task3('REMOVE_PHONE phone2')
// task3('SHOW')
// console.log(task3('SHOW'))
// console.log(phoneBook)