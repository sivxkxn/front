/**
 * @param {String} date
 * @returns {Object}
 */

module.exports = function (date) {
    let myDate = new Date(date)
    // console.log(this.year)
    Object.defineProperty(myDate, 'value', {
        get: function () {
            let m = new String(myDate.getMonth()).length === 1 ? '0' : ''
            let d = new String(myDate.getDate()).length === 1 ? '0' : ''
            let h = new String(myDate.getHours()).length === 1 ? '0' : ''
            let min = new String(myDate.getMinutes()).length === 1 ? '0' : ''
            return `${myDate.getFullYear()}-${m}${myDate.getMonth() + 1}-${d}${myDate.getDate()} ${h}${myDate.getHours()}:${min}${myDate.getMinutes()}`
        }
    })
    Object.defineProperty(myDate, 'add',
        {
            value: function (num, time) {
                try {
                    if (num < 0 || (time !== 'year' && time !== 'hours' && time !== 'months' && time !== 'days' && time !== 'minutes'))
                        throw new TypeError('Type of the data is incorrect')
                    switch (time) {
                        case 'years': myDate = new Date(myDate.getFullYear() + num, myDate.getMonth(), myDate.getDate(), myDate.getHours(), myDate.getMinutes())
                            break
                        case 'months': myDate = new Date(myDate.getFullYear(), myDate.getMonth() + num, myDate.getDate(), myDate.getHours(), myDate.getMinutes())
                            break
                        case 'days': myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + num, myDate.getHours(), myDate.getMinutes())
                            break
                        case 'hours': myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(), myDate.getHours() + num, myDate.getMinutes())
                            break
                        case 'minutes': myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(), myDate.getHours(), myDate.getMinutes() + num)
                            break

                    }
                }
                catch (e) {
                    throw new TypeError('Type of the data is incorrect')
                }
                return this
                // return myDate
            },
            enumerable: true,
            configurable: true,
            writable: true,
        })
    Object.defineProperty(myDate, 'subtract',
        {
            value: function (num, time) {
                try {
                    if (num < 0 || (time !== 'years' && time !== 'hours' && time !== 'months' && time !== 'days' && time !== 'minutes'))
                        throw new TypeError('Type of the data is incorrect')
                    switch (time) {
                        case 'years': myDate = new Date(myDate.getFullYear() - num, myDate.getMonth(), myDate.getDate(), myDate.getHours(), myDate.getMinutes())
                            break
                        case 'months': myDate = new Date(myDate.getFullYear(), myDate.getMonth() - num, myDate.getDate(), myDate.getHours(), myDate.getMinutes())
                            break
                        case 'days': myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() - num, myDate.getHours(), myDate.getMinutes())
                            break
                        case 'hours': myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(), myDate.getHours() - num, myDate.getMinutes())
                            break
                        case 'minutes': myDate = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(), myDate.getHours(), myDate.getMinutes() - num)
                            break

                    }
                }
                catch (e) {
                    throw new TypeError('Type of the data is incorrect')
                }
                return this
            },
            enumerable: true,
            configurable: true,
            writable: true,
        })
    return myDate
}
// console.log(task1('2017-05-16 13:45')
//     // .add(24, 'hours')
//     .subtract(1, 'months')
//     // .add(3, 'days')
//     // .add(15, 'minutes')
//     .value)