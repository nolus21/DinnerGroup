

const container = document.getElementById('contested-territories')
// Select the canvas from the document
var canvReference = document.getElementById("my_canvas");




var scene = new THREE.Scene();
//scene.background = new THREE.Color( 0xE0E0E0 ); //switch off for transparent
//scene.fog = new THREE.Fog( 0xa0a0a0, 70, 100 );

CANVAS_WIDTH = 250      
CANVAS_HEIGHT = 250





var camera = new THREE.PerspectiveCamera( 45, CANVAS_WIDTH / CANVAS_HEIGHT , 1, 2000 );
camera.position.z = 250;
camera.lookAt( scene.position );


var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, canvas: canvReference }); // SETTING TRANSPARENT ...
//renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true;


const controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.update();
//container.appendChild( renderer.domElement );



var directionalLight = new THREE.DirectionalLight( 0xffeedd );
directionalLight.position.set( 0, 0, 1 ).normalize();
scene.add( directionalLight );

// model
var mesh = null;

var mtlLoader = new THREE.MTLLoader();
mtlLoader.setPath( "/projects/academia/contested_territories/3d/" );
mtlLoader.load( 'feed.mtl', function( materials ) {

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials( materials );
  objLoader.setPath( "/projects/academia/contested_territories/3d/" );
  objLoader.load( 'feed.obj', function ( object ) {

    mesh = object;
    mesh.position.y = -50 ;
    scene.add( mesh );
    object.scale.set(150,150,150);

  } );

} );



animate();

function animate() {

  requestAnimationFrame( animate );

	if( mesh !== null ) {
    //mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.0035;
  }

  renderer.render( scene, camera );
}










