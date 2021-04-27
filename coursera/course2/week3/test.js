

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
const fs = require('fs');
const data = fs.readFileSync('./data.json', 'utf-8');
console.log(data);
