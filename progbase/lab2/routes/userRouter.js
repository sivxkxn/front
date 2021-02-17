const router = require('express').Router();
 
const userController = require('../controllers/userController.js');
const User = require('../models/user.js');
 
/**
 *
 * @route GET /api/users/{id}
 * @group Users - user operations
 * @param {integer} id.path.required - id of the User - eg: 1
 * @returns {User.model} 200 - User object
 * @returns {Error} 404 - User not found
 */
router.get('/:id', userController.getUser);

/**
 *
 * @route GET /api/users
 * @group Users - user operations
 * @param {integer} page.query
 * @param {integer} per_page.query
 * @returns {Array.<User>} 200 - User object
 * @returns {Error} 404 - User not found
 */
router.get('/', userController.getUsers);
/**
 * 
 * @route DELETE /api/users/{id}
 * @group Users - user operations
 * @param {integer} id.path.required - id of the User - eg: 1
 * @returns {User.model} 200 - User object
 * @returns {Error} 404 - User not found
 */
router.delete('/:id', userController.deleteUser);
/**
 * add User
 * @route POST /api/users/
 * @group Users - user operations
 * @param {User.model} id.body.required 
 * @returns {User.model} 200 - User object
 */
router.post('/', userController.addUser);
/**
 * 
 * @route PUT /api/users/
 * @group Users - user operations
 * @param {User.model} id.body.required - id of the User - eg: 1
 * @returns {User.model} 200 - User object
 */
router.put('/', userController.updateUser);
 
module.exports = router
