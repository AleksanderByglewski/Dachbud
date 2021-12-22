//import * as THREE from 'https://threejs.org/build/three.module.js';

import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js';
import './style.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

//import './style.css';
import * as three from 'https://cdn.skypack.dev/pin/three@v0.135.0-pjGUcRG9Xt70OdXl97VF/mode=imports,min/optimized/three.js';
//import * as three from 'https://unpkg.com/three@0.124.0/build/three.module.js';
//<script src="https://threejs.org/build/three.js"></script> 
//import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
//import {GUI} from 'https://cdn.jsdelivr.net/npm/lil-gui@0.15.0/dist/lil-gui.umd.min.js';


class General_object{
 show_me_desire(){
  alert("Hello")}



}



//Working with little GUI
class StringToNumberHelper {
    constructor(obj, prop) {
      this.obj = obj;
      this.prop = prop;
    }
    get value() {
      return this.obj[this.prop];
    }
    set value(v) {
      this.obj[this.prop] = parseFloat(v);
    }
  }


  class DegRadHelper {
    constructor(obj, prop) {
      this.obj = obj;
      this.prop = prop;
    }
    get value() {
      return THREE.MathUtils.radToDeg(this.obj[this.prop]);
    }
    set value(v) {
      this.obj[this.prop] = THREE.MathUtils.degToRad(v);
    }
  }

  const wrapModes = {
    'ClampToEdgeWrapping': THREE.ClampToEdgeWrapping,
    'RepeatWrapping': THREE.RepeatWrapping,
    'MirroredRepeatWrapping': THREE.MirroredRepeatWrapping,
  };
  function updateTexture() {
    texture.needsUpdate = true;
  }
const gui = new GUI();
const loader = new THREE.TextureLoader();
var  texture = loader.load('wall.jpg');
texture = loader.load('roof2.jpg');
texture = loader.load('uv_grid_opengl.jpg');
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
gui.add(new StringToNumberHelper(texture, 'wrapS'), 'value', wrapModes)
.name('texture.wrapS')
.onChange(updateTexture);
gui.add(new StringToNumberHelper(texture, 'wrapT'), 'value', wrapModes)
.name('texture.wrapT')
.onChange(updateTexture);
gui.add(texture.repeat, 'x', 0, 5, .01).name('texture.repeat.x');
gui.add(texture.repeat, 'y', 0, 5, .01).name('texture.repeat.y');
gui.add(texture.offset, 'x', -2, 2, .01).name('texture.offset.x');
gui.add(texture.offset, 'y', -2, 2, .01).name('texture.offset.y');
gui.add(texture.center, 'x', -.5, 1.5, .01).name('texture.center.x');
gui.add(texture.center, 'y', -.5, 1.5, .01).name('texture.center.y');
gui.add(new DegRadHelper(texture, 'rotation'), 'value', -360, 360)
.name('texture.rotation');


let roof;
let roof_front;
let roof_back;
let roof_right;
class AxisGridHelper {
    constructor( units = 10) {
      //const axes = new THREE.AxesHelper();
      //axes.material.depthTest = false;
      //axes.renderOrder = 2;  // after the grid
      //node.add(axes);

      //const grid = new THREE.GridHelper(units, units);
      //grid.material.depthTest = false;
      //grid.renderOrder = 1;
      //node.add(grid);

      //this.grid = grid;
      //this.axes = axes;
      this.visible = false;
    }
    get visible() {
      return this._visible;
    }
    set visible(v) {
      this._visible = v;
      if(v){
      roof.reconstruct_material()
      roof_front.reconstruct_material();
      roof_back.reconstruct_material();
      roof_right.reconstruct_material();
      }
      //this.grid.visible = v;
      //this.axes.visible = v;
    }
  }
  function makeAxisGrid(node, label, units) {
    const helper = new AxisGridHelper(node, units);
    gui.add(helper, 'visible').name(label);
    return helper;
  }

  const visibility_enabler=makeAxisGrid( 'Enable manual texture update ', 'Live update');
  let enable_texture_hearing=false;

  class ColorHelper {
    constructor( units = 10) {
      //const axes = new THREE.AxesHelper();
      //axes.material.depthTest = false;
      //axes.renderOrder = 2;  // after the grid
      //node.add(axes);

      //const grid = new THREE.GridHelper(units, units);
      //grid.material.depthTest = false;
      //grid.renderOrder = 1;
      //node.add(grid);

      //this.grid = grid;
      //this.axes = axes;
      this.red=145;
      this.green=202;
      this.blue=255;
      this.visible = false;
    }
    get visible() {
      return this._visible;
    }
    set visible(v) {
      this._visible = v;
      if(v){
       
      roof.recolor_material(this.red,this.green, this.blue);
      roof_front.recolor_material(this.red,this.green, this.blue);
      roof_back.recolor_material(this.red,this.green, this.blue);
      roof_right.recolor_material(this.red,this.green, this.blue);
      this.visible=false;
      }
      //this.grid.visible = v;
      //this.axes.visible = v;
    }
  }

  const gui2 = new GUI();
  //gui2.add(texture.offset, 'y', 0, 255, 1).name('Red');
 // gui2.add(texture.center, 'x', 0, 255, 1).name('Green');
 // gui2.add(texture.center, 'y', 0, 255, 1).name('Blue');

  function makeColorHelper(node, label, units) {
    const helper = new ColorHelper(node, units);
    gui2.add(helper, 'visible').name(label);
    gui2.add(helper, 'red', 0, 255, 1).name('Red');
    gui2.add(helper, 'green', 0, 255, 1).name('Green');
    gui2.add(helper, 'blue', 0, 255, 1).name('Blue');
    return helper;
  }

  const color_enabler=makeColorHelper( 'Enable manual texture update ', 'Live update');
  let enable_color_hearing=false;
  
  

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
  const material = new THREE.MeshBasicMaterial( {color: 0x000000, side: THREE.DoubleSide} );
  this.object = new THREE.Mesh(this.geometry, material);



  const loader = new THREE.TextureLoader();
  var  texture = loader.load('wall.jpg');
  texture = loader.load('roof2.jpg');
  texture.wrapS =  THREE.ClampToEdgeWrapping;
  texture.wrapT =THREE.RepeatWrapping;
  texture.repeat.set( 5, 3.28 );
  texture.offset.set(1,0)
this.material = new THREE.MeshBasicMaterial( { map: texture ,color: 'rgb(255,255,255)', side: THREE.DoubleSide} );
let normalMap = new THREE.TextureLoader().load('NormalMap.png');
material.normalMap = normalMap;//normal map
this.object  = new THREE.Mesh( this.geometry, this.material );


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

    



  const loader = new THREE.TextureLoader();
  var  texture = loader.load('wall.jpg');
  texture = loader.load('roof2.jpg');
 
  texture.wrapS =  THREE.ClampToEdgeWrapping;
  texture.wrapT =THREE.RepeatWrapping;
  texture.repeat.set( 0, 0.6 );
  texture.offset.set(0,0.5)
  texture.center.set(0.65,0)


  texture.repeat.set( 0, 0.65 );
  texture.offset.set(0,0.12)
  this.material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xffffff, side: THREE.DoubleSide} );
  let normalMap = new THREE.TextureLoader().load('NormalMap.png');
  //material.normalMap = normalMap;//normal map




  
  this.object  = new THREE.Mesh( this.geometry, this.material );
   //let material = new THREE.MeshPhongMaterial();
  
  
  //const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );


  //this.object = new THREE.Mesh(this.geometry, material);
    }
 
    reconstruct_material()
    {
        console.log("Reconstructing")
        const material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xffffff, side: THREE.DoubleSide} );
        this.object.material=material;
        this.object.material.needsUpdate = true;
        //this.object = new THREE.Mesh(this.geometry, material);
        
    }

    recolor_material(r,g,b)
    {
        console.log("Recolor")
        //const material = new THREE.MeshBasicMaterial( { map: texture ,color: "color:rgb("+r+g+b+"", side: THREE.DoubleSide} );
        //this.object.material.color=`rgb("+${r},${r},${r})`;
        this.object.material.color=new THREE.Color(`rgb(${r}, ${g}, ${b})`);
        this.object.material.needsUpdate = true;
        //this.object = new THREE.Mesh(this.geometry, material);
        
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
  //const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
  const material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xffffff, side: THREE.DoubleSide} );
  
  //const loader = new THREE.TextureLoader();
  //const material = new THREE.MeshBasicMaterial({
  //  color: 0xFF8844,
  //  map: loader.load('resources/images/wall.jpg'),
 // });


    const loader = new THREE.TextureLoader();
    var  texture = loader.load('wall.jpg');
    texture = loader.load('roof2.jpg');
    texture.wrapS =  THREE.ClampToEdgeWrapping;
    texture.wrapT =THREE.RepeatWrapping;
    texture.repeat.set( 5, 3.28 );
    texture.offset.set(1,0)
  this.material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xffffff, side: THREE.DoubleSide} );
  let normalMap = new THREE.TextureLoader().load('NormalMap.png');
  material.normalMap = normalMap;//normal map
  this.object  = new THREE.Mesh( this.geometry, this.material );





    }
 
    reconstruct_material()
    {
        console.log("Reconstructing roof wall")
        const material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xffffff, side: THREE.DoubleSide} );
        this.object.material=material;
        this.object.material.needsUpdate = true;
        //this.object = new THREE.Mesh(this.geometry, material);
        
    }

    
    recolor_material(r,g,b)
    {
        console.log("Recolor")
        //const material = new THREE.MeshBasicMaterial( { map: texture ,color: "color:rgb("+r+g+b+"", side: THREE.DoubleSide} );
        //this.object.material.color=`rgb("+${r},${r},${r})`;
        this.object.material.color=new THREE.Color(`rgb(${r}, ${g}, ${b})`);
        this.object.material.needsUpdate = true;
        //this.object = new THREE.Mesh(this.geometry, material);
        
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
    //const loader = new THREE.TextureLoader();
    //const material = new THREE.MeshBasicMaterial({
    //  color: 0xFF8844,
    //  map: loader.load('resources/images/wall.jpg'),
    //  
    //});
    
    this.object = new THREE.Mesh(this.geometry, material);



    //var texture = new THREE.TextureLoader().load( 'https://threejs.org/examples/textures/uv_grid_opengl.jpg' );


   // var texture = new THREE.TextureLoader().load( 'roof2.jpg' );
   // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
   // texture.repeat.set( 2, 4 );
   // texture.rotation=THREE.MathUtils.degToRad(-90);
  
   const loader = new THREE.TextureLoader();
   var  texture = loader.load('wall.jpg');
   texture = loader.load('roof2.jpg');
   texture.wrapS =  THREE.ClampToEdgeWrapping;
   texture.wrapT =THREE.RepeatWrapping;
   texture.repeat.set( 5, 3.28 );
   texture.offset.set(1,0)
    this.material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xffffff, side: THREE.DoubleSide} );
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap;//normal map
    this.object  = new THREE.Mesh( this.geometry, this.material );
    //let material = new THREE.MeshPhongMaterial();
    //let map = new THREE.TextureLoader().load(image);
     //   material.map = map;//Bottom mapping

     //   material.normalScale = new THREE.Vector2(0.3, 0.3);//Concavo convex degree


    
    //scene.add( mesh );

    

    
      }
  
    reconstruct_material()
    {
        console.log("Reconstructing")
        const material = new THREE.MeshBasicMaterial( { map: texture ,color: 0xffffff, side: THREE.DoubleSide} );
        this.object.material=material;
        this.object.material.needsUpdate = true;
        //this.object = new THREE.Mesh(this.geometry, material);
        
    }

    recolor_material(r,g,b)
    {
        console.log("Recolor")
        //const material = new THREE.MeshBasicMaterial( { map: texture ,color: "color:rgb("+r+g+b+"", side: THREE.DoubleSide} );
        //this.object.material.color=`rgb("+${r},${r},${r})`;
        this.object.material.color=new THREE.Color(`rgb(${r}, ${g}, ${b})`);
        this.object.material.needsUpdate = true;
        //this.object = new THREE.Mesh(this.geometry, material);
        
    }


    add_components_to_scene(scene){
     
      //this.geometry = new THREE.PlaneGeometry( width, height );
      //this.geometry.translate(0,height/2,depth/2);
      //const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
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
 roof_front=new Roof_walls(20,5,0,5+2.5,5)
 roof_back=new Roof_walls(20,5,0,5+2.5,-5)
 roof_right=new Roof_walls_square(10,5,+10,5+2.5,0,Math.PI/2)
//width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
roof=new Roof(20,10,0,5+2.5,0,0, 5)



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
pointLight.position.set(10, 10, 10);

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
//helper_fuction();



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