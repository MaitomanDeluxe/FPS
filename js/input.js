const input = {
 forward:false,
 back:false,
 left:false,
 right:false,
 sprint:false,
 crouch:false
}

document.addEventListener("keydown",e=>{
 if(e.code==="KeyW") input.forward=true
 if(e.code==="KeyS") input.back=true
 if(e.code==="KeyA") input.left=true
 if(e.code==="KeyD") input.right=true
 if(e.code==="ShiftLeft") input.sprint=true
 if(e.code==="ControlLeft") input.crouch=true
})

document.addEventListener("keyup",e=>{
 if(e.code==="KeyW") input.forward=false
 if(e.code==="KeyS") input.back=false
 if(e.code==="KeyA") input.left=false
 if(e.code==="KeyD") input.right=false
 if(e.code==="ShiftLeft") input.sprint=false
 if(e.code==="ControlLeft") input.crouch=false
})
