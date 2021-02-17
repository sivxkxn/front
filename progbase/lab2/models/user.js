/**
 * @typedef User
 * @property {integer} id - id of the user
 * @property {string} login - unique username
 * @property {string} fullname - name and surname
 * @property {string} role - role
 * @property {date} registeredAt - date of the registration
 * @property {string} avaUrl - URL of image
 * @property {bool} isEnabled - if it is enabled
 */

class User {
    constructor(id, login, fullname, role, registeredAt, avaUrl, isEnabled) {
        this.id = id  // number
        this.login = login  // string
        this.fullname = fullname // string
        this.role =role
        this.registeredAt=registeredAt
        this.avaUrl=avaUrl
        this.isEnabled=isEnabled
    }
 };
 module.exports = User;