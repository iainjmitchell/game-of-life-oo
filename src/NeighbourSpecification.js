const NeighbourSpecification = function (gridCoordinate) {
  this.isSatisifiedBy = (anotherGridCoordinate) => {
    return isDifferentGridCoordinate(anotherGridCoordinate) &&
      isWithinRangeOfOne(anotherGridCoordinate.x, gridCoordinate.x) &&
      isWithinRangeOfOne(anotherGridCoordinate.y, gridCoordinate.y)
  }

  function isWithinRangeOfOne (number1, number2) {
    const difference = number1 - number2
    return (difference <= 1 && difference >= -1)
  }

  function isDifferentGridCoordinate (anotherGridCoordinate) {
    return !gridCoordinate.match(anotherGridCoordinate)
  }
}

module.exports = NeighbourSpecification
