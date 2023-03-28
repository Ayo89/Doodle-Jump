import Platform from './plataform.js'
import Astronaut from './astronaut.js'
import game from './index.js'

function Game() {
    this.canvas = document.querySelector('#canvas')
    this.astronaut
    this.platforms = []
    this.timerId
    this.isMoving =false
    this.count = 0
}
Game.prototype.createPlatforms = function (platformCount){
    for (let i = 0; i < platformCount; i++) {
        let platGap = 600 / platformCount
        let newPlatBottom = 50 + i * platGap
        let newPlatform = new Platform(newPlatBottom)
        this.platforms.push(newPlatform)
    }
}
Game.prototype.updatePlataforms = function (){
    let platGap = 600 / 5
    let newPlatBottom = 50 + (4) * platGap 
    let newPlatform = new Platform(newPlatBottom)
    this.platforms.push(newPlatform)
    
}
Game.prototype.astronautInitial = function () {
    this.astronaut = new Astronaut()
    this.astronaut.coorx = this.platforms[0].left
    this.astronaut.coory = this.platforms[0].bottom
    this.astronaut.dom.style.left = this.astronaut.coorx + 'px'
    this.astronaut.dom.style.bottom = this.astronaut.coory + 'px'
    
}
Game.prototype.moveAstronaut = function (){
    document.addEventListener('keydown', control)
    let astronautVisual = document.querySelector('.astronaut')
    let self = this
    function control(e) {
        if (e.key === 'ArrowLeft') {
            astronautVisual.classList.add('astronautLet')
            astronautVisual.classList.remove('astronautRigth')
            self.astronaut.left()
        } else if (e.key === 'ArrowRight') {
            astronautVisual.classList.add('astronautRigth')
            astronautVisual.classList.remove('astronautLet')
            self.astronaut.rigth()
        }
    }
}
Game.prototype.checkMove = function (steps){
   console.log("func")
    this.isMoving = false

    for(let i = 0; i< steps; i++){
        
        if (!this.isMoving) {
            game.count = 0

            this.timerId=  setInterval (this.move, 70 )
            this.isMoving = true
        }    
    }   
       
}
Game.prototype.move = function(){

        for (let i = 0; i < game.platforms.length; i++) {
            let distance = game.platforms[i].bottom
            distance -= 12
            game.platforms[i].bottom -= 12
            game.platforms[i].visual.style.bottom = distance + 'px'
            game.count = game.count +1
            console.log(game.count)
            
        }
    if (game.count == 60){
            game.remove()
            game.updatePlataforms()
            clearInterval(game.timerId)
        }
        

    
}
Game.prototype.remove = function (){
    this.canvas.removeChild(this.platforms[0].visual)
    this.platforms.shift()
}
 /*
    distance -= 120
    this.platforms[i].bottom -= 120
    this.platforms[i].visual.style.bottom = distance + 'px'
 */
export default Game