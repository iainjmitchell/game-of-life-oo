class GridCoordinate {
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  match (that) {
    return (this.x === that.x) && (this.y === that.y)
  }
}

module.exports = GridCoordinate
