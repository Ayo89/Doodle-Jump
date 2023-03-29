import { game, start, restart } from './index.js'

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

        
        if (self.coory >= 720) {
            self.coory = 250
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
        console.log(self.coory)
        if(parseInt(self.coory) <= 0){
            console.log('hola')
            
           return self.gameOver()
        }
        
    }, 40)
}

Astronaut.prototype.left = function () {
    this.coorx -= 10
    console.log(this.coorx)
    if (this.coorx < -25) {
        this.coorx = 620
    }
    this.dom.style.left = this.coorx + 'px'
}
Astronaut.prototype.rigth = function () {
    this.coorx += 10
    console.log(this.coorx)
    if (this.coorx > 640) {
        this.coorx = -25
    }
    this.dom.style.left = this.coorx + 'px'
}
Astronaut.prototype.gameOver = function () {
    clearInterval(this.downTimerId)
    this.coory=0
    this.dom.style.bottom = 0 + 'px'
    this.botonRestart = document.querySelector('.start-btn2')
    this.botonRestart.addEventListener('click', restart)
    this.gameOverr = document.querySelector('.gameover')
    this.gameOverr.classList.add('see')
}



export default Astronaut