const chai = require('chai')
const dirtyChai = require('dirty-chai')
chai.use(dirtyChai)
const expect = chai.expect
const HashTable = require('../src/HashTable')
const GridCoordinate = require('../src/GridCoordinate')
const CellStates = require('../src/CellStates')
const GameOfLife = require('../src/GameOfLife')
const NeighbourSpecification = require('../src/NeighbourSpecification')

class FakeDisplay {
  seed (seed) {
    this.grid = HashTable.copy(seed)
  }

  show (gridCoordinate, cellState) {
    this.grid.add(gridCoordinate, cellState)
  }
}

// describe('A one by one grid', () => {
//   describe('with a dead cell', () => {
//     const ONE_BY_ONE_WITH_DEAD_CELL = new HashTable()
//     ONE_BY_ONE_WITH_DEAD_CELL.add(new GridCoordinate(1, 1), CellStates.DEAD)
//
//     describe('after one generation', () => {
//       it('contains one dead cell', () => {
//         const display = new FakeDisplay()
//         new GameOfLife(display, ONE_BY_ONE_WITH_DEAD_CELL)
//           .tick()
//         expect(display.grid.equal(ONE_BY_ONE_WITH_DEAD_CELL)).to.be.true()
//       })
//     })
//   })
//
//   describe('with a live cell', () => {
//     const ONE_BY_ONE_WITH_LIVE_CELL = new HashTable()
//     ONE_BY_ONE_WITH_LIVE_CELL.add(new GridCoordinate(1, 1), CellStates.LIVE)
//
//     describe('after one generation', () => {
//       it('contains one dead cell', () => {
//         const display = new FakeDisplay()
//         const ONE_BY_ONE_WITH_DEAD_CELL = new HashTable()
//         ONE_BY_ONE_WITH_DEAD_CELL.add(new GridCoordinate(1, 1), CellStates.DEAD)
//         new GameOfLife(display, ONE_BY_ONE_WITH_LIVE_CELL)
//           .tick()
//         expect(display.grid.equal(ONE_BY_ONE_WITH_DEAD_CELL)).to.be.true()
//       })
//     })
//   })
// })
//
// describe('A two by two grid', () => {
//   const TWO_BY_TWO_ALL_DEAD = new HashTable()
//   TWO_BY_TWO_ALL_DEAD.add(new GridCoordinate(1, 1), CellStates.DEAD)
//   TWO_BY_TWO_ALL_DEAD.add(new GridCoordinate(1, 2), CellStates.DEAD)
//   TWO_BY_TWO_ALL_DEAD.add(new GridCoordinate(2, 1), CellStates.DEAD)
//   TWO_BY_TWO_ALL_DEAD.add(new GridCoordinate(2, 2), CellStates.DEAD)
//
//   describe('with all dead cells', () => {
//     describe('after one generation', () => {
//       it('contains all dead cells', () => {
//         const display = new FakeDisplay()
//         new GameOfLife(display, TWO_BY_TWO_ALL_DEAD)
//           .tick()
//         expect(display.grid.equal(TWO_BY_TWO_ALL_DEAD)).to.be.true()
//       })
//     })
//   })
//
//   describe('with one live cell', () => {
//     const TWO_BY_TWO_WITH_ONE_LIVE_CELL = new HashTable()
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL.add(new GridCoordinate(1, 1), CellStates.LIVE)
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL.add(new GridCoordinate(1, 2), CellStates.DEAD)
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL.add(new GridCoordinate(2, 1), CellStates.DEAD)
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL.add(new GridCoordinate(2, 2), CellStates.DEAD)
//
//     describe('after one generation', () => {
//       it('contains all dead cells', () => {
//         const display = new FakeDisplay()
//         new GameOfLife(display, TWO_BY_TWO_WITH_ONE_LIVE_CELL)
//           .tick()
//         expect(display.grid.equal(TWO_BY_TWO_ALL_DEAD)).to.be.true()
//       })
//     })
//   })
//
//   describe('with one live cell neighbour', () => {
//     const TWO_BY_TWO_WITH_ONE_LIVE_CELL_NEIGHBOUR = new HashTable()
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL_NEIGHBOUR.add(new GridCoordinate(1, 1), CellStates.LIVE)
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL_NEIGHBOUR.add(new GridCoordinate(1, 2), CellStates.DEAD)
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL_NEIGHBOUR.add(new GridCoordinate(2, 1), CellStates.LIVE)
//     TWO_BY_TWO_WITH_ONE_LIVE_CELL_NEIGHBOUR.add(new GridCoordinate(2, 2), CellStates.DEAD)
//
//     describe('after one generation', () => {
//       it('contains all dead cells', () => {
//         const display = new FakeDisplay()
//         new GameOfLife(display, TWO_BY_TWO_WITH_ONE_LIVE_CELL_NEIGHBOUR)
//           .tick()
//         expect(display.grid.equal(TWO_BY_TWO_ALL_DEAD)).to.be.true()
//       })
//     })
//   })
//
//   describe('with two live cell neighbours', () => {
//     const TWO_BY_TWO_WITH_TWO_LIVE_CELL_NEIGHBOURS = new HashTable()
//     TWO_BY_TWO_WITH_TWO_LIVE_CELL_NEIGHBOURS.add(new GridCoordinate(1, 1), CellStates.LIVE)
//     TWO_BY_TWO_WITH_TWO_LIVE_CELL_NEIGHBOURS.add(new GridCoordinate(1, 2), CellStates.LIVE)
//     TWO_BY_TWO_WITH_TWO_LIVE_CELL_NEIGHBOURS.add(new GridCoordinate(2, 1), CellStates.LIVE)
//     TWO_BY_TWO_WITH_TWO_LIVE_CELL_NEIGHBOURS.add(new GridCoordinate(2, 2), CellStates.DEAD)
//
//     const TWO_BY_TWO_WITH_ALL_LIVE_CELLS = new HashTable()
//     TWO_BY_TWO_WITH_ALL_LIVE_CELLS.add(new GridCoordinate(1, 1), CellStates.LIVE)
//     TWO_BY_TWO_WITH_ALL_LIVE_CELLS.add(new GridCoordinate(1, 2), CellStates.LIVE)
//     TWO_BY_TWO_WITH_ALL_LIVE_CELLS.add(new GridCoordinate(2, 1), CellStates.LIVE)
//     TWO_BY_TWO_WITH_ALL_LIVE_CELLS.add(new GridCoordinate(2, 2), CellStates.LIVE)
//
//     describe('after one generation', () => {
//       it('contains all live cells', () => {
//         const display = new FakeDisplay()
//         new GameOfLife(display, TWO_BY_TWO_WITH_TWO_LIVE_CELL_NEIGHBOURS)
//           .tick()
//         expect(display.grid.equal(TWO_BY_TWO_WITH_ALL_LIVE_CELLS)).to.be.true()
//       })
//     })
//   })
//
//   describe('A three by three grid', () => {
//     describe('with seven live cells', () => {
//       describe('with two that have five live neighbours', () => {
//         const THREE_BY_THREE_WITH_SIX_LIVE_CELLS = new HashTable()
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(1, 1), CellStates.LIVE)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(2, 1), CellStates.LIVE)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(3, 1), CellStates.LIVE)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(1, 2), CellStates.LIVE)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(2, 2), CellStates.LIVE)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(3, 2), CellStates.LIVE)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(1, 3), CellStates.DEAD)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(2, 3), CellStates.LIVE)
//         THREE_BY_THREE_WITH_SIX_LIVE_CELLS.add(new GridCoordinate(3, 3), CellStates.DEAD)
//
//         describe('after one generation', () => {
//           it('the two cells with five live neighbours are dead', () => {
//             const THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD = new HashTable()
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(1, 1), CellStates.LIVE)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(2, 1), CellStates.DEAD)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(3, 1), CellStates.LIVE)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(1, 2), CellStates.LIVE)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(2, 2), CellStates.DEAD)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(3, 2), CellStates.LIVE)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(1, 3), CellStates.LIVE)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(2, 3), CellStates.LIVE)
//             THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD.add(new GridCoordinate(3, 3), CellStates.LIVE)
//             const display = new FakeDisplay()
//             new GameOfLife(display, THREE_BY_THREE_WITH_SIX_LIVE_CELLS)
//               .tick()
//             expect(display.grid.equal(THREE_BY_THREE_WITH_FIVE_LIVE_NEIGHBOUR_CELLS_DEAD)).to.be.true()
//           })
//         })
//       })
//     })
//   })
// })

describe('Blinker', () => {
  const BLINKER_VERTICAL = new HashTable()
  BLINKER_VERTICAL.add(new GridCoordinate(1, 1), CellStates.DEAD)
  BLINKER_VERTICAL.add(new GridCoordinate(2, 1), CellStates.LIVE)
  BLINKER_VERTICAL.add(new GridCoordinate(3, 1), CellStates.DEAD)
  BLINKER_VERTICAL.add(new GridCoordinate(1, 2), CellStates.DEAD)
  BLINKER_VERTICAL.add(new GridCoordinate(2, 2), CellStates.LIVE)
  BLINKER_VERTICAL.add(new GridCoordinate(3, 2), CellStates.DEAD)
  BLINKER_VERTICAL.add(new GridCoordinate(1, 3), CellStates.DEAD)
  BLINKER_VERTICAL.add(new GridCoordinate(2, 3), CellStates.LIVE)
  BLINKER_VERTICAL.add(new GridCoordinate(3, 3), CellStates.DEAD)

  const BLINKER_HORIZONTAL = new HashTable()
  BLINKER_HORIZONTAL.add(new GridCoordinate(1, 1), CellStates.DEAD)
  BLINKER_HORIZONTAL.add(new GridCoordinate(2, 1), CellStates.DEAD)
  BLINKER_HORIZONTAL.add(new GridCoordinate(3, 1), CellStates.DEAD)
  BLINKER_HORIZONTAL.add(new GridCoordinate(1, 2), CellStates.LIVE)
  BLINKER_HORIZONTAL.add(new GridCoordinate(2, 2), CellStates.LIVE)
  BLINKER_HORIZONTAL.add(new GridCoordinate(3, 2), CellStates.LIVE)
  BLINKER_HORIZONTAL.add(new GridCoordinate(1, 3), CellStates.DEAD)
  BLINKER_HORIZONTAL.add(new GridCoordinate(2, 3), CellStates.DEAD)
  BLINKER_HORIZONTAL.add(new GridCoordinate(3, 3), CellStates.DEAD)

  describe('after one generation', () => {
    it('has blinked to horizontal', () => {
      const display = new FakeDisplay()
      new GameOfLife(display, BLINKER_VERTICAL)
        .tick()
      expect(display.grid.equal(BLINKER_HORIZONTAL)).to.be.true()
    })
  })

  describe('after two generations', () => {
    it('has blinked back to vertical', () => {
      const display = new FakeDisplay()
      new GameOfLife(display, BLINKER_VERTICAL)
        .tick()
        .tick()
      expect(display.grid.equal(BLINKER_VERTICAL)).to.be.true()
    })
  })
})

describe('A grid coordinate', () => {
  const gridCoordinate = new GridCoordinate(3, 3)

  describe('and neighbours', () => {
    const neighbours = [
      new GridCoordinate(2, 3),
      new GridCoordinate(4, 3),
      new GridCoordinate(3, 2),
      new GridCoordinate(3, 4),
      new GridCoordinate(2, 2),
      new GridCoordinate(4, 2),
      new GridCoordinate(2, 4),
      new GridCoordinate(4, 4)
    ]

    it('are recognised as neighbours', () => {
      neighbours.forEach((cooridinate) => {
        const result = new NeighbourSpecification(gridCoordinate).isSatisifiedBy(cooridinate)
        expect(result).to.be.true()
      })
    })
  })

  describe('and non-neighbours', () => {
    const neighbours = [
      new GridCoordinate(1, 3),
      new GridCoordinate(5, 3),
      new GridCoordinate(4, 5),
      new GridCoordinate(9, 9)
    ]

    it('are not recognised as neighbours', () => {
      neighbours.forEach((cooridinate) => {
        const result = new NeighbourSpecification(gridCoordinate).isSatisifiedBy(cooridinate)
        expect(result).to.be.false()
      })
    })
  })
})
