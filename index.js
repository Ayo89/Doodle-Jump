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
let score = game.score

export function start(){
    let scoreCanvas = document.createElement('div')
    scoreCanvas.classList.add('score')
    scoreCanvas.innerText = "Score: " + score
    canvas.appendChild(scoreCanvas)
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
export function setScore (score){
    let scoreCanvas = document.querySelector('.score')
    console.log(score)
    scoreCanvas.innerText = "Score: " + score

}
export function restart(){
    for(let i = 0; i < game.platforms.length;i++){
        canvas.removeChild(game.platforms[i].visual)
    }
    game.platforms = []
    game.score = 0
    let scoreCanvas = document.querySelector('.score')
    canvas.removeChild(scoreCanvas)
    gameOverr.classList.remove('see')
    gameOverr.classList.add('hide')
    
    start()
    

}

export default game  
