const Path = require('path');
/**
 * @typedef Media
 * @property {integer} path
 */
class Media {
  constructor(path) {
    this.path = Path.resolve(path);
  }
}

module.exports = Media;
module.exports = Media