let scene,camera,renderer
let player={x:0,y:1.6,z:0}

init()

function init(){

scene=new THREE.Scene()

camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

renderer=new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

const light=new THREE.HemisphereLight(0xffffff,0x444444)
scene.add(light)

const floor=new THREE.Mesh(
new THREE.PlaneGeometry(100,100),
new THREE.MeshPhongMaterial({color:0x333333})
)

floor.rotation.x=-Math.PI/2
scene.add(floor)

camera.position.y=1.6

animate()
}

function animate(){

requestAnimationFrame(animate)

player.x+=joy.x*0.1
player.z+=joy.y*0.1

camera.position.x=player.x
camera.position.z=player.z

renderer.render(scene,camera)

}
