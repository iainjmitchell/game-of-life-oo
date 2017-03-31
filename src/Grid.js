const Cell = require('./Cell')

const Grid = function (display, seed, gridState) {
  const cells = []

  function initialise () {
    seed.keys().forEach((coordinate) => {
      const cellState = seed.get(coordinate)
      cells.push(new Cell(coordinate, cellState, cells, display))
    })
  }

  this.shareState = () => {
    cells.forEach((cell) => cell.shareState())
  }

  this.tick = () => {
    cells.forEach((cell) => cell.tick())
  }

  initialise()
  this.shareState()
}

module.exports = Grid
