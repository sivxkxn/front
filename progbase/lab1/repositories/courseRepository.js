// repositories/CourseRepository.js
const Course = require('../models/course')
const JsonStorage = require('../jsonStorage')

class courseRepository {

    constructor(filePath = '../data/courses.json') {
        this.storage = new JsonStorage(filePath)
        this.nextId = this.storage.nextId
    }

    getCourses() {
        const obj = this.storage.readItems()
        this.nextId = obj.nextId
        this.items = obj.items
        let coursesArr = obj.items
        return coursesArr
    }

    getCourseById(courseId) {
        const coursesArr = this.getCourses()
        const theCourse=coursesArr.find(x => x.id === courseId)
        return new Course(theCourse.id,theCourse.name, theCourse.teacher, theCourse.hours, theCourse.credits, theCourse.beginingDate)
    }

    addCourse(theCourse) {
        theCourse.id = this.nextId
        theCourse=new Course(theCourse.id,theCourse.name, theCourse.teacher, theCourse.hours, theCourse.credits, theCourse.beginingDate)
        let coursesArr = this.getCourses()
        coursesArr.push(theCourse)
        this.storage.writeItems(coursesArr)
        return this.nextId
    }

    updateCourse(theCourse) {
        let index = this.items.findIndex(x => x.id === theCourse.id)
        this.items[index] = new Course(theCourse.id,theCourse.name, theCourse.teacher, theCourse.hours, theCourse.credits, theCourse.beginingDate)
        this.storage.writeItems(this.items)
    }
    deleteCourse(courseId) {
        this.getCourses()
        let newArr = this.items.filter(x => x.id !== courseId)
        this.storage.writeItems(newArr)
    }
}
module.exports = courseRepository;