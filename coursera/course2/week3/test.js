

// function timer() {
//     setTimeout(func1, 3000);
// };
// function func1() {
//     console.log('1');
// };
// function func2() {
//     console.log('2');
// };
// function clearInterv(a) {
//     clearInterval(a);
// }
// timer();
// func1();
// func2();
// let timerId = setInterval(func2, 2000);
// setTimeout(clearInterv, 9000, timerId);
// console.time('readFileSync');
const fs = require('fs');
// fs.readFile('./data.json', 'utf-8', function (err, data) {
//     console.log(data);
// });
// console.timeEnd('readFileSync');
// function cb(err, data) {
//     if (err) {
//         console.log(err.stack);
//     }
//     else(
//         console.log(data)
//     )

// }

let promise = new Promise(function (resolve, reject) {
    fs.readFile('data.json', 'utf-8', function (err, data) {
        if (err) {
            reject(err);
        }
        else {
            resolve(data);
        }
    })
}
).then(function (data) {
    console.log(data);
}, function (err) {
    console.log(err)
});