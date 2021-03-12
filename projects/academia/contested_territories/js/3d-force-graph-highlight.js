
  





        
let gData = null;  // < ---- data variable made here.
fetch('../datasets/pigindustry06_no_territories.json').then(res => res.json()).then(jsonData => {
gData = jsonData; // <script ---- fetch response data assigned to data variable
   

   
                    // link parent/children
                    // link parent/children
                    // link parent/children
                    const nodesById = Object.fromEntries(gData.nodes.map(node => [node.id, node]));
                    gData.links.forEach(link => {
                        nodesById[link.source].childLinks.push(link); //appending childLinks for purposes of expandable nodes

                        const a = nodesById[link.source];
                        const b = nodesById[link.target];
                        console.log(a)
                        console.log(b)
                        !a.neighbors && (a.neighbors = []); //appending neighbors for purposes of highlight
                        !b.neighbors && (b.neighbors = []);
                        a.neighbors.push(b);
                        b.neighbors.push(a);

                        !a.links && (a.links = []); //appending neighbor links for purposes of highlight
                        !b.links && (b.links = []);
                        a.links.push(link);
                        b.links.push(link);
                        
                    });
                    console.log(gData.nodes)
                    console.log(gData.links)

                    const highlightNodes = new Set();
                    const highlightLinks = new Set();
                    let hoverNode = null;
                    // link parent/children
                    // link parent/children
                    // link parent/children
                    // link parent/children
                  

//------------------------------------------------------------------------------------------------------------------------------------------------------


// function defining HIGLIGHT
// function defining HIGLIGHT
// function defining HIGLIGHT
        function updateHighlight() {
      // trigger update of highlighted objects in scene
      Graph
        .nodeColor(Graph.nodeColor())
        .linkWidth(Graph.linkWidth())
        .linkDirectionalParticles(Graph.linkDirectionalParticles());
    }
// function defining HIGLIGHT
// function defining HIGLIGHT
// function defining HIGLIGHT


/*
//------------------------------------------------------------------------------------------------------------------------------------------------------
document.getElementById('camerahelper').addEventListener('click', event => {

  
    //var scene = Graph.scene()
    var camera = Graph.camera()

    const params = {
			
				cameraHelper: false,
			};

                cameraHelper = new THREE.CameraHelper( camera );
                scene.add( cameraHelper );
                //console.log(cameraHelper)

                getLookAt = new THREE.Vector3( 0, 0, -1 ).applyQuaternion( camera.quaternion ).add( camera.position );
                console.log(getLookAt)
                

                cameraHelper.update();
                animateCamera()
                function animateCamera() {}
})

*/

//------------------------------------------------------------------------------------------------------------------------------------------------------

/*
document.getElementById('cam').addEventListener('click', event => {

 /*     
let framesPerSecond = 0.5;
function animateCAM() {
    setTimeout(function() {*/
/*    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    //document.body.appendChild(renderer.domElement);
    camera = Graph.camera()
    scene = Graph.scene()
    let tick = 0
    //requestAnimationFrame(animateCAM, 1);
    renderer.render(scene, camera);
    //THREE.WindowResize(renderer, camera);
    console.log("position");
    console.log(camera.position);
    console.log("rotation");
    console.log(camera.rotation);
   // }, 1000 / framesPerSecond)
//}
//animateCAM()


})

*/
//------------------------------------------------------------------------------------------------------------------------------------------------------
   


 
document.getElementById('farmer').addEventListener('click', event => {
      
var node = gData.nodes;
//set up amount
nodesfarmer = node.slice(0,3)

        camerapath2(); 
        function camerapath2() {
           
        nodesfarmer.forEach(node => {
            node.y = 0;
        })
        let {nodes, links} = Graph.graphData()
        
          //var nodes = gData.nodes
                   
                    var renderer = new THREE.WebGLRenderer();
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    //document.body.appendChild(renderer.domElement);
                    camera = Graph.camera()
                    scene = Graph.scene()
                    let tick = 0
  
                   // Graph.controls().autoRotate = true // in
                    Graph.controls().enableDamping = false


                    /*var curve = new THREE.CatmullRomCurve3([
                                new THREE.Vector3(node[0].x, node[0].y, node[0].z),
                                new THREE.Vector3(node[1].x, node[1].y, node[1].z),
                                new THREE.Vector3(node[2].x, node[2].y, node[2].z),
                                new THREE.Vector3(node[3].x, node[3].y, node[3].z),
                                new THREE.Vector3(node[4].x, node[4].y, node[4].z),
                                new THREE.Vector3(node[5].x, node[5].y, node[5].z),
                                new THREE.Vector3(node[6].x, node[6].y, node[6].z),
                                new THREE.Vector3(node[7].x, node[7].y, node[7].z),
                              
                              ]);*/

                     var curve = new THREE.CatmullRomCurve3([
                                new THREE.Vector3(node[0].x, node[0].y, node[0].z),
                                new THREE.Vector3(node[1].x, node[1].y, node[1].z),
                                new THREE.Vector3(node[2].x, node[2].y, node[2].z),
                   
                              
                              ]);
                    

                    init();
                    //animate();
                    //let curve
                   
        
                    function init() {
                            //spline = new THREE.Spline()
                            
                           // var node = gData.nodes;
                              
                            actorsCount = 3-1
                              

                      
                              curvePoints = curve.getPoints(actorsCount); //vertexes of the line
                              LineGeometry = new THREE.BufferGeometry().setFromPoints( curvePoints );
                             
                              material = new THREE.LineBasicMaterial({
                                color: 0xFF0000,
                                linewidth: 50,
                              });
        
                              splineObject = new THREE.Line(LineGeometry, material); 
                              scene.add(splineObject)
                              
                             console.log(splineObject)
                              console.log(curve)
        
                            
                            const sphereGeomtry = new THREE.SphereBufferGeometry( 1 );
                            const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.2, transparent:true } );

                            const spacedPoints = curve.getPoints( actorsCount ); //vertexes of the line

                            for ( point of spacedPoints ) {

                                const helper = new THREE.Mesh( sphereGeomtry, sphereMaterial );
                                helper.position.copy( point );
                                scene.add( helper );

                            }
        


//SCROLLING TEST
                                /*document.getElementById('3d-graph').addEventListener("wheel", function(e) {
                                console.log("scrolled scrolled scrolled scrolled scrolled")

                                // code to increment object.position.z 
                                }, true);*/
                                               
                                
// INCREMENTER
                                var renderer = new THREE.WebGLRenderer();
                                renderer.setSize(window.innerWidth, window.innerHeight);
                               
                                var scrollCount = 0;
                                var camPosIndex = 0;

                                document.getElementById('3d-graph').addEventListener('wheel', function(e){

                                if(e.wheelDelta<0 && scrollCount<500){
                                    scrollCount++;
                                }

                                else if(e.wheelDelta>0 && scrollCount>1){
                                    scrollCount--;
                                }
                                //console.log(scrollCount)

                            
                                // SWITCH THIS ON TO CONTROL!
update()
                                function update() {

                                    //const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
			                        //scene.add( camera );

                                   // Graph.scene().controls.enabled = false; // Re-enable controls
                                  
                                    let {nodes, links} = Graph.graphData()

                                    renderer.render(scene, camera);
                                   // requestAnimationFrame(update);
                                    //camPosIndex += 0.001;
                                    divide = 10
                                    camPosIndex = scrollCount-1 // divide //0.01 etc
                                    console.log(camPosIndex)
                                                                            
                                    var camPos = curve.getPoint(camPosIndex); //  / 1000
                                    console.log(camPos)


                                      /*      
                                                        //rollercoaster - flickery //FLY MODE!!!! ON
                                                        camera.position.x = camPos.x;
                                                        camera.position.y = camPos.y; //+50
                                                        camera.position.z = camPos.z;

                                                        let tangent = curve.getTangent(camPosIndex);
                                                        camera.rotation.y = -tangent.x;

                                                        pointtolookat = curve.getPoint((camPosIndex+1/divide))
                                                        console.log(pointtolookat)

                                                        camera.lookAt(pointtolookat);
                                                        //rollercoaster - flickery
                                    */


                                    /*             
                                                        //node to node - flickery? ORIBT MODE!
                                                        let tangent = curve.getTangent(camPosIndex);
                                                        camera.rotation.y = -tangent.x;
                                                        pointtolookat = curve.getPoint((camPosIndex+1/divide))
                                                        console.log(pointtolookat)
                                                        //  const distance = 10;
                                                        // const distRatio = 1 + distance/Math.hypot(node[counter].x, node[counter].y, node[counter].z);
                                                        //const cameraPosition = {x: 10, y: 50, z: -30};
                                                        Graph.cameraPosition({ x: camPos.x, y: camPos.y, z: camPos.x }, // new position - calculates zoom in
                                                        pointtolookat,//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                                                                    // ms transition duration
                                                            1000     );
                                                        Graph.camera().updateMatrixWorld()
                                    */

                                    //node to node - flickery? 
                                    //ORBIT MODE MEANS FUNKY ROTATION 
                                    // FLY MODE MEANS THE LOOK AT NEEDS TO BE SET UPD
                                    let tangent = curve.getTangent(camPosIndex);
                                    //camera.rotation.y = -tangent.x;
                                    //camera.rotation.order = "XYZ"
                                    //camera.rotation.x = node[camPosIndex].farmerCAMxT
                                    //camera.rotation.y = node[camPosIndex].farmerCAMyT
                                    //camera.rotation.z = node[camPosIndex].farmerCAMzT
                                    //pointtolookat = node[camPosIndex]
                                    pointtolookat = {x: node[camPosIndex].farmerCAMxT, y: node[camPosIndex].farmerCAMyT, z: node[camPosIndex].farmerCAMzT}
                                    console.log(pointtolookat)
                                    const distance = 10;
                                    const distRatio = 1 + distance/Math.hypot(node[camPosIndex].farmerCAMx, node[camPosIndex].farmerCAMy, node[camPosIndex].farmerCAMz);
                                    //const cameraPosition = {x: 10, y: 50, z: -30};
                                    Graph.cameraPosition({x: node[camPosIndex].farmerCAMx* distRatio, y:node[camPosIndex].farmerCAMy* distRatio, z:node[camPosIndex].farmerCAMz* distRatio }, // new position - calculates zoom in
                                    pointtolookat,//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                                                // ms transition duration
                                        8000     );
                                    
                                    Graph.camera().updateMatrixWorld()
        

                                }    
                                }, true)



                    }                                
                               

                  }
                })


document.getElementById('bee').addEventListener('click', event => {
      
      var node = gData.nodes;
      //set up amount
      nodesBee =    [node[6],
                    node[4],
                    node[2],
                    node[1],
                    ]
      
              camerapath2(); 
              function camerapath2() {

              // WE ARE NOT PROJECTING HERE THE STORY!!!
              
             /* nodesBee.forEach(node => {
                  node.y = 0;
              })*/
              let {nodes, links} = Graph.graphData()
              
                //var nodes = gData.nodes
                         
                          var renderer = new THREE.WebGLRenderer();
                          renderer.setSize(window.innerWidth, window.innerHeight);
                          //document.body.appendChild(renderer.domElement);
                          camera = Graph.camera()
                          scene = Graph.scene()
                          let tick = 0
        
                         // Graph.controls().autoRotate = true // in
                          Graph.controls().enableDamping = false
      
      
                          /*var curve = new THREE.CatmullRomCurve3([
                                      new THREE.Vector3(node[0].x, node[0].y, node[0].z),
                                      new THREE.Vector3(node[1].x, node[1].y, node[1].z),
                                      new THREE.Vector3(node[2].x, node[2].y, node[2].z),
                                      new THREE.Vector3(node[3].x, node[3].y, node[3].z),
                                      new THREE.Vector3(node[4].x, node[4].y, node[4].z),
                                      new THREE.Vector3(node[5].x, node[5].y, node[5].z),
                                      new THREE.Vector3(node[6].x, node[6].y, node[6].z),
                                      new THREE.Vector3(node[7].x, node[7].y, node[7].z),
                                    
                                    ]);*/
      
                           var curve = new THREE.CatmullRomCurve3([
                                      new THREE.Vector3(node[6].x, node[6].y, node[6].z),
                                      new THREE.Vector3(node[4].x, node[4].y, node[4].z),
                                      new THREE.Vector3(node[2].x, node[2].y, node[2].z),
                                      new THREE.Vector3(node[1].x, node[1].y, node[1].z),
                         
                                    
                                    ]);
                          
      
                          init();
                          //animate();
                          //let curve
                         
              
                          function init() {
                                  //spline = new THREE.Spline()
                                  
                                 // var node = gData.nodes;
                                    
                                  actorsCount = 4-1
                                    

                                  curvePoints = curve.getPoints(actorsCount); //vertexes of the line
                                  LineGeometry = new THREE.BufferGeometry().setFromPoints( curvePoints );
                           


                                   
                                    material = new THREE.LineBasicMaterial({
                                      color: 0x6AA84F,
                                      linewidth: 60,
                                    });
              
                                    splineObject = new THREE.Line(LineGeometry, material); 
                                    scene.add(splineObject)
                                    
                                   console.log(splineObject)
                                    console.log(curve)
              
                                  
                                  const sphereGeomtry = new THREE.SphereBufferGeometry( 1 );
                                  const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x6AA84F, opacity: 0.2, transparent:true } );
      
                                  const spacedPoints = curve.getPoints( actorsCount ); //vertexes of the line
      
                                  for ( point of spacedPoints ) {
      
                                      const helper = new THREE.Mesh( sphereGeomtry, sphereMaterial );
                                      helper.position.copy( point );
                                      scene.add( helper );
      
                                  }
              
      
      
      //SCROLLING TEST
                                      /*document.getElementById('3d-graph').addEventListener("wheel", function(e) {
                                      console.log("scrolled scrolled scrolled scrolled scrolled")
      
                                      // code to increment object.position.z 
                                      }, true);*/
                                                     
                                      
      // INCREMENTER
                                      var renderer = new THREE.WebGLRenderer();
                                      renderer.setSize(window.innerWidth, window.innerHeight);
                                     
                                      var scrollCount = -1;
                                      var camPosIndex = 0;
      
                                      document.getElementById('3d-graph').addEventListener('wheel', function(e){
      
                                      if(e.wheelDelta<0 && scrollCount<500){
                                          scrollCount++;
                                      }
      
                                      else if(e.wheelDelta>0 && scrollCount>1){
                                          scrollCount--;
                                      }
                                      //console.log(scrollCount)
      
                                  
                                      // SWITCH THIS ON TO CONTROL!
update()
                                      function update() {
      
                                          //const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
                                          //scene.add( camera );
      
                                         // Graph.scene().controls.enabled = false; // Re-enable controls
                                        
                                          let {nodes, links} = Graph.graphData()
      
                                          renderer.render(scene, camera);
                                         // requestAnimationFrame(update);
                                          //camPosIndex += 0.001;
                                          divide = 10
                                          //camPosIndex = scrollCount-1 // divide //0.01 etc

                                          var camPosIndexList = [6,4,2,1]
                                          camPosIndex = camPosIndexList[scrollCount]
                                          console.log(camPosIndex)

                                          //camPosIndexLength = camPosIndex.length;
                                         /* for (var i = 0; i < camPosIndexLength; i++) {
                                              console.log(myStringArray[i]);
                                              //Do something
                                          }


                                          var myStringArray = ["Hello","World"];
                                          var arrayLength = myStringArray.length;
                                          for (var i = 0; i < arrayLength; i++) {
                                              console.log(myStringArray[i]);
                                              //Do something
                                          }*/

                                          console.log(camPosIndex)
                                                                                  
                                          var camPos = curve.getPoint(camPosIndex); //  / 1000
                                          console.log(camPos)

      
                                            /*      
                                                              //rollercoaster - flickery //FLY MODE!!!! ON
                                                              camera.position.x = camPos.x;
                                                              camera.position.y = camPos.y; //+50
                                                              camera.position.z = camPos.z;
      
                                                              let tangent = curve.getTangent(camPosIndex);
                                                              camera.rotation.y = -tangent.x;
      
                                                              pointtolookat = curve.getPoint((camPosIndex+1/divide))
                                                              console.log(pointtolookat)
      
                                                              camera.lookAt(pointtolookat);
                                                              //rollercoaster - flickery
                                          */
      
      
                                          /*             
                                                              //node to node - flickery? ORIBT MODE!
                                                              let tangent = curve.getTangent(camPosIndex);
                                                              camera.rotation.y = -tangent.x;
                                                              pointtolookat = curve.getPoint((camPosIndex+1/divide))
                                                              console.log(pointtolookat)
                                                              //  const distance = 10;
                                                              // const distRatio = 1 + distance/Math.hypot(node[counter].x, node[counter].y, node[counter].z);
                                                              //const cameraPosition = {x: 10, y: 50, z: -30};
                                                              Graph.cameraPosition({ x: camPos.x, y: camPos.y, z: camPos.x }, // new position - calculates zoom in
                                                              pointtolookat,//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                                                                          // ms transition duration
                                                                  1000     );
                                                              Graph.camera().updateMatrixWorld()
                                          */
      
                                          //node to node - flickery? 
                                          //ORBIT MODE MEANS FUNKY ROTATION 
                                          // FLY MODE MEANS THE LOOK AT NEEDS TO BE SET UPD
                                          let tangent = curve.getTangent(camPosIndex);
                                          //camera.rotation.y = -tangent.x;
                                          //camera.rotation.order = "XYZ"
                                          //camera.rotation.x = node[camPosIndex].farmerCAMxT
                                          //camera.rotation.y = node[camPosIndex].farmerCAMyT
                                          //camera.rotation.z = node[camPosIndex].farmerCAMzT
                                          //pointtolookat = node[camPosIndex]
                                          pointtolookat = {x: node[camPosIndex].beeCAMxT, y: node[camPosIndex].beeCAMyT, z: node[camPosIndex].beeCAMzT}
                                          console.log(pointtolookat)
                                          const distance = 10;
                                          const distRatio = 1 + distance/Math.hypot(node[camPosIndex].beeCAMx, node[camPosIndex].beeCAMy, node[camPosIndex].beeCAMz);
                                          //const cameraPosition = {x: 10, y: 50, z: -30};
                                          Graph.cameraPosition({x: node[camPosIndex].beeCAMx* distRatio, y:node[camPosIndex].beeCAMy* distRatio, z:node[camPosIndex].beeCAMz* distRatio }, // new position - calculates zoom in
                                          pointtolookat,//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                                                      // ms transition duration
                                              8000     );
                                          
                                          Graph.camera().updateMatrixWorld()
              
      
                                      }    
                                      }, true)
      
      
      
                          }                                
                                     
      
                        }
                      })
      

document.getElementById('dipteryx').addEventListener('click', event => {
      
      var node = gData.nodes;
      //set up amount
    


      nodesDipteryx =    [node[10],
                    node[9],
                    node[1],
                    ]
      
              camerapath2(); 
              function camerapath2() {

            //PROJECTION FOR EQUAL LEVEL IS SWITCHED OFF
             
         /*   nodesDipteryx.forEach(node => {
                  node.y = 0;
              })*/
              let {nodes, links} = Graph.graphData()
              
                //var nodes = gData.nodes
                         
                          var renderer = new THREE.WebGLRenderer();
                          renderer.setSize(window.innerWidth, window.innerHeight);
                          //document.body.appendChild(renderer.domElement);
                          camera = Graph.camera()
                          scene = Graph.scene()
                          let tick = 0
        
                         // Graph.controls().autoRotate = true // in
                          Graph.controls().enableDamping = false
      
      
                          /*var curve = new THREE.CatmullRomCurve3([
                                      new THREE.Vector3(node[0].x, node[0].y, node[0].z),
                                      new THREE.Vector3(node[1].x, node[1].y, node[1].z),
                                      new THREE.Vector3(node[2].x, node[2].y, node[2].z),
                                      new THREE.Vector3(node[3].x, node[3].y, node[3].z),
                                      new THREE.Vector3(node[4].x, node[4].y, node[4].z),
                                      new THREE.Vector3(node[5].x, node[5].y, node[5].z),
                                      new THREE.Vector3(node[6].x, node[6].y, node[6].z),
                                      new THREE.Vector3(node[7].x, node[7].y, node[7].z),
                                    
                                    ]);*/
      
                           var curve = new THREE.CatmullRomCurve3([
                                      new THREE.Vector3(node[10].x, node[10].y, node[10].z),
                                      new THREE.Vector3(node[9].x, node[9].y, node[9].z),
                                      new THREE.Vector3(node[1].x, node[1].y, node[1].z),
                         
                                    
                                    ]);
                          
      
                          init();
                          //animate();
                          //let curve
                         
              
                          function init() {
                                  //spline = new THREE.Spline()
                                  
                                 // var node = gData.nodes;
                                    
                                  actorsCount = 3-1
                                    

                                  curvePoints = curve.getPoints(actorsCount); //vertexes of the line
                                  LineGeometry = new THREE.BufferGeometry().setFromPoints( curvePoints );

                                  
                                    material = new THREE.LineBasicMaterial({
                                      color: 0xE69138,
                                      linewidth: 60,
                                    });
              
                                    splineObject = new THREE.Line(LineGeometry, material); 
                                    scene.add(splineObject)
                                    
                                   console.log(splineObject)
                                    console.log(curve)
              
                                  
                                  const sphereGeomtry = new THREE.SphereBufferGeometry( 1 );
                                  const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xE69138 } );
      
                                  const spacedPoints = curve.getPoints( actorsCount ); //vertexes of the line
      
                                  for ( point of spacedPoints ) {
      
                                      const helper = new THREE.Mesh( sphereGeomtry, sphereMaterial );
                                      helper.position.copy( point );
                                      scene.add( helper );
      
                                  }
              
      
      
      //SCROLLING TEST
                                      /*document.getElementById('3d-graph').addEventListener("wheel", function(e) {
                                      console.log("scrolled scrolled scrolled scrolled scrolled")
      
                                      // code to increment object.position.z 
                                      }, true);*/
                                                     
                                      
      // INCREMENTER
                                      var renderer = new THREE.WebGLRenderer();
                                      renderer.setSize(window.innerWidth, window.innerHeight);
                                     
                                      var scrollCount = -1;
                                      var camPosIndex = 0;



                                     
      
                                      document.getElementById('3d-graph').addEventListener('wheel', function(e){
      
                                      if(e.wheelDelta<0 && scrollCount<500){
                                          scrollCount++;
                                      }
      
                                      else if(e.wheelDelta>0 && scrollCount>1){
                                          scrollCount--;
                                      }
                                      //console.log(scrollCount)
      
                                  
                                      // SWITCH THIS ON TO CONTROL!
 update()
                                      function update() {
      
                                          //const camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 500 );
                                          //scene.add( camera );
      
                                         // Graph.scene().controls.enabled = false; // Re-enable controls
                                        
                                          let {nodes, links} = Graph.graphData()
      
                                          renderer.render(scene, camera);
                                         // requestAnimationFrame(update);
                                          //camPosIndex += 0.001;
                                          divide = 10
                                          var camPosIndexList = [10,9,1]
                                          camPosIndex = camPosIndexList[scrollCount]
                                          //console.log(camPosIndex)
                                          //camPosIndex = scrollCount-1 // divide //0.01 etc
                                          console.log(camPosIndex)
                                                                                  
                                          var camPos = curve.getPoint(camPosIndex); //  / 1000
                                          console.log(camPos)
      
      
                                            /*      
                                                              //rollercoaster - flickery //FLY MODE!!!! ON
                                                              camera.position.x = camPos.x;
                                                              camera.position.y = camPos.y; //+50
                                                              camera.position.z = camPos.z;
      
                                                              let tangent = curve.getTangent(camPosIndex);
                                                              camera.rotation.y = -tangent.x;
      
                                                              pointtolookat = curve.getPoint((camPosIndex+1/divide))
                                                              console.log(pointtolookat)
      
                                                              camera.lookAt(pointtolookat);
                                                              //rollercoaster - flickery
                                          */
      
      
                                          /*             
                                                              //node to node - flickery? ORIBT MODE!
                                                              let tangent = curve.getTangent(camPosIndex);
                                                              camera.rotation.y = -tangent.x;
                                                              pointtolookat = curve.getPoint((camPosIndex+1/divide))
                                                              console.log(pointtolookat)
                                                              //  const distance = 10;
                                                              // const distRatio = 1 + distance/Math.hypot(node[counter].x, node[counter].y, node[counter].z);
                                                              //const cameraPosition = {x: 10, y: 50, z: -30};
                                                              Graph.cameraPosition({ x: camPos.x, y: camPos.y, z: camPos.x }, // new position - calculates zoom in
                                                              pointtolookat,//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                                                                          // ms transition duration
                                                                  1000     );
                                                              Graph.camera().updateMatrixWorld()
                                          */
      
                                          //node to node - flickery? 
                                          //ORBIT MODE MEANS FUNKY ROTATION 
                                          // FLY MODE MEANS THE LOOK AT NEEDS TO BE SET UPD
                                          let tangent = curve.getTangent(camPosIndex);
                                          //camera.rotation.y = -tangent.x;
                                          //camera.rotation.order = "XYZ"
                                          //camera.rotation.x = node[camPosIndex].farmerCAMxT
                                          //camera.rotation.y = node[camPosIndex].farmerCAMyT
                                          //camera.rotation.z = node[camPosIndex].farmerCAMzT
                                          //pointtolookat = node[camPosIndex]
                                          pointtolookat = {x: node[camPosIndex].amazonCAMxT, y: node[camPosIndex].amazonCAMyT, z: node[camPosIndex].amazonCAMzT}
                                          console.log(pointtolookat)
                                          const distance = 10;
                                          const distRatio = 1 + distance/Math.hypot(node[camPosIndex].amazonCAMx, node[camPosIndex].amazonCAMy, node[camPosIndex].amazonCAMz);
                                          //const cameraPosition = {x: 10, y: 50, z: -30};
                                          Graph.cameraPosition({x: node[camPosIndex].amazonCAMx* distRatio, y:node[camPosIndex].amazonCAMy* distRatio, z:node[camPosIndex].amazonCAMz* distRatio }, // new position - calculates zoom in
                                          pointtolookat,//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                                                      // ms transition duration
                                              8000     );
                                          
                                          Graph.camera().updateMatrixWorld()
              
      
                                      }    
                                      }, true)
      
      
      
                          }                                
                                     
      
                        }
                      })
      
        //HERE STORY TELLING!!!!
        //HERE STORY TELLING!!!!
        //HERE STORY TELLING!!!!
/*
        document.getElementById('story').addEventListener('click', event => {
        var node = gData.nodes;
        const distance = 10;
        const distRatio = 1 + distance/Math.hypot(node[counter].x, node[counter].y, node[counter].z);
        const cameraPosition = {x: 10, y: 50, z: -30};
        Graph.cameraPosition({ x: node[counter].x * distRatio-25, y: node[counter].y * distRatio+10, z: node[counter].z * distRatio+25 }, // new position - calculates zoom in
        node[counter],//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                3000  // ms transition duration
                );
                
                //Description
                const description = new THREE.SpriteText(node[counter].description);
                description.material.depthWrite = false; // make sprite background transparent
                description.color = 'black' //node.color;
                description.textHeight = 1;
                //spriteanot.setAttribute("style", "color: blue; font-size: 16px;")
                //spriteanot.position.set(0,0,0);
                description.position.x = node[counter].x + 2
                description.position.y = node[counter].y + 8
                description.position.z = node[counter].z + 6

                scene.add(description);
                description.material.opacity = 0.1;
                duration = 3

                TweenMax.fromTo(description.material, duration * 0.5, {opacity:0}, {opacity: 1});
                TweenMax.to(description.material, duration * 0.25, {opacity:0, delay:duration * 2});


                //Annotation 1
                const annot1 = new THREE.SpriteText(node[counter].annot1);
                annot1.material.depthWrite = false; // make sprite background transparent
                annot1.color = 'black' //node.color;
                annot1.textHeight = 1;
                //spriteanot.setAttribute("style", "color: blue; font-size: 16px;")
                //spriteanot.position.set(0,0,0);
                annot1.position.x = node[counter].x + 2
                annot1.position.y = node[counter].y - 10
                annot1.position.z = node[counter].z + 6

                scene.add(annot1);
                annot1.material.opacity = 0.1;
                duration = 3

                TweenMax.fromTo(annot1.material, duration * 0.5, {opacity:0}, {opacity: 1});
                TweenMax.to(annot1.material, duration * 0.25, {opacity:0, delay:duration * 2});


                // ANNOTATION 3D APPEARING xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


                new THREE.MTLLoader()
                        .setPath( '../02_info/')
                        .load( node[counter].info1_mtl, function ( materials ) {
                        materials.preload();
                        new THREE.OBJLoader(  )
                        .setMaterials( materials )
                        .setPath( '../02_info/')
                        .load( node[counter].info1_obj, function ( object ) {
                        object.scale.set(20,20,20);
                                 
                            // object.scale.set(12, 12);
                            object.position.x = node[counter].x
                            object.position.y = node[counter].y 
                            object.position.z = node[counter].z
                            //console.log(object.__threeObj.material)
                            console.log(object)
                            //object.__threeObj.material.transparent = true
                            scene.add(object)
                            
                            //set up opacity to 0 for each element
                            for (index = 0; index < object.children.length; ++index) {
                                console.log(index)
                                object.children[index].material.opacity = 0.0
                                duration = 5
                                TweenMax.fromTo(object.children[index].material, duration * 0.5, {opacity:0}, {opacity: 1});
                                TweenMax.to(object.children[index].material, duration * 0.25, {opacity:0, visible:false, delay:duration * 2});
                            }
                                }, function ( xhr ) {
                                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                                },
                                // called when loading has errors
                                function ( error ) {
                                console.log( 'An error happened' );
                                        })
                                /* duration = 3
                                  TweenMax.fromTo(sprite.material, duration * 0.5, {opacity:0}, {opacity: 1});
                                  TweenMax.to(sprite.material, duration * 0.25, {opacity:0, delay:duration * 2});*/
/*                         })
                              // ANNOTATION 3D APPEARING xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        });*/


        //HERE STORY TELLING!!!!          //HERE STORY TELLING!!!!            //HERE STORY TELLING!!!!
  
       
      
//------------------------------------------------------------------------------------------------------------------------------------------------------

        // HERE SET UP FOR EXPANDABLE NODES         // HERE SET UP FOR EXPANDABLE NODES       // HERE SET UP FOR EXPANDABLE NODES

        const getPrunedTree = (rootId) => {
            
            const visibleNodes = [];
            const visibleLinks = [];

            (function traverseTree(node = nodesById[rootId]) {
                visibleNodes.push(node);
                if (node.collapsed) return;
                visibleLinks.push(...node.childLinks);
                node.childLinks
                    .map(link => ((typeof link.target) === 'object') ? link.target : nodesById[link.target]) // get child node
                    .forEach(traverseTree);
            })(); // IIFE

            return { nodes: visibleNodes, links: visibleLinks };
        };
       
        // HERE SET UP FOR EXPANDABLE NODES          // HERE SET UP FOR EXPANDABLE NODES           // HERE SET UP FOR EXPANDABLE NODES
      
//------------------------------------------------------------------------------------------------------------------------------------------------------

        //const initData = getPrunedTree("Denmark")
        //console.log(gData.nodes)

//------------------------------------------------------------------------------------------------------------------------------------------------------      
        // HERE SET CAMERA SETUP .... not really
        // HERE SET CAMERA SETUP
        camera = new THREE.PerspectiveCamera( 25, 1, 20, 4000 )
        var starting = []
        var lastNodeClick = 1000;
//------------------------------------------------------------------------------------------------------------------------------------------------------        


  function adddisplay(node) {
  //let {nodes, links} = Graph.graphData()
  //var camera = Graph.camera()
  //var scene = Graph.scene()


          let renderer;
          let cameraOrtho, sceneOrtho;

          let spriteTL, spriteTR, spriteBL, spriteBR, spriteC;

          let mapC;

          let group;

          init();
          animate();

          function init() {

            const width = window.innerWidth;
            const height = window.innerHeight;

            /*camera = new THREE.PerspectiveCamera( 60, width / height, 1, 2100 );
            camera.position.z = 1500;
            scene = new THREE.Scene();
            scene.fog = new THREE.Fog( 0x000000, 1500, 2100 );*/


            cameraOrtho = new THREE.OrthographicCamera( - width / 2, width / 2, height / 2, - height / 2, 1, 10 );
            cameraOrtho.position.z = 10;
            sceneOrtho = new THREE.Scene();
            const amount = 200;

            const radius = 500;
            const textureLoader = new THREE.TextureLoader();

            textureLoader.load( "../06_pilot/Crops_Info-16.jpg", createHUDSprites );
            const mapB = textureLoader.load( "../06_pilot/Crops_Info-16.jpg" );
            mapC = textureLoader.load( "../06_pilot/Crops_Info-17.jpg" );

            group = new THREE.Group();

            const materialC = new THREE.SpriteMaterial( { map: mapC, color: 0xffffff, fog: true } );
            const materialB = new THREE.SpriteMaterial( { map: mapB, color: 0xffffff, fog: true } );


            // renderer

            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.autoClear = false; // To allow render overlay on top of sprited sphere

          
            //renderer.render(scene, camera);
            renderer.clearDepth();
            renderer.render(sceneOrtho, cameraOrtho);
    


            document.body.appendChild( renderer.domElement );

            //

            window.addEventListener( 'resize', onWindowResize, false );

          }

          function createHUDSprites( texture ) {

        const material = new THREE.SpriteMaterial( { map: texture } );

        const width = material.map.image.width;
        const height = material.map.image.height;

        spriteTL = new THREE.Sprite( material );
        spriteTL.center.set( 0.0, 1.0 );
        spriteTL.scale.set( width, height, 1 );
        sceneOrtho.add( spriteTL );

        spriteTR = new THREE.Sprite( material );
        spriteTR.center.set( 1.0, 1.0 );
        spriteTR.scale.set( width, height, 1 );
        sceneOrtho.add( spriteTR );

        spriteBL = new THREE.Sprite( material );
        spriteBL.center.set( 0.0, 0.0 );
        spriteBL.scale.set( width, height, 1 );
        sceneOrtho.add( spriteBL );

        spriteBR = new THREE.Sprite( material );
        spriteBR.center.set( 1.0, 0.0 );
        spriteBR.scale.set( width, height, 1 );
        sceneOrtho.add( spriteBR );

        spriteC = new THREE.Sprite( material );
        spriteC.center.set( 0.5, 0.5 );
        spriteC.scale.set( width, height, 1 );
        sceneOrtho.add( spriteC );

        updateHUDSprites();

        }

        function updateHUDSprites() {

        const width = window.innerWidth / 2;
        const height = window.innerHeight / 2;

        spriteTL.position.set( - width, height, 1 ); // top left
        spriteTR.position.set( width, height, 1 ); // top right
        spriteBL.position.set( - width, - height, 1 ); // bottom left
        spriteBR.position.set( width, - height, 1 ); // bottom right
        spriteC.position.set( 0, 0, 1 ); // center

        }

function onWindowResize() {

const width = window.innerWidth;
const height = window.innerHeight;

camera.aspect = width / height;
camera.updateProjectionMatrix();

cameraOrtho.left = - width / 2;
cameraOrtho.right = width / 2;
cameraOrtho.top = height / 2;
cameraOrtho.bottom = - height / 2;
cameraOrtho.updateProjectionMatrix();

updateHUDSprites();

renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

requestAnimationFrame( animate );
render();

}

function render() {

const time = Date.now() / 1000;

for ( let i = 0, l = group.children.length; i < l; i ++ ) {

  const sprite = group.children[ i ];
  const material = sprite.material;
  const scale = Math.sin( time + sprite.position.x * 0.01 ) * 0.3 + 1.0;

  let imageWidth = 1;
  let imageHeight = 1;

  if ( material.map && material.map.image && material.map.image.width ) {

    imageWidth = material.map.image.width;
    imageHeight = material.map.image.height;

  }
/*
  sprite.material.rotation += 0.1 * ( i / l );
  sprite.scale.set( scale * imageWidth, scale * imageHeight, 1.0 );

  if ( material.map !== mapC ) {

    material.opacity = Math.sin( time + sprite.position.x * 0.01 ) * 0.4 + 0.6;

  }
*/
}
/*
group.rotation.x = time * 0.5;
group.rotation.y = time * 0.75;
group.rotation.z = time * 1.0;*/

renderer.clear();
renderer.render( scene, camera );
renderer.clearDepth();
renderer.render( sceneOrtho, cameraOrtho );

}





}



// end of adddisplay

//------------------------------------------------------------------------------------------------------------------------------------------------------


function camerapath(node){

let {nodes, links} = Graph.graphData()


//var camera, scene, renderer, mesh;
var camera = Graph.camera()
var scene = Graph.scene()

var time = 0;
var newPosition = new THREE.Vector3();
var matrix = new THREE.Matrix4();


init();
animate();


function init() {





//camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
//camera.position.set( 0, 2, -2 );

//scene = new THREE.Scene();
camera.lookAt( scene.position );

var geometry = new THREE.BoxBufferGeometry( 500, 500, 500 );
var material = new THREE.MeshNormalMaterial();

mesh = new THREE.Mesh( geometry, material );
mesh.add( camera );
//scene.add( mesh );

var gridHelper = new THREE.GridHelper(500, 500 );
scene.add( gridHelper );

scene.add( new THREE.AxesHelper() );

renderer = new THREE.WebGLRenderer( { antialias: true } );
//renderer.setSize( window.innerWidth, window.innerHeight );
//document.body.appendChild( renderer.domElement );

}

function animate() {

requestAnimationFrame( animate );

time += 0.01;

newPosition.x = Math.cos( time );
newPosition.z = Math.sin( time );

mesh.lookAt( newPosition );

mesh.position.copy( newPosition );

renderer.render( scene, camera );

}


}

//------------------------------------------------------------------------------------------------------------------------------------------------------

function addpilotlayer(node) {
  let {nodes, links} = Graph.graphData()
  var camera = Graph.camera()
  var scene = Graph.scene()
  
  // fixed distance from camera to the object
var camera, scene, renderer, mesh, goal, spriteglobal;
var time = 0;
var newPosition = new THREE.Vector3();
var matrix = new THREE.Matrix4();
var temp = new THREE.Vector3;
const obj = new THREE.Mesh()

init();
animate();


function init() {

    
// ANOTATION 1!!!!



/*



                const spriteanot = new SpriteText(node.description);
                spriteanot.material.depthWrite = false; // make sprite background transparent
                spriteanot.color = 'black' //node.color;
                spriteanot.textHeight = 1;
                //spriteanot.setAttribute("style", "color: blue; font-size: 16px;")               
                scene.add(spriteanot);
                spriteanot.material.opacity = 0.1;

                //node.__threeObj.material[0].transparent = true;
      
                TweenMax.fromTo(spriteanot.material, duration * 0.5, {opacity:0}, {opacity: 1});
                TweenMax.to(spriteanot.material, duration * 0.25, {opacity:0, delay:duration * 2});


                mesh = spriteanot
               /* x = camera.position.x
                y = camera.position.y
                z = camera.position.z*/
                //mesh.position.set(x,y,z);

    




    
// ANOTATION 1!!!!
      const obj = new THREE.Mesh(
       new THREE.SphereGeometry(6, 32, 32),
       new THREE.MeshLambertMaterial({ depthWrite: false, transparent: false, opacity: 1 })
     );
     // add video sprite as child to spheres
     video = document.getElementById('video');
     video.play();
 
     const vidtxt = new THREE.VideoTexture(video);
     const mat = new THREE.SpriteMaterial({ map: vidtxt, blending: THREE.MultiplyBlending  });
     const sprite = new THREE.Sprite(mat);
     sprite.scale.set(15 , 15);
     //if (obj.name === "Pig") {
     const vidnode = obj.add(sprite)
     obj.position.x = node
     scene.add(obj);
      spriteglobal = obj

}


function animate() {

requestAnimationFrame( animate );
/*

mesh.position.copy( camera.position );
mesh.rotation.copy( camera.rotation );
mesh.updateMatrix();
camera.updateMatrixWorld()
mesh.position.lerp(temp,0.2)


mesh.translateZ( - 50 );*/




spriteglobal.position.copy( camera.position );
spriteglobal.rotation.copy( camera.rotation );
spriteglobal.position.lerp(temp,0.2)
//sprite.updateMatrix();
spriteglobal.translateZ( 0 );

}


}

// ANOTATION 1!!!! image sprite 





function playmusic(node){

  let {nodes, links} = Graph.graphData()
  
            // create an AudioListener and add it to the camera
            const listener = new THREE.AudioListener();
            camera.add( listener );

                // create a global audio source
                const sound = new THREE.Audio( listener );

                // load a sound and set it as the Audio object's buffer
                  const audioLoader = new THREE.AudioLoader();
                  audioLoader.load( node.audio, function( buffer ) {
                    sound.setBuffer( buffer );
                    sound.setLoop( true );
                    sound.setVolume( 0.5 );
                    sound.play();
                  });

}

        //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES 
        var nodes = gData.nodes

        function blurnodes(node) {
        let { nodes, links } = Graph.graphData();
        var itemsWithoutCurrent = nodes.filter(function(x) { return x !== node; });
        console.log(nodes)
        console.log(itemsWithoutCurrent)
        
      
        // make current node textured
        if (node.colorTex) {
        colorTex = node.__threeObj.colorTex
        var textureA = new THREE.TextureLoader().load(colorTex);
        node.__threeObj.traverse (function (child) {
            if (child instanceof THREE.Mesh) {
              child.material.map = textureA;
              duration = 5
              TweenMax.fromTo(child.material, duration * 0.5, {opacity:0.5}, {opacity: 1});
            }
         });

        } else{
          node.__threeObj.traverse (function (child) {
            if (child instanceof THREE.Mesh) {
              child.material.opacity = 1;
              //duration = 5
              //TweenMax.fromTo(child.material, duration * 0.5, {opacity:0.5}, {opacity: 1});
            }
         });


                
               console.log(node.neighbors[0].__threeObj.material)
               console.log(node)

        }

       
        
         

         
        //make all the rest saturated
        for (index = 0; index < itemsWithoutCurrent.length; ++index) {
        var object = itemsWithoutCurrent[index].__threeObj
        var desaturateTex = itemsWithoutCurrent[index].__threeObj.desaturateTex;
        var textureB = new THREE.TextureLoader().load(desaturateTex);

        // if texture exists in json file do this - else
        if (object.colorTex) {
        object.traverse (function (child) {
            if (child instanceof THREE.Mesh) {
              child.material.map = textureB;
              duration = 5
              TweenMax.fromTo(child.material, duration * 0.5, {opacity:0.1}, {opacity: 1});
            }
         });

        } else {

          object.traverse (function (child) {
            if (child instanceof THREE.Mesh) {
              child.material.opacity = 0;
              //duration = 5
              //TweenMax.fromTo(child.material, duration * 0.5, {opacity:0.5}, {opacity: 1});
            }
         });


                
               console.log(node.neighbors[0].__threeObj.material)
               console.log(node)

          } 

            console.log('xxxxxxxxx')
          }

      Graph.graphData({ nodes, links });
    } 
 
  
    //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES //BLUR NODES 







//------------------------------------------------------------------------------------------------------------------------------------------------------        

    //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH 
    //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH 
    //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH //GRAPH 

        const elem = document.getElementById('3d-graph');
        const Graph = ForceGraph3D({ controlType: 'orbit' })(elem)
        //.linkColor(link => link.color ? 'black' : 'black')
        //.dagMode('td')
        .graphData(gData) //starting actors
        .cameraPosition({x:50,y:150,z:150})
            .linkColor(() => 'rgba(181, 181, 181,0.8)')
            .nodeColor(node => highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)' : 'rgba(153, 153, 153,0.8)')
            .linkWidth(link => highlightLinks.has(link) ? 0.4 : 0.2) //thicker //thiner
            .linkDirectionalParticles(link => highlightLinks.has(link) ? 3 : 0)
            .linkDirectionalParticleWidth(0.5)
            .linkDirectionalParticleSpeed(0.008)
            .nodeVal(.03)
            
            
            //.nodeColor(node => !node.childLinks.length ? 'green' : node.collapsed ? 'red' : 'yellow')
            .onNodeHover(node => {
                  // no state change
                  if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

                  highlightNodes.clear();
                  highlightLinks.clear();
                  if (node) {
                    highlightNodes.add(node);
                    node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
                    node.links.forEach(link => highlightLinks.add(link));
                  };

                  if (node) {
                    node.neighbor
                  }
                  hoverNode = node || null;

                  updateHighlight();


             



    // ANOTATION 1!!!!


 
               



                })
                  
           
           
            .nodeLabel(node => `<span style="color: ${node.color}; font-size: 15px">${node.name} </span>`) // //`<span style="color: ">${node.color}</span>`) //THE QUESTION IS COLOR DEFINED BY JSON OR THE CODED CHILD PARENT RELATIONS???.... CHILDREN? OR..
            .linkLabel(link => `<span style="color: ${link.color}; font-size: 12px">${link.name} </span>`) //`<span style="color: purple">${d.name}</span>`)
            .onNodeClick(node => {
                const distance = 10;
                const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
                Graph.cameraPosition(
                { x: node.x * distRatio-25, y: node.y * distRatio+10, z: node.z * distRatio+25 }, // new position - calculates zoom in
                node,//{x: 50, y: -50, z: 0}, // lookAt ({ x, y, z })
                3000  // ms transition duration
                );
                !node
             /* //move objects children objects!!!!!!!!!!!!!!!!
                children = node.childLinks
                console.log(node.childLinks)
                console.log(children.length)

              
                var index;
                
                for (index = 0; index < children.length; ++index) {
                    console.log(children[index]);
                    console.log(index)
                    for (var i = 1; i < 10; i+=10) {
                    children[index].target.fx = node.x+i;
                    }
                    
                    children[index].target.fy = node.y;
                    children[index].target.fz = node.z;
                }

 
*/

/*
const obj = new THREE.Mesh(
     new THREE.SphereGeometry(500, 32, 32),
     new THREE.MeshLambertMaterial({ depthWrite: false, transparent: true, opacity: 0.5 })
     );
     obj.name = node.id;
     var actor = obj.name;*/
     //const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);


camera = Graph.camera()
/*
var vFOV = THREE.MathUtils.degToRad( camera.fov ); // convert vertical fov to radians

var height = 2 * Math.tan( vFOV / 2 ) * dist; // visible height

var width = height * camera.aspect;           // visible width*/



     duration = 5;

     
     const texture = new THREE.TextureLoader()
     .setPath( '../06_pilot/')
     .load( node.infosprite );
         const mat = new THREE.SpriteMaterial({ map: texture, alphaTest: 0.5, transparent:true  });
         const sprite = new THREE.Sprite(mat);
         console.log(window.innerWidth)
         console.log(window.innerHeight)

         //sprite.position.set(-(window.innerWidth), (window.innerHeight), 0)
        sprite.position.x = node.x - 35
        sprite.position.y = node.y
        sprite.position.z = node.z - 20
         sprite.scale.set(30 , 30, 30);
         scene.add(sprite)
         sprite.material.opacity = 0.1;
                
        TweenMax.fromTo(sprite.material, duration * 0.5, {opacity:0}, {opacity: 1});
         TweenMax.to(sprite.material, duration * 0.25, {opacity:0, delay:duration * 2});



                // ANOTATION 1!!!!
                const spriteanot = new THREE.SpriteText(node.description);
                spriteanot.material.depthWrite = false; // make sprite background transparent
                spriteanot.color = 'black' //node.color;
                spriteanot.textHeight = 1;
                //spriteanot.setAttribute("style", "color: blue; font-size: 16px;")
                //spriteanot.position.set(0,0,0);
                spriteanot.position.x = node.x + 2
                spriteanot.position.y = node.y + 8
                spriteanot.position.z = node.z + 6
                scene.add(spriteanot);
                spriteanot.material.opacity = 0.1;
               



      
                
               
                
                //node.__threeObj.material[0].transparent = true;
      
                TweenMax.fromTo(spriteanot.material, duration * 0.5, {opacity:0}, {opacity: 1});
                TweenMax.to(spriteanot.material, duration * 0.25, {opacity:0, delay:duration * 2});
                // ANOTATION 1!!!!

               


//FUNCTIONS!!!!
               // adddisplay(node)
                //addpilotlayer(node)
              
                playmusic(node)

                //camerapath(node)
                blurnodes(node);
                console.log(blurnodes(node));
                console.log(camera)





// ANNOTATION 3D APPEARING xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


new THREE.MTLLoader()
        .setPath( '../02_info/')
        .load( node.info1_mtl, function ( materials ) {
            materials.preload();
            new THREE.OBJLoader(  )
            .setMaterials( materials )
            .setPath( '../02_info/')
            .load( node.info1_obj, function ( object ) {
              object.scale.set(20,20,20);
                
                
                //object.scale.set(12, 12);
                
                object.position.x = node.x
                object.position.y = node.y
                object.position.z = node.z
                //console.log(object.__threeObj.material)
                console.log(object)
                //object.__threeObj.material.transparent = true
                scene.add(object)
                
                //set up opacity to 0 for each element
                for (index = 0; index < object.children.length; ++index) {
                    console.log(index)
                  
                    object.children[index].material.opacity = 0.0

                    duration = 3
                    TweenMax.fromTo(object.children[index].material, duration * 0.5, {opacity:0}, {opacity: 1});
                    TweenMax.to(object.children[index].material, duration * 0.25, {opacity:0, visible:false, delay:duration * 2});

                }

                console.log(object)
                console.log(object.materialLibraries)

                }, function ( xhr ) {
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                },
                // called when loading has errors
                function ( error ) {
                console.log( 'An error happened' );
                        })
                        
               /* duration = 3
                TweenMax.fromTo(sprite.material, duration * 0.5, {opacity:0}, {opacity: 1});
                TweenMax.to(sprite.material, duration * 0.25, {opacity:0, delay:duration * 2});*/


              

              })


              // ANNOTATION 3D APPEARING xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx






                
                
              })

            .onNodeRightClick(node => {
                node.collapsed = !node.collapsed; // toggle collapse state
                Graph.graphData(getPrunedTree("DK_field")); //colapsed state
                
            })

            .nodeThreeObject(node => {
     
     /*if (node.id ==="Denmark"){
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.SphereGeometry(7, 32, 32),
     new THREE.MeshLambertMaterial({ depthWrite: false, transparent: true, opacity: 0.5 })
     new THREE.MTLLoader()
   .setPath( '../01_models_3d/')
   .load( 'dk_map.mtl', function ( materials ) {
   materials.preload();
     new THREE.OBJLoader(  )
     .setMaterials( materials )
     .setPath( '../01_models_3d/')
     .load( 'dk_map.obj', function ( object ) {
                 object.scale.set(20,20,20);
         //object.position.y = - 95;
       obj.add( object )
                 }, function ( xhr ) {

             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

         },
                 // called when loading has errors
                 function ( error ) {
                 console.log( 'An error happened' );
         })});
     

     return obj;
     }*/

     // Territories
    if (node.id ==="DK_field"){
   const loader = new THREE.OBJLoader();
   const obj = new THREE.Mesh()
   new THREE.MTLLoader()
         .setPath( '../01_models_3d/')
         .load( 'agricultural_land.mtl', function ( materials ) {
         materials.preload();     
             new THREE.OBJLoader(  )
             .setMaterials( materials )
             .setPath( '../01_models_3d/')
             .load( 'agricultural_land.obj', function ( object ) {
                 object.scale.set(100,100,100);
                 //object.position.y = - 95;
                 obj.add( object )
                     }, function ( xhr ) {
                     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                     },
                     // called when loading has errors
                     function ( error ) {
                     console.log( 'An error happened' );
                 })});
   return obj;
   }

   else if (node.id ==="Amazon"){
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'amazon_3d.mtl', function ( materials ) {
     materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'amazon_3d.obj', function ( object ) {
             object.scale.set(100,100,100);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});
     return obj;
     }

   else if (node.id ==="Amazon_M"){
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'amazon_M.mtl', function ( materials ) {
     materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'amazon_M.obj', function ( object ) {
             object.scale.set(100,100,100);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});
     return obj;
     }

     else if (node.id ==="Biodiversity"){

const loader = new THREE.OBJLoader();
const obj = new THREE.Mesh()
new THREE.MTLLoader()
.setPath( '../01_models_3d/')
.load( 'biodiversity.mtl', function ( materials ) {
 materials.preload();
 new THREE.OBJLoader(  )
 .setMaterials( materials )
 .setPath( '../01_models_3d/')
 .load( 'biodiversity.obj', function ( object ) {
     object.scale.set(20,20,20);
     //object.position.y = - 95;
     obj.add( object )
     }, function ( xhr ) {
     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
     },
     // called when loading has errors
     function ( error ) {
     console.log( 'An error happened' );
             })});


//const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);



/*//const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
const texture = new THREE.TextureLoader().load( '../info_sprites/pig_info_1.jpg' );
//const invert = new THREE.TextureLoader().load( '../info_sprites/pig_info_1_invert.jpg' );
const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending, alphaTest: 0.1,  side: THREE.DoubleSide, opacity: 0.5, depthWrite:false, transparent: true, alpha: true   });
const sprite = new THREE.Sprite(mat);
sprite.position.set(0,5,-5);
sprite.scale.set(12, 12);
const vidnode = obj.add(sprite)

sprite.material.opacity = 0.1;
duration = 3
TweenMax.fromTo(sprite.material, duration * 0.5, {opacity:0}, {opacity: 1});
TweenMax.to(sprite.material, duration * 0.25, {opacity:0, delay:duration * 2});*/




/*

const info1 = new THREE.Mesh()
new THREE.MTLLoader()
.setPath( '../01_models_3d/')
.load( 'Biodiversity_info1.mtl', function ( materials ) {
 materials.preload();
 new THREE.OBJLoader(  )
 .setMaterials( materials )
 .setPath( '../01_models_3d/')
 .load( 'Biodiversity_info1.obj', function ( object ) {
   object.scale.set(20,20,20);
     //information1.position.y = - 95;
     info1.add( object )
     object.position.set(0,5,-5);
     
     object.scale.set(12, 12);
     obj.add(object)
     console.log(object.materials)
     }, function ( xhr ) {
     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
     },
     // called when loading has errors
     function ( error ) {
     console.log( 'An error happened' );
             })
             
     var current = {
     opacity: 1
 };

 new TWEEN.Tween( current )
   .to( { opacity: 0 }, 2000 )
   .onUpdate( function () {
       object.material.opacity = current.opacity;
   } )
   .start();
}*/

/*duration = 3
TweenMax.fromTo(information1.material, duration * 0.5, {opacity:0}, {opacity: 1});
TweenMax.to(information1.material, duration * 0.25, {opacity:0, delay:duration * 2});*/






          /*   );*/








/*const texture = new THREE.TextureLoader()
.setPath( '../01_models_3d/')
.load( 'Biodiversity_info1.mtl')
//const invert = new THREE.TextureLoader().load( '../info_sprites/pig_info_1_invert.jpg' );
const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending, alphaTest: 0.1,  side: THREE.DoubleSide, opacity: 0.5, depthWrite:false, transparent: true, alpha: true   });
const sprite = new THREE.Sprite(mat);
sprite.position.set(0,5,-5);
sprite.scale.set(12, 12);
const vidnode = obj.add(sprite)*/




// add text sprite as child
/* const spriteanot = new SpriteText(node.description);
spriteanot.material.depthWrite = false; // make sprite background transparent
spriteanot.color = 'black' //node.color;
spriteanot.textHeight = 1;
//spriteanot.position.set(0,0,0);
spriteanot.position.x = obj.position.x + 1 
spriteanot.position.y = obj.position.y + 1 
vidnode.add(spriteanot);*/
//https://github.com/vasturiano/three-spritetext


return obj;
}

else if (node.id ==="Agriculture_M"){

const loader = new THREE.OBJLoader();
const obj = new THREE.Mesh()
new THREE.MTLLoader()
.setPath( '../01_models_3d/')
.load( 'agricultural_land_M.mtl', function ( materials ) {
 materials.preload();
 new THREE.OBJLoader(  )
 .setMaterials( materials )
 .setPath( '../01_models_3d/')
 .load( 'agricultural_land_M.obj', function ( object ) {
     object.scale.set(130,130,130);
     //object.position.y = - 95;
     obj.add( object )
     }, function ( xhr ) {
     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
     },
     // called when loading has errors
     function ( error ) {
     console.log( 'An error happened' );
             })});


//const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);



/*//const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
const texture = new THREE.TextureLoader().load( '../info_sprites/pig_info_1.jpg' );
//const invert = new THREE.TextureLoader().load( '../info_sprites/pig_info_1_invert.jpg' );
const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending, alphaTest: 0.1,  side: THREE.DoubleSide, opacity: 0.5, depthWrite:false, transparent: true, alpha: true   });
const sprite = new THREE.Sprite(mat);
sprite.position.set(0,5,-5);
sprite.scale.set(12, 12);
const vidnode = obj.add(sprite)

sprite.material.opacity = 0.1;
duration = 3
TweenMax.fromTo(sprite.material, duration * 0.5, {opacity:0}, {opacity: 1});
TweenMax.to(sprite.material, duration * 0.25, {opacity:0, delay:duration * 2});*/




/*

const info1 = new THREE.Mesh()
new THREE.MTLLoader()
.setPath( '../01_models_3d/')
.load( 'Biodiversity_info1.mtl', function ( materials ) {
 materials.preload();
 new THREE.OBJLoader(  )
 .setMaterials( materials )
 .setPath( '../01_models_3d/')
 .load( 'Biodiversity_info1.obj', function ( object ) {
   object.scale.set(20,20,20);
     //information1.position.y = - 95;
     info1.add( object )
     object.position.set(0,5,-5);
     
     object.scale.set(12, 12);
     obj.add(object)
     console.log(object.materials)
     }, function ( xhr ) {
     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
     },
     // called when loading has errors
     function ( error ) {
     console.log( 'An error happened' );
             })
             
     var current = {
     opacity: 1
 };

 new TWEEN.Tween( current )
   .to( { opacity: 0 }, 2000 )
   .onUpdate( function () {
       object.material.opacity = current.opacity;
   } )
   .start();
}*/

/*duration = 3
TweenMax.fromTo(information1.material, duration * 0.5, {opacity:0}, {opacity: 1});
TweenMax.to(information1.material, duration * 0.25, {opacity:0, delay:duration * 2});*/






          /*   );*/








/*const texture = new THREE.TextureLoader()
.setPath( '../01_models_3d/')
.load( 'Biodiversity_info1.mtl')
//const invert = new THREE.TextureLoader().load( '../info_sprites/pig_info_1_invert.jpg' );
const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending, alphaTest: 0.1,  side: THREE.DoubleSide, opacity: 0.5, depthWrite:false, transparent: true, alpha: true   });
const sprite = new THREE.Sprite(mat);
sprite.position.set(0,5,-5);
sprite.scale.set(12, 12);
const vidnode = obj.add(sprite)*/




// add text sprite as child
/* const spriteanot = new SpriteText(node.description);
spriteanot.material.depthWrite = false; // make sprite background transparent
spriteanot.color = 'black' //node.color;
spriteanot.textHeight = 1;
//spriteanot.position.set(0,0,0);
spriteanot.position.x = obj.position.x + 1 
spriteanot.position.y = obj.position.y + 1 
vidnode.add(spriteanot);*/
//https://github.com/vasturiano/three-spritetext


return obj;
}


   else if (node.id ==="Fattening farm"){

     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()  
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'fattening_farm.mtl', function ( materials ) {
         materials.preload();  
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'fattening_farm.obj', function ( object ) {
                 object.scale.set(20,20,20);
                 //object.position.y = - 95;
                 obj.add( object )
                 }, function ( xhr ) {
                 console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                 },
                 // called when loading has errors
                 function ( error ) {
                 console.log( 'An error happened' );
                         })});
                         obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;
     return obj;
     }

  

     // Actor

   else if (node.id ==="Farmer"){
     
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Farmer.mtl', function ( materials ) {
         materials.preload();     
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Farmer.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

 obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;
 return obj;
 }
   else if (node.id ==="Pig feed"){
     
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'feed.mtl', function ( materials ) {
         materials.preload();     
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'feed.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

  obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

 return obj;
 }
   else if (node.id ==="Pig"){
     
     
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'pig.mtl', function ( materials ) {
         materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'pig.obj', function ( object ) {
                 object.scale.set(20,20,20);
                 //object.position.y = - 95;
                 obj.add( object )
                 }, function ( xhr ) {
                 console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                 },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

  obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!

//const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);

const texture = new THREE.TextureLoader().load( 'Bacon.jpg' );
//const invert = new THREE.TextureLoader().load( '../info_sprites/pig_info_1_invert.jpg' );
const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending, alphaTest: 0.1,  side: THREE.DoubleSide, opacity: 0.5, depthWrite:false, transparent: true, alpha: true   });
const sprite = new THREE.Sprite(mat);
sprite.position.set(0,5,-5);
sprite.scale.set(12, 12);
const vidnode = obj.add(sprite)

sprite.material.opacity = 0.1;
duration = 3
TweenMax.fromTo(sprite.material, duration * 0.5, {opacity:0}, {opacity: 1});
TweenMax.to(sprite.material, duration * 0.25, {opacity:0, delay:duration * 2});

// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!// SPRITES!!!

     return obj;
     }

   else if (node.id ==="Pigglet"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/

     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Pigglet.mtl', function ( materials ) {
         materials.preload();   
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Pigglet.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
         // called when loading has errors
         function ( error ) {
         console.log( 'An error happened' );
         })});

         obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
     }

   else if (node.id ==="Politician"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Politician.mtl', function ( materials ) {
         materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Politician.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                 })});

                 obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;
     return obj;
   }
  
   else if (node.id ==="Frog"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/

     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Frog.mtl', function ( materials ) {
         materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Frog.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

                     obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;



     return obj;
   }
    
   else if (node.id ==="Bird"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Bird.mtl', function ( materials ) {
         materials.preload();       
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Bird.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

                     obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
   }

   else if (node.id ==="Bee"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Bee.mtl', function ( materials ) {
         materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Bee.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

                     obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;
     return obj;
     }
    
   else if (node.id ==="Danish Crown"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Danish Crown.mtl', function ( materials ) {
     materials.preload();
     new THREE.OBJLoader(  )
     .setMaterials( materials )
     .setPath( '../01_models_3d/')
     .load( 'Danish Crown.obj', function ( object ) {
         object.scale.set(20,20,20);
         //object.position.y = - 95;
         obj.add( object )
         }, function ( xhr ) {
         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
         },
         // called when loading has errors
         function ( error ) {
         console.log( 'An error happened' );
                 })});

                 obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
     }
    

   else if (node.id ==="Amazon Biodiversity"){
     
     
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Amazon_Biodiversity.mtl', function ( materials ) {
     materials.preload();
     new THREE.OBJLoader(  )
     .setMaterials( materials )
     .setPath( '../01_models_3d/')
     .load( 'Amazon_Biodiversity.obj', function ( object ) {
         object.scale.set(20,20,20);
         //object.position.y = - 95;
         obj.add( object )
         }, function ( xhr ) {
         console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
         },
         // called when loading has errors
         function ( error ) {
         console.log( 'An error happened' );
                 })});

                 obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;
                 
//const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
const texture = new THREE.TextureLoader().load( '../info_sprites/pig_info_1.jpg' );
//const invert = new THREE.TextureLoader().load( '../info_sprites/pig_info_1_invert.jpg' );
const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending, alphaTest: 0.1,  side: THREE.DoubleSide, opacity: 0.5, depthWrite:false, transparent: true, alpha: true   });
const sprite = new THREE.Sprite(mat);
sprite.position.set(0,5,-5);
sprite.scale.set(12, 12);
const vidnode = obj.add(sprite)

sprite.material.opacity = 0.1;
duration = 3
TweenMax.fromTo(sprite.material, duration * 0.5, {opacity:0}, {opacity: 1});
TweenMax.to(sprite.material, duration * 0.25, {opacity:0, delay:duration * 2});

return obj;
}

   else if (node.id ==="Smorebrod"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Smorebrod.mtl', function ( materials ) {
         materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Smorebrod.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
                 console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                 },
                 // called when loading has errors
                 function ( error ) {
                 console.log( 'An error happened' );
                         })});

                         obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
     }

   else if (node.id ==="Poop"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Poop.mtl', function ( materials ) {
         materials.preload();
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Poop.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
                 console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
                 },
                 // called when loading has errors
                 function ( error ) {
                 console.log( 'An error happened' );
                         })});

                         obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;


 return obj;
 }

   else if (node.id ==="Land use"){
     const obj = new THREE.Mesh(
     new THREE.SphereGeometry(500, 32, 32),
     new THREE.MeshLambertMaterial({ depthWrite: false, transparent: true, opacity: 0.5 })
     );
     obj.name = node.id;
     var actor = obj.name;
     //const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
     const texture = new THREE.TextureLoader()
     .setPath( '../06_pilot/')
     .load( 'Crops_Info-16.jpg' );
         const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending   });
         const sprite = new THREE.Sprite(mat);
         sprite.scale.set(500, 500);
         const vidnode = obj.add(sprite)
     
         // add text sprite as child
         const spriteanot = new THREE.SpriteText(node.id);
         spriteanot.material.depthWrite = false; // make sprite background transparent
         spriteanot.color = 'black' //node.color;
         spriteanot.textHeight = 0.2;
         spriteanot.position.set(0,-15,2);
         vidnode.add(spriteanot);
         //https://github.com/vasturiano/three-spritetext

         obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

 
     return obj;
   }
 
   else if (node.id ==="Agricultural practices (DK)"){
     const obj = new THREE.Mesh(
       new THREE.SphereGeometry(7, 32, 32),
       new THREE.MeshLambertMaterial({ depthWrite: false, transparent: true, opacity: 0.0 })
     );
     // add video sprite as child to spheres
     //const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
     video = document.getElementById('video');
     video.play();
     //console.log(node.id === "Pig")
     console.log(obj)
     const vidtxt = new THREE.VideoTexture(video);
     const mat = new THREE.SpriteMaterial({ map: vidtxt, blending: THREE.MultiplyBlending  });
     const sprite = new THREE.Sprite(mat);
     sprite.scale.set(12, 12);
     //if (obj.name === "Pig") {
     const vidnode = obj.add(sprite)
         // add text sprite as child
       const spriteanot = new THREE.SpriteText(node.id);
       spriteanot.material.depthWrite = false; // make sprite background transparent
       spriteanot.color = 'black' //node.color;
       spriteanot.textHeight = 0.2;
       spriteanot.position.set(0,-15,2);
       vidnode.add(spriteanot);
       //https://github.com/vasturiano/three-spritetext

       obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
   }

   else if (node.id ==="Fertilizer"){
     const obj = new THREE.Mesh(
       new THREE.SphereGeometry(7, 32, 32),
       new THREE.MeshLambertMaterial({ depthWrite: false, transparent: true, opacity: 0.0 })
     );
     obj.name = node.id;
     var actor = obj.name;
     
     //const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
     const texture = new THREE.TextureLoader()
     .setPath( '../03_jpgs/')
     .load( 'poop.jpg' );
     const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending   });
     const sprite = new THREE.Sprite(mat);
     sprite.scale.set(12, 12);
     const vidnode = obj.add(sprite)
     
// add text sprite as child
       const spriteanot = new THREE.SpriteText(node.id);
       spriteanot.material.depthWrite = false; // make sprite background transparent
       spriteanot.color = 'black' //node.color;
       spriteanot.textHeight = 0.2;
       spriteanot.position.set(0,-15,2);
       vidnode.add(spriteanot);
       //https://github.com/vasturiano/three-spritetext

       obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;
 
     return obj;
   }

   else if (node.id ==="Import/Export"){
         const obj = new THREE.Mesh(
         new THREE.SphereGeometry(7, 32, 32),
         new THREE.MeshLambertMaterial({ depthWrite: false, transparent: true, opacity: 0.5 })
         );
         obj.name = node.id;
         var actor = obj.name;
         //const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
         const texture = new THREE.TextureLoader()
         .setPath( '../03_jpgs/')
         .load( 'importexport.jpg' );
         const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending   });
         const sprite = new THREE.Sprite(mat);
         sprite.scale.set(12, 12);
         const vidnode = obj.add(sprite)
         
         // add text sprite as child
         const spriteanot = new THREE.SpriteText(node.id);
         spriteanot.material.depthWrite = false; // make sprite background transparent
         spriteanot.color = 'black' //node.color;
         spriteanot.textHeight = 0.2;
         spriteanot.position.set(0,-15,2);
         vidnode.add(spriteanot);
         //https://github.com/vasturiano/three-spritetext

         obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;
     
             return obj;
         }
   
   else if (node.id ==="CO2"){
    
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/

     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'CO2.mtl', function ( materials ) {
         materials.preload();   
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'CO2.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

                     obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
     }

   else if (node.id ==="Pesticide"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'Pesticide.mtl', function ( materials ) {
         materials.preload();      
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'Pesticide.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});    

                     obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
     }

   else if (node.id ==="Soy bean"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     /*node.fy = 50
     node.fx = 10
     node.fz = 10*/
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'feed.mtl', function ( materials ) {
         materials.preload();       
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'soy_bean.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

                     obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

     return obj;
     }

   else if (node.id ==="Land use (BRAZIL)"){
     const obj = new THREE.Mesh(
       new THREE.SphereGeometry(7, 32, 32),
       new THREE.MeshBasicMaterial({ depthWrite: false, transparent: true, opacity: 0.5 })
     );

     obj.name = node.id;
     var actor = obj.name;
     
     //const imgTexture = new THREE.TextureLoader().load(`./imgs/${img}`);
     const texture = new THREE.TextureLoader()
     .setPath( '../03_jpgs/')
     .load( 'landuse_brazil.png' );
     const mat = new THREE.SpriteMaterial({ map: texture, blending: THREE.MultiplyBlending   });
     const sprite = new THREE.Sprite(mat);
     sprite.scale.set(12, 12);
     const vidnode = obj.add(sprite)
     
// add text sprite as child
       const spriteanot = new THREE.SpriteText(node.id);
       spriteanot.material.depthWrite = false; // make sprite background transparent
       spriteanot.color = 'black' //node.color;
       spriteanot.textHeight = 0.2;
       spriteanot.position.set(0,-15,2);
       vidnode.add(spriteanot);
       //https://github.com/vasturiano/three-spritetext

       obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

 
     return obj;
   }
      
   else if (node.id ==="Wheat & Barley"){
     
     const loader = new THREE.OBJLoader();
     const obj = new THREE.Mesh()
     new THREE.MTLLoader()
     .setPath( '../01_models_3d/')
     .load( 'crops.mtl', function ( materials ) {
         materials.preload();      
         new THREE.OBJLoader(  )
         .setMaterials( materials )
         .setPath( '../01_models_3d/')
         .load( 'crops.obj', function ( object ) {
             object.scale.set(20,20,20);
             //object.position.y = - 95;
             obj.add( object )
             }, function ( xhr ) {
             console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
             },
             // called when loading has errors
             function ( error ) {
             console.log( 'An error happened' );
                     })});

                     obj.colorTex = node.colorTex;
  obj.desaturateTex = node.desaturateTex;

         return obj;
         }
   
})
            .backgroundColor('rgba(50, 150, 50, 0.0)')
            
            
            .warmupTicks(30)
            .cooldownTicks(20)
            .onNodeDrag(() => Graph.cooldownTicks(20))
            
      
      var sceneobjects = Graph.scene().children
      console.log(sceneobjects["0"])
      sceneobjects["0"].remove()
      console.log(Graph.scene())
      var light = Graph.scene().getObjectByProperty('type', 'AmbientLight' )
      
      console.log(light)
      Graph.scene().remove('Scene')
      
      
      console.log(Graph.scene().getObjectByProperty('type', 'AmbientLight' ))
      

      setInterval(() => {
          Graph.graphData
        }, 1000);
     




//headup display from germany https://www.youtube.com/watch?v=mkzEp2sGRgw&list=PLb0zKSynM2PBMF67Fo_18vshTDgGf4oyc&index=31&ab_channel=Weitz%2FHAWHamburg
/*

function init(){
  var renderer = THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0xcccccc))
  rederer.setSize(window.innderWidth, window.innerHeight);







  var camera, scene, renderer,
    geometry, material, mesh;

scene = Graph.scene()
camera = Graph.camera()


function init() {
const obj = new THREE.Mesh(
       new THREE.SphereGeometry(500, 32, 32),
       new THREE.MeshLambertMaterial({ depthWrite: false, transparent: false, opacity: 1 })
     );

     scene.add(obj)



        var texture = THREE.ImageUtils.loadTexture(
  "../06_pilot/Crops_Info_no iso-16.jpg", {}, function () {
    redraw ();
  }
)


var spriteMaterial = new THREE.SpriteMaterial({
  color: 0xff,
  map: texture
});

var sprite = new THREE.Sprite(spriteMaterial);
sprite.position.set(0,0,-50);
sprite.scale.set(50,50,50)
scene.add(sprite)


var redraw = function () {
  renderer.render(scene, camera);
  requestAnimationFrame(redraw)
};
requestAnimationFrame(redraw);
}

*/
//headup display from germany https://www.youtube.com/watch?v=mkzEp2sGRgw&list=PLb0zKSynM2PBMF67Fo_18vshTDgGf4oyc&index=31&ab_channel=Weitz%2FHAWHamburg














     

/*
     //smoke
     var camera, scene, renderer,
    geometry, material, mesh;
 
init();
animate(); 

function init() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene = Graph.scene()
 
 
   /* geometry = new THREE.CubeGeometry( 200, 200, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
    cubeSineDriver = 0;*/
 
    /*textGeo = new THREE.PlaneGeometry(300,300);
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    textTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/quickText.png');
    textMaterial = new THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeo,textMaterial);
    text.position.z = 0;
    scene.add(text);*/

   /* light = new THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0,1);
    scene.add(light);*/
  /*
    smokeTexture = THREE.ImageUtils.loadTexture('../07_effects/Smoke-Element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x00dddd, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,300);
    smokeParticles = [];
    


    for (p = 0; p < 150; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }
 
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    // note: three.js includes requestAnimationFrame shim
    stats.begin();
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
    stats.end();
}
 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.2);
    }
}

function render() {
 
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.01;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 500);
    renderer.render( scene, camera );
 
}


//smoke



*/


//------------------------------------------------------------------------------------------------------------------------------------------------------        








      //Graph.scene().remove(Graph.scene().children);
      //Graph.scene().remove(Graph.scene().children);
      //const light = new THREE.PointLight(0xFF0000, 5000000000, 1)
      //light.position.set(50, 50, 50);
      //Graph.scene().add(light);

//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog
      /*scene = new THREE.Scene();
				scene.fog = new THREE.Fog( 0xFFACAC, 0.1, 150 );
        

        Graph.scene().fog = new THREE.Fog( 0xFFACAC, 0.1, 150 );*/

//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog//fog


//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane

    /*const planeGeometry = new THREE.PlaneGeometry(50, 50);
    const planeMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000, side: THREE.DoubleSide});
    const mesh = new THREE.Mesh(planeGeometry, planeMaterial);
    mesh.position.set(0, 0, 0);
    mesh.rotation.set(0.5 * Math.PI, 0, 0);

    Graph.scene().add(mesh);*/

//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane//plane
  



        })

        

         TWEEN.update();