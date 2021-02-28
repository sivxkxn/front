/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let words = []
    words = tweet.split(' ')
    let hashtags = words.filter(x => x.startsWith('#'))
   .map(x=>x.split('').splice(1,x.length-1).join(''))
    return hashtags
}
// console.log(task1('Прохожу курс на #hhh #coursera по #javascript'))