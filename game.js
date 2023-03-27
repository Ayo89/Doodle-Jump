import Platform from './plataform.js'
import Astronaut from './astronaut.js'

function Game() {
    this.canvas = document.querySelector('#canvas')
    this.astronaut
    this.platforms = []
}
Game.prototype.createPlatforms = function (platformCount){
    for (let i = 0; i < platformCount; i++) {
        let platGap = 600 / platformCount
        let newPlatBottom = 50 + i * platGap
        let newPlatform = new Platform(newPlatBottom)
        this.platforms.push(newPlatform)
    }
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

export default Game