const Grid = require('./Grid')
const HashTable = require('./HashTable')

const GameOfLife = function (display, seed) {
  display.seed(seed)
  const grid = new Grid(display, HashTable.copy(seed))

  this.tick = () => {
    grid.tick()
    grid.shareState()
    return this
  }
}

module.exports = GameOfLife
