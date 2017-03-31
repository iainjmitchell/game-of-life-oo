const CellStates = require('./CellStates')

const LiveNeighbours = function (neighbourSpecification, cellStateCalculator) {
  const liveCoordinates = new CoordinateList()

  this.notify = (gridCoordinate, state) => {
    if (neighbourSpecification.isSatisifiedBy(gridCoordinate)) {
      if (state === CellStates.LIVE) {
        liveCoordinates.push(gridCoordinate)
      } else {
        liveCoordinates.remove(gridCoordinate)
      }
      cellStateCalculator.notify(liveCoordinates.length())
    }
  }
}

const CoordinateList = function () {
  var coordinates = []

  this.push = (coordinate) => {
    const alreadyContains = coordinates.some((aCoordinate) => { return aCoordinate.match(coordinate) })
    if (!alreadyContains) {
      coordinates.push(coordinate)
    }
  }

  this.remove = (coordinate) => {
    coordinates = coordinates.filter((aCoordinate) => {
      return !aCoordinate.match(coordinate)
    })
  }

  this.length = () => {
    return coordinates.length
  }
}

module.exports = LiveNeighbours
