import Game from './game.js'

let canvas = document.querySelector('.canvas')
let visual = document.createElement('div')
visual.classList.add('gameOver')
visual.innerHTML = "Start" + "<br> <br> " + '<button class="startB" > PRESS TO PLAY </button>'
canvas.appendChild(visual)
let startButton = document.getElementsByClassName('startB')[0]
console.log(startButton)
addEventListener('click', start)


let game = new Game()

function start(){
    let astronaut = document.createElement('div')
    astronaut.classList.add('astronaut')
    canvas.appendChild(astronaut)

    canvas.removeChild(visual)
    
    game.createPlatforms(5)
    game.astronautInitial()
    game.astronaut.jump()
    game.moveAstronaut()
}

function restart(){
    body.removeChild(canvas)
    let game = new Game()

    start()    
}

export default game 
