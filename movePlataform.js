export default function MovePlatform(newPlatBottom) {
    if (this.canvas = document.querySelector('.canvas') == undefined) {
        this.canvas = document.querySelector('.canvas2')

    } else {
        this.canvas = document.querySelector('.canvas')
    }
    this.isEnemie = false
    this.width = 65
    this.height = 70
    this.count = 0
    this.left = Math.random() * 550
    this.visual = document.createElement('div')
    this.bottom = newPlatBottom
    this.visual.classList.add('platform2')
    this.visual.style.bottom = this.bottom + 'px'
    this.visual.style.width = this.width + 'px'
    this.visual.style.height = this.height + 'px'
    let self = this
    this.timerIdplat = setInterval(function (newPlatBottom){
        self.left += 18
        if (self.left >= 600){
            self.left = 0
        }
        self.visual.style.left = self.left + 'px'
        self.canvas.appendChild(self.visual)
    }, 150)
    
}
