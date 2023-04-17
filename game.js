import Platform from './plataform.js'
import Astronaut from './astronaut.js'
import { game, setScore } from './index.js'
import Enemie from './enemie.js'
import MovePlatform from './movePlataform.js'

function Game () {
  this.canvas = document.querySelector('.canvas')
  this.platforms = []
  this.isMoving = false
  this.count = 0
  this.score = 0
  this.countForEnemies = 1
  this.flag = true
}
Game.prototype.createPlatforms = function (platformCount) {
  for (let i = 0; i < platformCount; i++) {
    const platGap = 720 / platformCount
    const newPlatBottom = 50 + i * platGap
    const newPlatform = new Platform(newPlatBottom)
    this.platforms.push(newPlatform)
  }
}
Game.prototype.updatePlataforms = function () {
  if (this.countForEnemies % 5 === 2) {
    if (this.flag) {
      const EnemtGap = 720 / 7
      const newEnemBottom = 50 + (6) * EnemtGap
      const newEnem = new Enemie(newEnemBottom)
      this.platforms.push(newEnem)
      this.flag = false
    } else {
      const EnemtGap = 720 / 7
      const newEnemBottom = 50 + (6) * EnemtGap
      const movePlat = new MovePlatform(newEnemBottom)
      this.platforms.push(movePlat)
      this.flag = true
    }
  } else {
    const platGap = 720 / 7
    const newPlatBottom = 50 + (6) * platGap
    const newPlatform = new Platform(newPlatBottom)
    this.platforms.push(newPlatform)
  }

  this.countForEnemies += this.countForEnemies + 1
}
Game.prototype.astronautInitial = function () {
  this.astronaut = new Astronaut()
  this.astronaut.coorx = this.platforms[0].left
  this.astronaut.coory = this.platforms[0].bottom
  this.astronaut.dom.style.left = this.astronaut.coorx + 'px'
  this.astronaut.dom.style.bottom = this.astronaut.coory + 'px'
}
Game.prototype.moveAstronaut = function () {
  document.addEventListener('keydown', this.move2)
}
Game.prototype.move2 = function (e) {
  const astronautVisual = document.querySelector('.astronaut')
  if (e.key === 'ArrowLeft') {
    astronautVisual.classList.add('astronautLet')
    astronautVisual.classList.remove('astronautRigth')
    game.astronaut.left()
  } else if (e.key === 'ArrowRight') {
    astronautVisual.classList.add('astronautRigth')
    astronautVisual.classList.remove('astronautLet')
    game.astronaut.rigth()
  }
}
Game.prototype.checkMove = function (steps) {
  this.isMoving = false
  for (let i = 0; i < steps; i++) {
    if (!this.isMoving) {
      game.count = 0
      this.timerId = setInterval(this.move, 30)
      this.isMoving = true
    }
  }
}
Game.prototype.move = function () {
  for (let i = 0; i < game.platforms.length; i++) {
    let distance = game.platforms[i].bottom
    if (distance <= 0) {
      game.score += 10
      setScore(game.score)
      game.remove()
      game.count = game.count + 1
    } else {
      distance -= 12
      game.platforms[i].bottom -= 12
      game.platforms[i].visual.style.bottom = distance + 'px'
      game.count = game.count + 1
    }

    if (game.count === 55) {
      game.updatePlataforms()
      clearInterval(game.timerId)
    }
  }
}
Game.prototype.remove = function () {
  clearInterval(this.platforms[0].timerIdplat)
  clearInterval(this.platforms[0].timerIdplat2)
  this.canvas.removeChild(this.platforms[0].visual)
  this.platforms.shift()
}

/*
    distance -= 120
    this.platforms[i].bottom -= 120
    this.platforms[i].visual.style.bottom = distance + 'px'
 */
export default Game
