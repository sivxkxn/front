// function Animal(options) {
//     this.name = options.name
//     this.color = options.color

// }
// Animal.prototype.voice = function () {
//     console.log('based voice of ', this.name)
// }
// let dog = new Animal({ name: 'dog', color: 'black' })
// dog.voice()
// function Cat(options) {
//     Animal.apply(this, arguments)
//     this.hasTail = options.hasTail
//     this.type = 'cat'
// }
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
// const cat = new Cat({ name: 'Barsik', color: 'black', hasTail: true })
// cat.voice()
// Cat.prototype.voice = function () {
//     console.log('I am a cat and my name is ', this.name)
// }
// cat.voice()
// function Horse(options) {
//     Animal.apply(this, arguments)
//     this.type = 'horse'
// }
// Horse.prototype = Object.create(Animal.prototype)
// Horse.prototype.constructor = Horse
// Horse.prototype.voice = function () {
//     console.log('I am just a horse')
// }
// let horse = new Horse({ name: 'Snijok', color: 'black' })
// horse.voice()
// cat.voice()
class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }
    voice() {
        console.log("base voice")
    }
}
const dog = new Animal({ name: 'Sharik', color: 'black' })
class Cat extends Animal {
    constructor(options) {
        super(options)
        this.hasTail = options.hasTail
        this.type = 'cat'
    }
    voice() {
        console.log("myau")
    }
}
Object.prototype.print = function () {
    console.log('I am an Object ', this)
}
const cat = new Cat({ name: 'Barsik', color: 'black', hasTail: true })
cat.voice()
Array.prototype.myMap = function () {
    return this
}