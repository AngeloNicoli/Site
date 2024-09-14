window.onload = function() {
    timer();
  }

  function timer() {
    setTimeout(setAlert, 10000);
  }
  function setAlert() {
  //alert("10 second");
  }

  // Create the scene
  const scene = new THREE.Scene();
	
  // Camera (Spheric Coordinates)
  cam_ray = 15;
  cam_teta = 0;
  cam_fi = 0;
  teta_inc =0;
  fi_inc = 0;
    
  // Create the camera
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
  Camera_Pos();

  function Camera_Pos(){
    camera.position.x = cam_ray * Math.sin(cam_teta) * Math.cos(cam_fi);
    camera.position.y = cam_ray * Math.sin(cam_teta) * Math.sin(cam_fi);
    camera.position.z = cam_ray * Math.cos(cam_teta);
    const myAxis = new THREE.Vector3(0, 1, 0);
    camera.rotateOnWorldAxis(myAxis,teta_inc);
    myAxis2 = new THREE.Vector3(1, 0, 0);
    camera.rotateOnWorldAxis(myAxis2,fi_inc);
    console.log(cam_teta);
    console.log(cam_fi);
    console.log(camera.position.x +"," + camera.position.y + "," + camera.position.z);
    //camera.rotateX(cam_fi);
    //camera.lookAt(new THREE.Vector3(0, 0, 0));
  } 

  // Create the renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth*0.8, window.innerHeight*0.8);
  //renderer.setViewport(0,0);
  // renderer.setSize(800,450);  Choose other sizes
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  document.body.appendChild(renderer.domElement);
  
  //var light = new THREE.HemisphereLight(0xf6e86d, 0x404040, 0.5); 
  //scene.add(light);
	
  //const directionalLight = new THREE.DirectionalLight( 0xffffff, 5 ); 
  //scene.add( directionalLight );

  const light = new THREE.PointLight( 0xffffff, 1, 100 );  // Use White Light
  light.position.set(0,3,+4);
  scene.add(light);

    // Create the cylinder
    const radiusTop = 1;
    const radiusBottom = 1;
    const height = 2;
    const radialSegments = 32;
    
    const geometry = new THREE.CylinderGeometry(radiusTop,radiusBottom,height,radialSegments);
    const material = new THREE.MeshLambertMaterial({wireframe: true,color: "black"});
    const cylinder = new THREE.Mesh(geometry, material);
    scene.add(cylinder); 

    const material2 = new THREE.MeshLambertMaterial({color: 0xffaa77});
    const cylinder2 = new THREE.Mesh(geometry, material2);
    scene.add(cylinder2); 
  
    const geometry3 = new THREE.PlaneGeometry( 30, 30 );
    const material3 = new THREE.MeshLambertMaterial( {color: 0xA99AA9, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( geometry3, material3 );
    scene.add(plane);
    plane.rotateX(Math.PI/1.95);
    plane.position.set(0,-1,0);

    const Axis_x_Geo = new THREE.CylinderGeometry(0.1,0.1,15,20);
    const Axis_x_Mat = new THREE.MeshBasicMaterial( {color: 0x9fc5e8, side: THREE.DoubleSide} );
    const Axis_x= new THREE.Mesh( Axis_x_Geo, Axis_x_Mat );
    scene.add(Axis_x);
    Axis_x.rotateX(Math.PI/2);

    const Axis_y_Geo = new THREE.CylinderGeometry(0.1,0.1,15,20);
    const Axis_y_Mat = new THREE.MeshBasicMaterial( {color: 0x009900, side: THREE.DoubleSide} );
    const Axis_y= new THREE.Mesh( Axis_y_Geo, Axis_y_Mat );
    scene.add(Axis_y);
    
    const Axis_z_Geo = new THREE.CylinderGeometry(0.1,0.1,15,20);
    const Axis_z_Mat = new THREE.MeshBasicMaterial( {color: 0xf44336, side: THREE.DoubleSide} );
    const Axis_z= new THREE.Mesh( Axis_z_Geo, Axis_z_Mat );
    scene.add(Axis_z);
    Axis_z.rotateZ(Math.PI/2);

    tr_x = 0;
    tr_y = 0;
    tr_z = 0;
    let timer_counter = 0;

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      cylinder.translateX(tr_x); 
      cylinder.translateY(tr_y); 
      cylinder.translateZ(tr_z); 
      cylinder2.translateX(tr_x); 
      cylinder2.translateY(tr_y); 
      cylinder2.translateZ(tr_z); 
      cylinder.rotateX(0.0);
      // light.rotation.y += 0.01;
      light.translateX(0.02);
      light.rotateY(0.02);
      //cylinder.rotation.y += 0.1;
      //cylinder2.rotation.x = 1;
      //console.log(tr_x);
      renderer.render(scene, camera);
      //document.getElementById("Position").innerHTML = parseInt(cylinder.position.x);
      document.getElementById("Position").innerHTML = "Position: (" + parseFloat(cylinder.position.x).toFixed(2)
                                                      + "," + parseFloat(cylinder.position.y.toFixed(2))
                                                      +  "," + parseFloat(cylinder.position.z.toFixed(2)) + ")";
      timer_counter += 1;
      document.getElementById("Timer").innerHTML = "Timer: " +timer_counter;
      //console.log(cylinder.position);
      //console.log(typeof(cylinder.position));
      //console.log(typeof(cylinder.position.x));
      //console.log(light.position.x);



    }   
animate();

function myFunction(coord) {
  tr_x = coord[0]; 
  tr_y = coord[1];
  tr_z = coord[2];
  //console.log(coord);
  // animate(); no (va piu' veloce)
  //camera.position.z -= 1;
}

function myFunction2(coord) {
  camera.position.x += coord[0];
  camera.position.y += coord[1];
  camera.position.z += coord[2];
}

function Cam_Rotation(Rot) {
  teta_inc = Rot[0];
  fi_inc = Rot[1];
  cam_teta += teta_inc;
  cam_fi += fi_inc;
  //camera.rotateX(cam_teta);
  //camera.rotateY(cam_fi);
  Camera_Pos()
}


function Delete_Mesh() {
 scene.remove(cylinder2);
 scene.remove(cylinder);
}

function Go_Back() {
 //window.location.href = 'http://www.google.com';
 window.location.href = "../index.html";
 
}