let socket
let myId=null
let lastMove=Date.now()

function startOnline(){

let name=prompt("名前入力")
document.getElementById("menu").style.display="none"

socket=new WebSocket("wss://fpsgame.maitomandeluxe.workers.dev/ws")

socket.onopen=()=>{
document.getElementById("status").innerText="接続成功"
socket.send(JSON.stringify({type:"join",name:name}))
}

socket.onmessage=e=>{
let data=JSON.parse(e.data)

if(data.type==="init"){
myId=data.id
}

if(data.type==="players"){
updatePlayers(data.players)
}

if(data.type==="kick"){
alert("AFKでキックされました")
location.reload()
}
}

// AFK監視
setInterval(()=>{
if(Date.now()-lastMove>60000){
socket.send(JSON.stringify({type:"afk"}))
}
},5000)
}

function sendMove(x,z){
if(!socket)return

lastMove=Date.now()

socket.send(JSON.stringify({
type:"move",
x:x,
z:z
}))
}

function startOffline(){
document.getElementById("menu").style.display="none"
document.getElementById("status").innerText="オフライン"
}
