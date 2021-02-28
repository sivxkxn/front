let a = {
    number: 7
}
console.log(a)
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('modifing the object...')
        a.number = 8
        reject(a)
    }, 1000)
})
p.then(obj => {
    console.log(obj)
    return new Promise((resolve, reject) => {

    })
}).catch(error => console.error(error))
console.log('after all promises')