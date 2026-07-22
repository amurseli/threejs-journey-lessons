import * as THREE from 'three';

//escena
const scene = new THREE.Scene();

//objeto
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//camara
