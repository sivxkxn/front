function test() {
    let args = [].slice.call(arguments)
    let a = arguments[0] || 0
    let b = arguments[1] || 0
    let c = arguments[2] || 0
    return a + b + c
}
console.log(test(3, 4, 5))
function makeCounter() {
    let counter = 0
    return function () {
        return ++counter
    }
}
let myCounter = makeCounter()
myCounter()
myCounter()
myCounter()
console.log(myCounter())