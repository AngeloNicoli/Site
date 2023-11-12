  // Create the scene
  const scene = new THREE.Scene();

  // Create the camera
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
  camera.position.z = 6;
  camera.position.y = 2;
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  
  // Create the renderer
  const renderer = new THREE.WebGLRenderer();
  const div = document.getElementById("mycanvas");
  renderer.setSize(window.innerWidth*0.7, window.innerHeight*0.7);
  renderer.setClearColor(new THREE.Color(0xEEEEEE));

  div.appendChild(renderer.domElement);
  div.addEventListener("click", myFunction);

a =[[0],[0],[0],[0]];
mesh_array = [0];
texture_array = [['01.png'],['02.png'],['03.png'],['04.png'],['05.png'],['06.png'],
                 ['07.png'],['08.png'],['09.png'],['10.png'],['11.png'],['12.png'],
                 ['13.png'],['14.png'],['15.png']];


Position_array = [[[0],[0]],[[0],[1]],[[0],[2]],[[0],[3]],
                  [[1],[0]],[[1],[1]],[[1],[2]],[[1],[3]],
                  [[2],[0]],[[2],[1]],[[2],[2]],[[2],[3]],
                  [[3],[0]],[[3],[1]],[[3],[2]],[[3],[3]]];
console.log(texture_array);



function myFunction() {
const x = event.clientX - div.offsetLeft;
const y = event.clientY- div.offsetTop;
//const y = event.clientY - canvas.offsetTop;
console.log(x);
console.log(y);
}
   
//Scene.add( directionalLight );
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 5, 5, 5 );
scene.add( light );


function Start_Game(){
  for (let i =0; i < 15; i++){
    const texture = new THREE.TextureLoader().load(texture_array[i]);
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh_array[i] = new THREE.Mesh( geometry, material );
    scene.add(mesh_array[i]);
    mesh_array[i].position.x = Position_array[i][0];
    mesh_array[i].position.y = Position_array[i][1];
    console.log("Position x" + Position_array[i][0]);
    console.log("Position y" + Position_array[i][1]);
    console.log(i);
  }

  renderer.render(scene,camera);
} 

function Delete_Mesh() {
  //scene.remove(cone);
  //scene.remove(capsule);
  }

function Go_Back() {
//window.location.href = 'http://www.google.com';
window.location.href = "../index.html";
}

function animate() {
  requestAnimationFrame( animate );
  renderer.render( scene, camera );
  //console.log(2);
}

animate();  
