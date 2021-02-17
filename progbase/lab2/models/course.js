/**
 * @typedef Course
 * @property {integer} id
 * @property {string} name 
 * @property {string} teacher 
 * @property {integer} hours 
 * @property {integer} credits  
 * @property {Date} beginingDate 
 */
class Course {

    constructor(id, name, teacher, hours, credits, beginningDate) {
        this.id = id  // number
        this.name = name
        this.teacher = teacher
        this.hours = hours
        this.credits = credits
        this.beginingDate = beginningDate
    }
};
module.exports = Course;