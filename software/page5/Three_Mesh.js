
// Create the scene
const scene = new THREE.Scene();

// Create the camera
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 15;
camera.position.y = 3;
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0xEEEEEE));
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 5, 5, 5 );
scene.add(light);
  

// Render the scene
function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }   

animate();

function myFunction(coord) {
  tr_x = coord[0]; 
  tr_y = coord[1];
  tr_z = coord[2];
  console.log(coord);
  // animate(); no (va piu' veloce)
   //camera.position.z -= 1;
}

function myFunction(coord) {
  tr_x = coord[0]; 
  tr_y = coord[1];
  tr_z = coord[2];
  console.log(coord);
  // animate(); no (va piu' veloce)
   //camera.position.z -= 1;
}

function myFunction2(coord) {
  camera.position.x += coord[0];
  camera.position.y += coord[1];
  camera.position.z += coord[2];
}


function Box_Geometry() {
  const geometry3 = new THREE.BoxGeometry( 2, 2, 2 );
  const material3 = new THREE.MeshLambertMaterial({color: 0xffaa00});
  const cube = new THREE.Mesh(geometry3, material3);
	scene.add(cube);
  cube.position.x =-8

  const geometry = new THREE.BoxGeometry( 2, 2, 2 );
  const edges = new THREE.EdgesGeometry( geometry );
  const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x5ffaf6 } ) );
  scene.add( line );
  line.position.x =-8;
}

function Capsule_Mesh() {
   const geometry4 = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
   const material4 = new THREE.MeshLambertMaterial({color: 0xffaa00}); 
   const capsule = new THREE.Mesh( geometry4, material4 );
   scene.add(capsule);
   capsule.position.x = -5;
}

function Circle_Mesh() {
   const geometry = new THREE.CircleGeometry(1,32); 
   const material = new THREE.MeshLambertMaterial( { color: 0xffff00 } ); 
   const circle = new THREE.Mesh( geometry, material );
   scene.add( circle )
   circle.position.x = -3;
}

function Cone_Mesh() {
  const geometry5 = new THREE.ConeGeometry( 1, 2, 32 );
  const material5 = new THREE.MeshLambertMaterial({color: 0xffaa00}); 
  const cone = new THREE.Mesh( geometry5, material5 );
  scene.add(cone);
  cone.position.x = -1;
  // cone.rotation.x = -1; 
  console.log(cone.position);
}

function Cylinder_Mesh() {
 const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32 );
 const material =new THREE.MeshLambertMaterial( {color: 0xffff00} );
 const cylinder = new THREE.Mesh( geometry, material );
 scene.add( cylinder );
 cylinder.position.x = 1;
}

function Dodecahedron_Mesh() {
  const geometry6 = new THREE.DodecahedronGeometry(1, 0);
  const material6 = new THREE.MeshLambertMaterial({color: 0xffaa00}); 
  const Dodecahedron = new THREE.Mesh( geometry6, material6 );
  scene.add(Dodecahedron);
  Dodecahedron.position.x = 3;
  // Dodecahedron.rotation.x = 1; 
  console.log(Dodecahedron.position);
}


function Extrude_Geometry(){
  const length = 0.2, width = 0.5;
  const shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(0,width);
  shape.lineTo(length, width);
  shape.lineTo(length,0);
  shape.lineTo(0,0);

  const extrudeSettings = {steps: 2,depth: 5,bevelEnabled: true, bevelThickness: 1, bevelSize: 1, bevelOffset: 0, bevelSegments: 1};

  const geometry7 = new THREE.ExtrudeGeometry( shape, extrudeSettings );
  const material7 = new THREE.MeshLambertMaterial( { color: 0xaafbbb } );
  const mesh = new THREE.Mesh( geometry7, material7 ) ;
  scene.add(mesh);
}

//function Shape_Geometry() {
 //const x = 0, y = 0;
 //const heartShape = new THREE.Shape();
  //heartShape.moveTo( x + 1, y + 1 );
  //heartShape.moveTo( x + 6, y + 6 );
  //heartShape.moveTo( x - 6, y);
  //heartShape.bezierCurveTo( x - 4, y + 2 , x + 2, y, x, y);

  //const geometry = new THREE.ShapeGeometry( heartShape );
  //const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //const mesh = new THREE.Mesh( geometry, material ) ;
  //scene.add( mesh );
//}


function Lathe_Geometry() {
  const points = [];
  for ( let i = 0; i < 10; i ++ ) {
    points.push(new THREE.Vector2( Math.sin( i * 0.2 ) * 1 + 0.5, ( i - 0.5 ) * 0.2 ));
  }
  console.log(points);
  console.log(points[0]);
  const geometry11 = new THREE.LatheGeometry( points );
  const material11 = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
  const lathe = new THREE.Mesh( geometry11, material11 );
  scene.add( lathe );
  lathe.rotateX(Math.PI/8);
}


function OctahedronGeometry() {
  const geometry3 = new THREE.OctahedronGeometry(3,0);
  const material3 = new THREE.MeshLambertMaterial({wireframe: false, color: 0xffaa00});
  const Octahedron = new THREE.Mesh(geometry3, material3);
	scene.add(Octahedron);
  Octahedron.position.x =-8;

}

function Plane_Geometry() {
  const geometry = new THREE.PlaneGeometry( 1, 1 );
  const material = new THREE.MeshLambertMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
  const plane = new THREE.Mesh( geometry, material );
  scene.add( plane );
}

function Polyhedron_Geometry() {
  const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
  ];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
  ];
 const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 6, 2 );
}

function Ring_Geometry() {
  const geometry9 = new THREE.RingGeometry( 1, 5, 32 );
  const material9 = new THREE.MeshLambertMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
  const ring = new THREE.Mesh( geometry9, material9 );
  scene.add( ring );
  ring.rotateX(Math.PI/8);
}

function Sphere_Geometry() {
  const geometry5 = new THREE.SphereGeometry( 2, 32, 16 );
  const material5 = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
  const sphere = new THREE.Mesh( geometry5, material5 );
  scene.add( sphere );
  sphere.position.x =-8;
}

function Tetrahedron_Geometry() {
}

function Torus_Geometry() {
  const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
  const material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
  const torus = new THREE.Mesh( geometry, material );
  scene.add( torus );
}

function TorusKnotGeometry() {
  const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
  const material = new THREE.MeshLambertMaterial( { color: 0xffff00 } );
  const torusKnot = new THREE.Mesh( geometry, material );
  scene.add( torusKnot );
}

function Tube_Geometry() {
  class CustomSinCurve extends THREE.Curve {
  constructor( scale = 1 ) {
  super();
  this.scale = scale;
}

getPoint( t, optionalTarget = new THREE.Vector3() ) {

  const tx = t * 3 - 1.5;
  const ty = Math.sin( 2 * Math.PI * t );
  const tz = 0;

  return optionalTarget.set( tx, ty, tz ).multiplyScalar( this.scale );

}

}
const path = new CustomSinCurve( 10 );
const geometry = new THREE.TubeGeometry( path, 20, 2, 8, false );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );
}



function WireframeGeometry() {
  const geometry = new THREE.SphereGeometry( 5, 32, 16);
  const wireframe = new THREE.WireframeGeometry( geometry );
  const line = new THREE.LineSegments( wireframe );
  line.material.depthTest = false;
  line.material.opacity = 0.7;
  line.material.transparent = true;

scene.add( line );  
}

function Delete_Mesh() {
  scene.remove(cone);
  scene.remove(capsule);
  }


  function Go_Back() {
 //window.location.href = 'http://www.google.com';
 window.location.href = "../index.html";
}

