// const { reject } = require("async")
console.log('Request data...')
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Prepearing data...')
        let backendData = {
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 100)
})
p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.user = 'admin'
            console.log('Data is modifing...')
            resolve(data)
        }, 100)
    })
}).then(userData => {
    console.log('Data received: ', userData)
})
