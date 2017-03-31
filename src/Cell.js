const CellStateCalculator = require('./CellStateCalculator')
const LiveNeighbours = require('./LiveNeighbours')
const NeighbourSpecification = require('./NeighbourSpecification')

const Cell = function (gridCoordinate, initialState, cells, display) {
  const cellStateCalculator = new CellStateCalculator(initialState)
  const liveNeighbours = new LiveNeighbours(
    new NeighbourSpecification(gridCoordinate), cellStateCalculator)
  var cellState = initialState

  this.shareState = () => {
    cells.forEach((cell) => cell.notify(gridCoordinate, cellState))
  }

  this.notify = (gridCoordinate, state) => {
    liveNeighbours.notify(gridCoordinate, state)
  }

  this.tick = () => {
    cellState = cellStateCalculator.recalculate()
    display.show(gridCoordinate, cellState)
  }
}

module.exports = Cell
