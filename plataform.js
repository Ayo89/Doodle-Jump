export default function Platform(newPlatBottom) {
    this.left = Math.random() * 350
    this.bottom = newPlatBottom
    this.visual = document.createElement('div')
    const visual = this.visual
    visual.classList.add('platform')
    visual.style.left = this.left + 'px'
    visual.style.bottom = this.bottom + 'px'
    canvas.appendChild(visual)
}