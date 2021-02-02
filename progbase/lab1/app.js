const colors = require('colors')
const courseRepository = require('./repositories/courseRepository.js')
const userRepository = require('./repositories/userRepository.js')
const readLineSync = require('readline-sync')
let users = new userRepository('./data/users.json')
let courses = new courseRepository('./data/course.json')
let flag = 1
while (flag) {
    console.log('\nEnter the command (entities: courses & users):\n'.blue.bold)
    console.log('1. get/{entities}'.green)
    console.log('2. get/{entities}/{id}'.green)
    console.log('3. delete/{entities}/{id}'.green)
    console.log('4. update/{entities}/{id}'.green)
    console.log('5. post/{entities}'.green)
    console.log('6. exit\n'.green)
    const com = readLineSync.question('Your command: '.blue)
    if (com === 'get/users') {
        console.log('\nThe list of the users\n')
        let usersArr = users.getUsers()
        usersArr.forEach(x => {
            for (let field in x) {
                console.log(`${field}: ${x[field]}`)
            }
            console.log('\n')
        })
    }
    else if (com === 'get/courses') {
        console.log('\nThe list of the courses\n')
        let coursesArr = courses.getCourses()
        coursesArr.forEach(x => {
            for (let field in x) {
                console.log(`${field}: ${x[field]}`)
            }
            console.log('\n')
        })
    }
    else if (com.includes('get/users/')) {
        const id = Number(com.split('/')[2])
        try {
            const obj = users.getUserById(id)
            for (let field in obj) {
                console.log(`${field}: ${obj[field]}`)
            }
        }
        catch (e) {
            console.log('\nId is not correct'.red)
        }
    }
    else if (com.includes('get/courses/')) {
        const id = Number(com.split('/')[2])
        try {
            const obj = courses.getCourseById(id)
            for (let field in obj) {
                console.log(`${field}: ${obj[field]}`)
            }
        }
        catch (e) {
            console.log('\nId is not correct'.red)
        }
    }
    else if (com.includes('delete/courses/')) {
        try {
            const id = Number(com.split('/')[2])
            courses.deleteCourse(id)
           // console.log('\n Successfuly deleted'.green)
        }
        catch (e) {
            console.log('\n Item is not deleted. Check the entered Id'.red)
        }
    }
    else if (com.includes('delete/users/')) {
        const id = Number(com.split('/')[2])
        try {
            users.deleteUser(id)
            //console.log('\n Successfuly deleted'.green)
        }
        catch (e) {
            console.log('\n Item is deleted. Check the entered Id'.red)
        }
    }
    else if (com.includes('update/users/')) {
        try{
        const id = Number(com.split('/')[2])
        let user = users.getUserById(id)
        const login = readLineSync.question('Enter new login: ')
        if (login.length === 0) {
            console.log('\nLogin can not be empty\n'.red)
            continue
        }
        user.login = login
        const fullname = readLineSync.question('Enter new full name: ')
        if (fullname.length === 0) {
            console.log('\nFull name can not be empty\n'.red)
            continue
        }
        user.fullname = fullname
        const role = readLineSync.question('Enter new role (0 or 1): ')
        if (role != 0 && role != 1) {
            console.log('\nRole is not correct\n'.red)
            continue
        }
        user.role=role
        let time = new Date().getTime();
        let date = new Date(time);
        user.registeredAt = date.toString()
        const avaUrl = readLineSync.question('Enter new URL : ')
        user.avaUrl = avaUrl
        const isEnabled = readLineSync.question('Enter isEnabled (0 or 1): ')
        if (isEnabled != 0 && isEnabled != 1) {
            console.log('\nisEnabled is not correct\n'.red)
            continue
        }
        user.isEnabled=isEnabled
        users.updateUser(user)
    }
    catch(e){
        console.log('\nId is not correct'.red)
    }
    }
    else if (com.includes('update/courses/')) {
        try{
        const id = Number(com.split('/')[2])
        let course = courses.getCourseById(id)
        const name = readLineSync.question('Enter new course: ')
        if (name.length === 0) {
            console.log('\nField course can not be empty\n'.red)
            continue
        }
        course.name = name
        const teacher = readLineSync.question('Enter new teacher: ')
        if (teacher.length === 0) {
            console.log('\nField teacher can not be empty\n'.red)
            continue
        }
        course.teacher = teacher
        const hours = readLineSync.question('Enter new amount of hours: ')
        if (isNaN(hours)) {
            console.log('\nField hours should be a digit\n'.red)
            continue
        }
        course.hours = hours
        const credits = readLineSync.question('Enter new amount of credits: ')
        if (isNaN(credits)) {
            console.log('\nField credits should be a digit\n'.red)
            continue
        }
        course.credits = credits
        let time = new Date().getTime();
        let date = new Date(time);
        course.beginingDate = date.toString()
        courses.updateCourse(course)
    }
    catch(e){
        console.log('\nId is not correct'.red)
    }
    }
    else if (com.includes('post/users')) {

        let user = {}
        const login = readLineSync.question('Enter new login: ')
        if (login.length === 0) {
            console.log('\nLogin can not be empty\n'.red)
            continue
        }
        user.login = login
        const fullname = readLineSync.question('Enter new full name: ')
        if (fullname.length === 0) {
            console.log('\nFull name can not be empty\n'.red)
            continue
        }
        user.fullname = fullname
        const role = readLineSync.question('Enter new role (0 or 1): ')
        if (role != 0 && role != 1) {
            console.log('\nRole is not correct\n'.red)
            continue
        }
        user.role=role
        let time = new Date().getTime();
        let date = new Date(time);
        user.registeredAt = date.toString()
        const avaUrl = readLineSync.question('Enter new URL : ')
        user.avaUrl = avaUrl
        const isEnabled = readLineSync.question('Enter isEnabled (0 or 1): ')
        if (isEnabled != 0 && isEnabled != 1) {
            console.log('\nisEnabled is not correct\n'.red)
            continue
        }
        user.isEnabled = isEnabled
        users.addUser(user)
    }
    else if (com.includes('post/courses')) {

        let course = {}
        const name = readLineSync.question('Enter new course: ')
        if (name.length === 0) {
            console.log('\nField course can not be empty\n'.red)
            continue
        }
        course.name = name
        const teacher = readLineSync.question('Enter new teacher: ')
        if (teacher.length === 0) {
            console.log('\nField teacher can not be empty\n'.red)
            continue
        }
        course.teacher = teacher
        const hours = readLineSync.question('Enter new amount of hours: ')
        if (isNaN(hours)) {
            console.log('\nField hours should be a digit\n'.red)
            continue
        }
        course.hours = hours
        const credits = readLineSync.question('Enter new amount of credits: ')
        if (isNaN(credits)) {
            console.log('\nField credits should be a digit\n'.red)
            continue
        }
        course.credits = credits
        let time = new Date().getTime();
        let date = new Date(time);
        course.beginingDate = date.toString()
        courses.addCourse(course)
    }
    else if (com === 'exit') flag = 0
    else console.log('command is not correct'.red)
}

module.exports = users
