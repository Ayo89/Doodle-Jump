import game from './index.js'

function Astronaut(coorx, coory) {
    this.width = 32
    this.height = 90
    this.coorx = parseInt(coorx)
    this.coory = parseInt(coory)
    this.dom = document.querySelector('.astronaut')
    this.dom.style.width = this.width + 'px'
    this.dom.style.height = this.height + 'px'
    this.upTimerId
    this.downTimerId
    this.isJumping = false
    this.Wind = false
    this.canvas = document.querySelector('.canvas')
    this.canvas2 = document.querySelector('.canvas2')
}

Astronaut.prototype.jump = function () {
    clearInterval(this.downTimerId)
    this.isJumping = true
    let cont = 0
    let self = this
    this.upTimerId = setInterval(function () {
        self.coory += 8
        self.dom.style.bottom = self.coory + 'px'
        cont++
        //Astronauta sale por encima
        let canvas = document.querySelector('.canvas')
        let canvas2 = document.querySelector('.canvas2')

        
        if (self.coory >= 620) {
            self.coory = 200
            self.dom.style.bottom = 200 + 'px'
            if (!this.Wind) {
                canvas.classList.remove('canvas')
                canvas.classList.add('canvas2')
                this.Wind =true
            }else{
                console.log("entra")
                canvas2.classList.remove('canvas2')
                canvas2.classList.add('canvas')
                this.Wind = false
            }
        }
        if (cont > 20) {
            clearInterval(self.upTimerId)
            self.isJumping = false
            self.fall()
        }
    }, 40)
 
}

Astronaut.prototype.fall = function () {

    let cont = -1
    cont++
    let self = this
    this.downTimerId = setInterval(function () {
        for (let i = 0; i < game.platforms.length; i++) {
            if (self.coorx >= game.platforms[i].left && self.coorx <= game.platforms[i].left + game.platforms[i].width && self.coory >= game.platforms[i].bottom - 30 && self.coory <= game.platforms[i].bottom - 30 + game.platforms[i].height) {
                if(i !== 0){
                    game.checkMove(i)

                }
                //self.coory += 10
                clearInterval(self.downTimerId)
                self.jump()   
            }
            else if (self.coorx + self.width >= game.platforms[i].left && self.coorx + self.width <= game.platforms[i].left + game.platforms[i].width && self.coory >= game.platforms[i].bottom-30 && self.coory <= game.platforms[i].bottom-30 + game.platforms[i].height){
                if (i != 0) {
                    game.checkMove(i)
                }
                
                //self.coory += 10
                clearInterval(self.downTimerId)
                self.jump()  
            }
        }
        self.coory -= 10
        self.dom.style.bottom = self.coory + 'px'
        if(self.coory <= 0){
            self.gameOver()
        }
        
    }, 40)
}

Astronaut.prototype.left = function () {
    this.coorx -= 10
    if (this.coorx < -25) {
        this.coorx = 380
    }
    this.dom.style.left = this.coorx + 'px'
}
Astronaut.prototype.rigth = function () {
    this.coorx += 10
    if (this.coorx > 380) {
        this.coorx = -25
    }
    this.dom.style.left = this.coorx + 'px'
}
Astronaut.prototype.gameOver = function () {
    this.coory=0
    this.dom.style.bottom = 0 + 'px'
    let visual = document.createElement('div')
    visual.classList.add('gameOver')
    visual.innerHTML = "Gamer Over" + "<br> <br> " + "<button> PRESS TO PLAY </button>"
    this.canvas.appendChild(visual)
    addEventListener('click', start)    

}
function start() {
    

    game.createPlatforms(5)
    game.astronautInitial()
    game.astronaut.jump()
    game.moveAstronaut()
}



export default Astronaut