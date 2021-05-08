/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
// module.exports = 
function myfunc(operations, callback) {
    let promises = [];
    let result = [];
    let error;
    function oper(func) {
        return new Promise(function (resolve, reject) {
            func(
                function (err, data) {
                    if (err !== null) resolve(data);
                    else reject(err);
                })
        })
    };

    for (let i = 0; i < operations.length; i++) {
        promises[i] = oper(operations[i]);
   
    }
    return Promise.all(promises).then((data) => callback(null, data)).catch(e => callback(e));
}
myfunc([
    // Операция, которая выполняется 500ms
    function (next) {
        setTimeout(function () {
            next(null, '500ms');
        }, 500);
    },

    // Операция, которая завершается с ошибкой через 10ms

    // Операция, которая выполняется 200ms
    function (next) {
        setTimeout(function () {
            next(null, '200ms');
        }, 200);
    }
],
    function (error, results) {
        console.log(results);
    })