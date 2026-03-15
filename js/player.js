class Player{

 constructor(camera){
  this.camera=camera
  this.speed=0.08
 }

 update(){

  let sp=this.speed

  if(input.sprint) sp*=1.8
  if(input.crouch) sp*=0.4

  if(input.forward) this.camera.translateZ(-sp)
  if(input.back) this.camera.translateZ(sp)
  if(input.left) this.camera.translateX(-sp)
  if(input.right) this.camera.translateX(sp)

 }

}
