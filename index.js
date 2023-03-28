import Game from './game.js'

let canvas = document.querySelector('.canvas')
let boton = document.querySelector('.start-btn')
boton.addEventListener('click', start)



export let game = new Game()

export function start(){
    let astronaut = document.createElement('div')
    let startPage = document.querySelector('.start-page')
    astronaut.classList.add('astronaut')
    canvas.appendChild(astronaut)
    startPage.classList.add('hide')
    
    game.createPlatforms(5)
    game.astronautInitial()
    game.astronaut.jump()
    game.moveAstronaut()
}

export function restart(){
    let body = document.getElementsByTagName('body')[0]
    console.log(body)
    console.log("llega")
    body.removeChild(canvas)
    canvas = document.createElement('div')
    canvas.classList.add('canvas')
    body.appendChild(canvas)
    game = new Game()
    console.log(game.platforms)
    game.platforms = []
    console.log(game.platforms)
    start()    
    console.log(game.platforms)

}

export default game  
