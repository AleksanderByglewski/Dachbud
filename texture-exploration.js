//import * as THREE from 'https://threejs.org/build/three.module.js';

//import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js';

//import * as THREE from 'three';
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

import * as THREE from 'https://threejs.org/build/three.module.js';
import {OrbitControls} from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'https://threejs.org/examples/jsm/libs/lil-gui.module.min.js';


//import './style.css';
//import * as three from 'https://cdn.skypack.dev/pin/three@v0.135.0-pjGUcRG9Xt70OdXl97VF/mode=imports,min/optimized/three.js';
//import * as three from 'https://unpkg.com/three@0.124.0/build/three.module.js';
//<script src="https://threejs.org/build/three.js"></script> 
//import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';
//import {GUI} from 'https://cdn.jsdelivr.net/npm/lil-gui@0.15.0/dist/lil-gui.umd.min.js';


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
//const gui = new GUI();
const loader = new THREE.TextureLoader();
var  texture = loader.load('wall.jpg');
texture = loader.load('roof2.jpg');
texture = loader.load('uv_grid_opengl.jpg');
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
//gui.add(new StringToNumberHelper(texture, 'wrapS'), 'value', wrapModes)
//.name('texture.wrapS')
//.onChange(updateTexture);
//gui.add(new StringToNumberHelper(texture, 'wrapT'), 'value', wrapModes)
//.name('texture.wrapT')
//.onChange(updateTexture);
//gui.add(texture.repeat, 'x', 0, 5, .01).name('texture.repeat.x');
//gui.add(texture.repeat, 'y', 0, 5, .01).name('texture.repeat.y');
//gui.add(texture.offset, 'x', -2, 2, .01).name('texture.offset.x');
//gui.add(texture.offset, 'y', -2, 2, .01).name('texture.offset.y');
//gui.add(texture.center, 'x', -.5, 1.5, .01).name('texture.center.x');
//gui.add(texture.center, 'y', -.5, 1.5, .01).name('texture.center.y');
//gui.add(new DegRadHelper(texture, 'rotation'), 'value', -360, 360)
//.name('texture.rotation');
let roof;
let roof_front;
let roof_back;
let roof_right;
//const gui2 = new GUI();
//gui2.add(texture.offset, 'y', 0, 255, 1).name('Red');
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
    //gui.add(helper, 'visible').name(label);
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

  function makeColorHelper(node, label, units) {
    //const helper = new ColorHelper(node, units);
    //gui2.add(helper, 'visible').name(label);
    //gui2.add(helper, 'red', 0, 255, 1).name('Red');
    //gui2.add(helper, 'green', 0, 255, 1).name('Green');
    //gui2.add(helper, 'blue', 0, 255, 1).name('Blue');
    //return helper;
  }

  const color_enabler=makeColorHelper( 'Enable manual texture update ', 'Live update');
  let enable_color_hearing=false;
  
//Helper variables
var depth=10;
var width=20;
var height=5;


class General_object{
  show_me_desire(){
   alert("Hello")}
  set_position(x=0,y=0,z=0){
    this.object.position.x=x;
    this.object.position.y=y;
    this.object.position.z=z;
  }
 
 
 }

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

class Bounding_Box{
  constructor(x_begin, x_end,y_begin, y_end){
    this.x_begin=x_begin;
    this.x_end=x_end;
    this.y_begin=y_begin;
    this.y_end=y_end;
  }
  check_intersection(outer_element, inner_element){
    if(!(outer_element.x_begin<inner_element.x_end && inner_element.x_end<outer_element.x_end))
      return false;
      
    if(!(inner_element.x_begin<outer_element.x_end && outer.element.x_end<inner_inner_element.x_begin))
    return false;

    else {
      return true;
    }


  }
}


class state_component{
  constructor(name){
  }
}

class state_doors extends state_component{

}

class state_windows extends state_component{

}


class state_machine{
constructor(){
  this.roof=new state_component('roof')
  this.walls_color;
  this.walls_type;
  this.walls_material_type;

}}





class Menu_interaction{
//This is the class responsible for adjusting the contents of the side of the building calling proper functions and keeping the data about the contents about the side
constructor(menu_id,object_interacted=null,created_object=null,width=0, height=0,translation_x=0, translation_y=0, translate_z=0){
  //Those translations are with respect to the front wall the object is later placed
  //automatically with the use of three.js placement
  this.menu_id=null
  this.object_interacted=null
  this.rotation_y;
  this.translation_x;
  this.translation_y;
  this.translation_z;
  console.log("Hello")
  this.create_a_cell()
}
create_a_cell(){ 
  let node_elem=document.createElement("p")
  //node_elem.textContent='Mozzila Developer Network'
  //document.querySelector('#test').appendChild=node_elem
}



call_changes(wall_being_targeted, created_object){
if(object != null){
  wall_being_targeted.add_components()
}
remove_self()
}


}

//This is basically the template for the front wall right now
class Garage_walls extends General_object{
//What is the logic of this class?
//We have one main component mainly the wall that
//takes care of it's subcomponents such as door
  constructor(x, y,translate_x=0,translate_y=0, translate_z=0, rotation=0){
  super();
  this.boundingBoxInstance = new Bounding_Box(x,y)

  this.components=[];
  this.width=x;
  this.depth=y;
  this.rotation=0;

  const loader = new THREE.TextureLoader();
  this.texture = loader.load('roof2.jpg');
  this.texture.wrapS =  THREE.ClampToEdgeWrapping;
  this.texture.wrapT =THREE.RepeatWrapping;

  this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0xffffff, side: THREE.DoubleSide} );
  this.object = new THREE.Mesh(this.geometry, this.material);
  this.change_the_texture(null, 255,255,255,0)  

  
  this.geometry=new THREE.PlaneGeometry( x, y );
  this.object  = new THREE.Mesh( this.geometry, this.material );
    


  this.texture2 = loader.load('./resources/images/SCME.jpg');
  const door_material = new THREE.MeshBasicMaterial({color: 0xaaaaaa, map: this.texture2});
  const door_width = 6;  // ui: width
  const door_height = 4;  // ui: height
  const door_depth = 0.1;  // ui: depth
  const door_geometry = new THREE.BoxGeometry(door_width, door_height, door_depth);
  const door = new THREE.Mesh(door_geometry, door_material);
  this.door=door

  door.geometry.translate(0,+door_height/2-5/2,0)
  door.geometry.rotateY(rotation)
  this.add_components(door)
  
  door.name="alex"
  console.log(door.id)
  //this.remove_component(door.id)
  this.geometry.rotateY(rotation)
  super.set_position(translate_x,translate_y,translate_z)
     

  

}
  change_the_texture(texture_name="./resources/images/PWP.jpg",r=255,g=255,b=255,rotation=0){
    const loader = new THREE.TextureLoader();
    this.texture = loader.load('wall.jpg');
    this.texture = loader.load('./resources/images/PWP.jpg');
    this.texture.wrapS =  THREE.ClampToEdgeWrapping;
    this.texture.wrapT =THREE.RepeatWrapping;
    this.texture.repeat.set( 5, 2.0 );
    this.texture.offset.set(1,0)
    
    this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
    this.material.needsUpdate=true;
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap;//normal map
    console.log("Siul la ruin")
   

    //this.object  = new THREE.Mesh( this.geometry, this.material );
    //this.object.material.update=true;
    //this.object.material.needsUpdate=true;
 
  }
    
 add_components(component){
  console.log('Adding a component ')
  this.object.add(component)
 }
 remove_components(){
    let children=this.object.children
    for (const child of children){
//      console.log(child)
    this.object.remove(child)
    }
    //parent_element.object.remove(solarSystem)
  }
  remove_component(id){
    let children=this.object.children
  //  for (const child of children){
   //   console.log(child)
   // }
    let target =this.object.getObjectById(id)
    this.object.remove(target)
    

  }

  //this.object.add(solarSystem)



  add_components_to_scene(scene){

    const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
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
  this.texture = loader.load('roof2.jpg');
  this.texture.wrapS =  THREE.ClampToEdgeWrapping;
  this.texture.wrapT =THREE.RepeatWrapping;
  this.texture.repeat.set( 0, 1 );
  this.texture.offset.set(0,0.5)
  this.texture.center.set(0.65,0)



  this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0xffffff, side: THREE.DoubleSide} );
  this.object = new THREE.Mesh(this.geometry, this.material);
  this.change_the_texture()  


    }
    
    change_the_texture(texture_name="./resources/images/PWP.jpg",r=255,g=255,b=255,rotation=0){
      const loader = new THREE.TextureLoader();
      this.texture = loader.load('wall.jpg');
      this.texture = loader.load('roof2.jpg');
      this.texture.wrapS =  THREE.ClampToEdgeWrapping;
      this.texture.wrapT =THREE.RepeatWrapping;
      this.texture.repeat.set( 5,5.2 );
      this.texture.offset.set(1,0);
      this.texture.rotation=(rotation)
      this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
      this.material.needsUpdate=true;
      let normalMap = new THREE.TextureLoader().load('NormalMap.png');
      //material.normalMap = normalMap;//normal map


      this.object.material=this.material;
      this.object.material.needsUpdate = true;

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
  


  


  //const loader = new THREE.TextureLoader();
  //const material = new THREE.MeshBasicMaterial({
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
   texture.offset.set(1,0);
    this.change_the_texture()
    this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0xffffff, side: THREE.DoubleSide} );
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap;//normal map
    this.object  = new THREE.Mesh( this.geometry, this.material );
    //let material = new THREE.MeshPhongMaterial();
    






    }

    change_the_texture(texture_name="./resources/images/PWP.jpg",r=255,g=255,b=255,rotation=0){
      const loader = new THREE.TextureLoader();
      this.texture = loader.load('wall.jpg');
      this.texture = loader.load('roof2.jpg');
      this.texture.wrapS =  THREE.ClampToEdgeWrapping;
      this.texture.wrapT =THREE.RepeatWrapping;
      this.texture.repeat.set( 5, 13.12 );
      this.texture.offset.set(1,0);
      this.texture.rotation=(rotation)
      this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
      this.material.needsUpdate=true;
      let normalMap = new THREE.TextureLoader().load('NormalMap.png');
      material.normalMap = normalMap;//normal map

      this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
      this.material.needsUpdate=true;
      this.object.material=this.material;
      this.object.material.needsUpdate = true;

      

    }   

    change_the_texture2(texture_name="./resources/images/PWP.jpg",r=255,g=0,b=0,rotation=0){

      const loader = new THREE.TextureLoader();
      this.texture = loader.load('wall.jpg');
      this.texture = loader.load('roof2.jpg');
      this.texture.wrapS =  THREE.ClampToEdgeWrapping;
      this.texture.wrapT =THREE.RepeatWrapping;
      this.texture.repeat.set( 5, 3.28 );
      this.texture.offset.set(1,0)
      this.texture.rotation=(rotation)
      this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
      this.material.needsUpdate=true;
      let normalMap = new THREE.TextureLoader().load('NormalMap.png');
      material.normalMap = normalMap;//normal map
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
    this.geometry=new THREE.PlaneGeometry( Math.sqrt(x*x+roof_height*roof_height),y );
    this.geometry.rotateX(Math.PI/2);
    this.geometry.rotateZ(Math.atan(roof_height/x));
    this.geometry.translate(translate_x,translate_y,translate_z );

    
 

    const material = new THREE.MeshBasicMaterial( {color: 0xff0000, side: THREE.DoubleSide} );
    this.object = new THREE.Mesh(this.geometry, material);
    
    const loader = new THREE.TextureLoader();
    var  texture = loader.load('wall.jpg');
    texture = loader.load('roof2.jpg');
    texture.wrapS =  THREE.ClampToEdgeWrapping;
    texture.wrapT =THREE.RepeatWrapping;
    texture.repeat.set( 5, 3.28 );
    texture.offset.set(1,0);
    this.change_the_texture()
    this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0xffffff, side: THREE.DoubleSide} );
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap;//normal map
    this.object  = new THREE.Mesh( this.geometry, this.material );
    //let material = new THREE.MeshPhongMaterial();
    //let map = new THREE.TextureLoader().load(image);
     //   material.map = map;//Bottom mapping

     //   material.normalScale = new THREE.Vector2(0.3, 0.3);//Concavo convex degree


    
    //scene.add( mesh );

    

    
      }
  
      change_the_texture(texture_name="./resources/images/PWP.jpg",r=255,g=255,b=255,rotation=0){
        const loader = new THREE.TextureLoader();
        this.texture = loader.load('wall.jpg');
        this.texture = loader.load('roof2.jpg');
        this.texture.wrapS =  THREE.ClampToEdgeWrapping;
        this.texture.wrapT =THREE.RepeatWrapping;
        this.texture.repeat.set( 5, 13.12 );
        this.texture.offset.set(1,0);
        this.texture.rotation=(rotation)
        this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
        this.material.needsUpdate=true;
        let normalMap = new THREE.TextureLoader().load('NormalMap.png');
        material.normalMap = normalMap;//normal map

        this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
        this.material.needsUpdate=true;
        this.object.material=this.material;
        this.object.material.needsUpdate = true;

        

      }    
      rotate_the_texture(){
        this.object.material=this.material;
       
        
        this.material.needsUpdate=true;
        this.object.material.needsUpdate = true;
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


let main_house_outer=""
let scene_outer=""
let Creation_controller_outer=""

function main(){
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
  
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
class Creation_controller{
constructor(constructor_width, constructor_depth, constructor_height, roof_width, roof_depth, roof_height, scene,roof_type=4){
  
  this.constructor_width=constructor_width;
  this.constructor_depth= constructor_depth;
  this.constructor_height=constructor_height;  
  this.roof_width=roof_width;
  this.roof_depth=roof_depth;
  this.roof_height=roof_height;
  
  this.wall_front=null;
  this.wall_back=null;
  this.wall_left=null;
  this.wall_right=null;
 
  this.roof_front=null;
  this.roof_back=null;
  this.roof_right=null;
  this.roof=null;

  this.roof_front2=new Garage_walls(0,0,0,0,0);
  this.roof_back2=new Garage_walls(0,0,0,0,0);
  this.roof_right2=new Garage_walls(0,0,0,0,0);
  this.roof2=new Garage_walls(0,0,0,0,0);

  this.scene=scene;
  
  this.rebuild_walls()
  this.rebuild_roofs(roof_type);


//PRESENTATION CODE
  this.wall_left.remove_components()
  this.wall_right.remove_components()
  this.wall_back.remove_components()
  


  this.add_to_scene();


}

rebuild_walls(constructor_width=this.constructor_width, constructor_depth=this.constructor_depth, constructor_height=this.constructor_height, 
  roof_width=this.roof_width,roof_depth=this.roof_depth,roof_height=this.roof_height) {
  //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
  this.wall_front=new Garage_walls(constructor_width,constructor_height,0,constructor_height/2,constructor_depth/2)
  this.wall_back=new Garage_walls(constructor_width,constructor_height,0,constructor_height/2,-constructor_depth/2)
  this.wall_left=new Garage_walls(constructor_depth,constructor_height,-constructor_width/2,constructor_height/2,0,Math.PI/2)
  this.wall_right=new Garage_walls(constructor_depth,constructor_height,constructor_width/2,constructor_height/2,0,Math.PI/2)


  const objects = [];

  const radius = 1;
  const widthSegments = 6;
  const heightSegments = 6;
  const sphereGeometry = new THREE.SphereGeometry(
      radius, widthSegments, heightSegments);

  const solarSystem = new THREE.Object3D();

  //scene.add(solarSystem);
  objects.push(solarSystem);
  
  const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
  const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
  sunMesh.scale.set(5, 5, 5);
  solarSystem.add(sunMesh);
  objects.push(sunMesh);

 
  //this.roof_front=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,constructor_depth/2)
  //this.roof_back=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,-constructor_depth/2)
  //this.roof_right=new Roof_walls_square(roof_depth,roof_height,roof_width/2,constructor_height+roof_height/2,0,Math.PI/2)
 //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
 // this.roof=new Roof(roof_width,roof_depth,0,constructor_height+roof_height/2,0,0,roof_height )
 //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
}


rebuild_roofs(roof_instance=0,constructor_width=this.constructor_width, constructor_depth=this.constructor_depth, constructor_height=this.constructor_height, 
  roof_width=this.roof_width,roof_depth=this.roof_depth,roof_height=this.roof_height){
  switch (roof_instance) {
  case 0:{
  //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
  this.roof_front=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,constructor_depth/2)
  this.roof_back=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,-constructor_depth/2)
  this.roof_right=new Roof_walls_square(roof_depth,roof_height,roof_width/2,constructor_height+roof_height/2,0,Math.PI/2)
 //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
  this.roof=new Roof(roof_width,roof_depth,0,constructor_height+roof_height/2,0,0,roof_height )
 //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
  break;
    }
 case 2:{
      //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
      this.roof_front=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,constructor_depth/2)
      this.roof_back=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,-constructor_depth/2)
      this.roof_right=new Roof_walls_square(roof_depth,roof_height,roof_width/2,constructor_height+roof_height/2,0,Math.PI/2)
     //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
      this.roof=new Roof(roof_width,roof_depth,0,constructor_height+roof_height/2,0,0,roof_height )
     //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
      this.roof_front.object.geometry.rotateY(Math.PI/2*roof_instance)  
      this.roof_back.object.geometry.rotateY(Math.PI/2*roof_instance)  
      this.roof_right.object.geometry.rotateY(Math.PI/2*roof_instance)  
      this.roof.object.geometry.rotateY(Math.PI/2*roof_instance)  
      break;
 }
  case 1:{
    //We are rotating but we just need to switch the width and depth
    let x=roof_width;
    roof_width =roof_depth;
    roof_depth =x;
    constructor_depth=constructor_width;
    this.roof_front=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,constructor_depth/2)
    this.roof_back=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,-constructor_depth/2)
    this.roof_right=new Roof_walls_square(roof_depth,roof_height,roof_width/2,constructor_height+roof_height/2,0,Math.PI/2)
   //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
    this.roof=new Roof(roof_width,roof_depth,0,constructor_height+roof_height/2,0,0,roof_height )
   //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
   this.roof_front.object.geometry.rotateY(Math.PI/2*roof_instance)  
   this.roof_back.object.geometry.rotateY(Math.PI/2*roof_instance)  
   this.roof_right.object.geometry.rotateY(Math.PI/2*roof_instance)  
   this.roof.object.geometry.rotateY(Math.PI/2*roof_instance)  
   console.log('1')
  break;
  }
    case 3:{
      let x=roof_width;
      roof_width =roof_depth;
      roof_depth =x;
      constructor_depth=constructor_width;
    this.roof_front=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,constructor_depth/2)
    this.roof_back=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,-constructor_depth/2)
    this.roof_right=new Roof_walls_square(roof_depth,roof_height,roof_width/2,constructor_height+roof_height/2,0,Math.PI/2)
   //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
    this.roof=new Roof(roof_width,roof_depth,0,constructor_height+roof_height/2,0,0,roof_height )
   //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
    this.roof_front.object.geometry.rotateY(Math.PI/2*roof_instance)  
    this.roof_back.object.geometry.rotateY(Math.PI/2*roof_instance)  
    this.roof_right.object.geometry.rotateY(Math.PI/2*roof_instance)  
    this.roof.object.geometry.rotateY(Math.PI/2*roof_instance)  
    
    break;
    }

    case 4:{

      //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
      this.roof_front=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,constructor_depth/2)
      this.roof_back=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,-constructor_depth/2)
      this.roof_right=new Roof_walls_square(roof_depth,roof_height,0,constructor_height+roof_height/2,0,Math.PI/2)
     //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
      this.roof=new Roof(roof_width/2,roof_depth,-roof_width/4,constructor_height+roof_height/2,0,0,roof_height )
     //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
   
   
     this.roof_front2=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,constructor_depth/2)
     this.roof_back2=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,-constructor_depth/2)
     this.roof_right2=new Roof_walls_square(roof_depth,roof_height,0,constructor_height+roof_height/2,0,Math.PI/2)
    //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
     this.roof2=new Roof(roof_width/2,roof_depth,-roof_width/4,constructor_height+roof_height/2,0,0,roof_height )
  
    this.roof_front2.object.geometry.rotateY(Math.PI)  
    this.roof_back2.object.geometry.rotateY(Math.PI)  
    this.roof_right2.object.geometry.rotateY(Math.PI)  
    this.roof2.object.geometry.rotateY(Math.PI)  
  
   
    this.roof_front2.add_components_to_scene(this.scene)
    this.roof_back2.add_components_to_scene(this.scene)
    this.roof_right2.add_components_to_scene(this.scene)
    this.roof2.add_components_to_scene(this.scene)

     break;
      
    }
    case 5:{
            let x=roof_width;
            roof_width =roof_depth;
            roof_depth =x;
            constructor_depth=constructor_width;
            //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
            this.roof_front=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,constructor_depth/2)
            this.roof_back=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,-constructor_depth/2)
            this.roof_right=new Roof_walls_square(roof_depth,roof_height,0,constructor_height+roof_height/2,0,Math.PI/2)
           //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
            this.roof=new Roof(roof_width/2,roof_depth,-roof_width/4,constructor_height+roof_height/2,0,0,roof_height )
           //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
         
         
           this.roof_front2=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,constructor_depth/2)
           this.roof_back2=new Roof_walls(roof_width/2,roof_height,-roof_width/4,constructor_height+roof_height/2,-constructor_depth/2)
           this.roof_right2=new Roof_walls_square(roof_depth,roof_height,0,constructor_height+roof_height/2,0,Math.PI/2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
           this.roof2=new Roof(roof_width/2,roof_depth,-roof_width/4,constructor_height+roof_height/2,0,0,roof_height )
        
          this.roof_front2.object.geometry.rotateY(Math.PI)  
          this.roof_back2.object.geometry.rotateY(Math.PI)  
          this.roof_right2.object.geometry.rotateY(Math.PI)  
          this.roof2.object.geometry.rotateY(Math.PI)  
        
         
                  
          this.roof_front.object.geometry.rotateY(Math.PI/2)  
          this.roof_back.object.geometry.rotateY(Math.PI/2)  
          this.roof_right.object.geometry.rotateY(Math.PI/2)  
          this.roof.object.geometry.rotateY(Math.PI/2)  
        
                  
          this.roof_front2.object.geometry.rotateY(Math.PI/2)  
          this.roof_back2.object.geometry.rotateY(Math.PI/2)  
          this.roof_right2.object.geometry.rotateY(Math.PI/2)  
          this.roof2.object.geometry.rotateY(Math.PI/2)  
        

          this.roof_front2.add_components_to_scene(this.scene)
          this.roof_back2.add_components_to_scene(this.scene)
          this.roof_right2.add_components_to_scene(this.scene)
          this.roof2.add_components_to_scene(this.scene)
      
           break;
               
    }
  }

}



 release(){
  scene.remove(this.wall_front.object)
  scene.remove(this.wall_back.object)
  scene.remove(this.wall_left.object)
  scene.remove(this.wall_right.object)

  scene.remove(this.roof_front.object)
  scene.remove(this.roof_back.object)
  scene.remove(this.roof_right.object)
  scene.remove(this.roof.object)

  scene.remove(this.roof_front2.object)
  scene.remove(this.roof_back2.object)
  scene.remove(this.roof_right2.object)
  scene.remove(this.roof2.object)
 }

add_to_scene(){


  //scene.add(this.wall_front)
  //scene.add(this.wall_back)
  //scene.add(this.wall_left)
  //scene.add(this.wall_right)
  //The correct syntax is scene.add('object')
 
 this.wall_front.add_components_to_scene(this.scene)
 this.wall_back.add_components_to_scene(this.scene)
 this.wall_left.add_components_to_scene(this.scene)
 this.wall_right.add_components_to_scene(this.scene)



  this.roof_front.add_components_to_scene(this.scene)
  this.roof_back.add_components_to_scene(this.scene)
  this.roof_right.add_components_to_scene(this.scene)
  this.roof.add_components_to_scene(this.scene)

  
  const objects = [];

const radius = 1;
const widthSegments = 6;
const heightSegments = 6;
const sphereGeometry = new THREE.SphereGeometry(
    radius, widthSegments, heightSegments);



}

 
}


//main_house=new Creation_controller(40,40,3,40,40,5,scene);
//let flat_ground=new Foundation(depth,width)
//width_of_a_plane,height_of_a_plane, translation_x,translation_y, translation_z; 
//in left and right walls we rotate around the y axis so the width becomes the depth height remains the so we have
//depth, height, half of width of building, half of height, and rotation by 90 deg

let constructor_width=27;
let constructor_depth=20;
let constructor_height=5;

let roof_width=27;
let roof_depth=20;
let roof_height=1.5;
let main_house=new Creation_controller(constructor_width, constructor_depth, constructor_height, roof_width, roof_depth, roof_height, scene);



main_house.release()


main_house=new Creation_controller(constructor_width-10, constructor_depth, constructor_height, roof_width-10, roof_depth, roof_height, scene);


//Attach the main_house to the main house outer so that you can modify it outside of the main loop


//ADDNOTATION
//scene.remove(main_house.wall_front.object) works that is a really good sign

//main_house.release();
//main_house=new Creation_controller(constructor_width+10, constructor_depth+10, constructor_height, roof_width+10, roof_depth+10, roof_height, scene);



let wall_front=new Garage_walls(constructor_width,constructor_height,0,constructor_height/2,constructor_depth/2)
let wall_back=new Garage_walls(constructor_width,constructor_height,0,constructor_height/2,-constructor_depth/2)
let wall_left=new Garage_walls(constructor_depth,constructor_height,-constructor_width/2,constructor_height/2,0,Math.PI/2)
let wall_right=new Garage_walls(constructor_depth,constructor_height,constructor_width/2,constructor_height/2,0,Math.PI/2)

  {
const color = 0xFFFFFF;  // white
const near = 10;
const far = 70;
scene.fog = new THREE.Fog(color, near, far);
  }

//wall_front.add_components_to_scene(scene)
//scene.remove(wall_front)

//wall_front.add(scene)
//wall_back.add_components_to_scene(scene)
//wall_left.add_components_to_scene(scene)
//wall_right.add_components_to_scene(scene)
//flat_ground.add_components_to_scene(scene)

//width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 


 roof_front=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,constructor_depth/2)
 roof_back=new Roof_walls(roof_width,roof_height,0,constructor_height+roof_height/2,-constructor_depth/2)
 roof_right=new Roof_walls_square(roof_width,roof_height,roof_width/2,constructor_height+roof_height/2,0,Math.PI/2)
//width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
//roof=new Roof(roof_width,roof_depth,0,constructor_height+roof_height/2,0,0,roof_height )



//roof_front.add_components_to_scene(scene)
//roof_back.add_components_to_scene(scene)
//roof_right.add_components_to_scene(scene)
//roof.add_components_to_scene(scene)


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setY(20);
camera.rotateX(0.75)

renderer.render(scene, camera);

//Plane

//const geometry_plane = new THREE.PlaneGeometry( width, depth );
//geometry_plane.rotateX(Math.PI/2)
//const material_plane = new THREE.MeshBasicMaterial( {color: 0xff6347, side: THREE.DoubleSide} );
//const plane = new THREE.Mesh( geometry_plane, material_plane );
//scene.add( plane );



// Torus

//const geometry = new THREE.TorusGeometry(1, 0.3, 10, 20);
//const material = new THREE.MeshStandardMaterial({ color: 0xff6347,wireframe: true });
//const torus = new THREE.Mesh(geometry, material);
//scene.add(torus);




{
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  //light.castShadow = true;
  light.position.set(0, 20, 30);
  light.target.position.set(-4, 0, -4);
  //const light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );
  scene.add(light.target);

  const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
  scene.add(cameraHelper);

  const helper = new THREE.DirectionalLightHelper(light);
  scene.add(helper);

  function updateCamera() {
    // update the light target's matrixWorld because it's needed by the helper
    light.target.updateMatrixWorld();
    helper.update();
    // update the light's shadow camera's projection matrix
    light.shadow.camera.updateProjectionMatrix();
    // and now update the camera helper we're using to show the light's shadow camera
    cameraHelper.update();
  }
  updateCamera();
}
//const pointLight = new THREE.PointLight(0xffffff);
//pointLight.position.set(10, 10, 10);

//const ambientLight = new THREE.AmbientLight(0xffffff);
//scene.add(pointLight, ambientLight);

// Helpers

 //const lightHelper = new THREE.PointLightHelper(pointLight)
 //scene.add(lightHelper, gridHelper)
 const gridHelper = new THREE.GridHelper(200, 200,200);
 scene.add(gridHelper)
 const controls = new OrbitControls(camera, renderer.domElement);


 controls.maxPolarAngle=0.48*Math.PI
 controls.minPolarAngle=0.2*Math.PI

// Background

// Scroll Animation

// Animation Loop

function animate() {
  requestAnimationFrame(animate);
  controls.autoRotate = true;
  controls.autoRotateSpeed =0.5

  //torus.rotation.x += 0.01;
  //torus.rotation.y += 0.005;
  //torus.rotation.z += 0.01;
  controls.update();

  // controls.update();

  renderer.render(scene, camera);

  {
//    const cubeSize = 4;
 //   const cubeGeo = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
  //  const cubeMat = new THREE.MeshPhongMaterial({color: '#8AC'});
  //  const mesh = new THREE.Mesh(cubeGeo, cubeMat);
  //  mesh.castShadow = true;
  //  mesh.receiveShadow = true;
  //  mesh.position.set(cubeSize + 1, cubeSize / 2, 0);
  //  scene.add(mesh);
  }
  {
    //const sphereRadius = 4;
    //const sphereWidthDivisions = 32;
    //const sphereHeightDivisions = 16;
    //const sphereGeo = new THREE.SphereGeometry(sphereRadius, sphereWidthDivisions, sphereHeightDivisions);
    //const sphereMat = new THREE.MeshPhongMaterial({color: '#CA8'});
    //const mesh = new THREE.Mesh(sphereGeo, sphereMat);
    //mesh.geometry.translate(10,0,15)
    //mesh.castShadow = true;
    //mesh.receiveShadow = true;
    //mesh.position.set(-sphereRadius - 1, sphereRadius + 2, 0);
    //scene.add(mesh);
  }

}
animate();

{
  const planeSize = 40;

  const loader = new THREE.TextureLoader();
  const texture = loader.load('https://threejs.org/manual/examples/resources/images/checker.png');
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.magFilter = THREE.NearestFilter;
  const repeats = planeSize / 2;
  texture.repeat.set(repeats, repeats);

  const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  const planeMat = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const mesh = new THREE.Mesh(planeGeo, planeMat);
  mesh.receiveShadow = true;
  mesh.rotation.x = Math.PI * -.5;
  scene.add(mesh);
}


//Event listeners and interactivity with DOM this can be moved
//outside of the function to lower the initial render time

  //@TODO move the interaction with menu outside of the main function

  let para=document.querySelector("#roof-color")
  para.addEventListener('click', change_color_roof)
  
  function change_color_roof(event){
  let element=event.target.closest('.color-container')
  let color=element.dataset.colorindex;
  let red,green,blue;
  function color_decomposition(x){
    let red=parseInt(x.substring(0,2),16)
    let green=parseInt(x.substring(2,4),16)
    let blue=parseInt(x.substring(4,6),16)
    return [red,green,blue]
  }


  [red,green,blue]=color_decomposition(color)

  main_house.roof_back.change_the_texture(null,red,green,blue)
  main_house.roof_front.change_the_texture(null,red,green,blue)
  main_house.roof_right.change_the_texture(null,red,green,blue)
  main_house.roof.change_the_texture(null,red,green,blue)
  main_house.roof_back2.change_the_texture(null,red,green,blue)
  main_house.roof_front2.change_the_texture(null,red,green,blue)
  main_house.roof_right2.change_the_texture(null,red,green,blue)
  main_house.roof2.change_the_texture(null,red,green,blue)


  main_house.wall_front.change_the_texture("  ",0,0,0,0)
  main_house.wall_right.change_the_texture(null,0,255,255,0)
  main_house.wall_back.change_the_texture(null,0,255,255,0)
  main_house.wall_left.change_the_texture(null,0,255,255,0)
  //main_house.roof.rotate_the_texture()

  }

  let roof_index=0;
  let overhang=0;
  let index=0;

  function presentation(){
    index++;
    if(!overhang){
      overhang=0.5
      roof_index=(roof_index+1)%6
    }
    else{
      overhang=0
    }
    main_house.release()


    let constructor_width=11;
    let constructor_depth=15;
    let constructor_height=5;
    
    let roof_width=11+overhang;
    let roof_depth=15+overhang;
    let roof_height=1.5;


    if(index>12)
    {
      constructor_width=Math.random()*20+10;
      constructor_depth=Math.random()*20+10;
      constructor_height=5;
      
      roof_width=constructor_width+overhang;
      roof_depth=constructor_depth+overhang;
      roof_height=1.5+Math.random()*0.5;

    }

   
  }
  function change_roof(){
  
    main_house.release()
    main_house=new Creation_controller(constructor_width-10, constructor_depth, constructor_height, roof_width-10, roof_depth, roof_height, scene,roof_index);
  }



 
//  const interval = setInterval(function() {
//    presentation()
//  }, 1000);
Creation_controller_outer=main_house.constructor
main_house_outer=main_house
scene_outer=scene
//main_house.release()


}

main()


//Get how to create a good and semi reusable box
main_house_outer=new Creation_controller_outer(10, 10, 10, 10, 10, 10, scene_outer,4);


class Menu_control{

  constructor(){

  this.side_menu=document.querySelector(".side-menu");
  //let flooring_control=document.querySelector('input[name="flooring"]:checked')
  let flooring_control=document.querySelectorAll('input[name="flooring"]')
  for (let elem of flooring_control){
  elem.addEventListener('change',this.radio_control_function)
  }
}
  radio_control_function(){
    let current_value=document.querySelector('input[name="flooring"]:checked').value
    console.log(current_value)
  }

  clear_menu(){
    this.side_menu.innerText="";
  }

  add_node(){
    let div_elem=document.createElement("div");
    div_elem.classList.add("menu-elem");

    
    let div_heading=document.createElement('div')
    div_heading.classList.add("menu-elem-heading")
    div_heading.innerHTML=`<div class="menu-elem-heading-title">Menu elem heading</div>
    <div class="menu-elem-heading-button"><img width="16" height="16" src="/HTMLcomponents/side-menu/favicons/plus.svg" alt="minus-icon"></div>
    `

    div_elem.innerHTML=`
    <div class="menu-elem-content hide">
    <div class="menu-elem-content-text">Menu elem content</div>
    <div class="erase-button">Erase me</div>
    </div>
    `
    
    div_elem.prepend(div_heading)
    div_heading.addEventListener("click", reduct)
    //div_heading.addEventListener("click", (evt)=>{evt.currentTarget.parentNode.remove()})
    div_elem.querySelector('.erase-button').addEventListener('click', (evt)=>{evt.currentTarget.parentNode.parentNode.remove()})
    //this.side_menu.appendChild(div_elem)
    return div_elem
  }
  add_gate(){
    let new_elem=this.add_node()
    this.side_menu.insertBefore(new_elem,document.querySelector("#windows-object") )

  }
  add_window(){
    let new_elem=this.add_node()
    this.side_menu.appendChild(new_elem)
  }

  add_node2(){
    console.log(this.side_menu)
  }
 ohmawgawd(){
  let para=document.querySelector("#roof-color")
  para.addEventListener('click', change_color_roof)
  
  function change_color_roof(event){
  let element=event.target.closest('.color-container')
  let color=element.dataset.colorindex;
  let red,green,blue;
  function color_decomposition(x){
    let red=parseInt(x.substring(0,2),16)
    let green=parseInt(x.substring(2,4),16)
    let blue=parseInt(x.substring(4,6),16)
    return [red,green,blue]
  }


  [red,green,blue]=color_decomposition(color)

  main_house.roof_back.change_the_texture(null,red,green,blue)
  main_house.roof_front.change_the_texture(null,red,green,blue)
  main_house.roof_right.change_the_texture(null,red,green,blue)
  main_house.roof.change_the_texture(null,red,green,blue)
  main_house.roof_back2.change_the_texture(null,red,green,blue)
  main_house.roof_front2.change_the_texture(null,red,green,blue)
  main_house.roof_right2.change_the_texture(null,red,green,blue)
  main_house.roof2.change_the_texture(null,red,green,blue)


  main_house.wall_front.change_the_texture("  ",0,0,0,0)
  main_house.wall_right.change_the_texture(null,0,255,255,0)
  main_house.wall_back.change_the_texture(null,0,255,255,0)
  main_house.wall_left.change_the_texture(null,0,255,255,0)
  //main_house.roof.rotate_the_texture()

      }
    }

  }




 let menu_controller=new Menu_control()




document.querySelector("#add-gates").addEventListener('click',  ()=>{menu_controller.add_gate()})
document.querySelector("#add-windows").addEventListener('click',  ()=>{menu_controller.add_window()})



 //menu_controller.clear_menu()
 