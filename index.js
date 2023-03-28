import Game from './game.js'

let game = new Game()
game.createPlatforms(5)
game.astronautInitial()
game.astronaut.jump()
game.moveAstronaut()

export default game
