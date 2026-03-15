class Bot{

 constructor(mesh){
  this.mesh=mesh
 }

 update(playerPos){

  let dir=new THREE.Vector3()
  dir.subVectors(playerPos,this.mesh.position)

  if(dir.length()>2){
   dir.normalize()
   this.mesh.position.add(dir.multiplyScalar(0.03))
  }

 }

}
