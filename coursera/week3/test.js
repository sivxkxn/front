let tweet = {
    _text: 'this is some text here'
}
Object.defineProperty(tweet, 'text', {
    get: function () {
        return this._text
    },
    set: function (value) {
        if (value.length > 1) {
            this._text = value
        }
        else {
            this._text = 'no text'
        }
    },

})
Object.freeze(tweet)
// console.log(Object.getOwnPropertyDescriptor(tweet, '_text'))
let date = new Date(2016, 10, 3, 11, 7, 2)
let rnd = Math.random()
// console.log(rnd)
let str = "aconsole.log(Object.getOwnPropertyDescriptor(tweet, '_text')"
// console.log(/^[a-z0-9]+/g.test(str))
let regStr = '0b11 друзей Оушена'
let newArr = regStr.replace(/^\d\w\d\d/gi, '12')
console.log(newArr)