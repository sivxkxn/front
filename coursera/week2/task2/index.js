/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let newArr = []
    hashtags.filter(x => {
        if (!newArr.includes(x.toLowerCase())) { newArr.push(x.toLowerCase()) }
    })
    return newArr.join(', ').toLowerCase()

};
// console.log(task2(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']))