function Animal() {}

Animal.prototype.sleep = function () {};

function Cat() {}

Cat.prototype = Animal.prototype;
Cat.prototype.meow = function () {};

function Dog() {}

Dog.prototype = Animal.prototype;
Dog.prototype.woof = function () {};

var sharik = new Dog();
console.log(sharik.woof)