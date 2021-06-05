const {portfolios, users} = require('./data');

const Portfolio = require('../database/models/portfolio')
const User = require('../database/models/user')

class FakeDBAPI {
  async cleanData() {
    await Portfolio.deleteMany({});
    await User.deleteMany({});
  }
  async addData() {
    await User.create(users);
    await Portfolio.create(portfolios);
  }
  async populate() {
    await this.cleanData();
    await this.addData();
  }
}

module.exports = new FakeDBAPI();