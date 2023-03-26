import Game from './game.js'
import Platform from './plataform.js'
import Astronaut from './astronaut.js'


let astronaut = document.querySelector('.astronaut')
let coorx
let coory

const canvas = document.querySelector('#canvas')
let platformCount = 6
let platforms = []
let play = true
let platGap

function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
        platGap = 600 / platformCount
        let newPlatBottom = 50 + i * platGap
        let newPlatform = new Platform(newPlatBottom)
        platforms.push(newPlatform)
    }
}

function astronautInitial() {
    astronaut.style.left = platforms[0].left + 'px'
    astronaut.style.bottom = platforms[0].bottom + 'px'
    coorx = (astronaut.style.left.slice(0, -2))
    coory = (astronaut.style.bottom.slice(0, -2))

}

createPlatforms()
astronautInitial()
let astronautObj = new Astronaut(coorx, coory)
astronautObj.jump()


document.addEventListener('keydown', control)
function control(e) {
    if (e.key === 'ArrowLeft') {
        astronautObj.left()
    } else if (e.key === 'ArrowRight') {
        astronautObj.rigth()
    }
}



    //jump()