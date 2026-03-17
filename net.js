let socket
let lastMove=Date.now()
let myName=""

function startOnline(){

myName=prompt("名前")
document.getElementById("menu").style.display="none"

socket=new WebSocket("wss://fpsgame.maitomandeluxe.workers.dev/ws")

socket.onopen=()=>{
document.getElementById("status").innerText="接続成功"
socket.send(JSON.stringify({type:"join",name:myName}))
}

socket.onmessage=e=>{
let data=JSON.parse(e.data)

if(data.type==="players"){
updatePlayers(data.players)
}

if(data.type==="kick"){
alert("AFKでキック")
location.reload()
}
}

setInterval(()=>{
if(Date.now()-lastMove>60000){
socket.send(JSON.stringify({type:"afk"}))
}
},5000)
}

function sendMove(x,y){
if(!socket)return

lastMove=Date.now()

socket.send(JSON.stringify({
type:"move",
x:x,
y:y,
name:myName
}))
}

function startOffline(){
document.getElementById("menu").style.display="none"
document.getElementById("status").innerText="オフライン"
}
