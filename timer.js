var timeInSeconds1, timeInSeconds2
var matchTime = 10
var start1Clicked, start2Clicked
var canvas1, canvas2
var ctx1, ctx2
var timeout
function initialize(){

  timeInSeconds1 = matchTime
  timeInSeconds2 = matchTime
  start1Clicked = false
  start2Clicked = false
  createCanvas1()
  createCanvas2()
  render()
}
function createCanvas1(){
  canvas1 = document.getElementById('c1')
  ctx1 = canvas1.getContext('2d')
  ctx1.font = "20px Arial"
}
function createCanvas2(){
  canvas2 = document.getElementById('c2')
  ctx2 = canvas2.getContext('2d')
  ctx2.font = "20px Arial"
}
function render(){
  logic()
  drawCanvas1()
  drawCanvas2()
  timeout = setTimeout(render, 1000)
}
function drawCanvas1(){
  ctx1.clearRect(0,0,canvas1.width,canvas1.height)
  ctx1.fillText(Math.floor(timeInSeconds1/60) + ':' + (timeInSeconds1%60 < 10 ? '0' : '') + (timeInSeconds1%60), 5,18)
}
function drawCanvas2(){
  ctx2.clearRect(0,0,canvas2.width,canvas2.height)
  ctx2.fillText(Math.floor(timeInSeconds2/60) + ':' + (timeInSeconds2%60 < 10 ? '0' : '') + (timeInSeconds2%60), 5,18)
}
function logic(){
  if(start1Clicked){
    timeInSeconds1--
  }
  if(start2Clicked){
    timeInSeconds2--
  }
  win()
}
function start1(){
  start1Clicked = true
  start2Clicked = false
}
function start2(){
  start2Clicked = true
  start1Clicked = false
}
function reset(){
  timeInSeconds1 = matchTime
  timeInSeconds2 = matchTime
  start1Clicked = false
  start2Clicked = false
}
function win(){
  if(timeInSeconds1 === 0){
    alert('Player 2 Wins!')
    reset()
  } else
  if(timeInSeconds2 === 0){
    alert('Player 1 wins!')
    reset()
  }
}
