const Server = require('websocket').server
const http = require('http')
const GameOfLife = require('./src/GameOfLife')
const HashTable = require('./src/HashTable')
const GridCoordinate = require('./src/GridCoordinate')
const CellStates = require('./src/CellStates')

const Socket = new Server({
  httpServer: http.createServer().listen(1337)
})

const Display = function (connection) {
  this.seed = () => {

  }

  this.show = (gridCoordinate, cellState) => {
    connection.send(JSON.stringify({
      x: gridCoordinate.x,
      y: gridCoordinate.y,
      cellState: (cellState === CellStates.LIVE) ? 'live' : 'dead'
    }))
  }
}

class SeedFactory {
  static create (clientSeed) {
    const seed = new HashTable()
    clientSeed.forEach((cell) => {
      seed.add(new GridCoordinate(cell.x, cell.y), (cell.cellState === 'live') ? CellStates.LIVE : CellStates.DEAD)
    })
    return seed
  }
}

Socket.on('request', (request) => {
  const connection = request.accept(null, request.origin)
  const display = new Display(connection)

  connection.on('message', (message) => {
    const clientSeed = JSON.parse(message.utf8Data)
    const seed = SeedFactory.create(clientSeed)
    const game = new GameOfLife(display, seed)

    setInterval(() => {
      game.tick()
    }, 1000)
  })

  connection.on('close', (connection) => {
    console.log('connection closed')
  })
})
