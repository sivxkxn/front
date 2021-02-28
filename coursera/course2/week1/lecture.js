
let person = {
    type: 'human',
    getName: function () {
        return this.name
    }
}
let student = {
    name: 'vasya',
}
//  student.__proto__=person
let teacher = Object.create(person)
teacher.name = 'ivan petrovich'
Object.setPrototypeOf(student, person)
// console.log(Object.getPrototypeOf(student))
// console.log(student.getName())
// console.log(teacher.getName())
for (let field in student) {
    if (student.hasOwnProperty(field))
        console.log(field)
}