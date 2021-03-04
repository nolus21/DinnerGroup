

const container = document.getElementById('container-threejs-01')



var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xa0a0a0 );
//scene.fog = new THREE.Fog( 0xa0a0a0, 70, 100 );

CANVAS_WIDTH = 300   
CANVAS_HEIGHT = 300



var camera = new THREE.PerspectiveCamera( 45, CANVAS_WIDTH / CANVAS_HEIGHT , 1, 2000 );
camera.position.z = 250;
camera.lookAt( scene.position );


var renderer = new THREE.WebGLRenderer({ alpha: true }); // SETTING TRANSPARENT ...
//renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true;


const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();
container.appendChild( renderer.domElement );


var directionalLight = new THREE.DirectionalLight( 0xffeedd );
directionalLight.position.set( 0, 0, 1 ).normalize();
scene.add( directionalLight );

// model
var mesh = null;

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( "/projects/architecture/skylense/3d/" );
mtlLoader.load( 'skylense-01.mtl', function( materials ) {

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials( materials );
  objLoader.setPath( "/projects/architecture/skylense/3d/" );
  objLoader.load( 'skylense-01.obj', function ( object ) {

    mesh = object;
    mesh.position.y = 0;
    scene.add( mesh );
    object.scale.set(0.03,0.03,0.03);

  } );

} );



animate();

function animate() {

  requestAnimationFrame( animate );
/*
	if( mesh !== null ) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
  }*/

  renderer.render( scene, camera );

}





