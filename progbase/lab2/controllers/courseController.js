// controllers/courseController.js
const CourseRepository = require('./../repositories/courseRepository');

const courseRepository = new CourseRepository("./data/course.json");

module.exports = {

    getCourses(req, res) {
        const page = req.query.page
        const per_page = req.query.per_page
        // console.log(`${page} ${per_page}`)
        let courses = courseRepository.getCourses()
        courses = courses.slice((page - 1) * per_page, page * per_page)
        res.send(courses)
        res.end()
    },

    getCourse(req, res) {
        const courseId = parseInt(req.params.id);
        const course = courseRepository.getCourseById(courseId)
        if (course) {
            res.send(course)
            res.status(200)
            res.end()
        }
        else res.sendStatus(404)
    },
    addCourse(req, res) {
        // console.log(req.body)
        const id = parseInt(courseRepository.addCourse(req.body))
        res.send(courseRepository.getCourseById(id))
        res.status(201)
        res.end()

    },

    updateCourse(req, res) {

        const id = parseInt(req.body.id)
        const course = courseRepository.getCourseById(id)
        if (course) {
            courseRepository.updateCourse(req.body)
            res.send(course)
            res.status(201)
        }
        else res.sendStatus(404)
        res.end()
    },

    deleteCourse(req, res) {
        try {
            const courseId = parseInt(req.params.id);
            const course = courseRepository.getCourseById(courseId)
            if (course) {
                courseRepository.deleteCourse(parseInt(courseId))
                res.send(course)
                res.end()
            }
            else res.sendStatus(404)
        }
        catch (e) {
            res.status(400)
            res.end()
        }

    },

};
