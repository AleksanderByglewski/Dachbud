//import * as THREE from 'https://threejs.org/build/three.module.js';

//import {GUI} from 'three/examples/jsm/libs/lil-gui.module.min.js';

//import * as THREE from 'three';
//import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


import * as THREE from './three/core.js';
import {
  OrbitControls
} from './three/orbitControls.js';
import {
  GUI
} from './three/gui.js';
import {
  GLTFLoader
} from './three/GLTFLoader.js';


// import * as THREE from 'https://threejs.org/build/three.module.js';
// import {
//   OrbitControls
// } from 'https://threejs.org/examples/jsm/controls/OrbitControls.js';
// import {
//   GUI
// } from 'https://threejs.org/examples/jsm/libs/lil-gui.module.min.js';

// import {
//   GLTFLoader
// } from 'https://threejs.org/examples/jsm/loaders/GLTFLoader.js';


// import {
//   OBJLoader
// } from 'https://threejs.org/examples/jsm/loaders/OBJLoader.js';
// import {
//   MTLLoader
// } from 'https://threejs.org/examples/jsm/loaders/MTLLoader.js';
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
var texture = loader.load('wall.jpg');
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
var depth = 10;
var width = 20;
var height = 5;


class General_object {
  show_me_desire() {
    alert("Hello")
  }
  set_position(x = 0, y = 0, z = 0) {
    this.object.position.x = x;
    this.object.position.y = y;
    this.object.position.z = z;
  }


}


class Bounding_Box {
  constructor(x_begin, x_end, y_begin, y_end) {
    this.x_begin = x_begin;
    this.x_end = x_end;
    this.y_begin = y_begin;
    this.y_end = y_end;
  }
  check_intersection(outer_element, inner_element) {
    if (!(outer_element.x_begin < inner_element.x_end && inner_element.x_end < outer_element.x_end))
      return false;

    if (!(inner_element.x_begin < outer_element.x_end && outer.element.x_end < inner_inner_element.x_begin))
      return false;

    else {
      return true;
    }


  }
}


class state_component {
  constructor(name) {}
}

class state_doors extends state_component {

}

class state_windows extends state_component {

}


class state_machine {
  constructor() {
    this.roof = new state_component('roof')
    this.walls_color;
    this.walls_type;
    this.walls_material_type;

  }
}





class Menu_interaction {
  //This is the class responsible for adjusting the contents of the side of the building calling proper functions and keeping the data about the contents about the side
  constructor(menu_id, object_interacted = null, created_object = null, width = 0, height = 0, translation_x = 0, translation_y = 0, translate_z = 0) {
    //Those translations are with respect to the front wall the object is later placed
    //automatically with the use of three.js placement
    this.menu_id = null
    this.object_interacted = null
    this.rotation_y;
    this.translation_x;
    this.translation_y;
    this.translation_z;
    ////console.log("Hello")
    this.create_a_cell()
  }
  create_a_cell() {
    let node_elem = document.createElement("p")
    //node_elem.textContent='Mozzila Developer Network'
    //document.querySelector('#test').appendChild=node_elem
  }



  call_changes(wall_being_targeted, created_object) {
    if (object != null) {
      wall_being_targeted.add_components()
    }
    remove_self()
  }


}


class Displacement_object {
  constructor(parent = "for now it is unnecesary", width, height, depth, translation_x, translation_y, translation_z, name_type = "", object_rotation = 0) {
    this.name_type = name_type


    this.width = width
    this.height = height
    this.depth = depth

    this.parent = parent

    this.translation_x = translation_x;
    this.translation_y = translation_y;
    this.translation_z = translation_z;

    const loader = new THREE.TextureLoader();
    this.texture = loader.load('roof2.jpg');
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;

    
    //this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0x0000ff, side: THREE.DoubleSide} );



    this.material = [
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0xffffff,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0xffffff,
        side: THREE.DoubleSide
      }),

    ];

    this.geometry = new THREE.BoxGeometry(width, height, depth);
    this.mesh = new THREE.Mesh(this.geometry, this.material);

    //Set the initial displacement based of the parents height
    //First do the centered ones that is naturally
    //this.geometry.translate(0,0,0)
    //The bottom aligned ones are at
    this.initial_displacement = new THREE.Vector3(0, -this.parent.depth / 2 + height / 2, 0);
    this.user_translation = new THREE.Vector3(this.translation_x, this.translation_y, this.translation_z);
    let final_displacement = this.initial_displacement.add(this.user_translation);

    //this.geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);
    //this.geometry.position = new THREE.Vector3(0, 0, 0)
    //glass update
    //If you are a window then add this logic to displacement object
    if (this.name_type.toUpperCase().includes("OKNO")) {

      let material2 = new THREE.MeshPhysicalMaterial({
        metalness: 0.2,
        roughness: 0.0,
        clearcoat: 1.0,
        roughness: 0,
        transmission: 1,
        thickness: 0.1,
        opacity: 0.6,
        emissive: 0xFFFFFF,
        emissive: 0xffffff,
        emissiventensity: 0.6
        //normalMap: normalMap4,
        //bumpMap:normalMap4,
        //clearcoatNormalMap: clearcoatNormaMap,
        // y scale is negated to compensate for normal map handedness.
        //clearcoatNormalScale: new THREE.Vector2( 2.0, - 2.0 )
      });

      this.mesh.material = [
        new THREE.MeshBasicMaterial({
          map: this.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: this.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: this.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: this.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        material2,
        material2,
      ];

      const clearcoatNormaMap = new THREE.TextureLoader().load('./textures/glass3.png');
      let insert_material = new THREE.MeshPhysicalMaterial({

        side: THREE.DoubleSide,
        metalness: 0.2,
        roughness: 0.3,
        clearcoat: 1.0,
        roughness: 0,
        transmission: 0.3,
        thickness: 0.1,
        emissive: 0x072236,
        map: clearcoatNormaMap
      });

      //insert_material= new THREE.MeshBasicMaterial( { emissive:0xffffff,emissiventensity:0.6,map: clearcoatNormaMap, side: THREE.DoubleSide} );
      let insert_geometry = new THREE.BoxGeometry(0.95, 0.55, 0.070);
      //insert_geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);
      
      let insert_mesh = new THREE.Mesh(insert_geometry, insert_material);
      this.mesh.add(insert_mesh);
    }
    //If an object is on the side then you also need to rotate it
    //this.geometry.rotateY(1.701)
    if (this.name_type.toUpperCase().includes("RYNNA")) {
      let insert_material = new THREE.MeshBasicMaterial({
        color: 0x272727,
        side: THREE.DoubleSide
      });
      let insert_geometry = new THREE.BoxGeometry(0.0, +0.0, +0.0);
      insert_geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);
      let insert_mesh = new THREE.Mesh(insert_geometry, insert_material);
      insert_mesh.name = "door_decoration_rynna"
      this.mesh = insert_mesh
      this.mesh.add(insert_mesh);
      this.mesh.name = "rynna_container"
      //console.log(this.mesh)



    
      function dumpObject(obj, lines = [], isLast = true, prefix = '') {
        const localPrefix = isLast ? '└─' : '├─';
        lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
        const newPrefix = prefix + (isLast ? '  ' : '│ ');
        const lastNdx = obj.children.length - 1;
        obj.children.forEach((child, ndx) => {
          const isLast = ndx === lastNdx;
          dumpObject(child, lines, isLast, newPrefix);
        });
        return lines;
      }
      //Door handles 
      //Door handles visibility based on state

      {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./objects/gutter/scene6.gltf', (gltf) => {

          const root = gltf.scene;

          scene_outer.add(root);

          //console.log(dumpObject(root).join('\n'));

          let handle1 = root.getObjectByName('root');
          handle1.name = "hand111"

          let object_height = parseFloat(document.querySelector(".num-selector [name='wall-height']").value)

          handle1.scale.y = object_height * 0.95;
          //handle1.visible = false;
          handle1.translateY(0.97 * (-object_height / 2))



          this.mesh.add(handle1)
          //Kick the child

          //handle1.translateZ(Math.PI/2+object_rotation)

          handle1.children[0].rotateZ(Math.PI / 2 + object_rotation)

          //alert(-main_house_outer.wall_left.width/2)
          let eigen = new THREE.Vector3(-main_house_outer.wall_left.width / 2, 0, 0.05)

          if (this.name_type.toUpperCase().includes("RIGHT")) {
            eigen = new THREE.Vector3(-main_house_outer.wall_left.width/2-canopy_container.front_size, 0, 0.05+canopy_container.right_size)

          }

          if (this.name_type.toUpperCase().includes("LEFT")) {
            eigen = new THREE.Vector3(+main_house_outer.wall_left.width/2+canopy_container.front_size, 0, 0.05+canopy_container.left_size)

          }

          if (this.name_type.toUpperCase().includes("FRONT")) {
            eigen = new THREE.Vector3(-main_house_outer.wall_front.width/2-canopy_container.left_size, 0, 0.05+canopy_container.front_size)
          }

          if (this.name_type.toUpperCase().includes("BACK")) {
            eigen = new THREE.Vector3(+main_house_outer.wall_front.width/2+canopy_container.left_size, 0, 0.05+canopy_container.back_size)

          }
          let rotation_axis = new THREE.Vector3(0, 1, 0)
          eigen.applyAxisAngle(rotation_axis, 3 * object_rotation)


          let target = scene_outer.getObjectByName("hand111")

          handle1.translateX(eigen.x)
          handle1.translateY(eigen.y + 0.1)
          handle1.translateZ(eigen.z)

          //console.log(target)
          handle1.visible = true;
          console.log(this.mesh)


          var material222 = new THREE.MeshBasicMaterial( {color:0x44322d,  side: THREE.DoubleSide} );

          //Color change gutter
          //let color_set_gutter=new THREE.Color( 0x88645b )
          let color_set_gutter=new THREE.Color( 0xab928c )
          color_set_gutter=new THREE.Color( 0xffffff )
          
          if(document.querySelector("[name='gutter-color']").value=='#FFFFFF')
          {material222 = new THREE.MeshBasicMaterial( {color:0xeeeeee,  side: THREE.DoubleSide} );}

          function recursive_change(parent_object){
            parent_object.material = material222;
            //try{
            //parent_object.material.color=color_set_gutter;
            //parent_object.material.needsUpdate = true;}
            //catch(error){}
            for (let elem of parent_object.children){
              console.log("I am a child")
              console.log(elem)
              recursive_change(elem)
              
            }

          }
          recursive_change(handle1)

        });


      }

      {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./objects/gutter-top/scene2.gltf', (gltf) => {

          const root = gltf.scene;

          scene_outer.add(root);




          let handle1 = root.getObjectByName('root');
          handle1.name = "gutter_top"

          //handle1.translateZ(0.1)
          this.mesh.add(handle1)

          //Kick the child but by how much 
          //Just by the object rotation



          handle1.children[0].rotateY(3 * object_rotation)

          //console.log("Show me the norm")
          //console.log(handle1)
          //console.log("End of the norm")


          //Transformation part
          //if(this.name_type.toUpperCase().includes("BRAMA"))
          handle1.scale.x = 1.0
          handle1.scale.y = 1.0
          // handle1.scale.z =main_house_outer.wall_left.width/(1.5)
          handle1.scale.z = 1.0

          let object_height = parseFloat(document.querySelector(".num-selector [name='wall-height']").value)

          //handle1.scale.y = object_height*0.95
          //handle1.visible = false;
          handle1.translateY(object_height / 2 - 0.025)
          let eigen = new THREE.Vector3(-0.0, 0, 0.25)
          let rotation_axis = new THREE.Vector3(0, 1, 0)
          eigen.applyAxisAngle(rotation_axis, object_rotation)

          console.log(eigen)

          if (this.name_type.toUpperCase().includes("FRONT")) {

            handle1.scale.x = (main_house_outer.wall_front.width+canopy_container.left_size+canopy_container.right_size )/ (1.5)
            handle1.scale.y = 1.0
            handle1.scale.z = 1.0


            handle1.translateZ(-0.25+canopy_container.front_size-(main_house_outer.wall_right.width-3)*0.11)
            handle1.translateX(-0.20)

            handle1.translateX((main_house_outer.wall_front.width - 3) * (-0.05)+0.5*(-canopy_container.left_size+canopy_container.right_size)*1.10-canopy_container.right_size*0.1)
          }

          if (this.name_type.toUpperCase().includes("BACK")) {

            handle1.scale.x =  (main_house_outer.wall_front.width+canopy_container.left_size+canopy_container.right_size ) / (1.5)
            handle1.translateZ(-0.35-canopy_container.back_size-(main_house_outer.wall_right.width-3)*0.11)
            handle1.translateX(+0.20)
            
            handle1.translateX((main_house_outer.wall_front.width - 3) * (+0.05)+0.5*(-canopy_container.left_size+canopy_container.right_size)*1.10+(canopy_container.left_size)*0.1)

          }


          if (this.name_type.toUpperCase().includes("RIGHT")) {
            handle1.scale.z = (main_house_outer.wall_left.width+canopy_container.front_size+canopy_container.back_size) / (1.5)
            handle1.translateZ(0.6*(canopy_container.front_size-canopy_container.back_size*0.625))
            handle1.translateX(0.045+canopy_container.right_size)
          }
          if (this.name_type.toUpperCase().includes("LEFT")) {
            handle1.scale.z = (main_house_outer.wall_left.width+canopy_container.front_size+canopy_container.back_size) / (1.5)
            handle1.translateZ(-0.40 - 0.11 * (main_house_outer.wall_left.width - 3))
            handle1.translateZ(0.5*(canopy_container.front_size-canopy_container.back_size))
            handle1.translateX(-0.045-canopy_container.left_size)
            
          }
          //handle1.translateX(eigen.x)
          //handle1.translateY(eigen.y)
          //handle1.translateZ(0.40+eigen.z+(+(handle1.scale.z-1))*1.76+(main_house_outer.wall_left.width-3)*0.11)

          let new_translation = new THREE.Vector3(0, 0, 0.40 + (+(handle1.scale.z - 1)) * 1.76 + (main_house_outer.wall_left.width - 3) * 0.11)
          new_translation.applyAxisAngle(rotation_axis, 0)
          handle1.translateX(new_translation.x)
          handle1.translateY(new_translation.y)
          handle1.translateZ(new_translation.z)
         

          //Color change gutter
          var material222 = new THREE.MeshBasicMaterial( {color:0x44322d,  side: THREE.DoubleSide} );

          
          //let color_set_gutter=new THREE.Color( 0x88645b )
          let color_set_gutter=new THREE.Color( 0xab928c )
          color_set_gutter=new THREE.Color( 0xffffff )
          
          if(document.querySelector("[name='gutter-color']").value=='#FFFFFF')
          {material222 = new THREE.MeshBasicMaterial( {color:0xeeeeee,  side: THREE.DoubleSide} );}

          function recursive_change(parent_object){
            parent_object.material = material222;
            //try{
            //parent_object.material.color=color_set_gutter;
            //parent_object.material.needsUpdate = true;}
            //catch(error){}
            for (let elem of parent_object.children){
              console.log("I am a child")
              console.log(elem)
              recursive_change(elem)
              
            }

          }
          recursive_change(handle1)
          console.log(handle1.children)
 
        });
      }

     


    }

    if (this.name_type.toUpperCase().includes("BRAMA")) {

      let insert_material = new THREE.MeshBasicMaterial({
        color: 0x272727,
        side: THREE.DoubleSide
      });
      let insert_geometry = new THREE.BoxGeometry(0.02, this.height + 1.01, this.depth + 0.02);
      //insert_geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);
      let insert_mesh = new THREE.Mesh(insert_geometry, insert_material);
      insert_mesh.name = "door_decoration"
      this.mesh.add(insert_mesh);
      


      // let diff_insert_material = new THREE.MeshBasicMaterial( { color: 0x272727, side: THREE.DoubleSide} );
      // let diff_insert_geometry = new THREE.BoxGeometry(this.width+0.15,this.height+0.05,this.depth-0.01);
      // diff_insert_geometry.translate(0,-0.01,0);
      // let diff_insert_mesh = new THREE.Mesh(diff_insert_geometry, diff_insert_material);
      // //insergeometry.translateY(-0.225)
      // //insert_mesh.name="door_decoration"
      // this.mesh.add(diff_insert_mesh);
      //console.log(this.mesh)



      function dumpObject(obj, lines = [], isLast = true, prefix = '') {
        const localPrefix = isLast ? '└─' : '├─';
        lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
        const newPrefix = prefix + (isLast ? '  ' : '│ ');
        const lastNdx = obj.children.length - 1;
        obj.children.forEach((child, ndx) => {
          const isLast = ndx === lastNdx;
          dumpObject(child, lines, isLast, newPrefix);
        });
        return lines;
      }


      //Door handles
      {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./objects/door_handle3/scene-right.gltf', (gltf) => {



          // //console.log("The end")
          const root = gltf.scene;
          //gltf.scene.scale.set(0.1, 0.1, 0.1);
          //gltf.scene.translate(0,0,0)
          //scene_outer.add(root);
          // root.scale.x=0.01;
          // root.scale.y=0.01;
          //root.scale.z=0.01;
          //console.log(dumpObject(root).join('\n'));

          let handle1 = root.getObjectByName('RootNode');
          handle1.name = "handle1"


          //let children=element.children
          //  for (const child of children){
          //   //console.log(child)
          // }

          //this.object.remove(target)



          handle1.visible = false;
          //  //console.log(handle1)
          //handle1.rotateY(0.30)
          //console.log(this.mesh)
          this.mesh.add(handle1)
          //handle1.translateY(-1)
          // handle1.translateZ(0.025)
          // handle1.rotateY(1.57)
          //handle1.rotateZ(-Math.PI/2)

          //handle1.translateX(-100.30)
          this.mesh.add(handle1)



          //Transformation part
          handle1.scale.x = 0.01
          handle1.scale.y = 0.01
          handle1.scale.z = 0.01
          handle1.rotateY(3 * object_rotation)


          handle1.translateZ(0.025)
          handle1.translateX(+0.10)
          //handle1.translateY(-main_house_outer.constructor_height / 2 + 1.05)

          //console.log("Standard displacement")
          //console.log(main_house_outer.wall_front.geometry)

          //RETURN HERE
          //handle1.translateX(-0.125)
          //handle1.translateX(0)
          //handle1.position.y=-30
          //handle1.translate.y=-30;
          //console.log(handle1)
          //handle1.position.z=20.1;
          //this.mesh.add(handle1)
          //handle1.rotation.y=Math.PI/2;

          //this.mesh.add(handle1);

          //handle1.position.x=-100
          //handle1.position.y=+2

          //console.log(handle1)
          // handle1.position.x=-110
          // handle1.position.y=+100

          //The code needed to make the object invisible handle update
          let target = this.mesh.getObjectByName("handle1")
          target.visible = true;

          // //console.log(handle1)


          ////console.log(dumpObject(root).join('\n'));
        });
        gltfLoader.load('./objects/door_handle4/scene4.gltf', (gltf) => {
          // //console.log("The end 2")


          const root = gltf.scene;
          //  //console.log(dumpObject(root).join('\n'));
          //gltf.scene.scale.set(0.1, 0.1, 0.1);
          //gltf.scene.translate(0,0,0)
          scene_outer.add(root);

          // root.scale.x=0.01;
          // root.scale.y=0.01;
          //root.scale.z=0.01;
          //   //console.log(dumpObject(root).join('\n'));
          let handle1 = root.getObjectByName('Sketchfab_model');
          handle1.name = "handle2"
          //handle1.rotateY(0.30)

          //  //console.log("hey change the color")
          //  //console.log(this.mesh)

          //this.mesh.add(handle1)
          //handle1.translateY(-1)
          //handle1.translateZ(0.025)

          //handle1.rotateZ(-Math.PI/2)

          //handle1.translateX(-100.30)
          this.mesh.add(handle1)


          //Transformation part


          handle1.rotateZ(3 * object_rotation)
          handle1.scale.x = 2.51
          handle1.scale.y = 1.51
          //handle1.scale.z = 1.00

          handle1.translateZ(0.035)

          handle1.translateX(+0.092)
          handle1.rotateY(Math.PI / 2)
          handle1.rotateZ(-Math.PI / 8)
          //handle1.scale.x=0.01
          //handle1.scale.y=0.01
          //handle1.scale.z=0.01
          //RETURN HERE
          //handle1.translateX(-0.125)
          //handle1.translateX(0)
          //handle1.position.y=-30
          //handle1.translate.y=-30;
          //  //console.log(handle1)
          //handle1.position.z=20.1;
          //this.mesh.add(handle1)
          //handle1.rotation.y=Math.PI/2;

          //this.mesh.add(handle1);

          //handle1.position.x=-100
          //handle1.position.y=+2

          //console.log(handle1)
          // handle1.position.x=-110
          // handle1.position.y=+100

          //handle update
          let target = this.mesh.getObjectByName("handle2")
          target.visible = false;



          // //console.log(dumpObject(root).join('\n'));
        });
        gltfLoader.load('./objects/door_handle5/scene.gltf', (gltf) => {



          // //console.log("The end")
          const root = gltf.scene;
          //gltf.scene.scale.set(0.1, 0.1, 0.1);
          //gltf.scene.translate(0,0,0)
          //scene_outer.add(root);
          // root.scale.x=0.01;
          // root.scale.y=0.01;
          //root.scale.z=0.01;
          //console.log(dumpObject(root).join('\n'));

          let handle1 = root.getObjectByName('RootNode');
          handle1.name = "handle-wide"


          //let children=element.children
          //  for (const child of children){
          //   //console.log(child)
          // }

          //this.object.remove(target)



          handle1.visible = false;
          //  //console.log(handle1)
          //handle1.rotateY(0.30)
          //console.log(this.mesh)
          this.mesh.add(handle1)
          //handle1.translateY(-1)
          // handle1.translateZ(0.025)
          // handle1.rotateY(1.57)
          //handle1.rotateZ(-Math.PI/2)

          //handle1.translateX(-100.30)
          this.mesh.add(handle1)



          //Transformation part
          handle1.scale.x = 0.01
          handle1.scale.y = 0.01
          handle1.scale.z = 0.01
          handle1.rotateY(3 * object_rotation)


          handle1.translateZ(0.025)
          handle1.translateX(-0.028)

          handle1.translateY(-0.80)

          //console.log("Standard displacement")
          //console.log(main_house_outer.wall_front.geometry)

          //RETURN HERE
          //handle1.translateX(-0.125)
          //handle1.translateX(0)
          //handle1.position.y=-30
          //handle1.translate.y=-30;
          //console.log(handle1)
          //handle1.position.z=20.1;
          //this.mesh.add(handle1)
          //handle1.rotation.y=Math.PI/2;

          //this.mesh.add(handle1);

          //handle1.position.x=-100
          //handle1.position.y=+2

          //console.log(handle1)
          // handle1.position.x=-110
          // handle1.position.y=+100

          //The code needed to make the object invisible handle update
          let target = this.mesh.getObjectByName("handle-wide")
          target.visible = false;

          // //console.log(handle1)


          ////console.log(dumpObject(root).join('\n'));
        });



      }


      //Object graveyard
      {
        // {
        //   const gltfLoader = new GLTFLoader();
        //   gltfLoader.load('https://threejs.org/manual/examples/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf', (gltf) => {
        //     const root = gltf.scene;
        //     gltf.scene.scale.set(0.01, 0.01, 0.01);
        //     //scene_outer.add(root);
        //   });
        // }
        //   const gltfLoader = new GLTFLoader();
        //   gltfLoader.load('./objects/door_handle3/scene.gltf', (gltf) => {
        //    //console.log("The end")
        //     const root = gltf.scene;
        //     //gltf.scene.scale.set(0.1, 0.1, 0.1);
        //     //gltf.scene.translate(0,0,0)
        //     scene_outer.add(root);
        //    // root.scale.x=0.01;
        //    // root.scale.y=0.01;
        //     //root.scale.z=0.01;
        //    //console.log(dumpObject(root).join('\n'));
        //     let handle1=root.getObjectByName('RootNode');
        //     //handle1.rotateY(0.30)
        //    //console.log(this.mesh)
        //     this.mesh.add(handle1)
        //     //handle1.translateY(-1)
        //     handle1.translateZ(0.025)
        //    // handle1.rotateY(1.57)
        //     //handle1.rotateZ(-Math.PI/2)

        //     //handle1.translateX(-100.30)
        //     this.mesh.add(handle1)
        //     handle1.scale.x=0.01
        //     handle1.scale.y=0.01
        //     handle1.scale.z=0.01
        //     //RETURN HERE
        //     //handle1.translateX(-0.125)
        //    //handle1.translateX(0)
        //     //handle1.position.y=-30
        //     //handle1.translate.y=-30;
        //    //console.log(handle1)
        //     //handle1.position.z=20.1;
        //     //this.mesh.add(handle1)
        //     //handle1.rotation.y=Math.PI/2;

        //     //this.mesh.add(handle1);

        //  //handle1.position.x=-100
        //  //handle1.position.y=+2

        //   //console.log(handle1)
        //    // handle1.position.x=-110
        //    // handle1.position.y=+100


        //    //console.log(dumpObject(root).join('\n'));
        //   });
        //   gltfLoader.load('./objects/door_handle4/scene4.gltf', (gltf) => {
        //    //console.log("The end 2")


        //     const root = gltf.scene;
        //    //console.log(dumpObject(root).join('\n'));
        //     //gltf.scene.scale.set(0.1, 0.1, 0.1);
        //     //gltf.scene.translate(0,0,0)
        //     scene_outer.add(root);

        //    // root.scale.x=0.01;
        //    // root.scale.y=0.01;
        //     //root.scale.z=0.01;
        //    //console.log(dumpObject(root).join('\n'));
        //     let handle1=root.getObjectByName('Sketchfab_model');
        //     //handle1.rotateY(0.30)
        //    //console.log(this.mesh)
        //     //this.mesh.add(handle1)
        //     //handle1.translateY(-1)
        //     //handle1.translateZ(0.025)

        //     //handle1.rotateZ(-Math.PI/2)

        //     //handle1.translateX(-100.30)
        //     this.mesh.add(handle1)

        //     //handle1.scale.x=0.01
        //     //handle1.scale.y=0.01
        //     //handle1.scale.z=0.01
        //     //RETURN HERE
        //     //handle1.translateX(-0.125)
        //    //handle1.translateX(0)
        //     //handle1.position.y=-30
        //     //handle1.translate.y=-30;
        //    //console.log(handle1)
        //     //handle1.position.z=20.1;
        //     //this.mesh.add(handle1)
        //     //handle1.rotation.y=Math.PI/2;

        //     //this.mesh.add(handle1);

        //  //handle1.position.x=-100
        //  //handle1.position.y=+2

        //   //console.log(handle1)
        //    // handle1.position.x=-110
        //    // handle1.position.y=+100


        //    //console.log(dumpObject(root).join('\n'));
        //   });
        //   gltfLoader.load('./objects/door_handles/fox-1.gltf', (gltf) => {
        //     const root = gltf.scene;
        //     //gltf.scene.scale.set(0.1, 0.1, 0.1);
        //     //gltf.scene.translate(0,0,0)
        //     scene_outer.add(root);
        //    // root.scale.x=0.01;
        //    // root.scale.y=0.01;
        //    // root.scale.z=0.01;
        //     let handle1=root.getObjectByName('fox');
        //     //handle1.rotateY(0.30)
        //     handle1.translateY(+10)
        //     //handle1.translateX(-100.30)
        //     this.mesh.add(handle1)
        //     handle1.scale.x=0.01
        //     handle1.scale.y=0.01
        //     handle1.scale.z=0.01
        //    handle1.translateX(0)
        //     //handle1.position.y=-30
        //     //handle1.translate.y=-30;
        //    //console.log(handle1)
        //     //handle1.position.z=20.1;
        //     //this.mesh.add(handle1)
        //     //handle1.rotation.y=Math.PI/2;

        //     //this.mesh.add(handle1);

        //  //handle1.position.x=-100
        //  //handle1.position.y=+2

        //   //console.log(handle1)
        //    // handle1.position.x=-110
        //    // handle1.position.y=+100


        //    //console.log(dumpObject(root).join('\n'));
        //   });

        //   gltfLoader.load('./objects/door_handles/OSG_Scene.gltf', (gltf) => {
        //     const root = gltf.scene;
        //     //gltf.scene.scale.set(0.1, 0.1, 0.1);
        //     //gltf.scene.translate(0,0,0)
        //     scene_outer.add(root);
        //    // root.scale.x=0.01;
        //    // root.scale.y=0.01;
        //     //root.scale.z=0.01;
        //    //console.log(dumpObject(root).join('\n'));
        //     let handle1=root.getObjectByName('RootNode');
        //     //handle1.rotateY(0.30)
        //    //console.log(this.mesh)
        //     this.mesh.add(handle1)
        //     //handle1.translateY(-1)
        //     handle1.translateZ(0.025)

        //     handle1.rotateZ(-Math.PI/2)

        //     //handle1.translateX(-100.30)
        //     this.mesh.add(handle1)
        //     handle1.scale.x=0.01
        //     handle1.scale.y=0.01
        //     handle1.scale.z=0.01
        //     //RETURN HERE
        //     //handle1.translateX(-0.125)
        //    //handle1.translateX(0)
        //     //handle1.position.y=-30
        //     //handle1.translate.y=-30;
        //    //console.log(handle1)
        //     //handle1.position.z=20.1;
        //     //this.mesh.add(handle1)
        //     //handle1.rotation.y=Math.PI/2;

        //     //this.mesh.add(handle1);

        //  //handle1.position.x=-100
        //  //handle1.position.y=+2

        //   //console.log(handle1)
        //    // handle1.position.x=-110
        //    // handle1.position.y=+100


        //    //console.log(dumpObject(root).join('\n'));
        //   });



        //   gltfLoader.load('./objects/door_handles/OSG_Scene.gltf', (gltf) => {
        //     const root = gltf.scene;
        //     //gltf.scene.scale.set(0.1, 0.1, 0.1);
        //     //gltf.scene.translate(0,0,0)
        //     scene_outer.add(root);
        //    // root.scale.x=0.01;
        //    // root.scale.y=0.01;
        //     //root.scale.z=0.01;
        //    //console.log(dumpObject(root).join('\n'));
        //     let handle1=root.getObjectByName('RootNode');
        //     //handle1.rotateY(0.30)
        //    //console.log(this.mesh)
        //     this.mesh.add(handle1)
        //     //handle1.translateY(-1)
        //     //handle1.translateZ(0.025)

        //     //handle1.rotateZ(-Math.PI/2)

        //     //handle1.translateX(-100.30)
        //     this.mesh.add(handle1)
        //     handle1.scale.x=0.01
        //     handle1.scale.y=0.01
        //     handle1.scale.z=0.01
        //     //RETURN HERE
        //     //handle1.translateX(-0.125)
        //    //handle1.translateX(0)
        //     //handle1.position.y=-30
        //     //handle1.translate.y=-30;
        //    //console.log(handle1)
        //     //handle1.position.z=20.1;
        //     //this.mesh.add(handle1)
        //     //handle1.rotation.y=Math.PI/2;

        //     //this.mesh.add(handle1);

        //  //handle1.position.x=-100
        //  //handle1.position.y=+2

        //   //console.log(handle1)
        //    // handle1.position.x=-110
        //    // handle1.position.y=+100


        //    //console.log(dumpObject(root).join('\n'));
        //   });

        //   gltfLoader.load('./objects/door_handles/kodiak.glb', (glb) => {
        //     const root = glb.scene;
        //     //gltf.scene.scale.set(0.1, 0.1, 0.1);
        //     //gltf.scene.translate(0,0,0)
        //    //console.log("hi")
        //     scene_outer.add(root);
        //    //console.log(root)
        //     root.scale.x=10.0;
        //     root.scale.y=10.01;
        //     root.scale.z=0.01;
        //     //console.log(dumpObject(root).join('\n'));
        //    // let handle1=root.getObjectByName('RootNode');
        //     //handle1.rotateY(0.30)
        //    ////console.log(this.mesh)
        //    // this.mesh.add(handle1)
        //     //handle1.translateY(-1)
        //     //handle1.translateZ(0.025)

        //     //handle1.rotateZ(-Math.PI/2)

        //     //handle1.translateX(-100.30)
        //    // this.mesh.add(handle1)
        //    // handle1.scale.x=0.01
        //    // handle1.scale.y=0.01
        //    // handle1.scale.z=0.01
        //     //RETURN HERE
        //     //handle1.translateX(-0.125)
        //    //handle1.translateX(0)
        //     //handle1.position.y=-30
        //     //handle1.translate.y=-30;
        //    ////console.log(handle1)
        //     //handle1.position.z=20.1;
        //     //this.mesh.add(handle1)
        //     //handle1.rotation.y=Math.PI/2;

        //     //this.mesh.add(handle1);

        //  //handle1.position.x=-100
        //  //handle1.position.y=+2

        //   //console.log(handle1)
        //    // handle1.position.x=-110
        //    // handle1.position.y=+100


        //    //console.log(dumpObject(root).join('\n'));
        //   });

        // {
        //   const planeSize = 40;

        //   const loader = new THREE.TextureLoader();
        //   const texture = loader.load('https://threejs.org/manual/examples/resources/images/checker.png');
        //   texture.wrapS = THREE.RepeatWrapping;
        //   texture.wrapT = THREE.RepeatWrapping;
        //   texture.magFilter = THREE.NearestFilter;
        //   const repeats = planeSize / 2;
        //   texture.repeat.set(repeats, repeats);

        //   const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
        //   const planeMat = new THREE.MeshPhongMaterial({
        //     map: texture,
        //     side: THREE.DoubleSide,
        //   });
        //   const mesh = new THREE.Mesh(planeGeo, planeMat);
        //   mesh.rotation.x = Math.PI * -.5;
        //   scene_outer.add(mesh);
        // }

        // {
        //   const mtlLoader = new MTLLoader();
        //   mtlLoader.load('https://threejs.org/manual/examples/resources/models/windmill/windmill.mtl', (mtl) => {
        //     mtl.preload();
        //     const objLoader = new OBJLoader();
        //     objLoader.setMaterials(mtl);
        //     objLoader.load('https://threejs.org/manual/examples/resources/models/windmill/windmill.obj', (root) => {
        //      //console.log(root)
        //       root.scale.x=0.10
        //       root.scale.y=0.10
        //       root.scale.z=0.10
        //       root.translateX(10)
        //       scene_outer.add(root);
        //     });
        //   });
        // }


      }
      //To access and change the door decoration later you can pass it in the menu and access it by the name "door-decoration"

    }
    if (this.name_type.toUpperCase().includes("DRZWI")) {

      let insert_material = new THREE.MeshBasicMaterial({
        color: 0x272727,
        side: THREE.DoubleSide
      });
      let insert_geometry = new THREE.BoxGeometry(this.width + 0.03, this.height + 0.02, this.depth - 0.01);
      //insert_geometry.translate(0, -main_house_outer.constructor_height / 2 + 0.95, 0);
      let insert_mesh = new THREE.Mesh(insert_geometry, insert_material);
      insert_mesh.name = "insert_mesh"
      //insergeometry.translateY(-0.225)
      //insert_mesh.name="door_decoration"
      this.mesh.add(insert_mesh);
      //console.log(this.mesh)
      


      function dumpObject(obj, lines = [], isLast = true, prefix = '') {
        const localPrefix = isLast ? '└─' : '├─';
        lines.push(`${prefix}${prefix ? localPrefix : ''}${obj.name || '*no-name*'} [${obj.type}]`);
        const newPrefix = prefix + (isLast ? '  ' : '│ ');
        const lastNdx = obj.children.length - 1;
        obj.children.forEach((child, ndx) => {
          const isLast = ndx === lastNdx;
          dumpObject(child, lines, isLast, newPrefix);
        });
        return lines;
      }
      //Door handles 
      //Door handles visibility based on state

      {
        const gltfLoader = new GLTFLoader();
        gltfLoader.load('./objects/door_handle3/scene-right.gltf', (gltf) => {



          //console.log("The end")
          const root = gltf.scene;
          //gltf.scene.scale.set(0.1, 0.1, 0.1);
          //gltf.scene.translate(0,0,0)
          scene_outer.add(root);
          // root.scale.x=0.01;
          // root.scale.y=0.01;
          //root.scale.z=0.01;
          //console.log(dumpObject(root).join('\n'));

          let handle1 = root.getObjectByName('RootNode');
          handle1.name = "drhandle1"


          //let children=element.children
          //  for (const child of children){
          //   //console.log(child)
          // }

          //this.object.remove(target)



          handle1.visible = true;
          //console.log(handle1)
          //handle1.rotateY(0.30)
          //console.log(this.mesh)
          //this.mesh.add(handle1)
          //handle1.translateY(-1)
          // handle1.translateZ(0.025)
          // handle1.rotateY(1.57)
          //handle1.rotateZ(-Math.PI/2)

          //handle1.translateX(-100.30)
          this.mesh.add(handle1)



          //Transformation part

          //JUST FINISH
          handle1.scale.x = 0.01

          //Change the scales to handle1.scale.x = -0.01

          handle1.scale.y = 0.01
          handle1.scale.z = 0.01
          handle1.rotateY(3 * object_rotation)


          handle1.translateY(-0.225)
          handle1.translateZ(0.025)
          //Change the translation to  handle1.translateX(+this.width / 2 - 0.1)
          handle1.translateX(-this.width / 2 + 0.1)

          let target = this.mesh.getObjectByName("drhandle1")
          target.visible = true;

          //END OF HANDLE1


          let handle2 = handle1.clone();
          handle2.name = "drhandle2"


          //let children=element.children
          //  for (const child of children){
          //   //console.log(child)
          // }

          //this.object.remove(target)



          handle2.visible = false;
          //console.log(handle1)
          //handle1.rotateY(0.30)
          //console.log(this.mesh)
          //this.mesh.add(handle1)
          //handle1.translateY(-1)
          // handle1.translateZ(0.025)
          // handle1.rotateY(1.57)
          //handle1.rotateZ(-Math.PI/2)

          //handle1.translateX(-100.30)
          this.mesh.add(handle2)



          //Transformation part

          //JUST FINISH
          handle2.scale.x = -0.01

          //Change the scales to handle1.scale.x = -0.01

          //handle2.scale.y = 0.01
          //handle2.scale.z = 0.01
          //handle2.rotateY(3 * object_rotation)


          //handle2.translateY(-0.225)
          //handle2.translateZ(0.025)
          //Change the translation to  handle1.translateX(+this.width / 2 - 0.1)
          handle2.translateX(this.width - 0.2)

          let target2 = this.mesh.getObjectByName("drhandle2")
          target2.visible = false;




          //console.log(dumpObject(root).join('\n'));
        });
        gltfLoader.load('./objects/door_handle4/scene4.gltf', (gltf) => {
          //console.log("The end 2")


          const root = gltf.scene;
          //console.log(dumpObject(root).join('\n'));
          //gltf.scene.scale.set(0.1, 0.1, 0.1);
          //gltf.scene.translate(0,0,0)
          scene_outer.add(root);

          // root.scale.x=0.01;
          // root.scale.y=0.01;
          //root.scale.z=0.01;
          //console.log(dumpObject(root).join('\n'));
          let handle1 = root.getObjectByName('Sketchfab_model');
          handle1.name = "handle2"
          //handle1.rotateY(0.30)

          //console.log(this.mesh)
          //this.mesh.add(handle1)
          //handle1.translateY(-1)
          //handle1.translateZ(0.025)

          //handle1.rotateZ(-Math.PI/2)

          //handle1.translateX(-100.30)
          this.mesh.add(handle1)


          //Transformation part


          handle1.rotateZ(3 * object_rotation)

          handle1.translateZ(0.025)
          handle1.translateX(+0.092)
          handle1.translateY(-0.552)

          //handle1.scale.x=0.01
          //handle1.scale.y=0.01
          //handle1.scale.z=0.01
          //RETURN HERE
          //handle1.translateX(-0.125)
          //handle1.translateX(0)
          //handle1.position.y=-30
          //handle1.translate.y=-30;
          //console.log(handle1)
          //handle1.position.z=20.1;
          //this.mesh.add(handle1)
          //handle1.rotation.y=Math.PI/2;

          //this.mesh.add(handle1);

          //handle1.position.x=-100
          //handle1.position.y=+2

          //console.log(handle1)
          // handle1.position.x=-110
          // handle1.position.y=+100

          //handle update
          let target = this.mesh.getObjectByName("handle2")
          target.visible = false;



          //console.log(dumpObject(root).join('\n'));
        });

      }

    }
  }
  move_self_down() {
    this.mesh.geometry.translateY(-0.05)
  }

  remodel_a_stupid_piece_of_gate(width, height = 0, depth = 0, object_rotation = 0) {

    this.initial_displacement = new THREE.Vector3(0, -this.parent.depth / 2 + height / 2, 0);
    //this.user_translation = new THREE.Vector3(this.translation_x, this.translation_y, this.translation_z);
    let final_displacement = this.initial_displacement
    //console.log(this.final_displacement)


    let insert_material = new THREE.MeshBasicMaterial({
      color: 0x272727,
      side: THREE.DoubleSide
    });
    let insert_geometry = new THREE.BoxGeometry(0.02, height + 0.01, this.depth + 0.02);
    let insert_mesh = new THREE.Mesh(insert_geometry, insert_material);
    //insert_geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);

    insert_mesh.name = "door_decoration"

    this.mesh.add(insert_mesh);
    //console.log(this.mesh)

    let target = this.mesh.getObjectByName("door_decoration")
    insert_mesh.visible = target.visible
    this.mesh.remove(target)

  }

  change_texture() {
    const loader = new THREE.TextureLoader();
    this.texture = loader.load('./resources/images/PWP2.jpg')
    this.black_texture = loader.load('black.jpg');





    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(1, this.geometry.parameters.height * 1);
    this.mesh.material = [
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0xffffff,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),

    ];
    this.change_color(19, 68, 124)
    //this.mesh.material[4].color=new THREE.Color(1,0,0)
    //this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: 0x0000ff, side: THREE.DoubleSide} );
    //this.mesh.material.color=new THREE.Color(0x000000)



    this.material.needsUpdate = true;

  }
  change_color(r, g, b) {
    this.mesh.material[4].color = new THREE.Color(r / 255, g / 255, b / 255)
    this.mesh.material[5].color = new THREE.Color(r / 255, g / 255, b / 255)
  }


  set_position(translation_vector_x, translation_vector_y, translation_vector_z) {
    this.mesh.position.x = translation_vector_x;
    this.mesh.position.y = translation_vector_y;
    this.mesh.position.z = translation_vector_z;
  }

  change_position(translation_vector_x, translation_vector_y, translation_vector_z) {
    this.mesh.position.x += translation_vector_x;
    this.mesh.position.y += translation_vector_y;
    this.mesh.position.z += translation_vector_z;
  }
  set_translation() {
    this.geometry.position = new THREE.Vector3(0, 0, 0);
    this.geometry.position.y = 100;
    //console.log(this.geometry.position)

    this.user_translation = new THREE.Vector3(this.translation_x, this.translation_y, this.translation_z);
    let final_displacement = this.initial_displacement.add(this.user_translation);
    final_displacement = new THREE.Vector3(this.user_translation_x, 0, 0)

    this.geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);

  }

  provide_identification() {
    return this.mesh.id
  }
  return_self() {
    return this.mesh
  }
  check_overlap() {
    //You are good for now to not worry about overlap
    return false;
  }
  remodel_self(width, height, depth = 0, object_rotation = 0, object_type = "") {
    //this.depth=0.04

    //
    this.material = [
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0x000000,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0xffffff,
        side: THREE.DoubleSide
      }),
      new THREE.MeshBasicMaterial({
        map: this.texture,
        color: 0xffffff,
        side: THREE.DoubleSide
      }),

    ];

    //console.log(this.geometry)


    this.geometry = new THREE.BoxGeometry(width, height, this.depth);
    //this.geometry=this.mesh.geometry.clone()
    this.geometry.rotateY(object_rotation)
    this.mesh.geometry = this.geometry

    this.initial_displacement = new THREE.Vector3(0, -this.parent.depth / 2 + height / 2, 0);
    this.user_translation = new THREE.Vector3(this.translation_x, this.translation_y, this.translation_z);
    let final_displacement = this.initial_displacement.add(this.user_translation);
    //console.log(final_displacement)
    //this.geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);

    if (object_type.toUpperCase().includes("DRZWI")) {
     
   
      //change the width of the insert mesh do it!!!
      place_at_the_bottom(global_container_of_doors, 1.00)
      console.log(this.mesh.getObjectByName('insert_mesh'))
      let inserted_mesh_rebuild=this.mesh.getObjectByName('insert_mesh')
      inserted_mesh_rebuild=new THREE.BoxGeometry(width+0.03,height+ 0.02, this.depth- 0.01)
      inserted_mesh_rebuild.rotateY(object_rotation)
      this.mesh.getObjectByName('insert_mesh').geometry=inserted_mesh_rebuild
      console.log(this.mesh.getObjectByName('insert_mesh'))

      try{
      console.log(this.mesh.getObjectByName("drhandle1"))
      this.mesh.getObjectByName("drhandle1").position.z=+width / 2 - 0.1;
      this.mesh.getObjectByName("drhandle2").position.z=-width / 2 + 0.1;
    }
      catch(error){
        console.log("it is fine move on the second iteration")
      }
      //this.mesh.getObjectByName("drhandle2").translateX(-width)
      //alert("good")

    }

  }
}


//This is basically the template for the front wall right now
class Garage_walls extends General_object {
  //What is the logic of this class?
  //We have one main component mainly the wall that
  //takes care of it's subcomponents such as door
  constructor(x, y, translate_x = 0, translate_y = 0, translate_z = 0, rotation = 0) {
    super();
    this.boundingBoxInstance = new Bounding_Box(x, y)




    //this.add_components(friendly_door.return_self())

    this.components = [];
    this.width = x;
    this.depth = y;
    this.rotation = rotation;

    const loader = new THREE.TextureLoader();
    this.texture = loader.load('roof2.jpg');
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    this.object = new THREE.Mesh(this.geometry, this.material);
    this.change_the_texture(null, 255, 255, 255, 0)


    this.geometry = new THREE.PlaneGeometry(x, y);
    this.object = new THREE.Mesh(this.geometry, this.material);



    this.texture2 = loader.load('./resources/images/SCME.jpg');
    const door_material = new THREE.MeshBasicMaterial({
      color: 0xaaaaaa,
      map: this.texture2
    });
    const door_width = 6; // ui: width
    const door_height = 4; // ui: height
    const door_depth = 0.1; // ui: depth
    const door_geometry = new THREE.BoxGeometry(door_width, door_height, door_depth);
    const door = new THREE.Mesh(door_geometry, door_material);
    this.door = door

    door.geometry.translate(0, +door_height / 2 - 5 / 2, 0)
    door.geometry.rotateY(rotation)
    //this.add_components(door)

    door.name = "alex"
    //console.log(door.id)
    //this.remove_component(door.id)
    this.geometry.rotateY(rotation)
    super.set_position(translate_x, translate_y, translate_z)


    let friendly_door = new Displacement_object(this.object, 10, 10, 0.5, 0, 0, 0)
    //this.add_components(friendly_door.return_self())




  }

  place_a_box2(a_box) {


    //  const door_material = new THREE.MeshBasicMaterial({color: 0xff1111, map: this.texture2});
    // const door_geometry = new THREE.BoxGeometry(this.width, this.depth, 0.1);
    // const door = new THREE.Mesh(door_geometry, door_material);
    // door.geometry.rotateY(this.rotation)
    // door.geometry.translate(0,+this.depth/2-5/2,0)
    this.add_components(a_box.return_self())
    ////console.log(door.id)
    //return door.id
  }

  place_a_box(displacement) {
    const door_material = new THREE.MeshBasicMaterial({
      color: 0xff1111,
      map: this.texture2
    });
    const door_geometry = new THREE.BoxGeometry(this.width, this.depth, 0.1);
    const door = new THREE.Mesh(door_geometry, door_material);
    door.geometry.rotateY(this.rotation)
    door.geometry.translate(0, +this.depth / 2 - 5 / 2, 0)
    this.add_components(door)
    //console.log(door.id)
    return door.id
  }

  change_the_texture(texture_name = "./resources/images/PWP2.jpg", r = 255, g = 255, b = 255, rotation = 0) {
    const loader = new THREE.TextureLoader();
    this.texture = loader.load('wall.jpg');
    this.texture = loader.load('./resources/images/PWP2.jpg');
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    //this.texture.repeat.set( 5, 2.0 );
    //this.texture.offset.set(1,0)

    //Experimental_tiling
    this.texture.repeat.set(1, this.depth);

    let parsed_color = "rgb(" + r + ',' + g + ',' + b + ')'


    //this.material = new THREE.MeshBasicMaterial( { map: this.texture ,color: `rgb(${r},${g},${b})`, side: THREE.DoubleSide} );
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: parsed_color,
      side: THREE.DoubleSide
    });

    this.material.needsUpdate = true;
    this.object.geometry.needsUpdate = true;




    //geometry.attributes.color.needsUpdate = true;
    this.object = new THREE.Mesh(this.geometry, this.material);

    //this.object.material.color.setHSL(0, 1, Math.random()); 
    //this.material.needsUpdate=true;
    //let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    //material.normalMap = normalMap;//normal map
    // //console.log("Siul la ruin")


    //this.object  = new THREE.Mesh( this.geometry, this.material );
    //this.object.material.update=true;
    //this.object.material.needsUpdate=true;

  }
  change_color() {
    this.object.material.color.setHSL(0, 1, Math.random());
  }
  add_components(component) {
    ////console.log('Adding a component ')
    this.object.add(component)
  }
  remove_components() {
    let children = this.object.children
    for (const child of children) {
      //      //console.log(child)
      this.object.remove(child)
    }
    //parent_element.object.remove(solarSystem)
  }
  remove_component(id) {
    let children = this.object.children
    //  for (const child of children){
    //   //console.log(child)
    // }
    let target = this.object.getObjectById(id)
    this.object.remove(target)


  }

  //this.object.add(solarSystem)



  add_components_to_scene(scene) {

    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      side: THREE.DoubleSide
    });
    scene.add(this.object);
  }
}
class Roof_walls extends General_object {

  constructor(x, y, translate_x = 0, translate_y = 0, translate_z = 0, rotation = 0) {
    super();
    this.components = [];
    this.width = x;
    this.depth = y;
    this.rotation = 0;

    const a = new THREE.Vector3(0, -x / 2, 0);
    const b = new THREE.Vector3(0, x / 2, 0);
    const c = new THREE.Vector3(0, x / 2, y / 2);
    this.geometry = new THREE.PlaneGeometry(x, y);
    const shape = new THREE.Shape();


    shape.moveTo(-x / 2, -y / 2);
    shape.lineTo(x / 2, -y / 2);
    shape.lineTo(x / 2, y / 2);

    this.geometry = new THREE.ShapeGeometry(shape);
    this.geometry.rotateY(rotation)
    this.geometry.translate(translate_x, translate_y, translate_z);

    const vertices = [
      // front
      {
        pos: [-x / 2, -y / 2, 0],
        norm: [0, 0, 1],
        uv: [0, 0],
      },
      {
        pos: [x / 2, -y / 2, 0],
        norm: [0, 0, 1],
        uv: [1, 0],
      },
      {
        pos: [x / 2, y / 2, 0],
        norm: [0, 0, 1],
        uv: [1, 1],
      },


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
    this.geometry.translate(translate_x, translate_y, translate_z);




    const loader = new THREE.TextureLoader();
    this.texture = loader.load('roof2.jpg');
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(0, 1);
    this.texture.offset.set(0, 0.5)
    this.texture.center.set(0.65, 0)




    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    this.object = new THREE.Mesh(this.geometry, this.material);
    this.change_the_texture()


  }

  change_the_texture(texture_name = "./resources/images/PWP2.jpg", r = 255, g = 255, b = 255, rotation = 0) {
    const loader = new THREE.TextureLoader();
    this.texture = loader.load('wall.jpg');
    //this.texture = loader.load('roof2.jpg');

    //this.texture = loader.load('./resources/colors/Alternatywa/TEXTURE-METAL-PION-THIN.jpg');
    this.texture = loader.load('./resources/images/PWP2.jpg')



    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(5, 5.2);
    this.texture.offset.set(1, 0);

    this.texture.repeat.set(1, this.depth);
    this.texture.offset.set(0, 0);

    this.texture.rotation = (rotation)

    //this.texture.rotation=(1.5707)

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: `rgb(${r},${g},${b})`,
      side: THREE.DoubleSide
    });
    this.material.needsUpdate = true;
    let normalMap = new THREE.TextureLoader().load('roof2.jpg');
    //material.normalMap = normalMap;//normal map


    this.object.material = this.material;
    this.object.material.needsUpdate = true;

  }


  reconstruct_material() {
    //console.log("Reconstructing")
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    this.object.material = material;
    this.object.material.needsUpdate = true;
    //this.object = new THREE.Mesh(this.geometry, material);

  }

  recolor_material(r, g, b) {
    //console.log("Recolor")
    //const material = new THREE.MeshBasicMaterial( { map: texture ,color: "color:rgb("+r+g+b+"", side: THREE.DoubleSide} );
    //this.object.material.color=`rgb("+${r},${r},${r})`;
    this.object.material.color = new THREE.Color(`rgb(${r}, ${g}, ${b})`);
    this.object.material.needsUpdate = true;
    //this.object = new THREE.Mesh(this.geometry, material);

  }

  add_components_to_scene(scene) {

    //this.geometry = new THREE.PlaneGeometry( width, height );
    //this.geometry.translate(0,height/2,depth/2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      side: THREE.DoubleSide
    });
    //const torus = new THREE.Mesh(this.geometry, material);
    scene.add(this.object);
  }

}
class Roof_walls_square extends General_object {

  constructor(x, y, translate_x = 0, translate_y = 0, translate_z = 0, rotation = 0) {
    super();
    this.components = [];
    this.width = x;
    this.depth = y;
    this.rotation = 0;



    this.geometry = new THREE.PlaneGeometry(x, y);
    this.geometry.rotateY(rotation)
    this.geometry.translate(translate_x, translate_y, translate_z);






    //const loader = new THREE.TextureLoader();
    //const material = new THREE.MeshBasicMaterial({
    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide
    });
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
    var texture = loader.load('wall.jpg');
    texture = loader.load('roof2.jpg');
    texture = loader.load('./resources/images/PWP2.jpg')
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, this.depth);
    texture.offset.set(1, 0);
    this.change_the_texture()
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap; //normal map
    this.object = new THREE.Mesh(this.geometry, this.material);
    //let material = new THREE.MeshPhongMaterial();







  }

  change_the_texture(texture_name = "./resources/images/PWP2.jpg", r = 255, g = 255, b = 255, rotation = 0) {
    const loader = new THREE.TextureLoader();
    this.texture = loader.load('wall.jpg');
    this.texture = loader.load('roof2.jpg');
    this.texture = loader.load('./resources/images/PWP2.jpg')
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(1, this.depth);
    this.texture.offset.set(1, 0);
    this.texture.rotation = (rotation)
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: `rgb(${r},${g},${b})`,
      side: THREE.DoubleSide
    });
    this.material.needsUpdate = true;
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap; //normal map

    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: `rgb(${r},${g},${b})`,
      side: THREE.DoubleSide
    });
    this.material.needsUpdate = true;
    this.object.material = this.material;
    this.object.material.needsUpdate = true;



  }

  change_the_texture2(texture_name = "./resources/images/PWP2.jpg", r = 255, g = 0, b = 0, rotation = 0) {

    const loader = new THREE.TextureLoader();
    this.texture = loader.load('wall.jpg');
    this.texture = loader.load('roof2.jpg');
    this.texture = loader.load('./resources/images/PWP2.jpg')
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(1, this.depth);
    this.texture.offset.set(1, 0)
    this.texture.rotation = (rotation)
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: `rgb(${r},${g},${b})`,
      side: THREE.DoubleSide
    });
    this.material.needsUpdate = true;
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap; //normal map
  }
  reconstruct_material() {
    //console.log("Reconstructing roof wall")
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    this.object.material = material;
    this.object.material.needsUpdate = true;
    //this.object = new THREE.Mesh(this.geometry, material);

  }


  recolor_material(r, g, b) {
    //console.log("Recolor")
    //const material = new THREE.MeshBasicMaterial( { map: texture ,color: "color:rgb("+r+g+b+"", side: THREE.DoubleSide} );
    //this.object.material.color=`rgb("+${r},${r},${r})`;
    this.object.material.color = new THREE.Color(`rgb(${r}, ${g}, ${b})`);
    this.object.material.needsUpdate = true;
    //this.object = new THREE.Mesh(this.geometry, material);

  }

  add_components_to_scene(scene) {

    //this.geometry = new THREE.PlaneGeometry( width, height );
    //this.geometry.translate(0,height/2,depth/2);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      side: THREE.DoubleSide
    });
    //const torus = new THREE.Mesh(this.geometry, material);
    scene.add(this.object);
  }
}
class Roof extends General_object {


  constructor(x, y, translate_x = 0, translate_y = 0, translate_z = 0, rotation = 0, roof_height = 1) {
    super();
    this.components = [];
    this.width = x;
    this.depth = y;
    this.rotation = 0;
    this.geometry = new THREE.PlaneGeometry(Math.sqrt(x * x + roof_height * roof_height), y);
    this.geometry.rotateX(Math.PI / 2);
    this.geometry.rotateZ(Math.atan(roof_height / x));
    this.geometry.translate(translate_x, translate_y, translate_z);




    const material = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      side: THREE.DoubleSide
    });
    this.object = new THREE.Mesh(this.geometry, material);

    const loader = new THREE.TextureLoader();
    var texture = loader.load('wall.jpg');
    texture = loader.load('roof2.jpg');
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 3.28);
    texture.offset.set(1, 0);
    this.change_the_texture()
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap; //normal map
    this.object = new THREE.Mesh(this.geometry, this.material);
    this.change_the_texture()
    //let material = new THREE.MeshPhongMaterial();
    //let map = new THREE.TextureLoader().load(image);
    //   material.map = map;//Bottom mapping

    //   material.normalScale = new THREE.Vector2(0.3, 0.3);//Concavo convex degree



    //scene.add( mesh );




  }

  change_the_texture(texture_name = "./resources/images/PWP2.jpg", r = 255, g = 255, b = 255, rotation = 0) {
    const loader = new THREE.TextureLoader();
    this.texture = loader.load('wall.jpg');
    this.texture = loader.load('roof2.jpg');
    this.texture = loader.load('./resources/colors/alternatywa/TEXTURE-METAL-POZIOM-THIN-DENSE.jpg');
    this.texture = loader.load('./resources/images/PWP7.jpg');
    this.texture.wrapS = THREE.ClampToEdgeWrapping;
    this.texture.wrapT = THREE.RepeatWrapping;
    this.texture.repeat.set(5, 13.12);
    this.texture.repeat.set(1, 6);
    this.texture.repeat.set(1, 4.5);
    this.texture.offset.set(1, 0);


    this.texture.offset.set(0, 0);
    this.texture.rotation = (rotation)
    //this.texture.rotation=(1.5707)
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: `rgb(${r},${g},${b})`,
      side: THREE.DoubleSide
    });
    this.material.needsUpdate = true;
    let normalMap = new THREE.TextureLoader().load('NormalMap.png');
    material.normalMap = normalMap; //normal map


    this.material = new THREE.MeshBasicMaterial({
      map: this.texture,
      color: `rgb(${r},${g},${b})`,
      side: THREE.DoubleSide
    });
    this.material.needsUpdate = true;
    this.object.material = this.material;
    this.object.material.needsUpdate = true;



  }
  rotate_the_texture() {
    this.object.material = this.material;
    this.material.needsUpdate = true;
    this.object.material.needsUpdate = true;
  }


  reconstruct_material() {
    //console.log("Reconstructing")
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      color: 0xffffff,
      side: THREE.DoubleSide
    });
    this.object.material = material;
    this.object.material.needsUpdate = true;
    //this.object = new THREE.Mesh(this.geometry, material);

  }

  recolor_material(r, g, b) {
    //console.log("Recolor")
    //const material = new THREE.MeshBasicMaterial( { map: texture ,color: "color:rgb("+r+g+b+"", side: THREE.DoubleSide} );
    //this.object.material.color=`rgb("+${r},${r},${r})`;
    this.object.material.color = new THREE.Color(`rgb(${r}, ${g}, ${b})`);
    this.object.material.needsUpdate = true;
    //this.object = new THREE.Mesh(this.geometry, material);

  }


  add_components_to_scene(scene) {

    //this.geometry = new THREE.PlaneGeometry( width, height );
    //this.geometry.translate(0,height/2,depth/2);
    //const material = new THREE.MeshBasicMaterial( {color: 0x0000ff, side: THREE.DoubleSide} );
    //const torus = new THREE.Mesh(this.geometry, material);


    scene.add(this.object);
  }
}
class Front_wall extends Garage_walls {
  constructor() {
    super();
  }
  add_components_to_scene(scene) {
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.MeshBasicMaterial({
      color: 0x0000ff,
      side: THREE.DoubleSide
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
  }
}


let main_house_outer = ""
let main_house_canopy = ""


let scene_outer = ""
let Creation_controller_outer = ""

function main() {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  window.addEventListener('resize', onWindowResize, false);

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

  }
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
  });
  class Creation_controller {
    constructor(constructor_width, constructor_depth, constructor_height, roof_width, roof_depth, roof_height, scene, roof_type = 4) {

      this.constructor_width = constructor_width;
      this.constructor_depth = constructor_depth;
      this.constructor_height = constructor_height;
      this.roof_width = roof_width;
      this.roof_depth = roof_depth;
      this.roof_height = roof_height;

      this.wall_front = null;
      this.wall_back = null;
      this.wall_left = null;
      this.wall_right = null;

      this.roof_front = null;
      this.roof_back = null;
      this.roof_right = null;
      this.roof = null;

      this.roof_front2 = new Garage_walls(0, 0, 0, 0, 0);
      this.roof_back2 = new Garage_walls(0, 0, 0, 0, 0);
      this.roof_right2 = new Garage_walls(0, 0, 0, 0, 0);
      this.roof2 = new Garage_walls(0, 0, 0, 0, 0);

      this.scene = scene;

      this.rebuild_walls()
      this.rebuild_roofs(roof_type);


      //PRESENTATION CODE
      this.wall_left.remove_components()
      this.wall_right.remove_components()
      this.wall_back.remove_components()



      this.add_to_scene();


    }



    rebuild_walls(constructor_width = this.constructor_width, constructor_depth = this.constructor_depth, constructor_height = this.constructor_height,
      roof_width = this.roof_width, roof_depth = this.roof_depth, roof_height = this.roof_height) {
      //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
      this.wall_front = new Garage_walls(constructor_width, constructor_height, 0, constructor_height / 2, constructor_depth / 2)
      this.wall_back = new Garage_walls(constructor_width, constructor_height, 0, constructor_height / 2, -constructor_depth / 2)
      this.wall_left = new Garage_walls(constructor_depth, constructor_height, -constructor_width / 2, constructor_height / 2, 0, Math.PI / 2)
      this.wall_right = new Garage_walls(constructor_depth, constructor_height, constructor_width / 2, constructor_height / 2, 0, Math.PI / 2)


      const objects = [];

      const radius = 1;
      const widthSegments = 6;
      const heightSegments = 6;
      const sphereGeometry = new THREE.SphereGeometry(
        radius, widthSegments, heightSegments);

      const solarSystem = new THREE.Object3D();

      //scene.add(solarSystem);
      objects.push(solarSystem);

      const sunMaterial = new THREE.MeshPhongMaterial({
        emissive: 0xFFFF00
      });
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


    rebuild_roofs(roof_instance = 0, constructor_width = this.constructor_width, constructor_depth = this.constructor_depth, constructor_height = this.constructor_height,
      roof_width = this.roof_width, roof_depth = this.roof_depth, roof_height = this.roof_height) {
      switch (roof_instance) {
        case 0: {
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
          this.roof_front = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right = new Roof_walls_square(roof_depth, roof_height, roof_width / 2, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof = new Roof(roof_width, roof_depth, 0, constructor_height + roof_height / 2, 0, 0, roof_height)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
          break;
        }
        case 2: {
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
          this.roof_front = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right = new Roof_walls_square(roof_depth, roof_height, roof_width / 2, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof = new Roof(roof_width, roof_depth, 0, constructor_height + roof_height / 2, 0, 0, roof_height)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
          this.roof_front.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof_back.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof_right.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          break;
        }
        case 1: {
          //We are rotating but we just need to switch the width and depth
          let x = roof_width;
          roof_width = roof_depth;
          roof_depth = x;
          constructor_depth = constructor_width;
          this.roof_front = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right = new Roof_walls_square(roof_depth, roof_height, roof_width / 2, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof = new Roof(roof_width, roof_depth, 0, constructor_height + roof_height / 2, 0, 0, roof_height)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
          this.roof_front.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof_back.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof_right.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          //console.log('1')
          break;
        }
        case 3: {
          let x = roof_width;
          roof_width = roof_depth;
          roof_depth = x;
          constructor_depth = constructor_width;
          this.roof_front = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right = new Roof_walls_square(roof_depth, roof_height, roof_width / 2, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof = new Roof(roof_width, roof_depth, 0, constructor_height + roof_height / 2, 0, 0, roof_height)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 
          this.roof_front.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof_back.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof_right.object.geometry.rotateY(Math.PI / 2 * roof_instance)
          this.roof.object.geometry.rotateY(Math.PI / 2 * roof_instance)

          break;
        }

        case 4: {

          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
          this.roof_front = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right = new Roof_walls_square(roof_depth, roof_height, 0, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof = new Roof(roof_width / 2, roof_depth, -roof_width / 4, constructor_height + roof_height / 2, 0, 0, roof_height)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 


          this.roof_front2 = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back2 = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right2 = new Roof_walls_square(roof_depth, roof_height, 0, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof2 = new Roof(roof_width / 2, roof_depth, -roof_width / 4, constructor_height + roof_height / 2, 0, 0, roof_height)

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
        case 5: {
          let x = roof_width;
          roof_width = roof_depth;
          roof_depth = x;
          constructor_depth = constructor_width;
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z;   
          this.roof_front = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right = new Roof_walls_square(roof_depth, roof_height, 0, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof = new Roof(roof_width / 2, roof_depth, -roof_width / 4, constructor_height + roof_height / 2, 0, 0, roof_height)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z; 


          this.roof_front2 = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, constructor_depth / 2)
          this.roof_back2 = new Roof_walls(roof_width / 2, roof_height, -roof_width / 4, constructor_height + roof_height / 2, -constructor_depth / 2)
          this.roof_right2 = new Roof_walls_square(roof_depth, roof_height, 0, constructor_height + roof_height / 2, 0, Math.PI / 2)
          //width_of_a_plane,height_of_a_plane, translation_x,translation_y+height of the wall, translation_z, z height of the upper part=height of wall +desired height of the roof; 
          this.roof2 = new Roof(roof_width / 2, roof_depth, -roof_width / 4, constructor_height + roof_height / 2, 0, 0, roof_height)

          this.roof_front2.object.geometry.rotateY(Math.PI)
          this.roof_back2.object.geometry.rotateY(Math.PI)
          this.roof_right2.object.geometry.rotateY(Math.PI)
          this.roof2.object.geometry.rotateY(Math.PI)



          this.roof_front.object.geometry.rotateY(Math.PI / 2)
          this.roof_back.object.geometry.rotateY(Math.PI / 2)
          this.roof_right.object.geometry.rotateY(Math.PI / 2)
          this.roof.object.geometry.rotateY(Math.PI / 2)


          this.roof_front2.object.geometry.rotateY(Math.PI / 2)
          this.roof_back2.object.geometry.rotateY(Math.PI / 2)
          this.roof_right2.object.geometry.rotateY(Math.PI / 2)
          this.roof2.object.geometry.rotateY(Math.PI / 2)


          this.roof_front2.add_components_to_scene(this.scene)
          this.roof_back2.add_components_to_scene(this.scene)
          this.roof_right2.add_components_to_scene(this.scene)
          this.roof2.add_components_to_scene(this.scene)

          break;

        }
      }

    }



    release() {
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
    release_roof() {
      scene.remove(this.roof_front2.object)
      scene.remove(this.roof_back2.object)
      scene.remove(this.roof_right2.object)
      scene.remove(this.roof2.object)

    }
    add_to_scene() {


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

  let constructor_width = 27;
  let constructor_depth = 20;
  let constructor_height = 5;

  let roof_width = 27;
  let roof_depth = 20;
  let roof_height = 1.5;
  let main_house = new Creation_controller(constructor_width, constructor_depth, constructor_height, roof_width, roof_depth, roof_height, scene);



  main_house.release()


  main_house = new Creation_controller(constructor_width - 10, constructor_depth, constructor_height, roof_width - 10, roof_depth, roof_height, scene);


  //Attach the main_house to the main house outer so that you can modify it outside of the main loop


  //ADDNOTATION
  //scene.remove(main_house.wall_front.object) works that is a really good sign

  //main_house.release();
  //main_house=new Creation_controller(constructor_width+10, constructor_depth+10, constructor_height, roof_width+10, roof_depth+10, roof_height, scene);



  let wall_front = new Garage_walls(constructor_width, constructor_height, 0, constructor_height / 2, constructor_depth / 2)
  let wall_back = new Garage_walls(constructor_width, constructor_height, 0, constructor_height / 2, -constructor_depth / 2)
  let wall_left = new Garage_walls(constructor_depth, constructor_height, -constructor_width / 2, constructor_height / 2, 0, Math.PI / 2)
  let wall_right = new Garage_walls(constructor_depth, constructor_height, constructor_width / 2, constructor_height / 2, 0, Math.PI / 2)

  //FIX
  {
    const color = 0xFFFFFF; // white
    const near = 10;
    const far = 120;
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


  roof_front = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, constructor_depth / 2)
  roof_back = new Roof_walls(roof_width, roof_height, 0, constructor_height + roof_height / 2, -constructor_depth / 2)
  roof_right = new Roof_walls_square(roof_width, roof_height, roof_width / 2, constructor_height + roof_height / 2, 0, Math.PI / 2)
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
    const intensity = 0.2;
    const light = new THREE.DirectionalLight(color, intensity);

    //glass update
    const light2 = new THREE.DirectionalLight(color, intensity);
    light2.position.set(0, 20, -30);
    light2.target.position.set(4, 0, 4);
    scene.add(light2);
    scene.add(light2.target);

    //light.castShadow = true;
    light.position.set(0, 20, 30);
    light.target.position.set(-4, 0, -4);
    //const light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add(light);
    scene.add(light.target);

    // const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
    //scene.add(cameraHelper);

    // const helper = new THREE.DirectionalLightHelper(light);
    //scene.add(helper);

    // function updateCamera() {
    //   // update the light target's matrixWorld because it's needed by the helper
    //   light.target.updateMatrixWorld();
    //   helper.update();
    //   // update the light's shadow camera's projection matrix
    //   light.shadow.camera.updateProjectionMatrix();
    //   // and now update the camera helper we're using to show the light's shadow camera
    //   cameraHelper.update();
    // }
    // updateCamera();
  }
  //const pointLight = new THREE.PointLight(0xffffff);
  //pointLight.position.set(10, 10, 10);

  //const ambientLight = new THREE.AmbientLight(0xffffff);
  //scene.add(pointLight, ambientLight);

  // Helpers

  //const lightHelper = new THREE.PointLightHelper(pointLight)
  //scene.add(lightHelper, gridHelper)

  //PRESENTATION-CODE
  // const gridHelper = new THREE.GridHelper(200, 200, 200);
  // scene.add(gridHelper)
  //ENDOF PRESENTATION-CODE
  const controls = new OrbitControls(camera, renderer.domElement);


  controls.maxPolarAngle = 0.48 * Math.PI
  controls.minPolarAngle = 0.2 * Math.PI

  // Background

  // Scroll Animation

  // Animation Loop

  //PRESENTATION CODE
  function animate() {
    requestAnimationFrame(animate);

    //uncode this
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5

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
    } {
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



  let para = document.querySelector("#roof-color")
  para.addEventListener('click', change_color_roof)

  function change_color_roof(event) {
    let element = event.target.closest('.color-container')
    let color = element.dataset.colorindex;
    let red, green, blue;

    function color_decomposition(x) {
      let red = parseInt(x.substring(0, 2), 16)
      let green = parseInt(x.substring(2, 4), 16)
      let blue = parseInt(x.substring(4, 6), 16)
      return [red, green, blue]
    }


    [red, green, blue] = color_decomposition(color)

    main_house.roof_back.change_the_texture(null, red, green, blue)
    main_house.roof_front.change_the_texture(null, red, green, blue)
    main_house.roof_right.change_the_texture(null, red, green, blue)
    main_house.roof.change_the_texture(null, red, green, blue)
    main_house.roof_back2.change_the_texture(null, red, green, blue)
    main_house.roof_front2.change_the_texture(null, red, green, blue)
    main_house.roof_right2.change_the_texture(null, red, green, blue)
    main_house.roof2.change_the_texture(null, red, green, blue)


    main_house.wall_front.change_the_texture("  ", 0, 0, 0, 0)
    main_house.wall_right.change_the_texture(null, 0, 255, 255, 0)
    main_house.wall_back.change_the_texture(null, 0, 255, 255, 0)
    main_house.wall_left.change_the_texture(null, 0, 255, 255, 0)
    //main_house.roof.rotate_the_texture()

  }

  let roof_index = 0;
  let overhang = 0;
  let index = 0;

  function presentation() {
    index++;
    if (!overhang) {
      overhang = 0.5
      roof_index = (roof_index + 1) % 6
    } else {
      overhang = 0
    }
    main_house.release()


    let constructor_width = 11;
    let constructor_depth = 15;
    let constructor_height = 5;

    let roof_width = 11 + overhang;
    let roof_depth = 15 + overhang;
    let roof_height = 1.5;


    if (index > 12) {
      constructor_width = Math.random() * 20 + 10;
      constructor_depth = Math.random() * 20 + 10;
      constructor_height = 5;

      roof_width = constructor_width + overhang;
      roof_depth = constructor_depth + overhang;
      roof_height = 1.5 + Math.random() * 0.5;

    }


  }





  //  const interval = setInterval(function() {
  //    presentation()
  //  }, 1000);
  Creation_controller_outer = main_house.constructor
  main_house_outer = main_house
  scene_outer = scene
  main_house_canopy = new Creation_controller_outer(1.01, 1.01, 1.01, 1.01, 1.01, 1, scene_outer, 1);
  //main_house.release()


}

main()


//Get how to create a good and semi reusable box
main_house_outer.release();
main_house_outer = new Creation_controller_outer(10, 10, 10, 10, 10, 10, scene_outer, 4);

class Canopy_container {
  constructor(front_size = 0, left_size = 0, back_size = 0, right_size = 0) {
    //A canopy object is a really simple object containing 4 pieces of information
    //what side and if it is what is the dimension of that side; and some simple logic


    this.front_size = 0
    this.back_container = new Array(3)

    this.back_size = 0
    this.front_container = new Array(3)

    this.left_size = 0
    this.left_container = new Array(3)

    this.right_size = 0
    this.right_container = new Array(3)
  }



  canopy_exists() {
    return Boolean(this.front_size + this.back_size + this.left_size + this.right_size)
  }
  canopy_translation() {
    return new THREE.Vector3(this.left_size * -1 + this.right_size * 1, 0, this.front_size * 1 + this.back_size * -1)
  }
}
class Reinforcements_container {

  constructor() {

    this.container = new Array(4)
  }
}

let reinforcements_container = new Reinforcements_container()
let reinforcement = false
let request_clean = false
let canopy_container = new Canopy_container(0, 0, 0, 0)

class Foundation extends General_object {


  constructor(width, depth, index) {
    super();
    this.components = [];
    this.width = width + canopy_container.left_size + canopy_container.right_size;
    this.depth = depth + canopy_container.front_size + canopy_container.back_size;
    this.index = index;
  }
  add_components_to_scene() {

    console.log(main_house_outer)
    //       console.log(main_house_outer)
    let insert_geometry = new THREE.BoxGeometry(main_house_outer.wall_front.width + canopy_container.left_size + canopy_container.right_size, 0.05, 0.05);
    let insert_material = new THREE.MeshBasicMaterial({
      color: 0x272727,
      side: THREE.DoubleSide
    });
    let lie_beam = new THREE.Mesh(insert_geometry, insert_material);
    let lie_beam2 = new THREE.Mesh(insert_geometry.clone(), insert_material);

    let insert_geometry2 = new THREE.BoxGeometry(0.05, 0.05, main_house_outer.wall_left.width + canopy_container.front_size + canopy_container.back_size);

    let lie_beam3 = new THREE.Mesh(insert_geometry2, insert_material);
    let lie_beam4 = new THREE.Mesh(insert_geometry2.clone(), insert_material);
    //let standard_translation=canopy_container.canopy_translation()
    let forward = new THREE.Vector3(-canopy_container.left_size / 2 + canopy_container.right_size / 2, 0, main_house_outer.wall_left.width / 2 + canopy_container.front_size).multiplyScalar(0.99)
    let backward = new THREE.Vector3(-canopy_container.left_size / 2 + canopy_container.right_size / 2, 0, -main_house_outer.wall_left.width / 2 - canopy_container.back_size).multiplyScalar(0.99)
    let left = new THREE.Vector3(-main_house_outer.wall_front.width / 2 - canopy_container.left_size, 0, canopy_container.front_size / 2 - canopy_container.back_size / 2).multiplyScalar(0.99)
    let right = new THREE.Vector3(main_house_outer.wall_front.width / 2 + canopy_container.right_size, 0, canopy_container.front_size / 2 - canopy_container.back_size / 2).multiplyScalar(0.99)
    //let total=standard_translation.add(forward)
    // let forwards=new THREE.Vector3(0,0,main_house_canopy.wall_left.width/2+canopy_container.front_size/2-canopy_container.back_size/2)

    lie_beam.geometry.translate(forward.x, 0, forward.z)
    lie_beam2.geometry.translate(backward.x, 0, backward.z)

    lie_beam3.geometry.translate(left.x, 0, left.z)
    lie_beam4.geometry.translate(right.x, 0, right.z)

    this.components.push(lie_beam);
    this.components.push(lie_beam2);
    this.components.push(lie_beam3);
    this.components.push(lie_beam4);
    //console.log(standard)
    //console.log(forwards)

    //main_house_canopy = new Creation_controller_outer(constructor_width + canopy_container.left_size + canopy_container.right_size, constructor_depth + canopy_container.back_size + canopy_container.front_size, constructor_height, roof_width + canopy_container.left_size + canopy_container.right_size, roof_depth + canopy_container.back_size + canopy_container.front_size, roof_height, scene_outer, roof_type);

    //Define geometry based on the index
    switch (this.index) {
      case 0:
        var geometry = new THREE.PlaneGeometry(this.width, this.depth, 2, 2);

        geometry.rotateX(Math.PI / 2)

        //CURRENT
        try {
          let canopy_translation = canopy_container.canopy_translation()
          canopy_translation = canopy_translation.multiplyScalar(0.5)
          geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z);
        } catch (error) {
          //console.log("ooo")
          //console.log(error)
        }
        var texture = loader.load('./resources/images/foundation0.jpg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        //This is kinda a quick fix but it works
        texture.repeat.set(this.width / 2, this.depth / 2);
        texture.rotation = (0)
        var material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: false,
          side: THREE.DoubleSide,
          map: texture
        });
        var torus = new THREE.Mesh(geometry, material);
        this.components.push(torus);
        break;
      case 1:
        var block_width = 1;
        var block_depth = 1;

        var texture = loader.load('./resources/images/foundation1.jpg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        texture.repeat.set(block_width, block_depth);
        texture.rotation = (0)

        let displacement_array_x = [-1, 0, 1]
        let displacement_array_y = [-1, 0, 1]
        for (let displacement_x of displacement_array_x) {
          for (let displacement_y of displacement_array_y) {
            //console.log(displacement_x)
            //console.log(displacement_y)

            var geometry = new THREE.PlaneGeometry(block_width, block_depth, 2, 2);
            geometry.translate(displacement_x * (this.width / 2 - block_width / 2), displacement_y * (this.depth / 2 - block_depth / 2), 0)
            geometry.rotateX(Math.PI / 2)

            //CURRENT
            try {
              let canopy_translation = canopy_container.canopy_translation()
              canopy_translation = canopy_translation.multiplyScalar(0.5)
              geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z);
            } catch (error) {
              //console.log("ooo")
              //console.log(error)
            }

            var material = new THREE.MeshBasicMaterial({
              color: 0xff6347,
              wireframe: false,
              side: THREE.DoubleSide,
              map: texture
            });
            var mesh = new THREE.Mesh(geometry, material);
            this.components.push(mesh);

          }
        }
        break;


      case 2: {
        var geometry = new THREE.PlaneGeometry(this.width, this.depth, 2, 2);
        geometry.rotateX(Math.PI / 2)

        //CURRENT
        try {
          let canopy_translation = canopy_container.canopy_translation()
          canopy_translation = canopy_translation.multiplyScalar(0.5)
          geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z);
        } catch (error) {
          //console.log("ooo")
          //console.log(error)
        }


        var texture = loader.load('./resources/images/foundation2.jpg');
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        texture.repeat.set(this.width, 1.0 / 12.0);
        texture.rotation = (0)
        var insert_material_foundation = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: false,
          side: THREE.DoubleSide,
          map: texture
        });

        //var torus = new THREE.Mesh(geometry, material);
        //this.components.push(torus);
        //this.add_components();

        let foundation_geometry = new THREE.BoxGeometry(main_house_outer.wall_front.width + canopy_container.left_size + canopy_container.right_size + 0.20, 0.05, 0.25);

        let foundation_beam = new THREE.Mesh(foundation_geometry, insert_material_foundation);
        let foundation_beam2 = new THREE.Mesh(foundation_geometry.clone(), insert_material_foundation);

        let foundation_geometry2 = new THREE.BoxGeometry(0.25, 0.05, main_house_outer.wall_left.width + canopy_container.front_size + canopy_container.back_size);


        var texture2 = loader.load('./resources/images/foundation2.jpg');
        texture2.wrapS = THREE.RepeatWrapping;
        texture2.wrapT = THREE.RepeatWrapping;
        texture2.repeat.set(this.width, 1.0 / 16.0);
        texture2.rotation = (Math.PI / 2)
        var insert_material_foundation2 = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          wireframe: false,
          side: THREE.DoubleSide,
          map: texture2
        });

        let foundation_beam3 = new THREE.Mesh(foundation_geometry2, insert_material_foundation2);
        let foundation_beam4 = new THREE.Mesh(foundation_geometry2.clone(), insert_material_foundation2);
        //let standard_translation=canopy_container.canopy_translation()
        let foundation_forward = new THREE.Vector3(-canopy_container.left_size / 2 + canopy_container.right_size / 2, 0, main_house_outer.wall_left.width / 2 + canopy_container.front_size).multiplyScalar(0.99)
        let foundation_backward = new THREE.Vector3(-canopy_container.left_size / 2 + canopy_container.right_size / 2, 0, -main_house_outer.wall_left.width / 2 - canopy_container.back_size).multiplyScalar(0.99)
        let foundation_left = new THREE.Vector3(-main_house_outer.wall_front.width / 2 - canopy_container.left_size, 0, canopy_container.front_size / 2 - canopy_container.back_size / 2).multiplyScalar(0.99)
        let foundation_right = new THREE.Vector3(main_house_outer.wall_front.width / 2 + canopy_container.right_size, 0, canopy_container.front_size / 2 - canopy_container.back_size / 2).multiplyScalar(0.99)
        //let total=standard_translation.add(forward)
        // let forwards=new THREE.Vector3(0,0,main_house_canopy.wall_left.width/2+canopy_container.front_size/2-canopy_container.back_size/2)

        let foundation_geometry3 = new THREE.BoxGeometry(main_house_outer.wall_front.width + 0.20, 0.05, 0.25);
        let foundation_geometry4 = new THREE.BoxGeometry(0.25, 0.05, main_house_outer.wall_left.width);

        let foundation_beam5 = new THREE.Mesh(foundation_geometry3.clone(), insert_material_foundation2);
        let foundation_beam6 = new THREE.Mesh(foundation_geometry3.clone(), insert_material_foundation2);
        let foundation_beam7 = new THREE.Mesh(foundation_geometry4.clone(), insert_material_foundation2);
        let foundation_beam8 = new THREE.Mesh(foundation_geometry4.clone(), insert_material_foundation2);

        foundation_beam.geometry.translate(foundation_forward.x, -0.025, foundation_forward.z)
        foundation_beam2.geometry.translate(foundation_backward.x, -0.025, foundation_backward.z)
        foundation_beam3.geometry.translate(foundation_left.x, -0.025, foundation_left.z)
        foundation_beam4.geometry.translate(foundation_right.x, -0.025, foundation_right.z)

        this.components.push(foundation_beam2);
        this.components.push(foundation_beam);
        this.components.push(foundation_beam3);
        this.components.push(foundation_beam4);

        this.components.push(foundation_beam5)
        this.components.push(foundation_beam6)
        this.components.push(foundation_beam7)
        this.components.push(foundation_beam8)

        let foundation_forward_st = new THREE.Vector3(0, 0, main_house_outer.wall_left.width / 2).multiplyScalar(0.99)
        let foundation_backward_st = new THREE.Vector3(0, 0, -main_house_outer.wall_left.width / 2).multiplyScalar(0.99)
        let foundation_left_st = new THREE.Vector3(-main_house_outer.wall_front.width / 2, 0, 0).multiplyScalar(0.99)
        let foundation_right_st = new THREE.Vector3(main_house_outer.wall_front.width / 2, 0, 0).multiplyScalar(0.99)


        foundation_beam5.geometry.translate(foundation_forward_st.x, -0.025, foundation_forward_st.z)
        foundation_beam6.geometry.translate(foundation_backward_st.x, -0.025, foundation_backward_st.z)
        foundation_beam7.geometry.translate(foundation_left_st.x, -0.025, foundation_left_st.z)
        foundation_beam8.geometry.translate(foundation_right_st.x, -0.025, foundation_right_st.z)


      }

      break;
    case 3:
      var geometry = new THREE.PlaneGeometry(this.width, this.depth, 2, 2);
      geometry.rotateX(Math.PI / 2)

      //CURRENT
      try {
        let canopy_translation = canopy_container.canopy_translation()
        canopy_translation = canopy_translation.multiplyScalar(0.5)
        geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z);
      } catch (error) {
        //console.log("ooo")
        //console.log(error)
      }

      var texture = loader.load('./resources/images/foundation1.jpg');
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      //This is kinda a quick fix but it works
      texture.repeat.set(this.width, this.depth);
      texture.rotation = (0)
      var material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: false,
        side: THREE.DoubleSide,
        map: texture
      });
      var torus = new THREE.Mesh(geometry, material);
      this.components.push(torus);
      //this.add_components();



      break;


    }
    this.add_components();
  }
  remove_components() {
    for (const elem of this.components) {
      scene_outer.remove(elem);
    }
  }
  add_components() {
    for (const elem of this.components) {
      scene_outer.add(elem);
    }

  }

}
class Beams {
  constructor() {
    this.left_wall_canopy_beams = []
    this.right_wall_canopy_beams = []
    this.back_wall_canopy_beams = []
    this.front_wall_canopy_beams = []
  }

  fill_in_wall() {


  }

  clean_wall(canopy_wall) {
    let children = canopy_wall
    for (const child of children) {
      this.object.remove(child)
    }
  }
}


let external_arr = ""
let external_ara = null
class Placed_object {
  constructor(parent, child) {
    this.parent = parent //It can be just front,back, left, right
    this.child = child //The entire object

  }

}

let global_container_of_doors = []
let global_container_of_gates = []
let global_container_of_windows = []

function reset_the_object(global_container) {

  for (let global_object of global_container) {
    switch (global_object.parent) {
      case "front":
        main_house_outer.wall_front.object.add(global_object.child)
        break;

      case "back":
        main_house_outer.wall_back.object.add(global_object.child)
        break;

      case "right":
        main_house_outer.wall_right.object.add(global_object.child)
        break;

      case "left":
        main_house_outer.wall_left.object.add(global_object.child)
        break;
    }
  }
}

function place_at_the_bottom(global_container, height) {

  for (let global_object of global_container) {
    global_object.child.position.y = -main_house_outer.constructor_height / 2 + height
  }
}

function place_at_the_bottom_single(mesh, height) {

  mesh.position.y = -main_house_outer.constructor_height / 2 + height

}

class Menu_control {

  constructor() {
    //Custom counter responsible for counting the menus
    this.custom_counter = 0;

    //this.canopy_container=""

    this.gate_array = [];
    this.window_arr = [];
    this.door_array = [];
    this.canopy_array = [];


    this.side_menu = document.querySelector(".side-menu");
    //let flooring_control=document.querySelector('input[name="flooring"]:checked')

    let arr_of_names = [""]

    let flooring_control = document.querySelectorAll('input[name="flooring"]')
    for (let elem of flooring_control) {
      elem.addEventListener('change', this.radio_control_function)
    }
  }
  radio_control_function() {
    let current_value = document.querySelector('input[name="flooring"]:checked').value
    //console.log(current_value)
  }

  clear_menu() {
    this.side_menu.innerText = "";
  }

  add_node(element_id, element, wall_being_targeted_name = "front", heading_title = "Nowy element") {

    this.custom_counter += 1
    let custom_counter_closure = this.custom_counter
    //console.log("This is where i lie!:" + wall_being_targeted_name)
    let wall_being_targeted = menu_controller.convert_side_to_rotation(wall_being_targeted_name)["wall_targeted"]
    let object_rotation = menu_controller.convert_side_to_rotation(wall_being_targeted_name)["object_rotation"]
    //console.log("This is my name!:" + heading_title + ":")
    //console.log(element)
    //console.log("This is my object rotation!:" + object_rotation)

    const loader = new THREE.TextureLoader();


    let div_elem = document.createElement("div");
    div_elem.classList.add("menu-elem");

    //Label elements values
    let width_element_label = "szerokość elementu"
    let height_element_label = "wysokość elementu"

    let height_element_disable = "";

    //Display flags based on the type of the added object
    let metal_tilling_vertical_thin = 'style="visibility:hidden"'
    let metal_tilling_vertical = 'style="visibility:hidden !important"'

    

    let visibility_color_menu = 'style="display:none"'

    let visibility_position_menu = 'style="display:none"'
    let visibility_position_menu_x = 'style="display:none"'
    let visibility_position_menu_y = 'style="display:none"'

    let visibility_sizing_menu = 'style="display:none"'
    let visibility_sizing_menu_x = 'style="display:none"'
    let visibility_sizing_menu_y = 'style="display:none"'

    let visibility_tiling_menu = 'style="display:none"'
    let visibility_visual_menu = 'style="display:none"'
    let visibility_handle_menu = 'style="display:none"'
    if (heading_title.toUpperCase().includes("WIATA")) {
      div_elem.classList.add("dynamic_canopy");
      visibility_color_menu = 'style="display:none"'

      visibility_position_menu = 'style="display:none"'
      visibility_position_menu_x = 'style="display:none"'
      visibility_position_menu_y = 'style="display:none"'

      visibility_sizing_menu = ''
      visibility_sizing_menu_x = ''
      visibility_sizing_menu_y = 'style="display:none !important"'

      visibility_tiling_menu = 'style="display:none"'
      visibility_visual_menu = 'style="display:none"'


    }
    if (heading_title.toUpperCase().includes("BRAMA")) {
      div_elem.classList.add("dynamic_gate");
      visibility_color_menu = ''

      visibility_position_menu = ''
      visibility_position_menu_x = ''
      visibility_position_menu_y = 'style="display:none !important"'

      visibility_sizing_menu = ''
      visibility_sizing_menu_x = ''
      visibility_sizing_menu_y = ' '

      visibility_tiling_menu = ''
      visibility_visual_menu = ''


      metal_tilling_vertical_thin = ''

      width_element_label = "Szerokość wjazdu bramy"
      height_element_label = "Wysokość wjazdu bramy"
      height_element_disable = '' //disabled
    }

    if (heading_title.toUpperCase().includes("DRZWI")) {
      div_elem.classList.add("dynamic_door");
      visibility_color_menu = ''

      visibility_position_menu = ''
      visibility_position_menu_x = ''
      visibility_position_menu_y = 'style="display:none !important"'

      visibility_sizing_menu = ''
      visibility_sizing_menu_x = ''
      visibility_sizing_menu_y = 'style="display:none !important"'

      visibility_tiling_menu = ''
      visibility_visual_menu = 'style="display:none"'
      metal_tilling_vertical_thin = ''
      visibility_handle_menu = ''

    }

    if (heading_title.toUpperCase().includes("OKNO")) {
      div_elem.classList.add("dynamic_window");
      visibility_color_menu = ''

      visibility_position_menu = ''
      visibility_position_menu_x = ''
      visibility_position_menu_y = ''

      visibility_sizing_menu = 'style="display:none"'
      visibility_sizing_menu_x = 'style="display:none"'
      visibility_sizing_menu_y = 'style="display:none"'

      visibility_tiling_menu = 'style="display:none"'
      visibility_visual_menu = 'style="display:none"'


    }


    //let texture_to_check=document.querySelector('input[name="wall-color"]:checked').value
    //let texture_rotated=document.querySelector('input[name="wall-type"]:checked').value




    //Move the display logic to the front and just omit the problem with dom.createElement basically

    let div_heading = document.createElement('div')
    div_heading.classList.add("menu-elem-heading")
    div_heading.innerHTML = `<div class="menu-elem-heading-title">${heading_title}</div>
    <div class="menu-elem-heading-button"><img width="16" height="16" src="/HTMLcomponents/side-menu/favicons/plus.svg" alt="minus-icon"></div>
    `
    let base_menu = `<div ${visibility_position_menu}>` +
      `<div ${visibility_position_menu_x} class="num-selector"><label>Przesunięcie od środka ściany (poziom)</label><div class="unit-addon"><input class="direction" direction="left" type="number" step="0.1">  </input><span class="white-box">m</span></div> </div>` +
      `<!--<div  class="num-selector"><label>displacement value right</label><input class="direction" direction="right" type="number" step="0.1">  </input> </div>-->` +
      `<div ${visibility_position_menu_y} class="num-selector"><label>Przesunięcie od środka ściany (pion)</label><div class="unit-addon"><input class="direction" direction="top" type="number" step="0.1">  </input><span class="white-box">m</span></div> </div>` +
      `<!--<div  class="num-selector"><label>displacement value bottom</label><input class="direction" direction="bottom" type="number" step="0.1">  </input> </div>-->` +
      `</div>`


    let sizing_menu = `<div ${visibility_sizing_menu}>` +
      `<div ${visibility_sizing_menu_x} class="num-selector"><label>${width_element_label}</label><div class="unit-addon"><input class="dimension" value="2" dimension="width" type="number" step="0.1">  </input><span class="white-box">m</span></div> </div>` +
      `<div ${visibility_sizing_menu_y} class="num-selector"><label>${height_element_label}</label><div class="unit-addon"><input class="dimension" value="2" dimension="height" type="number" step="0.1" ${height_element_disable}>  </input><span class="white-box">m</span></div> </div>` +
      `</div>`

    let color_menu = `<div ${visibility_color_menu}>` +
      `<div class="image-based-selection grid-6-columns grid-elem color-inner unmargined-sides">
<label class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#D2B773" checked>
        <img src="./resources/colors/RAL1002.gif">
        <div class="image-description">RAL<br> 1002</div>
    </label>

    <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#59191F">
        <img src="./resources/colors/RAL3005.gif">
        <div class="image-description">RAL<br> 3005</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#13447C" checked>
        <img src="./resources/colors/RAL5010.gif">
        <div class="image-description">RAL<br> 5010</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#0F4336">
        <img src="./resources/colors/RAL6005.gif">
        <div class="image-description">RAL<br> 6005</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#354733">
        <img src="./resources/colors/RAL6020.gif">
        <div class="image-description">RAL<br> 6020</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#373F43">
        <img src="./resources/colors/RAL7016.gif">
        <div class="image-description">RAL<br> 7016</div>
      </label>




      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#8F4E35">
        <img src="./resources/colors/RAL8004.gif">
        <div class="image-description">RAL<br> 8004</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#44322D">
        <img src="./resources/colors/RAL8017.gif">
        <div class="image-description">RAL<br> 8017</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#0A0A0A">
        <img src="./resources/colors/RAL9005.gif">
        <div class="image-description">RAL<br> 9005</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#A5A5A5">
        <img src="./resources/colors/RAL9006.gif">
        <div class="image-description">RAL<br> 9006</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="#FFFFFF">
        <img src="./resources/colors/RAL9010.gif">
        <div class="image-description">RAL<br> 9010</div>
      </label>
      <label  class="padded-element">
        <input type="radio" id="ocynk-wall" name="wall-color${custom_counter_closure}" value="0">
        <img src="./resources/colors/TEXTURE-METAL.jpg">
        <div class="image-description">Ocynk<br> 9010</div>
      </label>

      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="1">
        <img src="./resources/colors/TEXTURE-ORZECH.jpg">
        <div class="image-description image-description-widen">Orzech</div>
      </label>
      <label  class="padded-element">
        <input type="radio" name="wall-color${custom_counter_closure}" value="2">
        <img src="./resources/colors/TEXTURE-DAB.jpg">
        <div class="image-description image-description-widen">Złoty dąb<br> </div>
      </label>
  </div>` +
      `</div>`

    let tiling_type_menu =
      `<div ${visibility_tiling_menu} class="image-based-selection grid-elem  tiling-inner unmargined-sides">` +    
  `<label class="padded-element">
  <input type="radio" name="wall-type${custom_counter_closure}" value="rotated-dense" >
  <img src="./resources/colors/Alternatywa/TEXTURE-METAL-PION-THIN-DENSE.jpg">
  <div class="image-description">Przetłoczenia pionowe wąskie</div>
</label>
  <label  class="padded-element">
  <input type="radio" name="wall-type${custom_counter_closure}" value="standard-dense">
  <img src="./resources/colors/Alternatywa/TEXTURE-METAL-POZIOM-THIN-DENSE.jpg">
  <div class="image-description">Przetłoczenia poziome wąskie</div>
</label>
  <label class="padded-element" ${metal_tilling_vertical}>
  <input type="radio" name="wall-type${custom_counter_closure}" id="ocynk-roof-rotation" value="rotated">
  <img src="./resources/colors/Alternatywa/TEXTURE-METAL-PION-THIN.jpg">
  <div class="image-description">Przetłoczenia pionowe</div>
</label>
<label  class="padded-element">
<input type="radio" name="wall-type${custom_counter_closure}" value="standard" checked >
<img src="./resources/colors/Alternatywa/TEXTURE-METAL-POZIOM-THIN.jpg">
<div class="image-description">Przetłoczenia poziome</div>
</label>` +`</div>`

    let visual_type_menu =
      `<div ${visibility_visual_menu} class="image-based-selection grid-elem gate-type-inner unmargined-sides">` +
      `<label class="padded-element">
  <input type="radio" name="visual-type${custom_counter_closure}"  value="handle1" checked>
  <img src="./resources/images/gate/gate52.jpg">
  <div class="image-description">Brama dwuskrzydłowa</div>
  </label>
  
  <label  class="padded-element">
  <input type="radio" name="visual-type${custom_counter_closure}" value="handle2">
  <img src="./resources/images/gate/gate51.jpg">
  <div class="image-description">Brama uchylna</div>
  </label>` +
      `</div>`

    let handle_orientation_menu =
      `<div ${visibility_handle_menu} class="image-based-selection grid-elem gate-type-inner unmargined-sides">` +
      `<label class="padded-element">
  <input type="radio" name="door-handle-orientation${custom_counter_closure}"  value="handle1" checked>
  <img src="./resources/images/handle/lhandle.jpg">
  <div class="image-description">Klamka z lewej</div>
  </label>
  
  <label  class="padded-element">
  <input type="radio" name="door-handle-orientation${custom_counter_closure}" value="handle2">
  <img src="./resources/images/handle/rhandle.jpg">
  <div class="image-description">Klamka z prawej</div>
  </label>` +
      `</div>`




    div_elem.innerHTML =
      `<div class="menu-elem-content hide">` +
      `<div class="menu-elem-content-text">` + base_menu + sizing_menu + color_menu + handle_orientation_menu + tiling_type_menu + visual_type_menu + `</div>` +

      `<div class="erase-button">Usuń element</div>
    </div>`


    div_elem.prepend(div_heading)
    div_heading.addEventListener("click", reduct)
    //div_heading.addEventListener("click", (evt)=>{evt.currentTarget.parentNode.remove()})
    div_elem.querySelector('.erase-button').addEventListener('click', (evt) => {

      //cleanup
      if (heading_title.toUpperCase().includes("WIATA")) {

        //console.log(div_elem.querySelector('input.dimension[dimension="width"]'))
        div_elem.querySelector('input.dimension[dimension="width"]').value = 0

        div_elem.querySelector('input.dimension[dimension="width"]').dispatchEvent(new Event('change'));
      }
      evt.currentTarget.parentNode.parentNode.remove()
    })
    div_elem.querySelector('.erase-button').addEventListener('click', () => {
      remove_composite_object(element_id)

      function remove_from_global(global_container) {
        for (let i = 0; i < global_container.length; i++) {
          console.log("check elements")
          //console.log(element_id)
          //console.log(global_container_of_doors[i].child.id)
          if (global_container[i].child.id == element_id) {

            global_container.splice(i, 1)

          }

        }
      }

      remove_from_global(global_container_of_doors)
      remove_from_global(global_container_of_windows)
      remove_from_global(global_container_of_gates)
    })
    div_elem.querySelector('.erase-button').addEventListener('click', () => {
      try {
        //console.log("what happened")
        //menu_controller.canopy_array=[]
        //menu_controller.rebuild_garage_dimensions()
      } catch (error) {
        console.error(error);
      }



    })

    let door_type_handle_arr = div_elem.querySelectorAll(`input[name="door-handle-orientation${custom_counter_closure}"]`)
    for (let gate_type of door_type_handle_arr) {
      gate_type.addEventListener('change', (evt) => {
        let gate_chosen = evt.currentTarget.value
        if (gate_chosen == "handle1") {

          var target = element.mesh.getObjectByName("drhandle1")
          target.visible = true;
          var target = element.mesh.getObjectByName("drhandle2")
          target.visible = false;


          //element.mesh.getObjectByName("door_decoration").visible = true;
        } else {
          console.log(element.mesh)
          var target = element.mesh.getObjectByName("drhandle1")
          target.visible = false;
          var target = element.mesh.getObjectByName("drhandle2")
          target.visible = true;

          //element.mesh.getObjectByName("door_decoration").visible = false;
        }


      })
    }
    //this.side_menu.appendChild(div_elem)
    let gate_type_handle_arr = div_elem.querySelectorAll(`.gate-type-inner input[name="visual-type${custom_counter_closure}"]`)
    for (let gate_type of gate_type_handle_arr) {
      gate_type.addEventListener('change', (evt) => {


        //console.log(gate_choosen)


        let handle_state = div_elem.querySelector("[name*='wall-type']:checked").value
        let gate_chosen = document.querySelector("[name*='visual-type']:checked").value
        //console.log('running a test:')
        //console.log('gate_chosen == "handle1" && handle_state!="rotated-dense" :' + String(gate_chosen == "handle1" && handle_state!="rotated-dense"))
        //console.log('gate_chosen == "handle1" && handle_state=="rotated-dense" :' + String(gate_chosen == "handle1" && handle_state=="rotated-dense"))
        //console.log('end of a test:')
        if (gate_chosen == "handle1" && handle_state != "rotated-dense") {

          var target = element.mesh.getObjectByName("handle1")
          target.visible = true;
          var target = element.mesh.getObjectByName("handle2")
          target.visible = false;
          var target = element.mesh.getObjectByName("handle-wide")
          target.visible = false;
          element.mesh.getObjectByName("door_decoration").visible = true;
        } else if (gate_chosen == "handle1" && handle_state == "rotated-dense") {
          var target = element.mesh.getObjectByName("handle1")
          target.visible = false;
          var target = element.mesh.getObjectByName("handle2")
          target.visible = true;
          var target = element.mesh.getObjectByName("handle-wide")
          target.visible = false;
          element.mesh.getObjectByName("door_decoration").visible = true;

          //RETURN TO END
        } else {

          var target = element.mesh.getObjectByName("handle1")
          target.visible = false;
          var target = element.mesh.getObjectByName("handle2")
          target.visible = false;
          var target = element.mesh.getObjectByName("handle-wide")
          target.visible = true;

          element.mesh.getObjectByName("door_decoration").visible = false;
        }






      })
    }


    let color_input_arr = div_elem.querySelectorAll('.color-inner input')
    for (let colored_thing of color_input_arr) {

      if(heading_title.toUpperCase().includes("OKNO")){
        console.log("quick check")
        console.log(colored_thing.value)
        if(colored_thing.value!="#FFFFFF" && colored_thing.value!="#44322D")
        {colored_thing.parentElement.style.display="none"}
        else{
        colored_thing.addEventListener('change', inner_change_wall)}
        console.log("quick check end")
      }
      else{
      colored_thing.addEventListener('change', inner_change_wall)
      }
    }

  
    let type_input_arr = "rotated"
    try {
      type_input_arr = div_elem.querySelectorAll(`input[name="wall-type${custom_counter_closure}"]`)
    } catch (error) {
      //console.log(error);
    }

    for (let type_thing of type_input_arr) {
      type_thing.addEventListener('change', inner_change_wall)
    }

    function inner_change_wall() {
      //alert("h")
      const loader = new THREE.TextureLoader();
      let selector = `input[name="wall-color${custom_counter_closure}"]:checked`
      //alert(selector)
      let texture_to_check = "#13447C"
      try {
        texture_to_check = div_elem.querySelector(selector).value
      } catch (error) {
        //console.log("just issuing the default one")

      }

      let select_wall_type = `input[name="wall-type${custom_counter_closure}"]:checked`
      //console.log(select_wall_type)
      let texture_rotated = div_elem.querySelector(select_wall_type).value

      function wall_repaint_inner(wall) {


        switch (texture_to_check) {

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


        wall.texture.wrapS = THREE.ClampToEdgeWrapping;
        wall.texture.wrapT = THREE.RepeatWrapping;
        //console.log(texture_rotated)
        let texture_sparsity = 1
        if (texture_rotated.includes('dense')) {
          texture_sparsity = 2;
        }


        if (texture_rotated.includes("rotated")) {

          wall.texture.repeat.set(1, wall.geometry.parameters.width * texture_sparsity);
          wall.texture.rotation = (Math.PI / 2)
          //alert("hi")
        } else {
          //This is kinda a quick fix but it works
          wall.texture.repeat.set(1, wall.geometry.parameters.height * texture_sparsity);
          wall.texture.rotation = (0)
          //alert("hii")
        }

        if(heading_title.toUpperCase().includes("OKNO")){
          wall.texture=null;
        }

        wall.mesh.material = [
          new THREE.MeshBasicMaterial({
            map: wall.texture,
            color: 0x000000,
            side: THREE.DoubleSide
          }),
          new THREE.MeshBasicMaterial({
            map: wall.texture,
            color: 0x000000,
            side: THREE.DoubleSide
          }),
          new THREE.MeshBasicMaterial({
            map: wall.texture,
            color: 0x000000,
            side: THREE.DoubleSide
          }),
          new THREE.MeshBasicMaterial({
            map: wall.texture,
            color: 0x000000,
            side: THREE.DoubleSide
          }),
          new THREE.MeshBasicMaterial({
            map: wall.texture,
            color: 0xffffff,
            side: THREE.DoubleSide
          }),
          new THREE.MeshBasicMaterial({
            map: wall.texture,
            color: 0xffffff,
            side: THREE.DoubleSide
          }),
        ];

        //If you want to add custom textures glass update



        //const normalMap4 =  new THREE.TextureLoader().load( './textures/golfball2.jpg' );
        // const clearcoatNormaMap =  new THREE.TextureLoader().load( './textures/scratched.png' );
        //  let material2 = new THREE.MeshPhysicalMaterial( {
        //   metalness: 0.5,
        //   roughness: 0.0,
        //   clearcoat: 1.0,
        //   roughness: 0,  
        //   transmission: 1,
        //   thickness: 0.1,
        //   opacity:0.6,
        //   //normalMap: normalMap4,
        //   //bumpMap:normalMap4,
        //   //clearcoatNormalMap: clearcoatNormaMap,
        //   // y scale is negated to compensate for normal map handedness.
        //   //clearcoatNormalScale: new THREE.Vector2( 2.0, - 2.0 )
        // } );

        //  wall.mesh.material =  [
        //   new THREE.MeshBasicMaterial( { map:wall.texture ,color: 0x000000, side: THREE.DoubleSide} ),
        //   new THREE.MeshBasicMaterial( { map:wall.texture ,color: 0x000000, side: THREE.DoubleSide} ),
        //   new THREE.MeshBasicMaterial( { map:wall.texture ,color: 0x000000, side: THREE.DoubleSide} ),
        //   new THREE.MeshBasicMaterial( { map:wall.texture ,color: 0x000000, side: THREE.DoubleSide} ),
        //   material2,
        //   material2,
        //   ];


        //Boiler plate for different elements
        //Initial logic




        //new THREE.MeshBasicMaterial( { side: THREE.DoubleSide, map:wall.texture} );
        wall.mesh.material.needsUpdate = true;
        wall.mesh.geometry.needsUpdate = true;
      }

      wall_repaint_inner(element)

      let color_value = div_elem.querySelector(selector).value
      let three_color = new THREE.Color(color_value)
      //menu_controller.change_wall_color()
      element.change_color(three_color.r * 255, three_color.g * 255, three_color.b * 255)

      let handle_state = div_elem.querySelector("[name*='wall-type']:checked").value
      let gate_chosen = document.querySelector("[name*='visual-type']:checked").value
      //console.log('running a test:')
      //console.log('gate_chosen == "handle1" && handle_state!="rotated-dense" :' + String(gate_chosen == "handle1" && handle_state!="rotated-dense"))
      //console.log('gate_chosen == "handle1" && handle_state=="rotated-dense" :' + String(gate_chosen == "handle1" && handle_state=="rotated-dense"))
      //console.log('end of a test:')
      if (gate_chosen == "handle1" && handle_state != "rotated-dense") {

        var target = element.mesh.getObjectByName("handle1")
        target.visible = true;
        var target = element.mesh.getObjectByName("handle2")
        target.visible = false;
        var target = element.mesh.getObjectByName("handle-wide")
        target.visible = false;
        element.mesh.getObjectByName("door_decoration").visible = true;
      } else if (gate_chosen == "handle1" && handle_state == "rotated-dense") {
        var target = element.mesh.getObjectByName("handle1")
        target.visible = false;
        var target = element.mesh.getObjectByName("handle2")
        target.visible = true;
        var target = element.mesh.getObjectByName("handle-wide")
        target.visible = false;
        element.mesh.getObjectByName("door_decoration").visible = true;

        //RETURN TO END
      } else {

        var target = element.mesh.getObjectByName("handle1")
        target.visible = false;
        var target = element.mesh.getObjectByName("handle2")
        target.visible = false;
        var target = element.mesh.getObjectByName("handle-wide")
        target.visible = true;

        element.mesh.getObjectByName("door_decoration").visible = false;
      }



    }

    //Position of elements control
    function position_change_handler(evt) {
      
      let translation_value = evt.currentTarget.value

      let direction = evt.currentTarget.getAttribute('direction')

      let direction_x = element.translation_x;
      let direction_y = element.translation_y;

      //Make sure this isn't changed 
      //I have no clue why i had some translations on the z_index anyway
      let direction_z = element.translation_z;
      direction_z = 0;

      //console.log(element)
      function check_correctness_of_translation(allowable_margin = 0.011) {
        wall_being_targeted = menu_controller.convert_side_to_rotation(wall_being_targeted_name)["wall_targeted"]
        
        if (!(-parseFloat(wall_being_targeted.width) / 2 + parseFloat(allowable_margin) < parseFloat(direction_x) - parseFloat(element.geometry.parameters.width) / 2 && parseFloat(direction_x) + parseFloat(element.geometry.parameters.width) / 2 < parseFloat(wall_being_targeted.width) / 2 - parseFloat(allowable_margin))) {
         
          //console.log("Scream stop")
          return false;
        }
        allowable_margin = -0.01
       
        if (!(0 <= parseFloat(direction_y) && parseFloat(direction_y) + parseFloat(element.height) < parseFloat(main_house_outer.constructor_height) - parseFloat(allowable_margin))) {
         

          //PENDING6
          //JUSTFINISH
          if (heading_title.toUpperCase().includes("BRAMA")) {
            //Based on type 
            // alert("raise the wall")
            if (!(parseFloat(direction_y) + parseFloat(element.geometry.parameters.height) < parseFloat(main_house_outer.constructor_height) - parseFloat(allowable_margin))) {
              document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value = (
                parseFloat(document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value) + 0.1001).toFixed(2)

              console.log("indexing")
              let big_box_of_friends = menu_controller.hold_all_the_children()
              for (let wall_container of big_box_of_friends) {
                // console.log(wall_container)


                //for (let object of wall_container ){}

              }
              //menu_controller.rebuild_garage_dimensions()
              //menu_controller.readd_all_the_children(big_box_of_friends)

              div_elem.querySelector("[direction='top']").value = 0
              menu_controller.rebuild_garage_dimensions_hold_the_children()

              console.log(element.height)

              //element.set_position(direction_x, -document.querySelector([type = "wall-height"]).value / 2 + element.height/2 + direction_y, direction_z)
              //div_elem.querySelector('.erase-button').click()
              //div_elem.querySelector('.erase-button').dispatchEvent(new Event('click'))
              //document.querySelector('#add-gates').click()
            }
            //Go over all of the children and lower them by 0.1 then


          }
          //console.log("Scream stop")
          return false;
        }
        return true;
      }

      switch (direction) {
        case 'left':
          direction_x = translation_value;
          break;
        case 'right':
          break;
        case 'top':
          direction_y = translation_value;
          break;
        case 'bottom':
          break;
      }

      //If succeeded
      if (check_correctness_of_translation()) {
        

        let rotation_axis = new THREE.Vector3(0, 1, 0)
        let modified_translations = new THREE.Vector3(direction_x, direction_y, direction_z)
        modified_translations.applyAxisAngle(rotation_axis, object_rotation)

        direction_x = modified_translations.x
        direction_y = modified_translations.y
        direction_z = modified_translations.z

        element.translation_x = direction_x;
        element.translation_y = direction_y;
        element.translation_z = direction_z;

        console.log(element)

        // if (heading_title.toUpperCase().includes("BRAMA")) {
        //   console.log(element)
        //   //POSITIONING
        //   element.set_position(direction_x, -main_house_outer.constructor_height / 2 + 1.0 + direction_y, direction_z)
        // }

        // else if (heading_title.toUpperCase().includes("DRZWI")) {

        //   //element.mesh.position=(element.mesh.position.x,0,element.mesh.position.z)
        //   //element.mesh.initial_displacement=(element.mesh.initial_displacement.x,0,element.mesh.initial_displacement.z)

        //   place_at_the_bottom(global_container_of_gates, 0.95)
        //   element.set_position(direction_x, -main_house_outer.constructor_height / 2 + 0.95, direction_z)

        // } 
        // else if (heading_title.toUpperCase().includes("BRAMA")) {
        //   element.set_position(direction_x, -main_house_outer.constructor_height / 2 + 1.0 + direction_y, direction_z)
        // }
        // else{
          console.log(element.height)
          element.set_position(direction_x, -main_house_outer.constructor_height/2.0 + element.height/2.0 + direction_y, direction_z)
          if (heading_title.toUpperCase().includes("DRZWI")){
            //Doors had a slight missalignment fix it
            element.set_position(direction_x, -main_house_outer.constructor_height/2.0 +0.042+ element.height/2.0 + direction_y, direction_z)
          }
        // }
      } 
         else {
        //Just prevent the change of value and maybe add an alert
        switch (direction) {

          case 'left':
            evt.currentTarget.value = element.translation_x
            direction_x = translation_value;
            break;
          case 'right':
            evt.currentTarget.value = element.translation_x
            break;
          case 'top':
            evt.currentTarget.value = element.translation_y;
            break;
          case 'bottom':
            evt.currentTarget.value = element.translation_y;
            //direction_y=10-translation_value;
            break;


        }
        }
    }
    let input_arr = div_elem.querySelectorAll('input.direction')
    
    {
    for (let input of input_arr) {
      input.value = 0;

      input.addEventListener('change', (evt) => {

        position_change_handler(evt)

      });
    }
    input_arr.value = 0;
    }

    //Sizing of elements control
    {
    let input_dim_arr = div_elem.querySelectorAll('input.dimension')

    if (heading_title.toUpperCase().includes("WIATA")) {

      for (let input of input_dim_arr) {





        input.addEventListener('change', (evt) => {
          //alert("Hi I am canopy")
          //GUTTER DISABLING
          if(document.querySelector("#gutter").checked){
            document.querySelector("#gutter").checked=false;
            document.querySelector("#gutter").dispatchEvent(new Event('change'))}
          // document.querySelector("#gutter").checked=!document.querySelector("#gutter").checked;
          // document.querySelector("#gutter").dispatchEvent(new Event('change'))
          // document.querySelector("#gutter").checked=!document.querySelector("#gutter").checked;
          // document.querySelector("#gutter").dispatchEvent(new Event('change'))
          // document.querySelector("#gutter").checked=!document.querySelector("#gutter").checked;
          // document.querySelector("#gutter").dispatchEvent(new Event('change'))


          //console.log(evt.currentTarget.value)
          let translation_value = evt.currentTarget.value
          //console.log(translation_value)
          let set_width = parseFloat(div_elem.querySelector('input.dimension[dimension="width"]').value)
          let set_height = parseFloat(div_elem.querySelector('input.dimension[dimension="height"]').value)
          let direction = wall_being_targeted_name
          //console.log(direction)
          //console.log("nyan:" + direction)
          switch (direction) {

            //Custom logic to be implemented


            case 'left':
              canopy_container.left_size = set_width;
              this.rebuild_garage_dimensions_hold_the_children()
              recreate_foundation()
              //evt.currentTarget.value=element.translation_x



              //direction_x=translation_value;
              break;
            case 'right':
              canopy_container.right_size = set_width;
              this.rebuild_garage_dimensions_hold_the_children()
              recreate_foundation()
              //evt.currentTarget.value=element.translation_x


              //direction_x=10-translation_value;
              break;
            case 'front':
              canopy_container.front_size = set_width;
              this.rebuild_garage_dimensions_hold_the_children()
              recreate_foundation()
              break;
            case 'back':
              canopy_container.back_size = set_width;
              this.rebuild_garage_dimensions_hold_the_children()
              recreate_foundation()
              //evt.currentTarget.value=element.translation_y;
              //direction_y=10-translation_value;
              break;



              //You can technically add the z-index and be happy with general solution
              //This will make it much easier to just switch directions on off based on 
              //wall you are actually on
          }
          roof_recalculation()




        });
      }

    } 
    else {

      for (let input of input_dim_arr) {

        

        input.addEventListener('change', (evt) => {
          
          //console.log("nyan")
          //console.log(evt.currentTarget.value)
          let translation_value = evt.currentTarget.value

          let direction = evt.currentTarget.getAttribute('dimension')

          let direction_x = element.translation_x;
          let direction_y = element.translation_y;
          let direction_z = element.translation_z;
          //console.log(element)
          function check_correctness_of_translation(allowable_margin = 0.011) {
            //console.log(direction_x)
            if (!(-parseFloat(wall_being_targeted.width) / 2 + parseFloat(allowable_margin) < parseFloat(direction_x) - parseFloat(element.geometry.parameters.width) / 2 && parseFloat(direction_x) + parseFloat(element.geometry.parameters.width) / 2 < parseFloat(wall_being_targeted.width) / 2 - parseFloat(allowable_margin))) {
              //console.log("Scream stop")
              return false;
            }
            allowable_margin = -0.01

            //console.log(parseFloat(direction_y) + parseFloat(element.geometry.parameters.height) / 2 ) 
            //console.log("is smaller than")
            //console.log(parseFloat(wall_being_targeted.depth) - parseFloat(allowable_margin))
            if (!(0 <= parseFloat(direction_y) && 2 * parseFloat(direction_y) + 2 * parseFloat(element.geometry.parameters.height) / 2 < parseFloat(wall_being_targeted.depth) - parseFloat(allowable_margin))) {


              
              //console.log("Scream stop")
              return false;
            }


            //console.log("Go on")
            return true;

          }

          


          //function remodel_a_box(targeted_element=element,new_width=1, new_height=1 ){
          //remove_composite_object(element_id)
          // element.remodel_self(1,1,0.04)
          //element.geometry = new THREE.BoxGeometry(1, 1, 1);
          //element.mesh =new THREE.Mesh(element.geometry, element.materials)

          // element.material=[
          //   new THREE.MeshBasicMaterial( { map: element.texture ,color: 0x000000, side: THREE.DoubleSide} ),
          //   new THREE.MeshBasicMaterial( { map: element.texture ,color: 0x000000, side: THREE.DoubleSide} ),
          //   new THREE.MeshBasicMaterial( { map: element.texture ,color: 0x000000, side: THREE.DoubleSide} ),
          //   new THREE.MeshBasicMaterial( { map: element.texture ,color: 0x000000, side: THREE.DoubleSide} ),
          //   new THREE.MeshBasicMaterial( { map: element.texture ,color: 0xffffff, side: THREE.DoubleSide} ),
          //   new THREE.MeshBasicMaterial( { map: element.texture ,color: 0xffffff, side: THREE.DoubleSide} ),

          // ];

          // element.mesh=[]
          // element.geometry = new THREE.BoxGeometry(1, 1, 1);
          // element.geometry.translate(0,0,10*Math.random());

          // element.mesh = new THREE.Mesh(element.geometry, element.material);

          //}

          let set_width = parseFloat(div_elem.querySelector('input.dimension[dimension="width"]').value)
          let set_height = parseFloat(div_elem.querySelector('input.dimension[dimension="height"]').value)
          switch (direction) {

            case 'width':
              element.remodel_self(set_width, set_height, element.geometry.depth, object_rotation, heading_title.toUpperCase());

              //REWIZJA3
              // try {
              //   var target =element.mesh.getObjectByName("door_decoration")
              // } catch (error) {
              //   console.error(error);
              // }

              // target.visible=true;

              //element.texture.repeat.set( 1, element.geometry.parameters.height*1);
              //inner_change_wall()
              //direction_x=10-translation_value;
              break;
            case 'height':
              //THIS WAS THE FIX
  

              element.remodel_self(set_width, set_height, element.geometry.depth, object_rotation)
              element.remodel_a_stupid_piece_of_gate(set_width, set_height, element.geometry.depth, object_rotation)
              element.texture.repeat.set(1, element.geometry.parameters.height * 1);
              if (heading_title.toUpperCase().includes("BRAMA")) {
                //if(document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value<3.01){
                element.height= div_elem.querySelector('input.dimension[dimension="height"]').value
                
                element.mesh.position.y= -main_house_outer.constructor_height/2.0 + element.height/2.0 
                div_elem.querySelector("[direction='top']").dispatchEvent(new Event('change'))
                //}
                }
     
              //inner_change_wall()
              //direction_y=10-translation_value;
              break;
              //You can technically add the z-index and be happy with general solution
              //This will make it much easier to just switch directions on off based on 
              //wall you are actually on
          }


          if (check_correctness_of_translation()) {
            
            //If you pass the movement test movement test to be implemented
            //Probably should implement the custom logic that prevents the changes to the sizing of the elements anyhow
          
            //element.translation_x=direction_x;
            //element.translation_y=direction_y;
            //element.translation_z=direction_z;
            //element.set_position(direction_x,direction_y, direction_z)
          } else {

            //Custom logic to be implemented
            switch (direction) {

              case 'width':
                div_elem.querySelector('input.dimension[dimension="width"]').value = (div_elem.querySelector('input.dimension[dimension="width"]').value - 0.1+0.001).toFixed(1)
                set_width = parseFloat(div_elem.querySelector('input.dimension[dimension="width"]').value)
                set_height = parseFloat(div_elem.querySelector('input.dimension[dimension="height"]').value)
                element.remodel_self(set_width, set_height, element.geometry.depth, object_rotation)
                element.remodel_a_stupid_piece_of_gate(set_width, set_height, element.geometry.depth, object_rotation)
                element.texture.repeat.set(1, element.geometry.parameters.height * 1);

                //evt.currentTarget.value=element.translation_x



                //direction_x=translation_value;
                break;
              case 'height':
                //THIS WAS THE FIX

                if (heading_title.toUpperCase().includes("BRAMA")) {
                  //div_elem.querySelector("[direction='top']").value = 0.3
                  div_elem.querySelector("[direction='top']").dispatchEvent(new Event('change'))
                      //MOVE_UP
                      
                  if(document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value<3.04 && div_elem.querySelector('input.dimension[dimension="height"]').value+0.0>document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value){
                    element.height= div_elem.querySelector('input.dimension[dimension="height"]').value
                    document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value = (
                    parseFloat(document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value) + 0.1001).toFixed(2)
//element.set_position(10, -document.querySelector([type = "wall-height"]).value / 2 + parseFloat(div_elem.querySelector('input.dimension[dimension="height"]').value), direction_z)

                  
                  menu_controller.rebuild_garage_dimensions_hold_the_children();
                  
                 // global_container_of_gates[0].child.mesh.position.y=0.3
                  //element.set_position(10, -document.querySelector('[name= "wall-height"]').value / 2+10, 0)
                 // global_container_of_gates[0].child.position.y=2;
                 //  console.log( global_container_of_gates[0].child)
                 
                  //parseFloat(div_elem.querySelector('input.dimension[dimension="height"]').value)
                  console.log(element.mesh)
  
                  //MOVE_UP
                  element.mesh.position.y= -main_house_outer.constructor_height/2.0 + element.height/2.0 +0.5
                  div_elem.querySelector(".num-selector input[direction='top']").dispatchEvent(new Event('change'));
                  }
                  //alert("ok")
                  
                }

                else{
              
                div_elem.querySelector('input.dimension[dimension="height"]').value = div_elem.querySelector('input.dimension[dimension="height"]').value - 0.1
                set_width = parseFloat(div_elem.querySelector('input.dimension[dimension="width"]').value)
                set_height = parseFloat(div_elem.querySelector('input.dimension[dimension="height"]').value)
                element.remodel_self(set_width, set_height, element.geometry.depth, object_rotation)
                element.remodel_a_stupid_piece_of_gate(set_width, set_height, element.geometry.depth, object_rotation)
                element.texture.repeat.set(1, element.geometry.parameters.height * 1);
                
                }
                //evt.currentTarget.value=element.translation_x


                //direction_x=10-translation_value;
                break;
              case 'top':
                //evt.currentTarget.value=element.translation_y;
                break;
              case 'bottom':
                //evt.currentTarget.value=element.translation_y;
                //direction_y=10-translation_value;
                break;


            }
          }

        });
      }

    }
    
    try {
      //alert("helllo")
      element.change_color(10, 10, 10)
      inner_change_wall()

    } 
    catch (error) {
      
    }

    }
   
    //Initial values for the menus
    if (heading_title.toUpperCase().includes("DRZWI")) {
      
      //console.log(div_elem.querySelector(".num-selector input[direction='top']"))
      div_elem.querySelector(".num-selector input[direction='top']").value = 0.0
      div_elem.querySelector(".num-selector input[direction='top']").dispatchEvent(new Event('change'));
      div_elem.querySelector('input.dimension[dimension="width"]').setAttribute('min', 0.8)
      div_elem.querySelector('input.dimension[dimension="width"]').setAttribute('max', 1.5)
      div_elem.querySelector('input.dimension[dimension="width"]').value = 1.20
      div_elem.querySelector('input.dimension[dimension="width"]').dispatchEvent(new Event('change'));

    }

    if (heading_title.toUpperCase().includes("OKNO")) {

      //console.log(div_elem.querySelector(".num-selector input[direction='top']"))
      div_elem.querySelector(".num-selector input[direction='top']").value = 1.2
      div_elem.querySelector(".num-selector input[direction='top']").dispatchEvent(new Event('change'));
      
      

    }

    if (heading_title.toUpperCase().includes("WIATA")) {
      div_elem.querySelector('input.dimension[dimension="width"]').setAttribute('min', 1)
      div_elem.querySelector('input.dimension[dimension="width"]').setAttribute('max', 4)

      
      div_elem.querySelector('input.dimension[dimension="width"]').value = 2.0
      div_elem.querySelector('input.dimension[dimension="width"]').dispatchEvent(new Event('change'));
    }

    if (heading_title.toUpperCase().includes("BRAMA")) {

      div_elem.querySelector(`input[name="wall-color${custom_counter_closure}"]` + '[value*="13"]').checked = true;
      div_elem.querySelector('input.dimension[dimension="width"]').setAttribute("max", 4)
      div_elem.querySelector('input.dimension[dimension="width"]').setAttribute("min", 2.0)
            
      div_elem.querySelector('input.dimension[dimension="height"]').setAttribute("max", 3)
      div_elem.querySelector('input.dimension[dimension="height"]').setAttribute("min", 2.0)
      div_elem.querySelector(".num-selector input[direction='top']").value = 0.1
      div_elem.querySelector(".num-selector input[direction='top']").dispatchEvent(new Event('change'));
      //Custom event listeners for sizing because of different dimensions of the gates
      for (let gate_type of gate_type_handle_arr) {
        gate_type.addEventListener('change', (evt) => {
          let gate_choosen = evt.currentTarget.value
          if (gate_choosen == "handle1") {

            div_elem.querySelector('input.dimension[dimension="width"]').value = 2.90
            div_elem.querySelector('input.dimension[dimension="width"]').setAttribute("max", 4)
            div_elem.querySelector('input.dimension[dimension="width"]').setAttribute("min", 2.0)
            div_elem.querySelector('input.dimension[dimension="height"]').setAttribute("max", 3)
            div_elem.querySelector('input.dimension[dimension="height"]').setAttribute("min", 2.0)

            let custom_logic_value=(document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value)
            let custom_logic=(custom_logic_value <2.14)

            div_elem.querySelector(".num-selector input[direction='top']").value = 0.1199
            div_elem.querySelector('input.dimension[dimension="height"]').value = 2.00
            div_elem.querySelector('input.dimension[dimension="width"]').dispatchEvent(new Event('change'));
            
        
            div_elem.querySelector('input.dimension[dimension="height"]').dispatchEvent(new Event('change'));
            div_elem.querySelector(".num-selector input[direction='top']").value = 0.1199
            div_elem.querySelector(".num-selector input[direction='top']").dispatchEvent(new Event('change'));
            
            if(custom_logic){
              document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').value=custom_logic_value
              document.querySelector('.num-selector.garage-rebuild select[name="wall-height"]').dispatchEvent(new Event('change'))
            }

          } else {
            div_elem.querySelector('input.dimension[dimension="width"]').setAttribute("max", 3.6)
            div_elem.querySelector('input.dimension[dimension="width"]').setAttribute("min", 1.90)
            div_elem.querySelector('input.dimension[dimension="height"]').setAttribute("max", 2.6)
            div_elem.querySelector('input.dimension[dimension="height"]').setAttribute("min", 2.0)

            div_elem.querySelector('input.dimension[dimension="width"]').value = 2.80
            div_elem.querySelector('input.dimension[dimension="width"]').dispatchEvent(new Event('change'));
            div_elem.querySelector('input.dimension[dimension="height"]').value = 1.90
            div_elem.querySelector('input.dimension[dimension="height"]').dispatchEvent(new Event('change'));

            div_elem.querySelector(".num-selector input[direction='top']").value = 0.2199
            div_elem.querySelector(".num-selector input[direction='top']").dispatchEvent(new Event('change'));
          }


        })
      }
      
      div_elem.querySelector('input.dimension[dimension="width"]').value = 2.90
      div_elem.querySelector('input.dimension[dimension="width"]').dispatchEvent(new Event('change'));
      div_elem.querySelector('input.dimension[dimension="height"]').value = 2.0
      div_elem.querySelector('input.dimension[dimension="height"]').dispatchEvent(new Event('change'));

      
    }
    
    return div_elem
  }

  initial_gate_logic(width, height, array_of_objects) {

    let message = "gate";
    let position = new THREE.Vector3(0, 0, 0)

    switch (array_of_objects.length) {
      case 0:
        message = "front " + message;
        position = new THREE.Vector3(0, 0, 0)
        break;
      case 1:
        message = "left" + message;
        position = new THREE.Vector3(-main_house_outer.wall_front.width / 2 + width / 2, 0, 0)
        break;
      case 2:
        message = "right" + message;
        position = new THREE.Vector3(+main_house_outer.wall_front.width / 2 - width / 2, 0, 0)
        break;
    }

    return {
      message: message,
      position: position
    }


  }

  force_a_placed_object_update(element) {
    function wall_repaint_inner(wall) {

      let texture_to_check = "default"
      let texture_rotated = "standard"
      switch (texture_to_check) {

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


      wall.texture.wrapS = THREE.ClampToEdgeWrapping;
      wall.texture.wrapT = THREE.RepeatWrapping;
      //console.log(texture_rotated)
      let texture_sparsity = 1
      if (texture_rotated.includes('dense')) {
        texture_sparsity = 2;
      }


      if (texture_rotated.includes("rotated")) {

        wall.texture.repeat.set(1, wall.geometry.parameters.width * texture_sparsity);
        wall.texture.rotation = (Math.PI / 2)

      } else {
        //This is kinda a quick fix but it works
        wall.texture.repeat.set(1, wall.geometry.parameters.height * texture_sparsity);
        wall.texture.rotation = (0)


        //alert(wall.geometry.parameters.height*texture_sparsity)
      }

      wall.mesh.material = [
        new THREE.MeshBasicMaterial({
          map: wall.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: wall.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: wall.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: wall.texture,
          color: 0x000000,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: wall.texture,
          color: 0xffffff,
          side: THREE.DoubleSide
        }),
        new THREE.MeshBasicMaterial({
          map: wall.texture,
          color: 0xffffff,
          side: THREE.DoubleSide
        }),
      ];



      //new THREE.MeshBasicMaterial( { side: THREE.DoubleSide, map:wall.texture} );
      wall.mesh.material.needsUpdate = true;
      wall.mesh.geometry.needsUpdate = true;
    }





    wall_repaint_inner(element)

    let color_value = "#13447C"
    let three_color = new THREE.Color(color_value)
    //menu_controller.change_wall_color()
    element.change_color(three_color.r * 255, three_color.g * 255, three_color.b * 255)
  }

  convert_side_to_rotation(side) {
    let object_rotation = 0
    let wall_targeted = ""
    //alert("i am here")
    //console.log(" I am here and my side is:" + side)
    switch (side) {
      case "front":

        object_rotation = 0
        wall_targeted = main_house_outer.wall_front
        break;
      case "left":
        object_rotation = Math.PI / 2
        wall_targeted = main_house_outer.wall_left
        break;
      case "back":
        object_rotation = 2 * Math.PI / 2
        wall_targeted = main_house_outer.wall_back
        break;

      case "right":
        object_rotation = 3 * Math.PI / 2
        wall_targeted = main_house_outer.wall_right
        break;

      default:
        //alert("I entered")




        wall_targeted = main_house_outer.wall_front

    }
    return {
      object_rotation: object_rotation,
      wall_targeted: wall_targeted
    }
  }

  side_selecting(friendly_door, position, side) {
    let wall_targeted
    let object_rotation = 0

    object_rotation = menu_controller.convert_side_to_rotation(side)["object_rotation"]
    wall_targeted = menu_controller.convert_side_to_rotation(side)["wall_targeted"]

    friendly_door.geometry.rotateY(object_rotation)
    menu_controller.gate_array.push(friendly_door)

    //console.log(friendly_door.mesh)
    for (let child_element of friendly_door.mesh.children) {
      child_element.geometry.rotateY(object_rotation)
    }

    wall_targeted.place_a_box2(friendly_door);
    friendly_door.set_position(position.x, position.y, position.z)
    

  }

  add_gate() {

    //alert("hiii")
    let width_of_gate = 2.80;
    let height_of_gate = 2;

    const {
      message,
      position
    } = this.initial_gate_logic(width_of_gate, height_of_gate, this.gate_array)
    //console.log(message)
    //console.log(position)

    //IF it passes the logic tests



    //menu_controller.side_selecting(friendly_door,position, "front")

    //Wow that's actually so smart you dont have to worry about passing the wall selected 
    //You can just get id from the check form at creation time
    let wall_chosen = document.querySelector("#gate-wall[name='wall-chosen']").value
    let object_rotation = menu_controller.convert_side_to_rotation(wall_chosen)["object_rotation"]
    let friendly_door = new Displacement_object(main_house_outer.wall_front, width_of_gate, height_of_gate, 0.04, 0, 0, 0, "BRAMA", object_rotation)
    this.side_selecting(friendly_door, position, wall_chosen)


    global_container_of_gates.push(new Placed_object(wall_chosen, friendly_door.mesh))
    console.log(global_container_of_gates)
    //A base for rotations and ease of manipulations
    let eigen = new THREE.Vector3(1, 0, 0)
    let rotation_axis = new THREE.Vector3(0, 1, 0)
    eigen.applyAxisAngle(rotation_axis, object_rotation)
    //Now just make the logic of transformations adhere to proper rules


    //console.log("friendly door:")
    //console.log(friendly_door)
    //this.gate_array.push(friendly_door)
    //main_house_outer.wall_front.place_a_box2(friendly_door);
    //friendly_door.set_position(position.x,position.y,position.z)



    let gate_number = "główna"
    if (global_container_of_gates.length > 1) {
      gate_number = menu_controller.gate_array.length
    }
    let new_elem = this.add_node(friendly_door.provide_identification(), friendly_door, wall_chosen, "Brama " + gate_number)
    this.side_menu.insertBefore(new_elem, document.querySelector("#windows-object"))
    menu_controller.force_a_placed_object_update(friendly_door)
    
   // setTimeout(function() {
   //   new_elem.querySelector('.dynamic_gate input.direction[direction="top"]').dispatchEvent(new Event('change'));
  //}, 1);

  }

  initial_window_logic(width, height) {
    let message = 'Okno'
    let position = new THREE.Vector3(0, main_house_outer.constructor_height - height / 2, 0)
    //console.log(main_house_outer)
    return {
      message: message,
      position: position
    }
  }

  add_window() {
    let width_of_gate = 1.00;
    let height_of_gate = 0.60;

    const {
      message,
      position
    } = this.initial_window_logic(width_of_gate, height_of_gate)
    //console.log(message)
    //console.log(position)
    
    let friendly_door = new Displacement_object(main_house_outer.wall_front, width_of_gate, height_of_gate,  0.065, 0, 0, 0, "okno")
    friendly_door.name_type = "OKNO"
    //glass_update
    //let insert_geometry = new THREE.BoxGeometry(1,1,0.055);
    //let insert_material = new THREE.MeshBasicMaterial( { color: 0x0000ff, side: THREE.DoubleSide} );
    //let insert_mesh = new THREE.Mesh(insert_geometry, insert_material);
    //friendly_door.mesh.add(insert_mesh);

    //

    //menu_controller.side_selecting(friendly_door,position, "front")

    //Wow that's actually so smart you dont have to worry about passing the wall selected 
    //You can just get id from the check form at creation time
    let wall_chosen = document.querySelector("#window-wall[name='wall-chosen']").value
    this.side_selecting(friendly_door, position, wall_chosen)

    let object_rotation = menu_controller.convert_side_to_rotation(wall_chosen)["object_rotation"]

    //A base for rotations and ease of manipulations
    let eigen = new THREE.Vector3(1, 0, 0)
    let rotation_axis = new THREE.Vector3(0, 1, 0)
    eigen.applyAxisAngle(rotation_axis, object_rotation)
    //Now just make the logic of transformations adhere to proper rules


    //console.log("friendly door:")
    //console.log(friendly_door)
    //this.gate_array.push(friendly_door)
    //main_house_outer.wall_front.place_a_box2(friendly_door);
    //friendly_door.set_position(position.x,position.y,position.z)
    let polska_nazwa = ""
    switch (wall_chosen) {
      case "front":

        polska_nazwa = "frontowe"
        break;
      case "left":

        polska_nazwa = "lewe"
        break;
      case "back":

        polska_nazwa = "tylnie"
        break;
      case "right":

        polska_nazwa = "prawe"
        break;
    }



    let gate_number = ""
    menu_controller.window_array.push("")
    if (menu_controller.gate_array.length > 1) {
      gate_number = menu_controller.window_array.length
    }
    let new_elem = this.add_node(friendly_door.provide_identification(), friendly_door, wall_chosen, "Okno " + polska_nazwa)
    this.side_menu.insertBefore(new_elem, document.querySelector("#doors-object"))
    menu_controller.force_a_placed_object_update(friendly_door)
    //Just force a click


    try{
    new_elem.querySelector('input[name*="wall-color"][value*="FF"]').click()
    }
    catch(error){console.log("Let it pass")}
    

    global_container_of_doors.push(new Placed_object(wall_chosen, friendly_door.mesh))

  }
  add_doors() {
    let width_of_gate = 1.20;
    let height_of_gate = 1.90;


    const {
      message,
      position
    } = this.initial_gate_logic(width_of_gate, height_of_gate, this.gate_array)
    //console.log(message)
    //console.log(position)
    width_of_gate = 1.20;
    height_of_gate = 1.90;
    //IF it passes the logic tests
  


    //menu_controller.side_selecting(friendly_door,position, "front")

    //Wow that's actually so smart you dont have to worry about passing the wall selected 
    //You can just get id from the check form at creation time
    let wall_chosen = document.querySelector("#door-wall[name='wall-chosen']").value
    let object_rotation = menu_controller.convert_side_to_rotation(wall_chosen)["object_rotation"]
    let friendly_door = new Displacement_object(main_house_outer.wall_front, width_of_gate, height_of_gate, 0.06, 0, 0, 0, "DRZWI", object_rotation)
    this.side_selecting(friendly_door, position, wall_chosen)

    //alert(wall_chosen)

    global_container_of_doors.push(new Placed_object(wall_chosen, friendly_door.mesh))

    //A base for rotations and ease of manipulations
    let eigen = new THREE.Vector3(1, 0, 0)
    let rotation_axis = new THREE.Vector3(0, 1, 0)
    eigen.applyAxisAngle(rotation_axis, object_rotation)
    //Now just make the logic of transformations adhere to proper rules


    //console.log("friendly door:")
    //console.log(friendly_door)
    //this.gate_array.push(friendly_door)
    //main_house_outer.wall_front.place_a_box2(friendly_door);
    //friendly_door.set_position(position.x,position.y,position.z)
    let polska_nazwa = ""
    switch (wall_chosen) {
      case "front":

        polska_nazwa = "frontowe"
        break;
      case "left":

        polska_nazwa = "lewe"
        break;
      case "back":

        polska_nazwa = "tylnie"
        break;
      case "right":

        polska_nazwa = "prawe"
        break;
    }


    menu_controller.door_array.push("")
    let gate_number = " "
    if (menu_controller.gate_array.length > 1) {
      gate_number = menu_controller.door_array.length
    }
    let new_elem = this.add_node(friendly_door.provide_identification(), friendly_door, wall_chosen, "Drzwi " + polska_nazwa)

    this.side_menu.insertBefore(new_elem, document.querySelector("#canopy-object"))
    menu_controller.force_a_placed_object_update(friendly_door)





  }
  add_canopy() {

    let wall_chosen = document.querySelector("#canopy-wall[name='wall-chosen']").value
    let width_of_canopy = 1.20;
    let polska_nazwa = ""
    switch (wall_chosen) {
      case "front":
        canopy_container.front_size = width_of_canopy
        polska_nazwa = "frontowa"
        break;
      case "left":
        canopy_container.left_size = width_of_canopy
        polska_nazwa = "lewa"
        break;
      case "back":
        canopy_container.back_size = width_of_canopy
        polska_nazwa = "tylnia"
        break;
      case "right":
        canopy_container.right_size = width_of_canopy
        polska_nazwa = "prawa"
        break;


        //alert("I entered")


    }

    let new_elem = this.add_node(null, null, wall_chosen, "Wiata " + polska_nazwa)

    this.canopy_array.push("elem")
    this.rebuild_garage_dimensions_hold_the_children()
    this.side_menu.insertBefore(new_elem, document.querySelector("#final-object"))
  }


  initial_gutter_logic(width, height, array_of_objects) {

    let message = "gate";
    let position = new THREE.Vector3(0, 0, 0)

    switch (array_of_objects.length) {
      case 0:
        message = "front " + message;
        position = new THREE.Vector3(0, 0, 0)
        break;
      case 1:
        message = "left" + message;
        position = new THREE.Vector3(0, 0, 0)
        break;
      case 2:
        message = "right" + message;
        position = new THREE.Vector3(0, 0, 0)
        break;
    }

    return {
      message: message,
      position: position
    }


  }


  add_gutter() {

    //This logic should be moved out of the add gutter

    let index_roof = parseInt(document.querySelector('input[name="roof-type"]:checked').value)
    let necessary = true
    let necessary2 = false
    let wall_chosen = "left"
    let wall_chosen2 = "right"
    if (index_roof == 4 || index_roof == 5) {
      necessary = true
      necessary2 = true
    }

    if (index_roof == 0) {
      wall_chosen = "left"
    } else if (index_roof == 2) {
      wall_chosen = "right"
    } else if (index_roof == 1) {
      wall_chosen = "front"
    } else if (index_roof == 3) {
      wall_chosen = "back"
    } else if (index_roof == 4) {
      wall_chosen = "left"
      wall_chosen2 = "right"
    } else if (index_roof == 5) {
      wall_chosen = "front"
      wall_chosen2 = "back"
    }




    let width_of_gate = 2;
    let height_of_gate = 2;


    if (necessary) {
      const {
        message,
        position
      } = menu_controller.initial_gutter_logic(width_of_gate, height_of_gate, menu_controller.gate_array)
      //console.log(message)
      //console.log(position)

      //wall_chosen = "left"
      let object_rotation = menu_controller.convert_side_to_rotation(wall_chosen)["object_rotation"]
      let friendly_door = new Displacement_object(main_house_outer.wall_front, width_of_gate, height_of_gate, 0.04, 0, 0, 0, "Rynna" + wall_chosen, object_rotation)
      menu_controller.side_selecting(friendly_door, position, wall_chosen)



      //A base for rotations and ease of manipulations
      let eigen = new THREE.Vector3(1, 0, 0)
      let rotation_axis = new THREE.Vector3(0, 1, 0)
      eigen.applyAxisAngle(rotation_axis, object_rotation)
      //Now just make the logic of transformations adhere to proper rules
      // let target=friendly_door.mesh.getObjectByName("hand111")
      // target.translateZ(7)

      //console.log("friendly door:")
      //console.log(friendly_door)
      //this.gate_array.push(friendly_door)
      //main_house_outer.wall_front.place_a_box2(friendly_door);
      //friendly_door.set_position(position.x,position.y,position.z)



      let gate_number = 0
      let new_elem = menu_controller.add_node(friendly_door.provide_identification(), friendly_door, wall_chosen, "Rynna " + gate_number)
      menu_controller.force_a_placed_object_update(friendly_door)

      //Second elem if necessary
    }

    if (necessary2) {


      const {
        message,
        position
      } = menu_controller.initial_gate_logic(width_of_gate, height_of_gate, menu_controller.gate_array)

      wall_chosen = wall_chosen2
      let object_rotation = menu_controller.convert_side_to_rotation(wall_chosen)["object_rotation"]
      let friendly_door = new Displacement_object(main_house_outer.wall_front, width_of_gate, height_of_gate, 0.04, 0, 0, 0, "Rynna" + wall_chosen, object_rotation)
      menu_controller.side_selecting(friendly_door, position, wall_chosen)



      //A base for rotations and ease of manipulations
      let eigen = new THREE.Vector3(1, 0, 0)
      let rotation_axis = new THREE.Vector3(0, 1, 0)
      eigen.applyAxisAngle(rotation_axis, object_rotation)
      //Now just make the logic of transformations adhere to proper rules
      // let target=friendly_door.mesh.getObjectByName("hand111")
      // target.translateZ(7)

      //console.log("friendly door:")
      //console.log(friendly_door)
      //this.gate_array.push(friendly_door)
      //main_house_outer.wall_front.place_a_box2(friendly_door);
      //friendly_door.set_position(position.x,position.y,position.z)



      let gate_number = 0
      let new_elem = menu_controller.add_node(friendly_door.provide_identification(), friendly_door, wall_chosen, "Rynna " + gate_number)
      menu_controller.force_a_placed_object_update(friendly_door)
    }


  }

  add_node2() {
    pass
    //console.log(this.side_menu)
  }

  release_all_objects() {
    main_house_outer.wall_back.remove_components()
    main_house_outer.wall_front.remove_components()
    main_house_outer.wall_left.remove_components()
    main_house_outer.wall_right.remove_components()
  }

  hold_all_the_children() {

    return [
      menu_controller.hold_children(main_house_outer.wall_front),
      menu_controller.hold_children(main_house_outer.wall_left),
      menu_controller.hold_children(main_house_outer.wall_back),
      menu_controller.hold_children(main_house_outer.wall_right)
    ]

  }

  readd_all_the_children(container_of_children) {
    menu_controller.readd_the_children(main_house_outer.wall_front, container_of_children[0])
    menu_controller.readd_the_children(main_house_outer.wall_left, container_of_children[1])
    menu_controller.readd_the_children(main_house_outer.wall_back, container_of_children[2])
    menu_controller.readd_the_children(main_house_outer.wall_right, container_of_children[3])
  }

  rebuild_garage_dimensions_hold_the_children() {
    let big_box_of_friends = menu_controller.hold_all_the_children()
    menu_controller.rebuild_garage_dimensions()
    menu_controller.readd_all_the_children(big_box_of_friends)



  }

  hold_children(wall_targeted) {

    //console.log("Copy the children")
    //console.log("I was taken")
    //console.log(wall_targeted.object.children)
    //console.log("end of take")

    return wall_targeted.object.children
  }

  readd_the_children(wall_targeted, wall_container) {
    //console.log("I am readded")
    //console.log(wall_targeted)
    //console.log(wall_container)
    //console.log("I was readded ")
    for (let child of wall_container) {
      wall_targeted.object.add(child)
    }

  }

  rebuild_garage_dimensions() {


    this.gate_array = [];
    this.window_array = [];
    this.door_array = [];


    let constructor_width = parseFloat(document.querySelector(".num-selector [name='width']").value);
    let constructor_depth = parseFloat(document.querySelector(".num-selector [name='depth']").value);
    let constructor_height = parseFloat(document.querySelector(".num-selector [name='wall-height']").value);
    let roof_width = parseFloat(document.querySelector(".num-selector [name='width']").value);
    let roof_depth = parseFloat(document.querySelector(".num-selector [name='depth']").value);
    let roof_height = parseFloat(document.querySelector(".num-selector [name='total-height']").value);
    let roof_type = parseInt(document.querySelector('input[name="roof-type"]:checked').value);

    //CAUTION
    document.querySelector("#reinforcements").checked = false
    document.querySelector("#reinforcements").dispatchEvent(new Event('change'));
    // document.querySelector("#reinforcements").checked=true
    // document.querySelector("#reinforcements").dispatchEvent(new Event('change'));
    // document.querySelector("#reinforcements").checked=false
    // document.querySelector("#reinforcements").dispatchEvent(new Event('change'));

    try {
      main_house_outer.release();
    } catch (error) {
      //console.log(error)
    }
    //main_house_outer=new Creation_controller_outer(30, 10, 10, 10, 10, 10, scene_outer,4);

    main_house_outer = new Creation_controller_outer(constructor_width, constructor_depth, constructor_height, roof_width, roof_depth, roof_height, scene_outer, roof_type);
    //console.log(global_container_of_doors)




    reset_the_object(global_container_of_doors)
    place_at_the_bottom(global_container_of_doors, 1.10)
    reset_the_object(global_container_of_gates)
    place_at_the_bottom(global_container_of_gates, 1.05)
    reset_the_object(global_container_of_windows)
    place_at_the_bottom(global_container_of_windows, 0.30)

    console.log(global_container_of_windows)
    //main_house_outer.wall_right.object.add(global_container_of_doors[1])
    //main_house_outer.wall_right.object.add(global_container_of_doors[2])

    //main_house_outer.wall_right.object=copy_wall_right


    //Based on the The canopy flag 
    try {
      main_house_canopy.release();
    } catch (error) {
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }



    //Presentation
    //this.canopy_array=["Coach hiii"]
    //console.log("Attenzione")
    //console.log(canopy_container)
    let canopy_flag = false;
    try {
      canopy_flag = canopy_container.canopy_exists()
    } catch (error) {
      //console.log(error)
    }
    //Always force a canopy for now less code to maintain
    canopy_flag = true;
    if (canopy_flag) {

      main_house_canopy = new Creation_controller_outer(constructor_width + canopy_container.left_size + canopy_container.right_size, constructor_depth + canopy_container.back_size + canopy_container.front_size, constructor_height, roof_width + canopy_container.left_size + canopy_container.right_size, roof_depth + canopy_container.back_size + canopy_container.front_size, roof_height, scene_outer, roof_type);




      // insert_geometry.translate(standard.x, standard.y,standard.z+forwards.z)

      //main_house_canopy.wall_left.object.add(lie_beam)

      main_house_canopy.wall_front.object.material.color.setRGB(1.0, 0, 0);

      function wall_repaint_canopy(wall) {

        const loader = new THREE.TextureLoader();

        wall.texture = loader.load('./resources/images/PWP9-SIMPLE2.png');
        //wall.texture = loader.load('uv_grid_opengl.jpg');
        wall.texture.wrapS = THREE.RepeatWrapping;
        wall.texture.wrapT = THREE.RepeatWrapping;
        let texture_rotated = "false"
        //console.log(texture_rotated)
        //console.log(texture_rotated.includes("rotated"))
        if (texture_rotated.includes("rotated")) {

          wall.texture.repeat.set(1, 1);
          wall.texture.rotation = (Math.PI / 2)
        } else {
          wall.texture.repeat.set(1, 1);
          //This is much better but buggier a quick fix but it works 
          //wall.texture.repeat.set(wall.width/2  , 1 );
          wall.texture.rotation = (0)
        }

        //wall.object.material = new THREE.MeshBasicMaterial( { side: THREE.DoubleSide, map:wall.texture} );
        wall.object.material = new THREE.MeshBasicMaterial({
          side: THREE.DoubleSide,
          map: wall.texture,
          opacity: 1.0,
          transparent: true
        });
        //You can also set the properties without the constructor
        // wall.object.material.opacity=0.0

        wall.object.material.needsUpdate = true;
        wall.object.geometry.needsUpdate = true;
      }


      wall_repaint_canopy(main_house_canopy.wall_front)
      wall_repaint_canopy(main_house_canopy.wall_right)
      wall_repaint_canopy(main_house_canopy.wall_left)
      wall_repaint_canopy(main_house_canopy.wall_back)



      let canopy_translation = canopy_container.canopy_translation()
      //See appendix_1.pdf
      canopy_translation = canopy_translation.multiplyScalar(0.5)
      //If roof consists of two slopes translate the center just by one half, otherwise go full


      main_house_canopy.wall_back.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.wall_front.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.wall_left.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.wall_right.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)

      main_house_canopy.roof_front.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.roof_back.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.roof_right.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)


      main_house_canopy.roof_front2.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.roof_right2.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.roof_back2.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)

      main_house_canopy.roof.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
      main_house_canopy.roof2.geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)

      main_house_outer.roof.object.removeFromParent()
      main_house_outer.roof2.object.removeFromParent()

      main_house_outer.roof_front.object.removeFromParent()
      main_house_outer.roof_front2.object.removeFromParent()
      main_house_outer.roof_back.object.removeFromParent()
      main_house_outer.roof_back2.object.removeFromParent()

      main_house_outer.roof_right.object.removeFromParent()
      main_house_outer.roof_right2.object.removeFromParent()


      //main_house_outer.wall_back=main_house_canopy.wall_back
      //main_house_outer.wall_front=main_house_canopy.wall_front
      //main_house_outer.wall_left=main_house_canopy.wall_left
      //main_house_outer.wall_right=main_house_canopy.wall_right


      //main_house_canopy.wall_front.object.removeFromParent()
      if (!canopy_container.front_size) {
        main_house_canopy.wall_front.object.removeFromParent()
      }
      if (!canopy_container.back_size) {
        main_house_canopy.wall_back.object.removeFromParent()
      }
      if (!canopy_container.left_size) {
        main_house_canopy.wall_left.object.removeFromParent()
      }
      if (!canopy_container.right_size) {
        main_house_canopy.wall_right.object.removeFromParent()
      }

      function insert_canopy(canopy_container_wall, rect_being_targeted, main_house_canopy_wall, rotation = 0, support_location = "front") {

        let beam_dim_x = 0.025 * 0.5
        let beam_dim_y = 0.1 * 0.5
        let offset = new THREE.Vector3(0, 0, 0)
        let beam_dim_left = new THREE.Vector3(0, 0, 0)
        let beam_dim_center = new THREE.Vector3(0, 0, 0)
        let beam_dim_right = new THREE.Vector3(0, 0, 0)
        switch (support_location) {

          case ("front"):
            offset = new THREE.Vector3(-rect_being_targeted.wall_front.width / 2, 0, 0)
            beam_dim_left = new THREE.Vector3(0, 0, -beam_dim_y)
            beam_dim_center = new THREE.Vector3(0, 0, -beam_dim_y)
            beam_dim_right = new THREE.Vector3(0, 0, -beam_dim_y)
            break;
          case ("back"):
            offset = new THREE.Vector3(-rect_being_targeted.wall_front.width / 2, 0, 0)
            beam_dim_left = new THREE.Vector3(0, 0, +beam_dim_y)
            beam_dim_center = new THREE.Vector3(0, 0, +beam_dim_y)
            beam_dim_right = new THREE.Vector3(0, 0, +beam_dim_y)


            break;
          case ("left"):
            offset = new THREE.Vector3(0, 0, rect_being_targeted.wall_left.width / 2)
            beam_dim_left = new THREE.Vector3(+beam_dim_y, 0, 0)
            beam_dim_center = new THREE.Vector3(+beam_dim_y, 0, 0)
            beam_dim_right = new THREE.Vector3(+beam_dim_y, 0, 0)
            break;
          case ("right"):
            offset = new THREE.Vector3(0, 0, rect_being_targeted.wall_left.width / 2)
            beam_dim_left = new THREE.Vector3(-beam_dim_y, 0, 0)
            beam_dim_center = new THREE.Vector3(-beam_dim_y, 0, 0)
            beam_dim_right = new THREE.Vector3(-beam_dim_y, 0, 0)


            break;
        }

        let insert_geometry = new THREE.BoxGeometry(0.05, main_house_canopy.constructor_height - 0.015, 0.05);
        let insert_geometry_left = new THREE.BoxGeometry(0.05, main_house_canopy.constructor_height - 0.015, 0.05);
        let insert_geometry_right = new THREE.BoxGeometry(0.05, main_house_canopy.constructor_height - 0.015, 0.05);
        let insert_material = new THREE.MeshBasicMaterial({
          color: 0x272727,
          side: THREE.DoubleSide
        });
        //insert_geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);
        canopy_container_wall[0] = new THREE.Mesh(insert_geometry, insert_material);
        canopy_container_wall[1] = new THREE.Mesh(insert_geometry_left, insert_material);
        canopy_container_wall[2] = new THREE.Mesh(insert_geometry_right, insert_material);


        //insert_geometry.rotateY(Math.PI/2)
        //console.log("canopy:")
        //console.log(offset)


        canopy_container_wall[0].geometry.rotateY(rotation)
        canopy_container_wall[1].geometry.rotateY(rotation)
        canopy_container_wall[2].geometry.rotateY(rotation)

        canopy_container_wall[0].geometry.translate(canopy_translation.x - offset.x, canopy_translation.y - offset.y, canopy_translation.z - offset.z)
        canopy_container_wall[1].geometry.translate(canopy_translation.x, canopy_translation.y, canopy_translation.z)
        canopy_container_wall[2].geometry.translate(canopy_translation.x + offset.x, canopy_translation.y, canopy_translation.z + offset.z)


        canopy_container_wall[0].geometry.translate(beam_dim_left.x, beam_dim_left.y, beam_dim_left.z)
        canopy_container_wall[1].geometry.translate(beam_dim_center.x, beam_dim_center.y, beam_dim_center.z)
        canopy_container_wall[2].geometry.translate(beam_dim_right.x, beam_dim_right.y, beam_dim_right.z)


        main_house_canopy_wall.object.add(canopy_container_wall[0]);
        main_house_canopy_wall.object.add(canopy_container_wall[1]);
        main_house_canopy_wall.object.add(canopy_container_wall[2]);

        if (support_location = 'front') {
          let curr_id = canopy_container_wall[1].id
          main_house_canopy.wall_front.remove_component(curr_id)
        }
      }


      if (canopy_container.front_size) {
        let beam_container = canopy_container.front_container
        let wall_being_targeted = main_house_canopy.wall_front
        insert_canopy(beam_container, main_house_canopy, wall_being_targeted, Math.PI / 2, 'front')



      }
      if (canopy_container.left_size) {


        let beam_container = canopy_container.front_container
        let wall_being_targeted = main_house_canopy.wall_left
        insert_canopy(beam_container, main_house_canopy, wall_being_targeted, 0, 'left')


        // let insert_geometry = new THREE.BoxGeometry(0.02, 1 + 0.01, 1 + 0.02);
        // let insert_geometry_left = new THREE.BoxGeometry(0.02, 1 + 0.01, 1 + 0.02);
        // let insert_geometry_right = new THREE.BoxGeometry(0.02, 1 + 0.01, 1 + 0.02);
        // let insert_material = new THREE.MeshBasicMaterial({
        //   color: 0x272727,
        //   side: THREE.DoubleSide
        // });
        // //insert_geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);
        // canopy_container.left_container[0]=  new THREE.Mesh(insert_geometry, insert_material);
        // canopy_container.left_container[1]=  new THREE.Mesh(insert_geometry_left, insert_material);
        // canopy_container.left_container[2]=  new THREE.Mesh(insert_geometry_right, insert_material);


        // //insert_geometry.rotateY(Math.PI/2)
        ////console.log("canopy:")
        ////console.log(main_house_canopy)


        // canopy_container.left_container[0].geometry.translate(canopy_translation.x,canopy_translation.y,canopy_translation.z-main_house_canopy.wall_left.width/2)
        // canopy_container.left_container[1].geometry.translate(canopy_translation.x,canopy_translation.y,canopy_translation.z)
        // canopy_container.left_container[2].geometry.translate(canopy_translation.x,canopy_translation.y,canopy_translation.z+main_house_canopy.wall_left.width/2)

        // main_house_canopy.wall_left.object.add(canopy_container.left_container[0]);
        // main_house_canopy.wall_left.object.add(canopy_container.left_container[1]);
        // main_house_canopy.wall_left.object.add(canopy_container.left_container[2]);

        //remove_composite_object(insert_mesh.id)
        //let curr_id=insert_mesh.id
        //main_house_canopy.wall_back.remove_component(curr_id)
        //main_house_canopy.wall_front.remove_component(curr_id)
        //main_house_canopy.wall_left.remove_component(curr_id)
        //main_house_canopy.wall_right.remove_component(curr_id)

        //To attach to normal walls you just have to copoy the following code and uncomment it once

        ////insert_geometry.translate(canopy_translation.x,canopy_translation.y,canopy_translation.z)
        //main_house_outer.wall_left.object.add(insert_mesh);



      }
      if (canopy_container.right_size) {
        let beam_container = canopy_container.right_container
        let wall_being_targeted = main_house_canopy.wall_right
        insert_canopy(beam_container, main_house_canopy, wall_being_targeted, 0, 'right')
      }
      if (canopy_container.back_size) {

        let beam_container = canopy_container.back_container
        let wall_being_targeted = main_house_canopy.wall_back
        insert_canopy(beam_container, main_house_canopy, wall_being_targeted, 0, 'back')
      }


      if (false) {
        let reinforcement_width = 0.1
        let reinforcement_depth = 0.02
        let compensation = (reinforcement_width - reinforcement_depth) / 2
        let insert_geometry = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height, 0.10);
        let insert_material = new THREE.MeshBasicMaterial({
          color: 0x272727,
          side: THREE.DoubleSide
        });

        let a = new THREE.Mesh(insert_geometry, insert_material);
        a.name = "Boy"




        let rotation_0 = new THREE.Vector3(-(main_house_outer.wall_front.width / 2 - compensation), 0, -compensation)
        let rotation_1 = new THREE.Vector3(+(main_house_outer.wall_front.width / 2 - compensation), 0, -compensation)
        let rotation_2 = new THREE.Vector3(-(main_house_outer.wall_front.width / 2 - compensation), 0, +compensation)
        let rotation_3 = new THREE.Vector3(+(main_house_outer.wall_front.width / 2 - compensation), 0, +compensation)

        a.geometry.translate(rotation_0.x, rotation_0.y, rotation_0.z)
        a.name = "Crucial"
        a.visible = false
        external_arr.front = a;

        console.log(external_arr)
        console.log(main_house_outer.wall_front.object)
        main_house_outer.wall_front.object.children.push(a);

      }
      if (request_clean) {
        //console.log(main_house_outer.wall_front.object)
      }



      if (false) {

        let reinforcement_width = 0.1
        let reinforcement_depth = 0.02
        let compensation = (reinforcement_width - reinforcement_depth) / 2

        let insert_geometry = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height, 0.10);
        let insert_geometry_left = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height, 0.10);
        let insert_geometry_right = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height, 0.10);
        let insert_geometry_back = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height, 0.10);
        let insert_material = new THREE.MeshBasicMaterial({
          color: 0x272727,
          side: THREE.DoubleSide
        });
        //insert_geometry.translate(final_displacement.x, final_displacement.y, final_displacement.z);
        //reinforcements_container.container[0]=  new THREE.Mesh(insert_geometry, insert_material);
        //reinforcements_container.container[0].name="reinforcement-wall"
        //console.log(reinforcements_container.container[0])
        //reinforcements_container.container[1]=  new THREE.Mesh(insert_geometry_left, insert_material);
        //reinforcements_container.container[1].name="heyy"
        //console.log(reinforcements_container.container[1])

        reinforcements_container.container[0] = new THREE.Mesh(insert_geometry, insert_material);
        reinforcements_container.container[1] = new THREE.Mesh(insert_geometry_left, insert_material);
        reinforcements_container.container[2] = new THREE.Mesh(insert_geometry_right, insert_material);
        reinforcements_container.container[3] = new THREE.Mesh(insert_geometry_back, insert_material);





        //  main_house_outer.wall_front.object.add( reinforcements_container.container[1]);
        // console.log(reinforcements_container.container[0])
        // console.log(reinforcements_container.container[1])

        console.log("Okay idk:")
        //console.log(main_house_outer.wall_front.object)





        reinforcements_container.container[2].name = "reinforcement-wall3"
        reinforcements_container.container[3].name = "reinforcement-wall4"



        main_house_outer.wall_front.object.add(reinforcements_container.container[0]);
        main_house_outer.wall_front.object.add(reinforcements_container.container[1]);
        main_house_outer.wall_back.object.add(reinforcements_container.container[2]);
        main_house_outer.wall_back.object.add(reinforcements_container.container[3]);



        //   remove_reinforcements(main_house_outer.wall_front)
        //   console.log("BAck wall:")
        //   remove_reinforcements(main_house_outer.wall_back)
        //   function remove_reinforcements(targeted_wall){
        //   let children = targeted_wall.object.children
        //   //console.log(children)
        //   console.log(children)
        //   for (const child of children) {
        //     if(child.name.includes("reinforcement"))
        //     {
        //       console.log(child)
        //     //main_house_outer.wall_front.object.remove(child)
        //     targeted_wall.object.remove(child)
        //   }
        //     //      //console.log(child)
        //     //
        //   }
        // }



        let rotation_0 = new THREE.Vector3(-(main_house_outer.wall_front.width / 2 - compensation), 0, -compensation)
        let rotation_1 = new THREE.Vector3(+(main_house_outer.wall_front.width / 2 - compensation), 0, -compensation)
        let rotation_2 = new THREE.Vector3(-(main_house_outer.wall_front.width / 2 - compensation), 0, +compensation)
        let rotation_3 = new THREE.Vector3(+(main_house_outer.wall_front.width / 2 - compensation), 0, +compensation)

        reinforcements_container.container[0].geometry.translate(rotation_0.x, rotation_0.y, rotation_0.z)
        reinforcements_container.container[1].geometry.translate(rotation_1.x, rotation_1.y, rotation_1.z)
        reinforcements_container.container[2].geometry.translate(rotation_2.x, rotation_2.y, rotation_2.z)
        reinforcements_container.container[3].geometry.translate(rotation_3.x, rotation_3.y, rotation_3.z)


      }

      if (false) {
        let curr_id = ""

        curr_id = reinforcements_container.container[0].id
        main_house_outer.wall_front.remove_component(curr_id)

        curr_id = reinforcements_container.container[1].id
        main_house_outer.wall_front.remove_component(curr_id)

        curr_id = reinforcements_container.container[2].id
        main_house_outer.wall_back.remove_component(curr_id)

        curr_id = reinforcements_container.container[3].id
        main_house_outer.wall_back.remove_component(curr_id)




      }




      main_house_outer.roof_front = main_house_canopy.roof_front
      main_house_outer.roof_back = main_house_canopy.roof_back
      main_house_outer.roof_right = main_house_canopy.roof_right

      main_house_outer.roof_front2 = main_house_canopy.roof_front2
      main_house_outer.roof_right2 = main_house_canopy.roof_right2
      main_house_outer.roof_back2 = main_house_canopy.roof_back2

      main_house_outer.roof = main_house_canopy.roof
      main_house_outer.roof2 = main_house_canopy.roof2

      //That is pretty bad, but let it pass for now
      menu_controller.change_roof()

      //Careful with making a cyclical call
      document.querySelector('input[name="wall-type"]').dispatchEvent(new Event('change'));
      //external_arr=new Reinforcements_boys()

    }

  }


  rebuild_roof() {
    //This code causes bugs for unknown reasons so lets get rid of it
    //main_house_outer.release_roof();
    //main_house_outer.roof_type=parseInt(document.querySelector('input[name="roof-type"]:checked').value);
    //main_house_outer.rebuild_roofs(roof_type)
  }

  change_wall_color(r = 255, g = 255, b = 255) {

    main_house_outer.wall_front.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.wall_left.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.wall_right.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.wall_back.object.material.color.setRGB(r / 255, g / 255, b / 255);


    main_house_outer.roof_front.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.roof_back.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.roof_right.object.material.color.setRGB(r / 255, g / 255, b / 255);


    main_house_outer.roof_front2.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.roof_right2.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.roof_back2.object.material.color.setRGB(r / 255, g / 255, b / 255);

  }


  change_wall() {

    const loader = new THREE.TextureLoader();

    let texture_to_check = document.querySelector('input[name="wall-color"]:checked').value
    let texture_rotated = document.querySelector('input[name="wall-type"]:checked').value

    function wall_repaint_inner(wall) {


      switch (texture_to_check) {

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

          break;
      }


      wall.texture.wrapS = THREE.ClampToEdgeWrapping;
      wall.texture.wrapT = THREE.RepeatWrapping;
      let texture_sparsity = 2
      //console.log(texture_rotated)
      //console.log(texture_rotated.includes("rotated"))
      if (texture_rotated.includes("rotated")) {

        wall.texture.repeat.set(1, wall.width * texture_sparsity);
        wall.texture.rotation = (Math.PI / 2)
      } else {
        //This is kinda a quick fix but it works
        wall.texture.repeat.set(1, wall.depth * texture_sparsity);
        wall.texture.rotation = (0)
      }


      wall.object.material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: wall.texture
      });
      wall.object.material.needsUpdate = true;
      wall.object.geometry.needsUpdate = true;
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


    if (texture_to_check == '0' || texture_to_check == '1' || texture_to_check == '2') {

      //console.log("special_case")
    } else {
      let color_value = document.querySelector('input[name="wall-color"]:checked').value
      let three_color = new THREE.Color(color_value)
      menu_controller.change_wall_color(three_color.r * 255, three_color.g * 255, three_color.b * 255)
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


  change_roof_color(r = 255, g = 255, b = 255) {
    main_house_outer.roof.object.material.color.setRGB(r / 255, g / 255, b / 255);
    main_house_outer.roof2.object.material.color.setRGB(r / 255, g / 255, b / 255);

  }

  change_roof() {


  

    const loader = new THREE.TextureLoader();
    let texture_to_check = "#13447C"
    try {
      texture_to_check = document.querySelector('input[name="roof-color"]:checked').value
    } catch (error) {
      //console.log("this is expected we choose the default")
    }



    let texture_rotated = document.querySelector('input[name="roof-type-orientation"]:checked').value

    function wall_repaint_inner(wall) {


      switch (texture_to_check) {

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

          break;
      }


      wall.texture.wrapS = THREE.ClampToEdgeWrapping;
      wall.texture.wrapT = THREE.RepeatWrapping;

      //console.log(texture_rotated)
      //console.log(texture_rotated.includes("rotated"))
      if (texture_rotated.includes("rotated")) {

        wall.texture.repeat.set(1, 2 * wall.width);
        wall.texture.rotation = (Math.PI / 2)
      } else {
        //This is kinda a quick fix but it works
        wall.texture.repeat.set(1, 2 * wall.depth);
        wall.texture.rotation = (0)
      }


      wall.object.material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        map: wall.texture
      });
      wall.object.material.needsUpdate = true;
      wall.object.geometry.needsUpdate = true;
    }

    wall_repaint_inner(main_house_outer.roof)
    wall_repaint_inner(main_house_outer.roof2)

    if (texture_to_check == '0' || texture_to_check == '1' || texture_to_check == '2') {
      //console.log("special_case")
    } else {
      //console.log("normal_case")

      let color_value = "#13447C"
      try {
        color_value = document.querySelector('input[name="roof-color"]:checked').value
      } catch (error) {
        //console.log("this is expected we choose the default")
      }
      //let color_value=document.querySelector('input[name="roof-color"]:checked').value



      let three_color = new THREE.Color(color_value)
      menu_controller.change_roof_color(three_color.r * 255, three_color.g * 255, three_color.b * 255)
    }


    setTimeout(function() {
      let change_elems=document.querySelectorAll('[class*="dynamic"] input.direction[direction="top"]')
      for(let elem of change_elems){
        elem.dispatchEvent(new Event('change'));
  
      }
  }, 1);
  }

  ohmawgawd() {
    let para = document.querySelector("#roof-color")
    para.addEventListener('click', change_color_roof)

    function change_color_roof(event) {
      let element = event.target.closest('.color-container')
      let color = element.dataset.colorindex;
      let red, green, blue;

      function color_decomposition(x) {
        let red = parseInt(x.substring(0, 2), 16)
        let green = parseInt(x.substring(2, 4), 16)
        let blue = parseInt(x.substring(4, 6), 16)
        return [red, green, blue]
      }


      [red, green, blue] = color_decomposition(color)

      main_house.roof_back.change_the_texture(null, red, green, blue)
      main_house.roof_front.change_the_texture(null, red, green, blue)
      main_house.roof_right.change_the_texture(null, red, green, blue)
      main_house.roof.change_the_texture(null, red, green, blue)
      main_house.roof_back2.change_the_texture(null, red, green, blue)
      main_house.roof_front2.change_the_texture(null, red, green, blue)
      main_house.roof_right2.change_the_texture(null, red, green, blue)
      main_house.roof2.change_the_texture(null, red, green, blue)


      main_house.wall_front.change_the_texture("  ", 0, 0, 0, 0)
      main_house.wall_right.change_the_texture(null, 0, 255, 255, 0)
      main_house.wall_back.change_the_texture(null, 0, 255, 255, 0)
      main_house.wall_left.change_the_texture(null, 0, 255, 255, 0)
      //main_house.roof.rotate_the_texture()

    }
  }

}
class Reinforcements_boys {
  constructor() {
    let reinforcement_width = 0.1
    let reinforcement_depth = 0.02
    let compensation = (reinforcement_width - reinforcement_depth) / 2

    let index_roof = parseInt(document.querySelector('input[name="roof-type"]:checked').value)
    //Change the heights based of the canopies selected

    let height_multiplier = 0.5
    let front_size = canopy_container.left_size + canopy_container.right_size
    let side_size = canopy_container.back_size + canopy_container.front_size
    let base_beam_height_modifier = Array(4).fill(0)



    if (index_roof == 5 || index_roof == 4) {
      height_multiplier = 0.25 * 0.4
    }
    if (index_roof == 1 || index_roof == 3) {
      height_multiplier = 0.087
    }
    if (index_roof == 0 || index_roof == 2) {
      //RESPONSE DEPENDANT
      height_multiplier = 0.1 //or 0.2 if blue was chosen
    }


    if (index_roof == 0 && canopy_container.right_size == 0) {

      console.log(height_multiplier)
      console.log(height_multiplier * front_size)
      base_beam_height_modifier[1] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)
      base_beam_height_modifier[3] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)

    }

    if (index_roof == 1 && canopy_container.left_size == 0) {

      console.log(height_multiplier)
      console.log(height_multiplier * front_size)
      // base_beam_height_modifier[0]=parseFloat(document.querySelector(".num-selector [name='total-height']").value)
      base_beam_height_modifier[2] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)

    }

    if (index_roof == 1 && canopy_container.right_size == 0) {

      console.log(height_multiplier)
      console.log(height_multiplier * front_size)
      // base_beam_height_modifier[0]=parseFloat(document.querySelector(".num-selector [name='total-height']").value)
      base_beam_height_modifier[3] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)

    }



    if (index_roof == 2 && canopy_container.left_size == 0) {

      console.log(height_multiplier)
      console.log(height_multiplier * front_size)
      base_beam_height_modifier[0] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)
      base_beam_height_modifier[2] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)

    }

    if (index_roof == 3 && canopy_container.left_size == 0) {

      console.log(height_multiplier)
      console.log(height_multiplier * front_size)
      // base_beam_height_modifier[0]=parseFloat(document.querySelector(".num-selector [name='total-height']").value)
      base_beam_height_modifier[0] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)

    }

    if (index_roof == 3 && canopy_container.right_size == 0) {

      console.log(height_multiplier)
      console.log(height_multiplier * front_size)
      // base_beam_height_modifier[0]=parseFloat(document.querySelector(".num-selector [name='total-height']").value)
      base_beam_height_modifier[1] = parseFloat(document.querySelector(".num-selector [name='total-height']").value)

    }




    let insert_geometry = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height + base_beam_height_modifier[0], 0.10);
    let insert_geometry_left = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height + base_beam_height_modifier[1], 0.10);
    let insert_geometry_right = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height + base_beam_height_modifier[2], 0.10);
    let insert_geometry_back = new THREE.BoxGeometry(0.10, main_house_canopy.constructor_height + base_beam_height_modifier[3], 0.10);

    // let texture_to_check = document.querySelector('input[name="wall-color"]:checked').value
    // let color_value = document.querySelector('input[name="wall-color"]:checked').value
    // let three_color = new THREE.Color(color_value)
    // console.log(three_color)


    this.insert_material = new THREE.MeshBasicMaterial({
      color: 0x272727,
      //color:three_color,
      side: THREE.DoubleSide
    });


    this.change_wall_color()

    // console.log(insert_material.color)
    // insert_material.color=new THREE.Color(insert_material.color.r*0.75,insert_material.color.g*0.75,insert_material.color.b*0.75)
    // insert_material.needsUpdate=true;
    // console.log(insert_material.color)
    //insert_material.color=color_value
    //insert_material.needsUpdate = true;
    //REVISION3

    // let texture_to_check = document.querySelector('input[name="wall-color"]:checked').value
    // let color_value = document.querySelector('input[name="wall-color"]:checked').value
    // let three_color = new THREE.Color(color_value)
    // insert_material.color=color_value

    // if (texture_to_check == '0' || texture_to_check == '1' || texture_to_check == '2') {

    //   //console.log("special_case")
    //  } else {
    //    let color_value = document.querySelector('input[name="wall-color"]:checked').value
    //    let three_color = new THREE.Color(color_value)
    //    menu_controller.change_wall_color(three_color.r * 255, three_color.g * 255, three_color.b * 255)
    //  }

    this.container = new Array(8)


    this.container[0] = new THREE.Mesh(insert_geometry, this.insert_material);
    this.container[1] = new THREE.Mesh(insert_geometry_left, this.insert_material);
    this.container[2] = new THREE.Mesh(insert_geometry_right, this.insert_material);
    this.container[3] = new THREE.Mesh(insert_geometry_back, this.insert_material);

    this.container[0].geometry.translate(0, base_beam_height_modifier[0] * 0.5, 0)
    this.container[1].geometry.translate(0, base_beam_height_modifier[1] * 0.5, 0)
    this.container[2].geometry.translate(0, base_beam_height_modifier[2] * 0.5, 0)
    this.container[3].geometry.translate(0, base_beam_height_modifier[3] * 0.5, 0)


    //console.log("Okay now i know:")
    //console.log(main_house_canopy.roof_front)




    if (index_roof == 4 || index_roof == 5) {
      // let geometry_up=new THREE.Vector3(0,0.05,0)
      // let geometry_front=new THREE.Vector3(main_house_outer.wall_front.width/2, 0, 0.05)
      // let geometry_box=new THREE.Vector3(0,0,0).add(geometry_up).add(geometry_front)

      // let insert_geometry_roof_back = new THREE.BoxGeometry(geometry_box.x, geometry_box.y,  geometry_box.z);
      // let wow=new THREE.Mesh(insert_geometry_roof_back, insert_material);
      // main_house_outer.wall_front.object.add(wow)
      // wow.geometry.rotateZ(-0.2006)
      // //console.log(parseFloat(document.querySelector(".num-selector [name='total-height']").value))

      // let translation_up=new THREE.Vector3(0,main_house_outer.wall_front.depth/2+0.30,0)
      // let translation_front=new THREE.Vector3(0, 0, 0)
      // let translation_side=new THREE.Vector3(0, 0, 0)
      // //IN this case unncessary
      // translation_side.x=0


      // let translation_total=new THREE.Vector3(0,0,0).add(translation_front).add(translation_side).add(translation_up)
      // //console.log(translation_total)
      // wow.geometry.translate(translation_total.x,translation_total.y,translation_total.z)
      // //wow.geometry.rotateZ(1.57-0.0717)
    }
    if (index_roof == 2) {
      let box_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width

      let geometry_up = new THREE.Vector3(0, 0.05, 0)
      let geometry_front = new THREE.Vector3(box_width, 0, 0.05)
      let geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);
      let wow = new THREE.Mesh(insert_geometry_roof_back, this.insert_material);
      let wow2 = new THREE.Mesh(insert_geometry_roof_back.clone(), this.insert_material);


      wow.name = "BAD-CHILD"
      wow2.name = "BAD-CHILD"



      main_house_outer.wall_front.object.add(wow)
      main_house_outer.wall_front.object.add(wow2)

      wow.geometry.rotateZ(-0.1006)
      wow2.geometry.rotateZ(-0.1006)

      let total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      let translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + height_multiplier * total_width / 2, 0)
      let translation_front = new THREE.Vector3(0, 0, 0)
      let translation_side = new THREE.Vector3(0, 0, 0)
      let canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      let translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow.geometry.translate(translation_total.x, translation_total.y, translation_total.z)
      wow2.geometry.translate(translation_total.x, translation_total.y, -main_house_outer.wall_left.width)


      let box_depth = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_left.width

      geometry_up = new THREE.Vector3(0, 0.05, 0)
      geometry_front = new THREE.Vector3(box_depth, 0, 0.05)
      geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back2 = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);

      let wow3 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      let wow4 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      wow3.name = "BAD-CHILD"
      wow4.name = "BAD-CHILD"


      wow3.geometry.rotateY(1.57)
      wow4.geometry.rotateY(1.57)

      main_house_outer.wall_right.object.add(wow3)
      main_house_outer.wall_left.object.add(wow4)

      total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      translation_front = new THREE.Vector3(0, 0, 0)
      translation_side = new THREE.Vector3(0, 0, 0)
      canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)


      wow3.visible = true
      wow4.visible = true


      let main_side_roof_up = 0
      if (!canopy_container.left_size) {
        main_side_roof_up = main_house_outer.roof_height

      }
      if (!canopy_container.right_size) {
        wow3.visible = false

      }




      translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow3.geometry.translate(0, translation_total.y, 0)
      wow4.geometry.translate(0, translation_total.y + main_side_roof_up, 0)





    }

    if (index_roof == 0) {
      let box_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width

      let geometry_up = new THREE.Vector3(0, 0.05, 0)
      let geometry_front = new THREE.Vector3(box_width, 0, 0.05)
      let geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);
      let wow = new THREE.Mesh(insert_geometry_roof_back, this.insert_material);
      let wow2 = new THREE.Mesh(insert_geometry_roof_back.clone(), this.insert_material);


      wow.name = "BAD-CHILD"
      wow2.name = "BAD-CHILD"



      main_house_outer.wall_front.object.add(wow)
      main_house_outer.wall_front.object.add(wow2)

      wow.geometry.rotateZ(+0.1006)
      wow2.geometry.rotateZ(+0.1006)

      let total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      let translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + height_multiplier * total_width / 2, 0)
      let translation_front = new THREE.Vector3(0, 0, 0)
      let translation_side = new THREE.Vector3(0, 0, 0)
      let canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      let translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow.geometry.translate(translation_total.x, translation_total.y, translation_total.z)
      wow2.geometry.translate(translation_total.x, translation_total.y, -main_house_outer.wall_left.width)


      let box_depth = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_left.width

      geometry_up = new THREE.Vector3(0, 0.05, 0)
      geometry_front = new THREE.Vector3(box_depth, 0, 0.05)
      geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back2 = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);

      let wow3 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      let wow4 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      wow3.name = "BAD-CHILD"
      wow4.name = "BAD-CHILD"


      wow3.geometry.rotateY(1.57)
      wow4.geometry.rotateY(1.57)

      main_house_outer.wall_right.object.add(wow3)
      main_house_outer.wall_left.object.add(wow4)

      total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      translation_front = new THREE.Vector3(0, 0, 0)
      translation_side = new THREE.Vector3(0, 0, 0)
      canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      //console.log(main_house_outer)
      let main_side_roof_up = 0
      if (!canopy_container.right_size) {
        main_side_roof_up = main_house_outer.roof_height
      }
      translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow3.geometry.translate(0, translation_total.y + main_side_roof_up, 0)
      wow4.geometry.translate(0, translation_total.y, 0)

      wow3.visible = true
      wow4.visible = true
      if (!canopy_container.left_size) {
        wow4.visible = false
      }

    }

    if (index_roof == 1) {
      let box_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      let geometry_up = new THREE.Vector3(0, 0.05, 0)
      let geometry_front = new THREE.Vector3(box_width, 0, 0.05)
      let geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);
      let wow = new THREE.Mesh(insert_geometry_roof_back, this.insert_material);
      let wow2 = new THREE.Mesh(insert_geometry_roof_back.clone(), this.insert_material);


      wow.name = "BAD-CHILD"
      wow2.name = "BAD-CHILD"



      main_house_outer.wall_front.object.add(wow)
      main_house_outer.wall_front.object.add(wow2)

      //wow.geometry.rotateZ(+0.1006)
      //wow2.geometry.rotateZ(+0.1006)

      let total_width = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_front.width
      let translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      let translation_front = new THREE.Vector3(0, 0, 0)
      let translation_side = new THREE.Vector3(0, 0, 0)
      let canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      let main_side_roof_up = 0
      if (!canopy_container.front_size) {
        main_side_roof_up = main_house_outer.roof_height
      }

      let translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow.geometry.translate(translation_total.x, translation_total.y, translation_total.z)
      wow2.geometry.translate(translation_total.x, translation_total.y + main_side_roof_up, -main_house_outer.wall_left.width)

      if (!canopy_container.front_size) {

        wow.visible = false;
      }

      let box_depth = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_left.width

      geometry_up = new THREE.Vector3(0, 0.05, 0)
      geometry_front = new THREE.Vector3(box_depth, 0, 0.05)
      geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back2 = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);

      let wow3 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      let wow4 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      wow3.name = "BAD-CHILD"
      wow4.name = "BAD-CHILD"


      wow3.geometry.rotateY(1.57)
      wow4.geometry.rotateY(1.57)

      let wow3_side_up = 0
      if (!canopy_container.right_size) {
        wow3.geometry.rotateX(0.08711)
        wow3_side_up = 1
      }

      let wow4_side_up = 0
      if (!canopy_container.left_size) {
        wow4.geometry.rotateX(0.08711)
        wow4_side_up = 1

      }


      main_house_outer.wall_right.object.add(wow3)
      main_house_outer.wall_left.object.add(wow4)

      total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      translation_front = new THREE.Vector3(0, 0, 0)
      translation_side = new THREE.Vector3(0, 0, 0)
      canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      //console.log(main_house_outer)

      translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow3.geometry.translate(0, translation_total.y + wow3_side_up * main_side_roof_up / 2, 0)
      wow4.geometry.translate(0, translation_total.y + wow4_side_up * main_side_roof_up / 2, 0)

      wow3.visible = true
      wow4.visible = true

    }

    if (index_roof == 3) {
      let box_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width

      let geometry_up = new THREE.Vector3(0, 0.05, 0)
      let geometry_front = new THREE.Vector3(box_width, 0, 0.05)
      let geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);
      let wow = new THREE.Mesh(insert_geometry_roof_back, this.insert_material);
      let wow2 = new THREE.Mesh(insert_geometry_roof_back.clone(), this.insert_material);


      wow.name = "BAD-CHILD"
      wow2.name = "BAD-CHILD"



      main_house_outer.wall_front.object.add(wow)
      main_house_outer.wall_front.object.add(wow2)

      //wow.geometry.rotateZ(+0.1006)
      //wow2.geometry.rotateZ(+0.1006)

      let total_width = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_front.width
      let translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      let translation_front = new THREE.Vector3(0, 0, 0)
      let translation_side = new THREE.Vector3(0, 0, 0)
      let canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      let main_side_roof_up = 0
      if (!canopy_container.front_size) {
        main_side_roof_up = main_house_outer.roof_height
      }

      let translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow.geometry.translate(translation_total.x, translation_total.y + main_side_roof_up, translation_total.z)
      wow2.geometry.translate(translation_total.x, translation_total.y, -main_house_outer.wall_left.width)

      wow2.visible = false;


      let box_depth = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_left.width

      geometry_up = new THREE.Vector3(0, 0.05, 0)
      geometry_front = new THREE.Vector3(box_depth, 0, 0.05)
      geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back2 = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);

      let wow3 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      let wow4 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      wow3.name = "BAD-CHILD"
      wow4.name = "BAD-CHILD"


      wow3.geometry.rotateY(1.57)
      wow4.geometry.rotateY(1.57)

      let wow3_side_up = 0
      if (!canopy_container.right_size) {
        wow3.geometry.rotateX(-0.08711)
        wow3_side_up = 1
      }

      let wow4_side_up = 0
      if (!canopy_container.left_size) {
        wow4.geometry.rotateX(-0.08711)
        wow4_side_up = 1

      }


      main_house_outer.wall_right.object.add(wow3)
      main_house_outer.wall_left.object.add(wow4)

      total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      translation_front = new THREE.Vector3(0, 0, 0)
      translation_side = new THREE.Vector3(0, 0, 0)
      canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      //console.log(main_house_outer)

      translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow3.geometry.translate(0, translation_total.y + wow3_side_up * main_side_roof_up / 2, 0)
      wow4.geometry.translate(0, translation_total.y + wow4_side_up * main_side_roof_up / 2, 0)

      wow3.visible = true
      wow4.visible = true


    }

    if (index_roof == 5) {
      let box_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width

      let geometry_up = new THREE.Vector3(0, 0.05, 0)
      let geometry_front = new THREE.Vector3(box_width, 0, 0.05)
      let geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);
      let wow = new THREE.Mesh(insert_geometry_roof_back, this.insert_material);
      let wow2 = new THREE.Mesh(insert_geometry_roof_back.clone(), this.insert_material);


      wow.name = "BAD-CHILD"
      wow2.name = "BAD-CHILD"



      //main_house_outer.wall_front.object.add(wow)
      //main_house_outer.wall_front.object.add(wow2)

      //wow.geometry.rotateZ(+0.1006)
      //wow2.geometry.rotateZ(+0.1006)

      let total_width = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_front.width
      let translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      let translation_front = new THREE.Vector3(0, 0, 0)
      let translation_side = new THREE.Vector3(0, 0, 0)
      let canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      let main_side_roof_up = 0
      if (canopy_container.front_size) {
        //main_house_outer.wall_front.object.add(wow)
      }
      if (canopy_container.back_size) {
        //main_house_outer.wall_front.object.add(wow2)
      }

      let translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow.geometry.translate(translation_total.x, translation_total.y + main_side_roof_up, translation_total.z)
      wow2.geometry.translate(translation_total.x, translation_total.y, -main_house_outer.wall_left.width)




      let box_depth = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_left.width


      geometry_up = new THREE.Vector3(0, 0.05, 0)
      geometry_front = new THREE.Vector3(0.5 * box_depth * 1.03, 0, 0.05)
      geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back2 = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);

      let wow3 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      let wow4 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      wow3.name = "BAD-CHILD"
      wow4.name = "BAD-CHILD"


      wow3.geometry.rotateY(1.57)
      wow4.geometry.rotateY(1.57)

      let wow3_side_up = 0

      main_side_roof_up = main_house_outer.roof_height
      if (!canopy_container.right_size) {
        wow3.geometry.rotateX(0.201)
        wow3_side_up = 1
      }

      let wow4_side_up = 0
      if (!canopy_container.left_size) {
        wow4.geometry.rotateX(0.201)
        wow4_side_up = 1
      }


      main_house_outer.wall_right.object.add(wow3)
      main_house_outer.wall_left.object.add(wow4)

      total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      translation_front = new THREE.Vector3(0, 0, 0)
      translation_side = new THREE.Vector3(0, 0, 0)
      canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      //console.log(main_house_outer)

      translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)

      wow3.visible = true
      wow4.visible = true

      let wow5 = new THREE.Mesh(wow3.geometry.clone(), this.insert_material);
      let wow6 = new THREE.Mesh(wow4.geometry.clone(), this.insert_material);

      wow5.name = "BAD-CHILD"
      wow6.name = "BAD-CHILD"

      main_house_outer.wall_right.object.add(wow5)
      main_house_outer.wall_left.object.add(wow6)


      if (!canopy_container.right_size) {
        wow5.geometry.rotateX(-2 * 0.201)
      }


      if (!canopy_container.left_size) {
        wow6.geometry.rotateX(-2 * 0.201)

      }


      wow3.geometry.translate(0, translation_total.y + wow3_side_up * main_side_roof_up / 2, translation_total.z + box_depth / 4)
      wow4.geometry.translate(0, translation_total.y + wow4_side_up * main_side_roof_up / 2, translation_total.z + box_depth / 4)

      wow5.geometry.translate(0, translation_total.y + wow3_side_up * main_side_roof_up / 2, translation_total.z - box_depth / 4)
      wow6.geometry.translate(0, translation_total.y + wow4_side_up * main_side_roof_up / 2, translation_total.z - box_depth / 4)


    }


    if (index_roof == 4) {
      let box_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width

      let geometry_up = new THREE.Vector3(0, 0.05, 0)
      let geometry_front = new THREE.Vector3(box_width, 0, 0.05)
      let geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);
      let wow = new THREE.Mesh(insert_geometry_roof_back, this.insert_material);
      let wow2 = new THREE.Mesh(insert_geometry_roof_back.clone(), this.insert_material);


      wow.name = "BAD-CHILD"
      wow2.name = "BAD-CHILD"



      //main_house_outer.wall_front.object.add(wow)
      //main_house_outer.wall_front.object.add(wow2)

      //wow.geometry.rotateZ(+0.1006)
      //wow2.geometry.rotateZ(+0.1006)

      let total_width = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_front.width
      let translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      let translation_front = new THREE.Vector3(0, 0, 0)
      let translation_side = new THREE.Vector3(0, 0, 0)
      let canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      let main_side_roof_up = 0
      if (canopy_container.front_size) {
        //main_house_outer.wall_front.object.add(wow)
      }
      if (canopy_container.back_size) {
        //main_house_outer.wall_front.object.add(wow2)
      }

      let translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)
      wow.geometry.translate(translation_total.x, translation_total.y + main_side_roof_up, translation_total.z)
      wow2.geometry.translate(translation_total.x, translation_total.y, -main_house_outer.wall_left.width)




      let box_depth = canopy_container.front_size + canopy_container.back_size + main_house_outer.wall_left.width


      geometry_up = new THREE.Vector3(0, 0.05, 0)
      geometry_front = new THREE.Vector3(0.5 * box_width * 1.03, 0, 0.05)
      geometry_box = new THREE.Vector3(0, 0, 0).add(geometry_up).add(geometry_front)

      let insert_geometry_roof_back2 = new THREE.BoxGeometry(geometry_box.x, geometry_box.y, geometry_box.z);

      let wow3 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      let wow4 = new THREE.Mesh(insert_geometry_roof_back2.clone(), this.insert_material);
      wow3.name = "BAD-CHILD"
      wow4.name = "BAD-CHILD"




      let wow3_side_up = 0

      main_side_roof_up = main_house_outer.roof_height
      if (!canopy_container.front_size) {
        wow3.geometry.rotateZ(-0.201)
        wow3_side_up = 1
      }

      let wow4_side_up = 0
      if (!canopy_container.back_size) {
        wow4.geometry.rotateZ(-0.201)
        wow4_side_up = 1
      }


      main_house_outer.wall_front.object.add(wow3)
      main_house_outer.wall_back.object.add(wow4)

      total_width = canopy_container.left_size + canopy_container.right_size + main_house_outer.wall_front.width
      translation_up = new THREE.Vector3(0, main_house_outer.wall_front.depth / 2 + 0 * height_multiplier * total_width / 2, 0)
      translation_front = new THREE.Vector3(0, 0, 0)
      translation_side = new THREE.Vector3(0, 0, 0)
      canopy_offset = (canopy_container.canopy_translation()).multiplyScalar(0.5)

      //console.log(main_house_outer)

      translation_total = new THREE.Vector3(0, 0, 0).add(translation_front).add(translation_side).add(translation_up).add(canopy_offset)

      wow3.visible = true
      wow4.visible = true

      let wow5 = new THREE.Mesh(wow3.geometry.clone(), this.insert_material);
      let wow6 = new THREE.Mesh(wow4.geometry.clone(), this.insert_material);

      wow5.name = "BAD-CHILD"
      wow6.name = "BAD-CHILD"

      main_house_outer.wall_front.object.add(wow5)
      main_house_outer.wall_back.object.add(wow6)


      if (!canopy_container.front_size) {
        wow5.geometry.rotateZ(+2 * 0.201)
      }


      if (!canopy_container.back_size) {
        wow6.geometry.rotateZ(+2 * 0.201)

      }


      wow3.geometry.translate(translation_total.x + box_width / 4, translation_total.y + wow3_side_up * main_side_roof_up / 2, 0 * translation_total.z + 0 * box_depth / 4)
      wow4.geometry.translate(translation_total.x + box_width / 4, translation_total.y + wow4_side_up * main_side_roof_up / 2, 0 * translation_total.z + 0 * box_depth / 4)

      console.log(box_width / 4)
      wow5.geometry.translate(translation_total.x - box_width / 4, translation_total.y + wow3_side_up * main_side_roof_up / 2, 0 * translation_total.z - 0 * box_depth / 4)
      wow6.geometry.translate(translation_total.x - box_width / 4, translation_total.y + wow4_side_up * main_side_roof_up / 2, 0 * translation_total.z - 0 * box_depth / 4)


    }


    let rotation_0 = new THREE.Vector3(-(main_house_outer.wall_front.width / 2 - compensation), 0, -compensation)
    let rotation_1 = new THREE.Vector3(+(main_house_outer.wall_front.width / 2 - compensation), 0, -compensation)
    let rotation_2 = new THREE.Vector3(-(main_house_outer.wall_front.width / 2 - compensation), 0, +compensation)
    let rotation_3 = new THREE.Vector3(+(main_house_outer.wall_front.width / 2 - compensation), 0, +compensation)

    this.container[0].geometry.translate(rotation_0.x, rotation_0.y, rotation_0.z)
    this.container[1].geometry.translate(rotation_1.x, rotation_1.y, rotation_1.z)
    this.container[2].geometry.translate(rotation_2.x, rotation_2.y, rotation_2.z)
    this.container[3].geometry.translate(rotation_3.x, rotation_3.y, rotation_3.z)


    // this.container[0].add(this.container[1])

    //scene_outer.remove(this.container[0])
    //scene_outer.remove(this.container[1])
    this.container[0].name = "BAD-CHILD"
    this.container[1].name = "BAD-CHILD"
    this.container[2].name = "BAD-CHILD"
    this.container[3].name = "BAD-CHILD"


    //reinforcements_container.container[2].name="reinforcement-wall3"
    //reinforcements_container.container[3].name="reinforcement-wall4"
    //console.log( main_house_outer.wall_front.object)
    main_house_outer.wall_front.object.add(this.container[0]);
    main_house_outer.wall_front.object.add(this.container[1]);
    main_house_outer.wall_back.object.add(this.container[2]);
    main_house_outer.wall_back.object.add(this.container[3]);





  }
  hide() {


    this.container[0].visible = false
    this.container[1].visible = false

    this.container[2].visible = false
    this.container[3].visible = false
    this.rebuild_garage_dimensions_hold_the_children()
  }

  readd_the_children(wall_targeted, wall_container) {
    for (let child of wall_container) {
      wall_targeted.object.add(child)
    }

  }
  change_wall_color() {



    let color_value = document.querySelector('input[name="wall-color"]:checked').value
    if (color_value == 0 || color_value == 1 || color_value == 2) {
      let color_arr = ["#969796", "#5D3E28", "#9C6329"]
      color_value = color_arr[parseInt(color_value)]
    }

    let three_color = new THREE.Color(color_value)
    let r = three_color.r * 255 * 0.915;
    let g = three_color.g * 255 * 0.915;
    let b = three_color.b * 255 * 0.915;




    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);
    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);
    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);
    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);


    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);
    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);
    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);


    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);
    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);
    this.insert_material.color.setRGB(r / 255, g / 255, b / 255);




  }

  readd_all_the_children(container_of_children) {
    this.readd_the_children(main_house_outer.wall_front, container_of_children[0])
    this.readd_the_children(main_house_outer.wall_left, container_of_children[1])
    this.readd_the_children(main_house_outer.wall_back, container_of_children[2])
    this.readd_the_children(main_house_outer.wall_right, container_of_children[3])

    this.readd_the_children(main_house_canopy.wall_front, container_of_children[4])
    this.readd_the_children(main_house_canopy.wall_left, container_of_children[5])
    this.readd_the_children(main_house_canopy.wall_back, container_of_children[6])
    this.readd_the_children(main_house_canopy.wall_right, container_of_children[7])

  }
  rebuild_garage_dimensions_hold_the_children() {

    //let big_box_of_friends=this.hold_all_the_children()
    menu_controller.rebuild_garage_dimensions()
    //this.readd_all_the_children(big_box_of_friends)

  }

  hold_children(wall_targeted) {

    //console.log("Eliminate really bad children")

    //console.log(wall_targeted.object.children)
    //console.log(wall_targeted.object.children.filter(elem => !elem.name.includes("BAD")))

    return wall_targeted.object.children.filter(elem => !elem.name.includes("BAD"))
  }
  hold_all_the_children() {

    return [
      this.hold_children(main_house_outer.wall_front),
      this.hold_children(main_house_outer.wall_left),
      this.hold_children(main_house_outer.wall_back),
      this.hold_children(main_house_outer.wall_right),


      this.hold_children(main_house_canopy.wall_front),
      this.hold_children(main_house_canopy.wall_left),
      this.hold_children(main_house_canopy.wall_back),
      this.hold_children(main_house_canopy.wall_right),

    ]

  }


}
let hide_switch = false



//Klasa odseparowujaca rendering od placementu
//Kontroller logiki scian


let menu_controller = new Menu_control()
//console.log(menu_controller)


//Interaction to add a new object
let friendly_door = new Displacement_object(main_house_outer.wall_front, 2, 2, 0.5, 0, 0, 0)
main_house_outer.wall_front.place_a_box2(friendly_door);


//Interaction with menu to the actual display to remove the object
function remove_composite_object(curr_id) {
  main_house_outer.wall_back.remove_component(curr_id)
  main_house_outer.wall_front.remove_component(curr_id)
  main_house_outer.wall_left.remove_component(curr_id)
  main_house_outer.wall_right.remove_component(curr_id)
}

function release_resources() {
  //menu_controller.add_window()
  remove_composite_object();
  main_house_outer.release();
}

function initiate_project() {

  main_house_outer = new Creation_controller_outer(10, 10, 10, 10, 10, 10, scene_outer, 4);
  menu_controller = new Menu_control()

}
//menu_controller.ohmawgawd()
function call_me() {

  const loader = new THREE.TextureLoader();





  //main_house_outer.wall_front.object.material.texture = loader.load('wall.jpg');
  //main_house_outer.wall_front.texture = loader.load('./resources/images/PWP2.jpg');
  //main_house_outer.wall_front.texture.wrapS =  THREE.ClampToEdgeWrapping;
  //main_house_outer.wall_front.texture.wrapT =THREE.RepeatWrapping;
  //main_house_outer.wall_right.texture.repeat.set( 1, 20 );
  function wall_repaint_inner(wall) {
    let texture_rotated = document.querySelector('input[name="wall-type"]:checked').value
    wall.texture = loader.load('./resources/images/PWP2.jpg');
    wall.texture.wrapS = THREE.ClampToEdgeWrapping;
    wall.texture.wrapT = THREE.RepeatWrapping;


    //console.log(texture_rotated)
    //console.log(texture_rotated.includes("rotated"))
    if (texture_rotated.includes("rotated")) {

      wall.texture.repeat.set(1, wall.width);
      wall.texture.rotation = (Math.PI / 2)
    } else {
      //This is kinda a quick fix but it works
      wall.texture.repeat.set(1, wall.depth);
      wall.texture.rotation = (0)
    }


    wall.object.material = new THREE.MeshBasicMaterial({
      side: THREE.DoubleSide,
      map: wall.texture
    });
    wall.object.material.needsUpdate = true;
    wall.object.geometry.needsUpdate = true;
  }


  wall_repaint_inner(main_house_outer.roof)
  wall_repaint_inner(main_house_outer.roof2)



  let color_value = document.querySelector('input[name="roof-color"]:checked').value
  let three_color = new THREE.Color(color_value)

  menu_controller.change_roof_color(three_color.r * 255, three_color.g * 255, three_color.b * 255)
  //menu_controller.change_roof_color(200,0,0)


  //main_house_outer.wall_front.texture.needsUpdate=true;
  //main_house_outer.wall_front.needsUpdate=true;

}
remove_composite_object(friendly_door.provide_identification())

function roof_recalculation() { //CURRENT_REVISION

  let index_roof = parseInt(document.querySelector('input[name="roof-type"]:checked').value)
  let height_multiplier = 1
  let initial_height = 0.5

  if (index_roof == 5 || index_roof == 4) {
    height_multiplier = 0.25 * 0.4
  }
  if (index_roof == 1 || index_roof == 3) {
    height_multiplier = 0.087
  }
  if (index_roof == 0 || index_roof == 2) {
    //RESPONSE DEPENDANT
    height_multiplier = 0.1 //or 0.2 if blue was chosen
  }

  if (index_roof == 0 || index_roof == 2 || index_roof == 4) {
    initial_height = parseFloat(document.querySelector(".num-selector [name='width']").value) + parseFloat(canopy_container.left_size) + parseFloat(canopy_container.right_size)
  } else {
    initial_height = parseFloat(document.querySelector(".num-selector [name='depth']").value) + parseFloat(canopy_container.front_size) + parseFloat(canopy_container.back_size)
  }

  //REVISION_DELETION

  document.querySelector(".num-selector [name='total-height']").value = height_multiplier * initial_height
}

//document.addEventListener('click',  ()=>{menu_controller.change_roof()})

document.querySelector("#add-gates").addEventListener('click', () => {
  menu_controller.add_gate()


})
document.querySelector("#add-windows").addEventListener('click', () => {
  menu_controller.add_window()
})
document.querySelector("#add-doors").addEventListener('click', () => {
  menu_controller.add_doors()
})
document.querySelector("#add-canopy").addEventListener('click', () => {
  menu_controller.add_canopy()
})

document.querySelector("#reinforcements").addEventListener('click', () => {
  reinforcement = document.querySelector("#reinforcements").checked
  if (reinforcement)(external_ara = new Reinforcements_boys())
  if (reinforcement) {
    request_clean = false
  } else {

    external_ara.hide()
  }
  //alert(reinforcement)
  //menu_controller.rebuild_garage_dimensions_hold_the_children()
})


let roof_types = document.querySelectorAll('input[name="roof-type"]')
for (let roof of roof_types) {
  roof.addEventListener('change', (evt) => {
    //Modify the sizes of the garages based on the selection of the roof type

    

    let garage_width_options = document.querySelectorAll(".num-selector select[name='depth'] option")

    let garage_height_options= document.querySelectorAll(".num-selector select[name='wall-height'] option")
    //document.querySelector(".num-selector select[name='total-height']").value = "7"


    if (evt.target.value == "1" || evt.target.value == "3") {

      let j = garage_width_options.length - 1;
      for (let i = 0; i < 4; i++) {
        //Get rid of 3 last options
        if (parseFloat(document.querySelector(".num-selector select[name='depth'] option:checked").value) > 7) {
          document.querySelector(".num-selector select[name='depth']").value = "7"
          document.querySelector(".num-selector select[name='depth']").dispatchEvent(new Event('change'));
        }
        garage_width_options[j - i].setAttribute("hidden", "")
      }
    } else {
      let j = garage_width_options.length - 1;
      for (let i = 0; i < 4; i++) {
        garage_width_options[j - i].removeAttribute("hidden")
      }
    }
    
    if (evt.target.value == "3"){
      //garage_height_options[0].removeAttribute("hidden")
      garage_height_options[1].removeAttribute("hidden")
    }
    else {
      garage_height_options[0].setAttribute("hidden", "")
      garage_height_options[1].setAttribute("hidden", "")
      document.querySelector(".num-selector select[name='wall-height']").value="2.13"
      document.querySelector(".num-selector select[name='wall-height']").dispatchEvent(new Event('change'));
    }
  })
}
for (let roof of roof_types) {
  //GUTTER DISABLING
  if(document.querySelector("#gutter").checked){
  document.querySelector("#gutter").checked=false;
  document.querySelector("#gutter").dispatchEvent(new Event('change'))}

  roof.addEventListener('change', roof_recalculation)
  roof.addEventListener('change', menu_controller.rebuild_garage_dimensions_hold_the_children)
}


let roof_types_orientation = document.querySelectorAll('input[name="roof-type-orientation"]')
let roof_colors = document.querySelectorAll('input[name="roof-color"]')
for (let roof_type_orientation of roof_types_orientation) {
  roof_type_orientation.addEventListener('change', menu_controller.change_roof)




  //CAUTION
  //document.querySelector("#reinforcements").checked=false
  // document.querySelector("#reinforcements").dispatchEvent(new Event('change'));
  // document.querySelector("#reinforcements").checked=true
  // document.querySelector("#reinforcements").dispatchEvent(new Event('change'));
  // document.querySelector("#reinforcements").checked=false
  // document.querySelector("#reinforcements").dispatchEvent(new Event('change'));

}


for (let roof_color of roof_colors) {
  roof_color.addEventListener('change', menu_controller.change_roof)
}
for (let roof_color of roof_colors) {
  roof_color.addEventListener('change', (evt) => {


    for (let i = 0; i < roof_types_orientation.length; i++) {
      roof_types_orientation[i].parentElement.style.display = 'block'
      //alert('i triggered')
    }

    if (evt.target.id == "ocynk-roof") {

      for (let i = 1; i < roof_types_orientation.length; i++) {
        roof_types_orientation[i].parentElement.style.display = 'none'
      }
      document.getElementById('ocynk-roof-rotation').checked = true
      menu_controller.change_roof()
    }


  })
}


let garage_dimension_changers = document.querySelectorAll('.num-selector.garage-rebuild select')
for (let garage_dimension of garage_dimension_changers) {
  garage_dimension.addEventListener('change', roof_recalculation)
}


let reset_status = 0

for (let garage_dimension of garage_dimension_changers) {

  garage_dimension.addEventListener('change', () => {
    menu_controller.rebuild_garage_dimensions()
    

    let erasers = document.querySelectorAll('.erase-button')
    for (let erase of erasers) {
      //erase.dispatchEvent(new Event('click'));
      //erase.click()
    }
    setTimeout(function() {
      let change_elems=document.querySelectorAll('[class*="dynamic"] input.direction[direction="top"]')
      for(let elem of change_elems){
        elem.dispatchEvent(new Event('change'));

      }
  }, 1);


    // menu_controller.gate_array=[]
    // menu_controller.window_array=[]
    // menu_controller.door_array=[]
    // document.querySelector("#add-gates").click()      


  })

}

for (let garage_dimension of garage_dimension_changers) {
  garage_dimension.addEventListener('change', recreate_foundation)
}

let wall_types = document.querySelectorAll('input[name="wall-type"]')
for (let roof of wall_types) {
  roof.addEventListener('change', menu_controller.change_wall)
}

let wall_colors = document.querySelectorAll('input[name="wall-color"]')
for (let wall_color of wall_colors) {
  wall_color.addEventListener('change', menu_controller.change_wall)
}

for (let wall_color of wall_colors) {
  wall_color.addEventListener('change', (evt) => {


    for (let i = 0; i < wall_types.length; i++) {
      wall_types[i].parentElement.style.display = 'block'
      //alert('i triggered')
    }

    if (evt.target.id == "ocynk-wall") {

      for (let i = 1; i < wall_types.length; i++) {
        wall_types[i].parentElement.style.display = 'none'
      }
      document.getElementById('ocynk-wall-rotation').checked = true
      menu_controller.change_wall()
    }


    if (reinforcement)(external_ara = new Reinforcements_boys())

  })
}

let gutter_checkbox = document.querySelector("#gutter[name='gutter']")
gutter_checkbox.addEventListener("change", () => {
  //Gutter is not controlled by the person but by the previous setup pass the walls to which to add the gutter  
  function inner_func(){
  let obiekt = scene_outer.getObjectByName("rynna_container")
  if (obiekt) {
    obiekt.removeFromParent()
  }
  obiekt = scene_outer.getObjectByName("rynna_container")
  if (obiekt) {
    obiekt.removeFromParent()
  }

  if (gutter_checkbox.checked) {
    menu_controller.add_gutter()
  }
  }
  inner_func()
  inner_func()
  inner_func()
  inner_func()
  // let obiekt = scene_outer.getObjectByName("rynna_container")
  // if (obiekt) {
  //   obiekt.removeFromParent()
  // }
  // obiekt = scene_outer.getObjectByName("rynna_container")
  // if (obiekt) {
  //   obiekt.removeFromParent()
  // }

  // if (gutter_checkbox.checked) {
  //   menu_controller.add_gutter()
  // }
  // //Gutter is not controlled by the person but by the previous setup pass the walls to which to add the gutter  


})
let gutter_select_color=document.querySelector('[name="gutter-color"]')
gutter_select_color.addEventListener("change", ()=>{
  
  //alert("calling_change")
  gutter_checkbox.dispatchEvent(new Event("change"))

})
//main_house_outer.release();
//menu_controller.release_all_objects()
//menu_controller.clear_menu()
release_resources()
initiate_project()

//Presentation-unpresentation
//menu_controller.add_canopy()


menu_controller.rebuild_garage_dimensions()



let found = new Foundation(3 + 1, 3 + 1, 1);

function recreate_foundation() {

  //get the value from the selector
  let constructor_width = parseFloat(document.querySelector(".num-selector [name='width']").value);
  let constructor_depth = parseFloat(document.querySelector(".num-selector [name='depth']").value);
  let index = parseInt(document.querySelector("[name=foundation-type]:checked").value);
  //console.log(index)
  try {
    found.remove_components()
  } catch (permission) {
    //console.log("Foundantion wasn't yet initialized")

  }

  found = new Foundation(constructor_width + 0.5, constructor_depth + 0.5, index);
  found.add_components_to_scene()
}
recreate_foundation()
//found.remove_components()
let foundation_types = document.querySelectorAll('input[name="foundation-type"]')
for (let foundation_type of foundation_types) {
  foundation_type.addEventListener('change', recreate_foundation)
}


//menu_controller.add_gate()
document.querySelector('input[name="roof-color"][value*="13"]').click()
menu_controller.change_wall()
//menu_controller.gate_array[0].change_texture()



//Presentation-Unpresentation
// found.remove_components()
// main_house_outer.roof.object.removeFromParent()
// main_house_outer.roof2.object.removeFromParent()

// main_house_outer.roof_front.object.removeFromParent()
// main_house_outer.roof_front2.object.removeFromParent()
// main_house_outer.roof_back.object.removeFromParent()
// main_house_outer.roof_back2.object.removeFromParent()

// main_house_outer.roof_right.object.removeFromParent()
// main_house_outer.roof_right2.object.removeFromParent()
// main_house_outer.roof.object.removeFromParent()
// main_house_outer.roof.object.removeFromParent()







//PRESENTATION CODE
const skyGeo2 = new THREE.SphereGeometry( 100, 32, 15 );
const skyMat2=new THREE.MeshBasicMaterial({
  //map: wall.texture,
  color: 0x87ceeb,
  side: THREE.DoubleSide
})

let sky2= new THREE.Mesh( skyGeo2, skyMat2 );
scene_outer.add( sky2 );



let grass_texture = loader.load('grass2.jpg');
grass_texture.repeat.set(20, 20);

grass_texture.wrapS = THREE.RepeatWrapping;
grass_texture.wrapT = THREE.RepeatWrapping;
grass_texture.wrapT = THREE.RepeatWrapping
grass_texture.wrapS = THREE.RepeatWrapping;

grass_texture.repeat.set(125.0, 125.0);

let dp_map = loader.load('displacement.jpg');
dp_map.repeat.set(50.0, 50.0);

const planeGeo = new THREE.PlaneGeometry( 250, 250 );
planeGeo.rotateX(Math.PI / 2);

let planeMat=new THREE.MeshPhysicalMaterial({

})
 dp_map = loader.load('dpmap.png');
    const normalMap4 =  new THREE.TextureLoader().load( './textures/golfball2.jpg' );
        const clearcoatNormaMap =  new THREE.TextureLoader().load( './textures/scratched.png' );
         planeMat = new THREE.MeshBasicMaterial( {

          //roughness: 0.5,

          side: THREE.DoubleSide,
          //normalMap: dp_map,
          //bumpMap:dp_map,
          map:grass_texture
          //clearcoatNormalMap: clearcoatNormaMap,
          // y scale is negated to compensate for normal map handedness.
          //clearcoatNormalScale: new THREE.Vector2( 2.0, - 2.0 )
        } );


let plane= new THREE.Mesh( planeGeo, planeMat );
plane.position.y=-0.01
//console.log(plane)
//console.log("heyy")
scene_outer.add( plane );
//ENDOF PRESENTATION CODE

//let big_box_of_friends=menu_controller.hold_all_the_children()
//console.log(big_box_of_friends)

//menu_controller.rebuild_garage_dimensions()

//menu_controller.readd_all_the_children(big_box_of_friends)




//a big_box_of_friends=menu_controller.hold_all_the_children()
//menu_controller.readd_all_the_children(big_box_of_friends)


document.querySelector("#add-gates").click()


//let external_arr=new Reinforcements_boys()
document.querySelector('input[name="roof-type"][value="5"]').click()
//document.querySelector("#reinforcements").click()
document.querySelector("#send-message").addEventListener('click', () => {

  let arr = ["jednospadowy prawy", "jednospadowy przód", "jednospadowy lewy", "jednospadowy tył", "dwuspadowy przód", "dwuspadowy bok"]
  let selected_roof_type = arr[parseInt(document.querySelector("[name='roof-type']:checked").value)]

  let all_dynamic_obj = document.querySelectorAll(".dynamic_gate")

  function dynamic_gate_msg(all_objects) {
    let dynamic_msg = "\n"
    for (let i = 0; i < all_objects.length; i++) {
      //console.log(all_objects)
      //console.log(all_objects[i].firstChild.innerText)
      dynamic_msg += all_objects[i].firstChild.innerText + '\n'

      let content = all_objects[i].firstChild.nextSibling.firstChild
      let numbers = content.querySelectorAll('.num-selector')

      for (let j = 0; j < numbers.length; j++) {
        //console.log(numbers[j].firstChild.innerText)
        //console.log(numbers[j].firstChild.nextSibling.value)
        dynamic_msg += numbers[j].firstChild.innerText + '\n'
        dynamic_msg += numbers[j].firstChild.nextSibling.value + '\n'

      }

      let selected_color = content.querySelector("[name*='wall-color']:checked").nextElementSibling.nextElementSibling.innerHTML
      let selected_wall_type = content.querySelector("[name*='wall-type']:checked").nextElementSibling.nextElementSibling.innerHTML
      let selected_visual_type = content.querySelector("[name*='visual-type']:checked").nextElementSibling.nextElementSibling.innerHTML

      //console.log(selected_color)
      //console.log(selected_wall_type)
      //console.log(selected_visual_type)

      dynamic_msg += ("kolorze " + selected_color) + '\n'
      dynamic_msg += selected_wall_type + '\n'
      dynamic_msg += selected_visual_type + '\n'

    }
    return dynamic_msg
  }
  let dynamic_gate = dynamic_gate_msg(all_dynamic_obj)

  function dynamic_door_msg(all_objects) {
    let dynamic_msg = ""
    for (let i = 0; i < all_objects.length; i++) {
      //console.log(all_objects)
      //console.log(all_objects[i].firstChild.innerText)
      dynamic_msg += all_objects[i].firstChild.innerText + '\n'

      let content = all_objects[i].firstChild.nextSibling.firstChild
      let numbers = content.querySelectorAll('.num-selector')

      for (let j = 0; j < numbers.length; j++) {
        //console.log(numbers[j].firstChild.innerText)
        //console.log(numbers[j].firstChild.nextSibling.value)
        dynamic_msg += numbers[j].firstChild.innerText + '\n'
        dynamic_msg += numbers[j].firstChild.nextSibling.value + '\n'

      }

      let selected_color = content.querySelector("[name*='wall-color']:checked").nextElementSibling.nextElementSibling.innerHTML
      let selected_wall_type = content.querySelector("[name*='wall-type']:checked").nextElementSibling.nextElementSibling.innerHTML
      //let selected_visual_type=content.querySelector("[name*='visual-type']:checked").nextElementSibling.nextElementSibling.innerHTML
      let selected_visual_type = content.querySelector("[name*='door-handle-orientation']:checked").nextElementSibling.nextElementSibling.innerHTML
      //console.log(selected_color)
      //console.log(selected_wall_type)
      //console.log(selected_visual_type)

      dynamic_msg += selected_color + '\n'
      dynamic_msg += selected_wall_type + '\n'
      dynamic_msg += selected_visual_type + '\n'
      //dynamic_msg+=selected_visual_type+'\n'

    }
    return dynamic_msg
  }
  all_dynamic_obj = document.querySelectorAll(".dynamic_door")
  let dynamic_door = dynamic_door_msg(all_dynamic_obj)

  function dynamic_window_msg(all_objects) {
    let dynamic_msg = ""
    for (let i = 0; i < all_objects.length; i++) {
      //console.log(all_objects)
      //console.log(all_objects[i].firstChild.innerText)
      dynamic_msg += all_objects[i].firstChild.innerText + '\n'

      let content = all_objects[i].firstChild.nextSibling.firstChild
      let numbers = content.querySelectorAll('.num-selector')

      for (let j = 0; j < numbers.length; j++) {
        //console.log(numbers[j].firstChild.innerText)
        //console.log(numbers[j].firstChild.nextSibling.value)
        dynamic_msg += numbers[j].firstChild.innerText + '\n'
        dynamic_msg += numbers[j].firstChild.nextSibling.value + '\n'

      }

      //let selected_color=content.querySelector("[name*='wall-color']:checked").nextElementSibling.nextElementSibling.innerHTML
      //let selected_wall_type=content.querySelector("[name*='wall-type']:checked").nextElementSibling.nextElementSibling.innerHTML
      //let selected_visual_type=content.querySelector("[name*='visual-type']:checked").nextElementSibling.nextElementSibling.innerHTML

      //console.log(selected_color)
      //console.log(selected_wall_type)
      //console.log(selected_visual_type)

      //dynamic_msg+=selected_color+'\n'
      //dynamic_msg+=selected_wall_type+'\n'
      //dynamic_msg+=selected_visual_type+'\n'

    }
    return dynamic_msg
  }
  all_dynamic_obj = document.querySelectorAll(".dynamic_window")
  let dynamic_window = dynamic_window_msg(all_dynamic_obj)

  function dynamic_canopy_msg(all_objects) {
    let dynamic_msg = ""
    for (let i = 0; i < all_objects.length; i++) {
      //console.log(all_objects)
      //console.log(all_objects[i].firstChild.innerText)
      dynamic_msg += all_objects[i].firstChild.innerText + '\n'

      let content = all_objects[i].firstChild.nextSibling.firstChild
      let numbers = content.querySelectorAll('.num-selector')

      for (let j = 0; j < numbers.length; j++) {
        //console.log(numbers[j].firstChild.innerText)
        //console.log(numbers[j].firstChild.nextSibling.value)
        dynamic_msg += numbers[j].firstChild.innerText + '\n'
        dynamic_msg += numbers[j].firstChild.nextSibling.value + '\n'

      }

      let selected_color=content.querySelector("[name*='wall-color']:checked").nextElementSibling.nextElementSibling.innerHTML
      //let selected_wall_type=content.querySelector("[name*='wall-type']:checked").nextElementSibling.nextElementSibling.innerHTML
      //let selected_visual_type=content.querySelector("[name*='visual-type']:checked").nextElementSibling.nextElementSibling.innerHTML

      //console.log(selected_color)
      //console.log(selected_wall_type)
      //console.log(selected_visual_type)

      dynamic_msg+=selected_color+'\n'
      //dynamic_msg+=selected_wall_type+'\n'
      //dynamic_msg+=selected_visual_type+'\n'

    }
    return dynamic_msg
  }
  all_dynamic_obj = document.querySelectorAll(".dynamic_canopy")
  let dynamic_canopy = dynamic_canopy_msg(all_dynamic_obj)

  let all_checkboxes = document.querySelectorAll("#final-object input:checked")
  let additional_info = ""
  for (checkbox of all_checkboxes) {
    additional_info += checkbox.name + '\n'

  }
  let gutter_color=document.querySelector('[name="gutter-color"] option:checked').innerText

  let foundation = document.querySelector('[name="foundation-type"]:checked').nextElementSibling.nextElementSibling.innerText

  let static_msg = `
  Imie i nazwisko:${document.querySelector("#surname").value}
  Adres email:${document.querySelector("#email").value}
  Telefon kontaktowy:${document.querySelector("#phone").value}
  Wiadomość: 
  Skonfigurował garaż ze specyfikacją: 
  Szerokość:${parseFloat(document.querySelector(".num-selector [name='width']").value)}
  Głębokość:${parseFloat(document.querySelector(".num-selector [name='depth']").value)}
  Wysokości ścian:${parseFloat(document.querySelector(".num-selector [name='wall-height']").value)};
  Kolorze ścian:${document.querySelector("[name='wall-color']:checked").nextElementSibling.src}
  Typie dachu: ${selected_roof_type} 
  Kolorze dachu:${document.querySelector("[name='roof-color']:checked").nextElementSibling.src}
  Podłożu:${foundation}
  Bramach:${dynamic_gate}
  Drzwiach:${dynamic_door}
  Oknach:${dynamic_window}
  Wiatach:${dynamic_canopy}
  oraz następujących (${all_checkboxes.length}) dodatkowych elementach:
  ${additional_info}
  Kolor rynien jeżeli są: ${gutter_color}
  `

  console.log(static_msg)
  document.querySelector("#textarea-send").value = static_msg
  document.querySelector("#mail-messenger").submit()

})
//Removal of gutters
//gutter_checkbox.click()
//let obiekt=scene_outer.getObjectByName("rynna_container")
//obiekt.removeFromParent()
//obiekt=scene_outer.getObjectByName("rynna_container")
//obiekt.removeFromParent()

