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

  //function makeColorHelper(node, label, units) {
    //const helper = new ColorHelper(node, units);
    //gui2.add(helper, 'visible').name(label);
    //gui2.add(helper, 'red', 0, 255, 1).name('Red');
    //gui2.add(helper, 'green', 0, 255, 1).name('Green');
    //gui2.add(helper, 'blue', 0, 255, 1).name('Blue');
    //return helper;
  //}

  //const color_enabler=makeColorHelper( 'Enable manual texture update ', 'Live update');
  //let enable_color_hearing=false;
  
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


class Displacement_object{
  constructor(parent="for now it is unnecesary",width, height, depth, translation_x, translation_y,translation_z){
    this.parent=parent

    this.translation_x=translation_x;
    this.translation_y=translation_y;
    this.translation_z=translation_z;

    const loader = new THREE.TextureLoader();
    this.texture = loader.load('roof2.jpg');
    this.texture.wrapS =  THREE.ClampToEdgeWrapping;
    this.texture.wrapT =THREE.RepeatWrapping;
  

    this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0x0000ff, side: THREE.DoubleSide} );
    this.geometry = new THREE.BoxGeometry(width, height, depth);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    
    //Set the initial displacement based of the parents height
    //First do the centered ones that is naturally
    //this.geometry.translate(0,0,0)
    //The bottom aligned ones are at
    this.initial_displacement=new THREE.Vector3(0,-this.parent.depth/2+height/2,0);
    this.user_translation=new THREE.Vector3(this.translation_x,this.translation_y,this.translation_z);
    let final_displacement=this.initial_displacement.add(this.user_translation);
    
    this.geometry.translate(final_displacement.x,final_displacement.y,final_displacement.z);
    
    //If an object is on the side then you also need to rotate it
    //this.geometry.rotateY(1.701)
 
  }
  change_texture()
  {
    //const loader = new THREE.TextureLoader();
    //this.texture = loader.load('roof2.jpg');
    this.texture.wrapS =  THREE.ClampToEdgeWrapping;
    this.texture.wrapT =THREE.RepeatWrapping;
    //this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0x0000ff, side: THREE.DoubleSide} );
    this.material.color=new THREE.Color(0xff0000)
    this.material.needsUpdate=true;
    
  }


  set_position(translation_vector_x,translation_vector_y,translation_vector_z){
    this.mesh.position.x=translation_vector_x;
    this.mesh.position.y=translation_vector_y;
    this.mesh.position.z=translation_vector_z;
  }

  change_position(translation_vector_x,translation_vector_y,translation_vector_z){
    this.mesh.position.x+=translation_vector_x;
    this.mesh.position.y+=translation_vector_y;
    this.mesh.position.z+=translation_vector_z;
  }
  set_translation(){
    this.geometry.position=new THREE.Vector3(0,0,0);
    this.geometry.position.y=100;
    console.log(this.geometry.position)

    this.user_translation=new THREE.Vector3(this.translation_x,this.translation_y,this.translation_z);
    let final_displacement=this.initial_displacement.add(this.user_translation);
    final_displacement=new THREE.Vector3(this.user_translation_x,0,0)
    
    this.geometry.translate(final_displacement.x,final_displacement.y,final_displacement.z);
 
  }

  provide_identification(){
    return this.mesh.id
  }
  return_self(){
    return this.mesh
  }
  check_overlap(){
   //You are good for now to not worry about overlap
   return false;
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

  


  //this.add_components(friendly_door.return_self())

  this.components=[];
  this.width=x;
  this.depth=y;
  this.rotation=rotation;

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
  //this.add_components(door)
  
  door.name="alex"
  console.log(door.id)
  //this.remove_component(door.id)
  this.geometry.rotateY(rotation)
  super.set_position(translate_x,translate_y,translate_z)
     

  let friendly_door=new Displacement_object(this.object,10,10,0.5,0,0,0)
  //this.add_components(friendly_door.return_self())


  

}

place_a_box2(a_box){

  
//  const door_material = new THREE.MeshBasicMaterial({color: 0xff1111, map: this.texture2});
 // const door_geometry = new THREE.BoxGeometry(this.width, this.depth, 0.1);
 // const door = new THREE.Mesh(door_geometry, door_material);
 // door.geometry.rotateY(this.rotation)
 // door.geometry.translate(0,+this.depth/2-5/2,0)
  this.add_components(a_box.return_self())
  //console.log(door.id)
  //return door.id
}

  place_a_box(displacement){
    const door_material = new THREE.MeshBasicMaterial({color: 0xff1111, map: this.texture2});
    const door_geometry = new THREE.BoxGeometry(this.width, this.depth, 0.1);
    const door = new THREE.Mesh(door_geometry, door_material);
    door.geometry.rotateY(this.rotation)
    door.geometry.translate(0,+this.depth/2-5/2,0)
    this.add_components(door)
    console.log(door.id)
    return door.id
  }

  change_the_texture(texture_name="./resources/images/PWP2.jpg",r=255,g=255,b=255,rotation=0){
    const loader = new THREE.TextureLoader();
    this.texture = loader.load('wall.jpg');
    this.texture = loader.load('./resources/images/PWP2.jpg');
    this.texture.wrapS =  THREE.ClampToEdgeWrapping;
    this.texture.wrapT =THREE.RepeatWrapping;
    //this.texture.repeat.set( 5, 2.0 );
    //this.texture.offset.set(1,0)
    
    //Experimental_tiling
    this.texture.repeat.set( 1, this.depth );
    //alert("this is being triggered")
    let parsed_color="rgb("+r+','+g+','+b+')'

  
    //this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
    this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: parsed_color, side: THREE.DoubleSide} );
    
    this.material.needsUpdate=true;
    this.object.geometry.needsUpdate=true;


 

    //geometry.attributes.color.needsUpdate = true;
    this.object  = new THREE.Mesh( this.geometry, this.material );
    
    //this.object.material.color.setHSL(0, 1, Math.random()); 
    //this.material.needsUpdate=true;
    //let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    //material.normalMap = normalMap;//normal map
   // console.log("Siul la ruin")
   

    //this.object  = new THREE.Mesh( this.geometry, this.material );
    //this.object.material.update=true;
    //this.object.material.needsUpdate=true;
 
  }
  change_color(){
    this.object.material.color.setHSL(0, 1, Math.random()); 
  }
 add_components(component){
  //console.log('Adding a component ')
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

  const vertices = [
    // front
    { pos: [-x/2, -y/2,  0], norm: [ 0,  0,  1], uv: [0, 0], },
    { pos: [ x/2, -y/2,  0], norm: [ 0,  0,  1], uv: [1, 0], },
    { pos: [x/2,  y/2,  0], norm: [ 0,  0,  1], uv: [1, 1], },


  ];
  const positions = [];
  const normals = [];
  const uvs = [];
  for (const vertex of vertices) {
    positions.push(...vertex.pos);
    normals.push(...vertex.norm);
    uvs.push(...vertex.uv);
  }

  this.geometry = new THREE.BufferGeometry();
  const positionNumComponents = 3;
  const normalNumComponents = 3;
  const uvNumComponents = 2;
  this.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
  this.geometry.setAttribute(
      'normal',
      new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
  this.geometry.setAttribute(
      'uv',
      new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));

      



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
    
    change_the_texture(texture_name="./resources/images/PWP2.jpg",r=255,g=255,b=255,rotation=0){
      const loader = new THREE.TextureLoader();
      this.texture = loader.load('wall.jpg');
      //this.texture = loader.load('roof2.jpg');

      //this.texture = loader.load('./resources/colors/Alternatywa/TEXTURE-METAL-PION-THIN.jpg');
      this.texture = loader.load('./resources/images/PWP2.jpg')

      

      this.texture.wrapS =  THREE.ClampToEdgeWrapping;
      this.texture.wrapT =THREE.RepeatWrapping;
      this.texture.repeat.set( 5,5.2 );
      this.texture.offset.set(1,0);

      this.texture.repeat.set( 1,this.depth );
      this.texture.offset.set(0,0);

      this.texture.rotation=(rotation)

      //this.texture.rotation=(1.5707)

      this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
      this.material.needsUpdate=true;
      let normalMap = new THREE.TextureLoader().load('roof2.jpg');
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
   texture=loader.load('./resources/images/PWP2.jpg')
   texture.wrapS =  THREE.ClampToEdgeWrapping;
   texture.wrapT =THREE.RepeatWrapping;
   texture.repeat.set( 1, this.depth );
   texture.offset.set(1,0);
    this.change_the_texture()
    this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0xffffff, side: THREE.DoubleSide} );
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap;//normal map
    this.object  = new THREE.Mesh( this.geometry, this.material );
    //let material = new THREE.MeshPhongMaterial();
    






    }

    change_the_texture(texture_name="./resources/images/PWP2.jpg",r=255,g=255,b=255,rotation=0){
      const loader = new THREE.TextureLoader();
      this.texture = loader.load('wall.jpg');
      this.texture = loader.load('roof2.jpg');
      this.texture=loader.load('./resources/images/PWP2.jpg')
      this.texture.wrapS =  THREE.ClampToEdgeWrapping;
      this.texture.wrapT =THREE.RepeatWrapping;
      this.texture.repeat.set( 1, this.depth );
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

    change_the_texture2(texture_name="./resources/images/PWP2.jpg",r=255,g=0,b=0,rotation=0){

      const loader = new THREE.TextureLoader();
      this.texture = loader.load('wall.jpg');
      this.texture = loader.load('roof2.jpg');
      this.texture=loader.load('./resources/images/PWP2.jpg')
      this.texture.wrapS =  THREE.ClampToEdgeWrapping;
      this.texture.wrapT =THREE.RepeatWrapping;
      this.texture.repeat.set( 1, this.depth );
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
    this.change_the_texture()
    //let material = new THREE.MeshPhongMaterial();
    //let map = new THREE.TextureLoader().load(image);
     //   material.map = map;//Bottom mapping

     //   material.normalScale = new THREE.Vector2(0.3, 0.3);//Concavo convex degree


    
    //scene.add( mesh );

    

    
      }
  
      change_the_texture(texture_name="./resources/images/PWP2.jpg",r=255,g=255,b=255,rotation=0){
        const loader = new THREE.TextureLoader();
        this.texture = loader.load('wall.jpg');
        this.texture = loader.load('roof2.jpg');
        this.texture = loader.load('./resources/colors/alternatywa/TEXTURE-METAL-POZIOM-THIN-DENSE.jpg');
        this.texture = loader.load('./resources/images/PWP7.jpg');
        this.texture.wrapS =  THREE.ClampToEdgeWrapping;
        this.texture.wrapT =THREE.RepeatWrapping;
        this.texture.repeat.set( 5, 13.12 );
        this.texture.repeat.set( 1, 6 );
        this.texture.repeat.set( 1, 4.5 );
        this.texture.offset.set(1,0);
    

        this.texture.offset.set(0,0);
        this.texture.rotation=(rotation)
        //this.texture.rotation=(1.5707)
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
 release_roof(){
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
  
  //uncode this
  //controls.autoRotate = true;
  //controls.autoRotateSpeed =0.5

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
main_house_outer.release();
main_house_outer=new Creation_controller_outer(10, 10, 10, 10, 10, 10, scene_outer,4);


class Menu_control{

  constructor(){

    this.gate_array=[];
    this.window_arr=[];
    this.door_array=[];
    this.canopy_arr=[];

  this.side_menu=document.querySelector(".side-menu");
  //let flooring_control=document.querySelector('input[name="flooring"]:checked')

  let arr_of_names=[""]

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

  add_node(element_id, element){
    let div_elem=document.createElement("div");
    div_elem.classList.add("menu-elem");

    
    let div_heading=document.createElement('div')
    div_heading.classList.add("menu-elem-heading")
    div_heading.innerHTML=`<div class="menu-elem-heading-title">Menu elem heading</div>
    <div class="menu-elem-heading-button"><img width="16" height="16" src="/HTMLcomponents/side-menu/favicons/plus.svg" alt="minus-icon"></div>
    `
    let base_menu=`<div>`+
    `<div  class="num-selector"><label>displacement value left</label><input direction="left" type="number">  </input> </div>`+
    `<div  class="num-selector"><label>displacement value right</label><input direction="right" type="number">  </input> </div>`+
    `<div  class="num-selector"><label>displacement value top</label><input direction="top" type="number">  </input> </div>`+
    `<div  class="num-selector"><label>displacement value bottom</label><input direction="bottom" type="number">  </input> </div>`+
    `</div>`


    div_elem.innerHTML=
    `<div class="menu-elem-content hide">`+
    `<div class="menu-elem-content-text">`+base_menu +`</div>`+
    `<div class="erase-button">Erase me</div>
    </div>`

    div_elem.prepend(div_heading)
    div_heading.addEventListener("click", reduct)
    //div_heading.addEventListener("click", (evt)=>{evt.currentTarget.parentNode.remove()})
    div_elem.querySelector('.erase-button').addEventListener('click', (evt)=>{evt.currentTarget.parentNode.parentNode.remove()})
    div_elem.querySelector('.erase-button').addEventListener('click', ()=>{remove_composite_object(element_id)})
    //this.side_menu.appendChild(div_elem)

    let input_arr=div_elem.querySelectorAll('input')
for (let input of input_arr) {
    input.addEventListener('change', (evt)=>{

      console.log(evt.currentTarget.value)
      let translation_value=evt.currentTarget.value


      let direction=evt.currentTarget.getAttribute('direction')

      let direction_x=element.translation_x;
      let direction_y=element.translation_y;
      let direction_z=element.translation_z;

      console.log(direction)
      switch(direction){
        case 'left':
        
           direction_x=translation_value;
           break;
        case 'right':
          
        
           direction_x=10-translation_value;
           break;
        case 'top':
          
            direction_y=translation_value;
            break;
        case 'bottom':
      
            direction_y=10-translation_value;
            break;
        //You can technically add the z-index and be happy with general solution
        //This will make it much easier to just switch directions on off based on 
        //wall you are actually on
      }

      //If you pass the movement test movement test to be implemented
      element.translation_x=direction_x;
      element.translation_y=direction_y;
      element.translation_z=direction_z;

      element.set_position(direction_x,direction_y, direction_z)
      console.log(element.mesh.position)
      main_house_outer.wall_front.place_a_box2(element);
      
      
    });
  }

    return div_elem
  }


  initial_gate_logic(width,height, array_of_objects){

    let message="gate";
    let position=new THREE.Vector3(0,0,0)

    switch(array_of_objects.length) {
      case 0: 
        message="front "+message;
        position=new THREE.Vector3(0,0,0)
        break;
      case 1: 
        message="left"+message;
        position=new THREE.Vector3(-main_house_outer.wall_front.width/2+width/2,0,0)
        break;
      case 2: 
        message="right"+message;
        position=new THREE.Vector3(+main_house_outer.wall_front.width/2-width/2,0,0)
        break;
    }

    return{ 
      message:message,
      position:position
    }
        

  }
  add_gate(){
    let width_of_gate=2;
    let height_of_gate=2;
    
    const {message, position}=this.initial_gate_logic(width_of_gate, height_of_gate, this.gate_array)
    console.log(message)
    console.log(position)

    //IF it passes the logic tests
  
    let friendly_door=new Displacement_object(main_house_outer.wall_front,width_of_gate,height_of_gate,0.5,0,0,0)
    this.gate_array.push(friendly_door)
    main_house_outer.wall_front.place_a_box2(friendly_door);
    friendly_door.set_position(position.x,position.y,position.z)
    let new_elem=this.add_node(friendly_door.provide_identification(), friendly_door)
    this.side_menu.insertBefore(new_elem,document.querySelector("#windows-object") )

    //friendly_door.set_position(position.x, position.y, position.z);
    //friendly_door.change_texture()
  }

  initial_window_logic(width, height){
    let message='Okno'
    let position=new THREE.Vector3(0,main_house_outer.constructor_height-height,0)
    console.log(main_house_outer)
    return{ 
      message:message,
      position:position
    }
  }

  add_window(){
    let width_of_gate=2;
    let height_of_gate=2;
    
    const {message, position}=this.initial_window_logic(width_of_gate, height_of_gate)
    console.log(message)
    console.log(position)

    let friendly_door=new Displacement_object(main_house_outer.wall_front,width_of_gate,height_of_gate,0.5,0,0,0)
   
    main_house_outer.wall_front.place_a_box2(friendly_door);
    
    let new_elem=this.add_node(friendly_door.provide_identification(), friendly_door)
    this.side_menu.insertBefore(new_elem,document.querySelector("#doors-object") )
    
    friendly_door.set_position(position.x,position.y,position.z)
    friendly_door.change_texture()


    

    
  }
  add_doors(){
    let width_of_gate=2;
    let height_of_gate=2;
    
    const {message, position}=this.initial_gate_logic(width_of_gate, height_of_gate, this.door_array)
    console.log(message)
    console.log(position)

    //IF it passes the logic tests
  
    let friendly_door=new Displacement_object(main_house_outer.wall_front,width_of_gate,height_of_gate,0.5,0,0,0)
    this.door_array.push(friendly_door)
    main_house_outer.wall_front.place_a_box2(friendly_door);
    friendly_door.set_position(position.x,position.y,position.z)

    let new_elem=this.add_node(friendly_door.provide_identification(), friendly_door)
    this.side_menu.insertBefore(new_elem,document.querySelector("#canopy-object") )
  }
  add_canopy(){
    let new_elem=this.add_node()
    this.side_menu.insertBefore(new_elem,document.querySelector("#final-object") )
  }


  add_node2(){
    console.log(this.side_menu)
  }

  release_all_objects(){
    main_house_outer.wall_back.remove_components()
    main_house_outer.wall_front.remove_components()
    main_house_outer.wall_left.remove_components()
    main_house_outer.wall_right.remove_components()
  }

  rebuild_garage_dimensions(){


    let constructor_width=parseFloat(document.querySelector(".num-selector [name='width']").value);
    let constructor_depth=parseFloat(document.querySelector(".num-selector [name='depth']").value);
    let constructor_height=parseFloat(document.querySelector(".num-selector [name='wall-height']").value);  
    let roof_width=parseFloat(document.querySelector(".num-selector [name='width']").value);  
    let roof_depth=parseFloat(document.querySelector(".num-selector [name='depth']").value); 
    let roof_height=parseFloat(document.querySelector(".num-selector [name='total-height']").value); 
    let roof_type=parseInt(document.querySelector('input[name="roof-type"]:checked').value);
    
    main_house_outer.release();
//main_house_outer=new Creation_controller_outer(30, 10, 10, 10, 10, 10, scene_outer,4);
    main_house_outer=new Creation_controller_outer(constructor_width, constructor_depth, constructor_height, roof_width, roof_depth, roof_height, scene_outer,roof_type);
    
  }

  rebuild_roof(){
    //This code causes bugs for unknown reasons so lets get rid of it
    //main_house_outer.release_roof();
    //main_house_outer.roof_type=parseInt(document.querySelector('input[name="roof-type"]:checked').value);
    //main_house_outer.rebuild_roofs(roof_type)
  }

  change_wall_color(r=255,g=255,b=255){

    main_house_outer.wall_front.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.wall_left.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.wall_right.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.wall_back.object.material.color.setRGB(r/255, g/255, b/255);


    main_house_outer.roof_front.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.roof_back.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.roof_right.object.material.color.setRGB(r/255, g/255, b/255);

    
    main_house_outer.roof_front2.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.roof_right2.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.roof_back2.object.material.color.setRGB(r/255, g/255, b/255);

  }


  change_wall(){

    const loader = new THREE.TextureLoader();
  
    let texture_to_check=document.querySelector('input[name="wall-color"]:checked').value
    let texture_rotated=document.querySelector('input[name="wall-type"]:checked').value
   
    function wall_repaint_inner(wall){


      switch(texture_to_check){

        case "0":
          wall.texture = loader.load('./resources/colors/Alternatywa/TEXTURE-METAL-POZIOM-THIN-DENSE.jpg'); 
          break;
        case "1":
          wall.texture = loader.load('./resources/images/PWP7.jpg');
          break;
        case "2":
          wall.texture = loader.load('./resources/images/PWP8.jpg');
          break;

        default:
          wall.texture = loader.load('./resources/images/PWP2.jpg');
          //alert('3')
          break;
      }


    wall.texture.wrapS =  THREE.ClampToEdgeWrapping;
    wall.texture.wrapT =THREE.RepeatWrapping;

   console.log(texture_rotated)
   console.log(texture_rotated.includes("rotated"))
   if(texture_rotated.includes("rotated")){
 
     wall.texture.repeat.set( 1, wall.width );
     wall.texture.rotation=(Math.PI/2)
   }
   else{
     //This is kinda a quick fix but it works
     wall.texture.repeat.set( 1, wall.depth );
     wall.texture.rotation=(0)
   }
 
 
   wall.object.material = new THREE.MeshBasicMaterial( { side: THREE.DoubleSide, map:wall.texture} );
   wall.object.material.needsUpdate=true;
   wall.object.geometry.needsUpdate=true;
  }

  wall_repaint_inner(main_house_outer.wall_front)
  wall_repaint_inner(main_house_outer.wall_right)
  wall_repaint_inner(main_house_outer.wall_left)
  wall_repaint_inner(main_house_outer.wall_back)

  wall_repaint_inner(main_house_outer.roof_front)
  wall_repaint_inner(main_house_outer.roof_back)
  wall_repaint_inner(main_house_outer.roof_right)
  wall_repaint_inner(main_house_outer.roof_front2)
  wall_repaint_inner(main_house_outer.roof_right2)
  wall_repaint_inner(main_house_outer.roof_back2)


  if(texture_to_check=='0' ||texture_to_check=='1' ||texture_to_check=='2')
  {
    console.log("special_case")
  }
  else{
   let color_value=document.querySelector('input[name="wall-color"]:checked').value
   let three_color=new THREE.Color(color_value)
   menu_controller.change_wall_color(three_color.r*255, three_color.g*255, three_color.b*255)
  }
  // main_house_outer.roof_front.object.material.color.setRGB(r/255, g/255, b/255);
  // main_house_outer.roof_back.object.material.color.setRGB(r/255, g/255, b/255);
  // main_house_outer.roof_right.object.material.color.setRGB(r/255, g/255, b/255);
 
   
  // main_house_outer.roof_front2.object.material.color.setRGB(r/255, g/255, b/255);
  // main_house_outer.roof_right2.object.material.color.setRGB(r/255, g/255, b/255);
  // main_house_outer.roof_back2.object.material.color.setRGB(r/255, g/255, b/255);
 
 
   //wall_repaint_inner(main_house_outer.roof_back)
   
   //wall_repaint_inner(main_house_outer.roof_right)
   
   //wall_repaint_inner(main_house_outer.roof_left)
 
 
 



  }
  
  
  change_roof_color(r=255,g=255,b=255){
    main_house_outer.roof.object.material.color.setRGB(r/255, g/255, b/255);
    main_house_outer.roof2.object.material.color.setRGB(r/255, g/255, b/255);

  }

  change_roof(){

    const loader = new THREE.TextureLoader();
  
    let texture_to_check=document.querySelector('input[name="roof-color"]:checked').value
    let texture_rotated=document.querySelector('input[name="roof-type-orientation"]:checked').value
   
    function wall_repaint_inner(wall){


      switch(texture_to_check){

        case "0":
          wall.texture = loader.load('./resources/colors/Alternatywa/TEXTURE-METAL-POZIOM-THIN-DENSE.jpg'); 
          break;
        case "1":
          wall.texture = loader.load('./resources/images/PWP7.jpg');
          break;
        case "2":
          wall.texture = loader.load('./resources/images/PWP8.jpg');
          break;

        default:
          wall.texture = loader.load('./resources/images/PWP2.jpg');
          //alert('3')
          break;
      }


    wall.texture.wrapS =  THREE.ClampToEdgeWrapping;
    wall.texture.wrapT =THREE.RepeatWrapping;

   console.log(texture_rotated)
   console.log(texture_rotated.includes("rotated"))
   if(texture_rotated.includes("rotated")){
 
     wall.texture.repeat.set( 1, wall.width );
     wall.texture.rotation=(Math.PI/2)
   }
   else{
     //This is kinda a quick fix but it works
     wall.texture.repeat.set( 1, wall.depth );
     wall.texture.rotation=(0)
   }
 
 
   wall.object.material = new THREE.MeshBasicMaterial( { side: THREE.DoubleSide, map:wall.texture} );
   wall.object.material.needsUpdate=true;
   wall.object.geometry.needsUpdate=true;
  }

  wall_repaint_inner(main_house_outer.roof)
  wall_repaint_inner(main_house_outer.roof2)

  if(texture_to_check=='0' ||texture_to_check=='1' ||texture_to_check=='2')
  {
    console.log("special_case")
  }
  else{
   let color_value=document.querySelector('input[name="roof-color"]:checked').value
   let three_color=new THREE.Color(color_value)
   menu_controller.change_roof_color(three_color.r*255, three_color.g*255, three_color.b*255)
  }
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


//Klasa odseparowujaca rendering od placementu
//Kontroller logiki scian


let menu_controller=new Menu_control()
console.log(menu_controller)


//Interaction to add a new object
let friendly_door=new Displacement_object(main_house_outer.wall_front,2,2,0.5,0,0,0)
main_house_outer.wall_front.place_a_box2(friendly_door);


//Interaction with menu to the actual display to remove the object
function remove_composite_object(curr_id){
  main_house_outer.wall_back.remove_component(curr_id)
  main_house_outer.wall_front.remove_component(curr_id)
  main_house_outer.wall_left.remove_component(curr_id)
  main_house_outer.wall_right.remove_component(curr_id)
}
function release_resources(){
  //menu_controller.add_window()
  remove_composite_object();
  main_house_outer.release();
}

function initiate_project(){

  main_house_outer=new Creation_controller_outer(10, 10, 10, 10, 10, 10, scene_outer,4);
  menu_controller=new Menu_control()

}
menu_controller.ohmawgawd()
function call_me()
{

  const loader = new THREE.TextureLoader();
  




  //main_house_outer.wall_front.object.material.texture = loader.load('wall.jpg');
  //main_house_outer.wall_front.texture = loader.load('./resources/images/PWP2.jpg');
  //main_house_outer.wall_front.texture.wrapS =  THREE.ClampToEdgeWrapping;
  //main_house_outer.wall_front.texture.wrapT =THREE.RepeatWrapping;
  //main_house_outer.wall_right.texture.repeat.set( 1, 20 );
  function wall_repaint_inner(wall){
  let texture_rotated=document.querySelector('input[name="wall-type"]:checked').value
  wall.texture = loader.load('./resources/images/PWP2.jpg');
  wall.texture.wrapS =  THREE.ClampToEdgeWrapping;
  wall.texture.wrapT =THREE.RepeatWrapping;

  
 console.log(texture_rotated)
 console.log(texture_rotated.includes("rotated"))
 if(texture_rotated.includes("rotated")){

   wall.texture.repeat.set( 1, wall.width );
   wall.texture.rotation=(Math.PI/2)
 }
 else{
   //This is kinda a quick fix but it works
   wall.texture.repeat.set( 1, wall.depth );
   wall.texture.rotation=(0)
 }
 

 wall.object.material = new THREE.MeshBasicMaterial( { side: THREE.DoubleSide, map:wall.texture} );
 wall.object.material.needsUpdate=true;
 wall.object.geometry.needsUpdate=true;
  }


  wall_repaint_inner(main_house_outer.roof)
  wall_repaint_inner(main_house_outer.roof2)



  let color_value=document.querySelector('input[name="roof-color"]:checked').value
  let three_color=new THREE.Color(color_value)

  menu_controller.change_roof_color(three_color.r*255, three_color.g*255, three_color.b*255)
  //menu_controller.change_roof_color(200,0,0)

  
   //main_house_outer.wall_front.texture.needsUpdate=true;
   //main_house_outer.wall_front.needsUpdate=true;
  
}
remove_composite_object(friendly_door.provide_identification())


//document.addEventListener('click',  ()=>{menu_controller.change_roof()})

document.querySelector("#add-gates").addEventListener('click',  ()=>{menu_controller.add_gate()})
document.querySelector("#add-windows").addEventListener('click',  ()=>{menu_controller.add_window()})
document.querySelector("#add-doors").addEventListener('click',  ()=>{menu_controller.add_doors()})
document.querySelector("#add-canopy").addEventListener('click',  ()=>{menu_controller.add_canopy()})


let roof_types=document.querySelectorAll('input[name="roof-type"]')
for (let roof of roof_types){roof.addEventListener('change', menu_controller.rebuild_garage_dimensions)}


let roof_types_orientation=document.querySelectorAll('input[name="roof-type-orientation"]')
let roof_colors=document.querySelectorAll('input[name="roof-color"]')
for (let roof_color of roof_colors){roof_color.addEventListener('change', menu_controller.change_roof)}
for (let roof_color of roof_colors){roof_color.addEventListener('change', (evt)=>{


 for (let i=0;i<roof_types_orientation.length;i++){
   roof_types_orientation[i].parentElement.style.display='block'
   //alert('i triggered')
 }

 if(evt.target.id=="ocynk-roof")
 {
   
 for (let i=1;i<roof_types_orientation.length;i++){
   roof_types_orientation[i].parentElement.style.display='none'
 }
 document.getElementById('ocynk-roof-rotation').checked=true
 menu_controller.change_roof()
}


})}


let garage_dimension_changers=document.querySelectorAll('.num-selector select')
for (let garage_dimension of garage_dimension_changers){garage_dimension.addEventListener('change', menu_controller.rebuild_garage_dimensions)}

let wall_types=document.querySelectorAll('input[name="wall-type"]')
for (let roof of wall_types){roof.addEventListener('change', menu_controller.change_wall)}

let wall_colors=document.querySelectorAll('input[name="wall-color"]')
for (let wall_color of wall_colors){wall_color.addEventListener('change', menu_controller.change_wall)}

for (let wall_color of wall_colors){wall_color.addEventListener('change', (evt)=>{


  for (let i=0;i<wall_types.length;i++){
    wall_types[i].parentElement.style.display='block'
    //alert('i triggered')
  }

  if(evt.target.id=="ocynk-wall")
  {
    
  for (let i=1;i<wall_types.length;i++){
    wall_types[i].parentElement.style.display='none'
  }
  document.getElementById('ocynk-wall-rotation').checked=true
  menu.menu_controller.change_wall()
}


 })}




//main_house_outer.release();
//menu_controller.release_all_objects()
//menu_controller.clear_menu()
release_resources()
initiate_project()
menu_controller.rebuild_garage_dimensions()
