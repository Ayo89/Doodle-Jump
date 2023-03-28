export default function Platform(newPlatBottom) {
    this.width = 65
    this.height = 70
    this.left = Math.random() * 350
    this.bottom = newPlatBottom
    this.visual = document.createElement('div')
    const visual = this.visual
    visual.classList.add('platform')
    visual.style.left = this.left + 'px'
    visual.style.bottom = this.bottom + 'px'
    visual.style.width = this.width + 'px'
    visual.style.height = this.height + 'px'
    canvas.appendChild(visual)
}
