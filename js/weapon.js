class Weapon{

 constructor(camera){
  this.camera=camera
  this.recoil=0
 }

 shoot(){

  this.recoil=0.02

 }

 update(){

  if(this.recoil>0){
   this.camera.rotation.x+=this.recoil
   this.recoil*=0.8
  }

 }

}
