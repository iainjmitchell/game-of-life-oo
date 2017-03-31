const CellStates = require('./CellStates')

const CellStateCalculator = function (initialState) {
  var liveNeighbours = 0
  var calculatedState = initialState

  this.notify = (newLiveNeighbours) => {
    liveNeighbours = newLiveNeighbours
  }

  this.recalculate = () => {
    calculatedState = getState()
    return calculatedState
  }

  function getState () {
    if (calculatedState === CellStates.LIVE && (liveNeighbours < 2 || liveNeighbours > 3)) {
      return CellStates.DEAD
    }
    if (calculatedState === CellStates.DEAD && liveNeighbours === 3) {
      return CellStates.LIVE
    }
    return calculatedState
  }
}

module.exports = CellStateCalculator
