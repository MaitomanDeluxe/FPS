const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

camera.position.y=1.6

const player=new Player(camera)
const weapon=new Weapon(camera)

const floorGeo=new THREE.PlaneGeometry(200,200)
const floorMat=new THREE.MeshBasicMaterial({color:0x444444})
const floor=new THREE.Mesh(floorGeo,floorMat)
floor.rotation.x=-Math.PI/2
scene.add(floor)

const botMesh=new THREE.Mesh(
 new THREE.BoxGeometry(1,2,1),
 new THREE.MeshBasicMaterial({color:0xff0000})
)
botMesh.position.z=-20
scene.add(botMesh)

const bot=new Bot(botMesh)

function animate(){

 requestAnimationFrame(animate)

 player.update()
 weapon.update()

 bot.update(camera.position)

 updateCrosshair()

 renderer.render(scene,camera)

}

animate()
