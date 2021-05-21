const {portfolios} = require('./data');

const Portfolio = require('../database/models/portfolio')

class FakeDBAPI {
  async cleanData() {
    await Portfolio.deleteMany({});
  }
  async addData() {
    await Portfolio.create(portfolios);
  }
  async populate() {
    await this.cleanData();
    await this.addData();
  }
}

module.exports = new FakeDBAPI();