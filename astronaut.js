import game from './index.js'

function Astronaut(coorx, coory) {
    this.width = 45
    this.height = 80
    this.coorx = parseInt(coorx)
    this.coory = parseInt(coory)
    this.dom = document.querySelector('.astronaut')
    this.dom.style.width = this.width + 'px'
    this.dom.style.height = this.height + 'px'
    this.upTimerId
    this.downTimerId
    this.isJumping = false
    
}

Astronaut.prototype.jump = function () {
    clearInterval(this.downTimerId)
    this.isJumping = true
    let cont = 0
    let self = this
    this.upTimerId = setInterval(function () {
        self.coory += 10
        self.dom.style.bottom = self.coory + 'px'
        cont++

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
            if (self.coorx >= game.platforms[i].left && self.coorx <= game.platforms[i].left + game.platforms[i].width && self.coory >= game.platforms[i].bottom && self.coory <= game.platforms[i].bottom + game.platforms[i].height) {
                self.coory += 10
                clearInterval(self.downTimerId)
                self.jump()   
            }
            if (self.coorx + self.width >= game.platforms[i].left && self.coorx + self.width <= game.platforms[i].left + game.platforms[i].width && self.coory >= game.platforms[i].bottom && self.coory <= game.platforms[i].bottom + game.platforms[i].height){
                self.coory += 10
                clearInterval(self.downTimerId)
                self.jump()  
            }
        }
        self.coory -= 10
        self.dom.style.bottom = self.coory + 'px'
        cont++
        if (cont > 20) {
            clearInterval(self.downTimerId)
            this.isJumping = false
            self.jump()
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




export default Astronaut