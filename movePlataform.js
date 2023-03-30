export default function MovePlatform(newPlatBottom) {
    if (this.canvas = document.querySelector('.canvas') == undefined) {
        this.canvas = document.querySelector('.canvas2')

    } else {
        this.canvas = document.querySelector('.canvas')
    }
    this.direction = 1
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
    self.left = 0
    this.timerIdplat = setInterval(function (){
        self.left += 5 * self.direction
        if (self.left >= 580){
            self.direction = -1
        }else if(self.left <= 0) {
            self.direction = 1
        }
        self.visual.style.left = self.left + 'px'
        self.canvas.appendChild(self.visual)
    }, 45)
    
}
