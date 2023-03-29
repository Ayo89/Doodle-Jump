export default function Enemie(newEnemBottom) {
    if (this.canvas = document.querySelector('.canvas') == undefined) {
        this.canvas = document.querySelector('.canvas2')

    } else {
        this.canvas = document.querySelector('.canvas')
    }
    this.width = 85
    this.isEnemie = true
    this.height = 85
    this.left = Math.random() * 550
    this.bottom = newEnemBottom
    this.visual = document.createElement('div')
    const visual = this.visual
    visual.classList.add('enemie')
    visual.style.left = this.left + 'px'
    visual.style.bottom = this.bottom + 'px'
    visual.style.width = this.width + 'px'
    visual.style.height = this.height + 'px'
    this.canvas.appendChild(visual)
} 