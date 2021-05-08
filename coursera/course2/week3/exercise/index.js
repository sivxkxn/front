/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    let promises = [];

    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];
        let promise = new Promise(function (resolve, reject) {
            operation(
                function (err, data) {
                    if(err) reject(err);
                    else resolve(data);
                })
        })
        promises.push(promise);

    }
 Promise.all(promises).then((data) => callback(null, data)).catch(e => callback(e));
}
