// controllers/userController.js
const UserRepository = require('./../repositories/userRepository');

const userRepository = new UserRepository("./data/users.json");

module.exports = {

    getUsers(req, res) {
        const page = req.query.page
        const per_page = req.query.per_page
        // console.log(`${page} ${per_page}`)
        let users = userRepository.getUsers()
        users = users.slice((page-1)*per_page, page*per_page)
        res.send(users)
        res.end()
    },

    getUser(req, res) {
        const userId = parseInt(req.params.id)
        const user = userRepository.getUserById(userId)
        if (user) {
            res.send(user)
            res.status(200)
            res.end()
        }
        else res.sendStatus(404)
    },
    addUser(req, res) {
        // console.log(req.body)
        const id = parseInt(userRepository.addUser(req.body))
        res.send(userRepository.getUserById(id))
        res.status(201)
        res.end()

    },

    updateUser(req, res) {

        const id = parseInt(req.body.id)
        const user = userRepository.getUserById(id)
        if (user) {
            userRepository.updateUser(req.body)
            res.send(user)
            res.status(201)
        }
        else res.sendStatus(404)
        res.end()
    },

    deleteUser(req, res) {
        try {
            const userId = parseInt(req.params.id);
            const user = userRepository.getUserById(userId)
            if (user) {
                userRepository.deleteUser(parseInt(userId))
                res.send(user)
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
