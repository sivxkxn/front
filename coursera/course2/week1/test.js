
// Object.prototype.sayHello = function () {
//     console.log('hello')
// }
// let lena=Object.create(person)
// lena.name='lena'
// person.greet.call(lena)
// lena.greet()
let window = {
    name: 'window'
}
function hi() {
    console.log('hi ', this)
}
let person = {
    name: 'max',
    age: 23,
    greet: hi,
    greetWindow: hi.bind(window)
}

// person.greetWindow()
let arr = [2, 4, 5, 7, 8]
Object.prototype.multArr = function (num) {
    this.map(x => x * num).forEach(x => {
        console.log(`${x}, `)
    })
}
// arr.multArr(5)
function createCalcFunction(n) {
    return function () {

    }
}
let calc = createCalcFunction()
let human = {
    name: 'vitya',
    age: 23
}
let logger = function () {
    console.log(`Name is ${this.name} and age is ${this.age} y.o.`)
}
function myBind(obj, func) {
    return function (...args) {
        func.apply(obj, args)
    }
}
// myBind(human, logger)()
// funcResult()
console.log('the first')
setTimeout(function () {
    console.log('inside timeout')
}, 0)
console.log('the second')