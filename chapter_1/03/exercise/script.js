import * as THREE from 'three';

//canvas
const canvas = document.querySelector('canvas.webgl');
console.log(canvas);

//escena
const scene = new THREE.Scene();

//objeto
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);


//tamaños
const sizes = {
    width: 800,
    height: 600
}

//camara
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 3;

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
