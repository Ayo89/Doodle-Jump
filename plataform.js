export default function Platform (newPlatBottom) {
  if (this.canvas = document.querySelector('.canvas') == undefined) {
    this.canvas = document.querySelector('.canvas2')
  } else {
    this.canvas = document.querySelector('.canvas')
  }
  this.isEnemie = false
  this.width = 80
  this.height = 90
  this.left = Math.random() * 550
  this.bottom = newPlatBottom
  this.visual = document.createElement('div')
  // const visual = this.visual
  this.visual.classList.add('platform')
  this.visual.style.left = this.left + 'px'
  this.visual.style.bottom = this.bottom + 'px'
  this.visual.style.width = this.width + 'px'
  this.visual.style.height = this.height + 'px'
  this.canvas.appendChild(this.visual)
}
