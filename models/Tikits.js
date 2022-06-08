const shortid = require("shortid");

class Tikits {
  /**
   *
   * @param {string} username
   * @param {number} price
   */
  constructor(username, price) {
    this.username = username;
    this.id = shortid.generate();
    this.price = price;
    this.createAt = new Date();
    this.updeateAt = new Date();
  }
}

module.exports = Tikits;
