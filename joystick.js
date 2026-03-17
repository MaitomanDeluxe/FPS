let joy={x:0,y:0}
let active=false

const base=document.getElementById("joystick")
const stick=document.getElementById("stick")

base.addEventListener("touchstart",()=>active=true)

window.addEventListener("touchend",()=>{
active=false
joy.x=0;joy.y=0
stick.style.left="30px"
stick.style.top="30px"
})

window.addEventListener("touchmove",e=>{
if(!active)return
let t=e.touches[0]
let rect=base.getBoundingClientRect()

let x=t.clientX-rect.left-60
let y=t.clientY-rect.top-60

joy.x=x/40
joy.y=y/40

stick.style.left=(30+x)+"px"
stick.style.top=(30+y)+"px"
})
