const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const increase = document.getElementById('increase')
const decrease = document.getElementById('decrease')
const save = document.getElementById('save')
const clear = document.getElementById('clear')
const colorEl = document.getElementById('color')
const sizeEl = document.getElementById('size')


let size = 20;
let isPressed = false;
let color = 'black'
let x, y;

const blankPage = () => {
  ctx.fillStyle = 'white'
  ctx.beginPath()
  ctx.fillRect(0,0,800,800)
}
window.onload = blankPage
increase.addEventListener('click', e =>{
  size++;
  sizeEl.innerHTML = size
})
decrease.addEventListener('click', e =>{
  size--;
  sizeEl.innerHTML = size
})

colorEl.addEventListener('change', e => {
  color = e.target.value
})

save.addEventListener('click', e => {
  const a = document.createElement('a')
  const data = canvas.toDataURL('image/png')
  a.href = data
  a.setAttribute('download', 'canvas.png')
  a.click()
})
clear.addEventListener('click', e => {
  ctx.clearRect(0,0,800, 800)
  blankPage()
})
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mousemove', e => {
  if(isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY
    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)
    x = x2
    y = y2
  }
})
canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined
  y = undefined
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2){
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke()
}

