let subArr = []
module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!subscriber.hasOwnProperty(event)) {
            subscriber[event] = []
            subscriber[event].push(handler)
        }
        else if (!subscriber[event].includes(handler)) {
            subscriber[event].push(handler)
        }
        if (!subArr.includes(subscriber)) {
            subArr.push(subscriber)
        }
        // console.log(subArr)
        return this
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (subscriber.hasOwnProperty(event)) {
            delete subscriber[event]
            // let index = subArr.findIndex(subscriber)
            // subArr.splice(index, 1)
        }
        return this
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        // console.log(x)
        subArr.forEach(x => {
            if (x.hasOwnProperty(event)) {
                x[event].forEach(y => y.call(x))
            }
        })
        return this
    }
}
let user = {
    name: 'user'
}
let myFunc = function () {
    console.log('hi there')
}
let extraFunc = function () {
    console.log('bye there')
}
// emmiter.on('hi', user, myFunc).on('hi', user, extraFunc).emit('hi', user)