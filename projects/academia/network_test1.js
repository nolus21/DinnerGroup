var canvas = d3.select("#network"),
        /*generating the context?*/
        width = canvas.attr("width"),
        height = canvas.attr("height"),

        r=3,
        
        color= d3.scaleOrdinal(d3.schemeCategory20),
        ctx = canvas.node().getContext("2d"),

//simulation

        simulation = d3.forceSimulation()
            /**/
            //i want my nodes to land in the middle of the canvas
            .force("x", d3.forceX(width/2))
            .force("y", d3.forceY(height/2))
            // i dont want my nodes not to collide
            .force("collide", d3.forceCollide(r+2))
            // i want each of my nodes to repell on another
            .force("charge", d3.forceManyBody()
            //force
                .strength(-40))
            //important force for linking nodes!! LINK VS NODE!
            .force("link", d3.forceLink()
                .id(function(d) { return d.name; }))
            /**/

                    //optional - nice because appears on the center but escapes!?
                    /*
                    .force("link", d3.forceLink().id(function(d) { return d.name; }))
                    .force("charge", d3.forceManyBody())
                    .force("center", d3.forceCenter(width / 2, height / 2));
                    */
                    //optional

    
    d3.json("menu_graph.json", function(err, graph){
        if (err) throw err;
  
    simulation
        .nodes(graph.nodes)
        .on("tick", update)

        //returning force and not simulation perse
    simulation
        .force("link")
        .links(graph.links)

// copied from github for dragging!
    canvas
      .call(d3.drag()
          .container(canvas.node())
          .subject(dragsubject)
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

// basic continued
function update(){
    /*clearing canvas?*/
    ctx.clearRect(0, 0, width, height);
    
    //drawing LINKS
    ctx.beginPath();
    ctx.globalAlpha= 0.5;
    ctx.strokeStyle = "#aaa";
    graph.links.forEach(drawLink);
    ctx.stroke();

    //drawing NODES
    ctx.beginPath();
    ctx.globalAlpha= 1;
    graph.nodes.forEach(drawNode);
    ctx.fill();

}

//dragging function from github
    function dragsubject() {
    return simulation.find(d3.event.x, d3.event.y);
  }


    });

    

//function drawing NODES
    function drawNode (d) {
        /*move curser to the position of the node*/
        ctx.fillStyle = color(d.name);
        ctx.moveTo(d.x, d.y);
        ctx.arc(d.x, d.y, r, 0, 2*Math.PI);
        ctx.fill();
    }


//function drawing LINKS
function drawLink(l) {
ctx.moveTo(l.source.x, l.source.y);
ctx.lineTo(l.target.x, l.target.y);
    
}


// copied from github for dragging
function dragstarted() {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d3.event.subject.fx = d3.event.subject.x;
  d3.event.subject.fy = d3.event.subject.y;
  console.log(d3.event.subject);
}

function dragged() {
  d3.event.subject.fx = d3.event.x;
  d3.event.subject.fy = d3.event.y;
}

function dragended() {
  if (!d3.event.active) simulation.alphaTarget(0);
  d3.event.subject.fx = null;
  d3.event.subject.fy = null;
}
        
