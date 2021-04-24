module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.value = []
}
Collection.prototype = Object.create(Array.prototype)
Collection.prototype.constructor = Collection

// Методы коллекции
Collection.prototype.values = function () {
    return this.value()
}
Collection.prototype.append = function () {

}
Collection.prototype.at = function (index) {
    if (this.indexOf(index + 1)) {
        return this.indexOf(index + 1)
    }
    else
        return null
}
Collection.prototype.count = function () {
    let counter = 0
    for (let item of this.value) counter++
    return counter
}
Collection.prototype.removeAt = function (index) {

}
// другие методы


/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
    let arr = [].slice.apply(arguments)

}

let arr = new Collection
console.log(arr)