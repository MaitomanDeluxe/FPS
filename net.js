let socket

function startOnline(){

let name=prompt("Player name")

socket=new WebSocket(
"wss://fpsgame.maitomandeluxe.workers.dev/ws"
)

socket.onopen=()=>{
socket.send(JSON.stringify({
type:"join",
name:name
}))
}

socket.onmessage=e=>{
let data=JSON.parse(e.data)

if(data.type=="players"){
console.log(data.players)
}

}
}

function startOffline(){
alert("offline mode")
}
