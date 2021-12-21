//import * as THREE from 'https://threejs.org/build/three.module.js';


import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
class General_object{
 show_me_desire(){
  alert("Hello")}



}


//Helper variables
var depth=10;
var width=20;
var height=5;

class Foundation extends General_object{


  constructor(width, depth){
  super();
  this.components=[];
  this.width=width;
  this.depth=depth;
    }
  add_components_to_scene(scene){
    const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347,wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
  }
}



class Garage_block extends General_object{
  
  constructor(width, depth){
  super();
  this.components=[];
  this.width=width;
  this.depth=depth;
    }
  add_components_to_scene(scene){
    const geometry = new THREE.TorusGeometry(2, 0.5, 16, 100);
    const material = new THREE.MeshStandardMaterial({ color: 0xff6347,wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
  }
}

//This is basically the template for the front wall right now
class Garage_walls extends General_object{
  
  constructor(x, y,translate_x=0,translate_y=0, translate_z=0, rotation=0){
  super();
  this.components=[];
  this.width=x;
  this.depth=y;
  this.rotation=0;
  this.geometry=new THREE.PlaneGeometry( x, y );
  this.geometry.rotateY(rotation)
  this.geometry.translate(translate_x,translate_y,translate_z );
  const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
  this.object = new THREE.Mesh(this.geometry, material);
    }


  add_components_to_scene(scene){
   
    //this.geometry = new THREE.PlaneGeometry( width, height );
    //this.geometry.translate(0,height/2,depth/2);
    const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
    //const torus = new THREE.Mesh(this.geometry, material);
    scene.add(this.object);
  }
}

class Roof_walls extends General_object{
  
  constructor(x, y,translate_x=0,translate_y=0, translate_z=0, rotation=0){
  super();
  this.components=[];
  this.width=x;
  this.depth=y;
  this.rotation=0;
  
  const a=new THREE.Vector3(0,-x/2,0);
  const b= new THREE.Vector3(0, x/2, 0);
  const c=new THREE.Vector3(0, x/2,y/2);
  this.geometry=new THREE.PlaneGeometry( x, y );

  const shape = new THREE.Shape();

  
  shape.moveTo(-x/2, -y/2);
  shape.lineTo(x/2,-y/2);
  shape.lineTo(x/2, y/2);
  
  this.geometry = new THREE.ShapeGeometry(shape);




  this.geometry.rotateY(rotation)
  this.geometry.translate(translate_x,translate_y,translate_z );
  const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
  this.object = new THREE.Mesh(this.geometry, material);
    }


  add_components_to_scene(scene){
   
    //this.geometry = new THREE.PlaneGeometry( width, height );
    //this.geometry.translate(0,height/2,depth/2);
    const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
    //const torus = new THREE.Mesh(this.geometry, material);
    scene.add(this.object);
  }
}
class Roof_walls_square extends General_object{
  
  constructor(x, y,translate_x=0,translate_y=0, translate_z=0, rotation=0){
  super();
  this.components=[];
  this.width=x;
  this.depth=y;
  this.rotation=0;
 
  this.geometry=new THREE.PlaneGeometry( x, y );
  this.geometry.rotateY(rotation)
  this.geometry.translate(translate_x,translate_y,translate_z );
  const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
  this.object = new THREE.Mesh(this.geometry, material);
    }


  add_components_to_scene(scene){
   
    //this.geometry = new THREE.PlaneGeometry( width, height );
    //this.geometry.translate(0,height/2,depth/2);
    const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
    //const torus = new THREE.Mesh(this.geometry, material);
    scene.add(this.object);
  }
}
class Roof extends General_object{
  
  
  constructor(x, y,translate_x=0,translate_y=0, translate_z=0, rotation=0,roof_height=1){
    super();
    this.components=[];
    this.width=x;
    this.depth=y;
    this.rotation=0;
    this.geometry=new THREE.PlaneGeometry( Math.sqrt(x*x+roof_height*roof_height),10 );
    this.geometry.rotateX(Math.PI/2);
    this.geometry.rotateZ(Math.atan(roof_height/x));
    
    this.geometry.translate(translate_x,translate_y,translate_z );
    const material = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} );
    this.object = new THREE.Mesh(this.geometry, material);
      }
  
  
    add_components_to_scene(scene){
     
      //this.geometry = new THREE.PlaneGeometry( width, height );
      //this.geometry.translate(0,height/2,depth/2);
      const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
      //const torus = new THREE.Mesh(this.geometry, material);
      scene.add(this.object);
    }
}




class Front_wall extends Garage_walls{
  constructor(){
    super();
  }
  add_components_to_scene(scene){
    const geometry = new THREE.PlaneGeometry( width, height );
    const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
  }
}


class Controller{

  constructor(width, height, ){

  }


}

function main(){
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});




let flat_ground=new Foundation(depth,width)
//width_of_a_plane,height_of_a_plane, translation_x,translation_y, translation_z; 
//in left and right walls we rotate around the y axis so the width becomes the depth height remains the so we have
//depth, height, half of width of building, half of height, and rotation by 90 deg
let wall_front=new Garage_walls(20,5,0,2.5,5)
let wall_back=new Garage_walls(20,5,0,2.5,-5)
let wall_left=new Garage_walls(10,5,-10,2.5,0,Math.PI/2)
let wall_right=new Garage_walls(10,5,+10,2.5,0,Math.PI/2)

wall_front.add_components_to_scene(scene)
wall_back.add_components_to_scene(scene)
wall_left.add_components_to_scene(scene)
wall_right.add_components_to_scene(scene)
//flat_ground.add_components_to_scene(scene)

//width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
let roof_front=new Roof_walls(20,5,0,5+2.5,5)
let roof_back=new Roof_walls(20,5,0,5+2.5,-5)
let roof_right=new Roof_walls_square(10,5,+10,5+2.5,0,Math.PI/2)
//width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
let roof=new Roof(20,10,0,5+2.5,0,0, 5)



roof_front.add_components_to_scene(scene)
roof_back.add_components_to_scene(scene)
roof_right.add_components_to_scene(scene)
roof.add_components_to_scene(scene)


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setY(20);
camera.rotateX(0.75)

renderer.render(scene, camera);

//Plane

const geometry_plane = new THREE.PlaneGeometry( width, depth );
geometry_plane.rotateX(Math.PI/2)
const material_plane = new THREE.MeshBasicMaterial( {color: 0xff6347, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry_plane, material_plane );
scene.add( plane );



// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347,wireframe: true });
const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);





// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

 const lightHelper = new THREE.PointLightHelper(pointLight)
 const gridHelper = new THREE.GridHelper(200, 200,200);
 scene.add(lightHelper, gridHelper)

 const controls = new OrbitControls(camera, renderer.domElement);


// Background

// Scroll Animation

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  //torus.rotation.x += 0.01;
  //torus.rotation.y += 0.005;
  //torus.rotation.z += 0.01;


  // controls.update();

  renderer.render(scene, camera);
}
animate();
}
main()



function helper_fuction(){
  document.addEventListener('keydown', logKey);
  
  function logKey(e) {
    console.log( ` ${e.code}`);
  }
}
helper_fuction();



function secondary_main() {
  
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  

  const scene = new THREE.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  renderer.render(scene, camera);
}

//secondary_main();