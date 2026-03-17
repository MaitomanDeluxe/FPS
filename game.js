const canvas=document.getElementById("game")
const ctx=canvas.getContext("2d")

canvas.width=innerWidth
canvas.height=innerHeight

let player={x:200,y:200,name:"me"}
let others={}

window.updatePlayers = updatePlayers

function loop(){
requestAnimationFrame(loop)

player.x+=joy.x*3
player.y+=joy.y*3

sendMove(player.x,player.y)

ctx.fillStyle="black"
ctx.fillRect(0,0,canvas.width,canvas.height)

// 自分
ctx.fillStyle="cyan"
ctx.fillRect(player.x,player.y,20,20)

// 他人
ctx.fillStyle="lime"
for(let id in others){
let p=others[id]
ctx.fillRect(p.x,p.y,20,20)

// 名前表示
ctx.fillStyle="white"
ctx.fillText(p.name,p.x,p.y-5)
ctx.fillStyle="lime"
}
}

loop()

function updatePlayers(list){
let panel=document.getElementById("players")
panel.innerHTML="<b>Players</b><br>"

list.forEach(p=>{
panel.innerHTML+=p.name+"<br>"

if(p.name===player.name)return

others[p.id]={x:p.x,y:p.y,name:p.name}
})
}
