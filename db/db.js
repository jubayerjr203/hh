const Tikits = require("../models/Tikits");

class MyDb {
  constructor() {
    this.mainTikcketArry = [];
  }
  /**
   *  create a new tikite
   * @param {string} username
   * @param {number} price
   * @returns {Tikits}
   */
  create(username, price) {
    const tikite = new Tikits(username, price);
    this.mainTikcketArry.push(tikite);
    return tikite;
  }
  /**
   *
   * @param {string} username
   * @param {number} price
   * @param {number} quntity
   */
  bulkCreate(username, price, quntity) {
    const result = [];
    for (let i = 0; i < quntity; i++) {
      const bllktikit = this.create(username, price);
      result.push(bllktikit);
    }
    return result;
  }
  find() {
    return this.mainTikcketArry;
  }
  findByid(ticketid) {
    const findedTicit = this.mainTikcketArry.find((tic) => tic.id === ticketid);
    return findedTicit;
  }
  findTikcetByusername(username) {
    const ticket = this.mainTikcketArry.filter(
      (tic) => tic.username === username
    );
    return ticket;
  }
  updetByid(ticitid, tikitbody) {
    const tikit = this.findByid(ticitid);
    tikit.username = tikitbody.username ?? tikit.username;
    tikit.price = tikitbody.price ?? tikit.price;
    tikitbody.updeateAt = new Date();

    return tikit;
  }
  deleteByid(ticId) {
    const ticIndex = this.mainTikcketArry.findIndex((i) => i.id === ticId);
    if (ticIndex !== -1) {
      return true;
    } else {
      return false;
    }
  }

  draw(winerCount) {
    const winnerindexes = new Array(winerCount);

    let index = 0;
    while (index < winerCount) {
      let winnerIndex = Math.floor(Math.random() * this.mainTikcketArry.length);
      if (!winnerindexes.includes(winnerIndex)) {
        winnerindexes[index++] = winnerIndex;
        continue;
      }
    }

    const winners = winnerindexes.map((i) => this.mainTikcketArry[i]);
    return winners;
  }
}

const mdb = new MyDb();
module.exports = mdb;
