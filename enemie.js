export default function Enemie(newEnemBottom) {
    if (this.canvas = document.querySelector('.canvas') == undefined) {
        this.canvas = document.querySelector('.canvas2')

    } else {
        this.canvas = document.querySelector('.canvas')
    }
    this.direction = 1
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
    let self = this
    this.timerIdplat2 = setInterval(function () {
        self.left += 5 * self.direction
        if (self.left >= 580) {
            self.direction = -1
        } else if (self.left <= 0) {
            self.direction = 1
        }
        self.visual.style.left = self.left + 'px'
        self.canvas.appendChild(self.visual)
    }, 60)
} 