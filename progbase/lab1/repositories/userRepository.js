const User = require('../models/user')
const JsonStorage = require('../jsonStorage')

class UserRepository {

    constructor(filePath = '../data/users.json') {
        this.storage = new JsonStorage(filePath)
        this.nextId = this.storage.nextId
    }

    getUsers() {
        //let user=new User
        const obj = this.storage.readItems()
        this.nextId = obj.nextId
        this.items = obj.items
        let usersArr = obj.items
        return usersArr
        // console.log(usersArr);

    }

    getUserById(userId) {
        const usersArr = this.getUsers()
        const theUser = usersArr.find(x => x.id === userId)
        return new User(theUser.id, theUser.login, theUser.fullname, theUser.role, theUser.registeredAt, theUser.avaUrl, theUser.isEnabled)
    }

    addUser(theUser) {
        theUser.id = this.nextId
        theUser=new User(theUser.id, theUser.login, theUser.fullname, theUser.role, theUser.registeredAt, theUser.avaUrl, theUser.isEnabled)
        let usersArr = this.getUsers()
        usersArr.push(theUser)
        this.storage.writeItems(usersArr)
        return this.nextId


    }

    updateUser(theUser) {
        this.storage.readItems()
        let index = this.items.findIndex(x => x.id === theUser.id)
        this.items[index] = new User(theUser.id, theUser.login, theUser.fullname, theUser.avaUrl, theUser.role, theUser.registeredAt, theUser.isEnabled)
        this.storage.writeItems(this.items)
    }

    deleteUser(userId) {
        this.getUsers()
        let newArr = this.items.filter(x => x.id !== userId)
        this.storage.writeItems(newArr)
    }
}
module.exports = UserRepository;

