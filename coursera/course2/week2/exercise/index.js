module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.collection = [];
    Collection.from = function (arr) {
        let obj = Object.create(Collection.prototype);
        obj.collection = arr;
        return obj;
    };
};
Collection.prototype.count = function () {
    return this.collection.length;
};
Collection.prototype.values = function () {
    return this.collection;
};
Collection.prototype.at = function (num) {
    let index = num - 1;
    let arr = this.values();
    if (arr[index]) return arr[index];
    return null;
};
Collection.prototype.append = function (arr) {
    if (arr instanceof Array) {
        let _this = this;
        arr.forEach(function (x) {
            _this.collection.push(x);
        }
        )
    }
    if (arr instanceof Collection) {
        let _this = this;
        arr.collection.forEach(function (x) {
            _this.collection.push(x);
        });
    }
    else {
        this.collection.push(arr);
    }
};
Collection.prototype.removeAt = function (pos) {
    let index = pos - 1;
    if (this.collection[index]) {
        this.collection.splice(index, 1);
        return true;
    }
    return false;

};