import Game from './game.js'

let canvas = document.querySelector('.canvas')
let boton = document.querySelector('.start-btn')
let botonRestart = document.querySelector('.start-btn2')
boton.addEventListener('click', start)
botonRestart.addEventListener('click', restart)
let startPage = document.querySelector('.start-page')
let gameOverr = document.querySelector('.gameover')
let astronaut = document.createElement('div')


export let game = new Game()

export function start(){
    astronaut.classList.add('astronaut')
    startPage.classList.remove('see')
    startPage.classList.add('hide')
    canvas.appendChild(astronaut)
    if(game.platforms.length == 0){
        
        game.moveAstronaut()
        game.createPlatforms(7)
    }
    game.astronautInitial()
    game.astronaut.jump()
    
    
}

export function restart(){
    gameOverr.classList.remove('see')
    gameOverr.classList.add('hide')
    
    start()
    

}

export default game  
