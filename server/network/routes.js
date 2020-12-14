const calculator = require('../controller/calculator/network')

const routes = function (server) {
  server.use('/calculator', calculator)
}

module.exports = routes