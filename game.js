import Platform from './plataform.js'
import Astronaut from './astronaut.js'

function Game() {
    this.canvas = document.querySelector('#canvas')
    this.astronaut
    this.platforms = []
    this.timerId
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
    let self = this
    function control(e) {
        if (e.key === 'ArrowLeft') {
            self.astronaut.left()
        } else if (e.key === 'ArrowRight') {
            self.astronaut.rigth()
        }
    }
}
Game.prototype.checkMove = function (steps){
   
    for(let i = 0; i< steps; i++){
        this.remove()
        
        for (let i = 0; i < this.platforms.length; i++) {
            let distance = this.platforms[i].bottom
            distance -= 120
            this.platforms[i].bottom -= 120
            this.platforms[i].visual.style.bottom = distance + 'px'
        }
        this.updatePlataforms()
    }    


    
       
}

Game.prototype.remove = function (){
    this.canvas.removeChild(this.platforms[0].visual)
    this.platforms.shift()
}

export default Game