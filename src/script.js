import * as THREE from 'three'
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
  width: 800,
  height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Time
// let time = Date.now()

// CLock
// const clock = new THREE.Clock()

// gsap (moves cube from center to right edge and back)
for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    gsap.to(mesh.position, { duration: 1, delay: i, x: 2 });
  } else {
    gsap.to(mesh.position, { duration: 1, delay: i, x: 0 });
  }
}

// Animations
const tick = () => {
  // Time (to move animations at same speed regardless of FPS)
  // const currentTime = Date.now()
  // const deltaTime = currentTime - time
  // time = currentTime
  // Update objects
  // mesh.position.x += 0.01 // Moves to the right
  // mesh.rotation.y += 0.001 * deltaTime

  // CLock
  // const elapsedTime = clock.getElapsedTime()
  // console.log(elapsedTime)
  // // camera.rotation.x = elapsedTime// 1 revolution per second
  // camera.position.y = Math.sin(elapsedTime) // 1 revolution per second
  // camera.position.x = Math.cos(elapsedTime)
  // camera.lookAt(mesh.position)
  

  // Render
  renderer.render(scene, camera)

  window.requestAnimationFrame(tick)
}

tick()