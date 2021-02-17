const router = require('express').Router();
 
const courseController = require('../controllers/courseController.js');
const Course = require('../models/course.js');
 
/**
 *
 * @route GET /api/courses/{id}
 * @group courses - course operations
 * @param {integer} id.path.required - id of the course - eg: 1
 * @returns {Course.model} 200 - course object
 * @returns {Error} 404 - course not found
 */
router.get('/:id', courseController.getCourse);

/**
 *
 * @route GET /api/courses
 * @group courses - course operations
 * @param {integer} page.query
 * @param {integer} per_page.query
 * @returns {Array.<Course>} 200 - User object
 * @returns {Error} 404 - Course not found
 */
router.get('/', courseController.getCourses);
/**
 * 
 * @route DELETE /api/courses/{id}
 * @group courses - course operations
 * @param {integer} id.path.required - id of the course - eg: 1
 * @returns {Course.model} 200 - course object
 * @returns {Error} 404 - course not found
 */
router.delete('/:id', courseController.deleteCourse);
/**
 * add course
 * @route POST /api/courses/
 * @group courses - course operations
 * @param {Course.model} id.body.required 
 * @returns {Course.model} 200 - course object
 */
router.post('/', courseController.addCourse);
/**
 * 
 * @route PUT /api/courses/
 * @group courses - course operations
 * @param {Course.model} id.body.required - id of the course - eg: 1
 * @returns {Course.model} 200 - course object
 */
router.put('/', courseController.updateCourse);
 
module.exports = router
