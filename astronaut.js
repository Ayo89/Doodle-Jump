let upTimerId
let downTimerId
let isJumping = false
function Astronaut(coorx, coory) {

    this.coorx = parseInt(coorx)
    this.coory = parseInt(coory)


}
let astronaut = document.querySelector('.astronaut')

Astronaut.prototype.jump = function () {
    clearInterval(downTimerId)
    isJumping = true
    let cont = 0
    let self = this
    upTimerId = setInterval(function () {
        self.coory += 10
        astronaut.style.bottom = self.coory + 'px'
        cont++

        if (cont > 20) {
            clearInterval(upTimerId)
            isJumping = false
            self.fall()
        }
    }, 20)

}

Astronaut.prototype.fall = function () {

    let cont = -1
    cont++
    let self = this

    downTimerId = setInterval(function () {
        self.coory -= 10
        astronaut.style.bottom = self.coory + 'px'
        cont++
        if (cont > 20) {
            clearInterval(downTimerId)
            self.jump()
        }
    }, 20)
}
Astronaut.prototype.fall = function () {

    let cont = -1
    cont++
    let self = this

    downTimerId = setInterval(function () {
        self.coory -= 10
        astronaut.style.bottom = self.coory + 'px'
        cont++
        if (cont > 20) {
            clearInterval(downTimerId)
            self.jump()
        }
    }, 20)
}
Astronaut.prototype.left = function () {
    this.coorx -= 10
    if (this.coorx < -25) {
        this.coorx = 380
    }
    astronaut.style.left = this.coorx + 'px'
}
Astronaut.prototype.rigth = function () {
    this.coorx += 10
    if (this.coorx > 380) {
        this.coorx = -25
    }
    astronaut.style.left = this.coorx + 'px'
}




export default Astronaut