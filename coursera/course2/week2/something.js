//prototypes
let person = {
    type: 'human',
    extraField: 'hi',

};
Object.defineProperty(person, 'smth', {
    get: () => {
        return 'none';
    },
    set: (value) => {
        this.name = value;
    }
});
let danny = {
    type: null,
    name: 'danny',
};
Object.setPrototypeOf(danny, person);
function Person() {
    this.type = 'I am a person';
}
function Student(name, course) {
    this.name = name;
    this.course = course;

};
function Teacher(name, subject) {
    this.name = name;
    this.subject = subject;

};
// console.log(person.name);
// console.log(ann);
// for (let field in danny)
//     if (danny.hasOwnProperty(field)) console.log(field);

// console.log(danny.type)

Teacher.prototype = Object.create(person);
Student.prototype = Object.create(person);
Teacher.prototype.constructor = Teacher;
Student.prototype.constructor = Student;
Student.prototype.greet = function () { console.log('hi') };
Student.prototype.sayName = function () { console.log(`My name is ${this.name}`) };
Teacher.prototype.putMark = function () { console.log(`You have got 60 points. Congrats!`) }
let ann = new Student('ann', 2);
ann.sayName();
let victor = new Teacher('victor', 'math');
victor.putMark();

//the chain of prototypes
