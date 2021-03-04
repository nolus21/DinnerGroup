
var graph = {

  nodes: [
    {name: "Architecture", age:36},
    {name: "Academia", age:87},
    {name: "Spatial Strategies", age:87},
    {name: "Visualisation", age:36},
    {name: "Art", age:36},
    {name: "Design", age:36},
    {name: "Politics", age:36},
    {name: "Data mapping", age:36},
    {name: "Web development", age:36},
    {name: "Data storytelling", age:36},

  ]
};

var canvas = d3.select("#network"),
/*generating the context?*/
  width = canvas.attr("width")
  height = canvas.attr("heights")
  r=3,
  ctx = canvas.node().getContext("2d")


  graph.nodes.forEach(function (d){
      d.x-Math.random()*width;
      d.y-Math.random()*width;
      ctx.fill();


  })


function update(){
  /*clearing canvas?*/
  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();
  graph.nodes.forEach(drawNode);
  ctx.fill();
}

function drawNode (d) {
  /*move curser to the position of the node*/
  ctx.moveTo(d.x, d.y);
  ctx.arc(d.x, d.y, r, 0, 2* Math.PI);
}
  update()



