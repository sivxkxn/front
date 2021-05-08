
// console.log('start');

// function func2() {
//     console.log('I am func2');
//     setTimeout(() => {
//         console.log('preparing...')
//         setTimeout(() => {
//             console.log('processing...');
//             setTimeout(() => {
//                 console.log('DATA');
//             }, 1000);
//             console.log('after processing...')
//         }, 1000);
//         console.log('after preparing...')
//     }, 1000);
// }
// function func1() {
//     console.log('I am func1');
//     setTimeout(() => {
//         console.log('in timeout');
//     }, 2000);
//     func2();
// }

// func1();
// console.log('End');
let p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('preparing data...');
        const data = {
            port: 2000,
            type: 'data'
        }
        console.log(data)
        resolve(data);
    }, 1000);
}).then(function (data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.port = 2001;
            console.log('data is modified: ', data);
            resolve(data)
        }, 1000)
    });
    // resolve(data)
}).then(function (p) {
    console.log('All processes are finished', p);
    // resolve();
});