var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

/*var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.name; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));*/

                    //the positioning forces
    var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.name; }))
    .force("charge", d3.forceManyBody()
        .strength(-100))
                        //above you control the force of repelling
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX())
    .force("y", d3.forceY());



d3.json("menu_graph.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(graph.nodes)
      .enter().append("g")
    .call(drag(simulation));
    
    
var hyperlink = node.append("svg:a")
    .attr("xlink:href", function(d){return d.url;})  // <-- reading the new "url" property
    .append("svg:rect")
    /*.attr("y", -barHeight / 2)
    .attr("height", barHeight)
    .attr("width", barWidth)
    .style("fill", color);*/
     // <- remove this if you like
 

  var circles = node.append("circle")
  // control radius!
      .attr("r", 5)
      .attr("fill", function(d) { return color(d.group); });

      /*.call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));*/

  var lables = node.append("text")
      .text(function(d) {
        return d.name;
      })
      .attr('x', 6)
      .attr('y', 3)
      .on('click', function(d, hyperlink) {
        window.location.href = d.url;
      });
      

      

  node.append("title")
      .text(function(d) { return d.name; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }
});




drag = simulation => {

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

return d3.drag() 
.on("start", dragstarted)
.on("drag", dragged)
.on("end", dragended);

}


/*asdasdasdasdasd*/

function selectNode(selectedNode) {
    var neighbors = getNeighbors(selectedNode)
          nodeElements.transition().duration(500)
          .style('opacity', function(node) {
           return setOpacity(node,neighbors, selectedNode);
     })
     .attr('r', function(node) {
           return getNodeRadius(node,neighbors);
     });
     nodeElements.attr('fill', function(node) {
          // send selectedNode to your getNodeColor
          return getNodeColor(node,neighbors,selectedNode);
      })
     textElements.style('font-size', function(node) {
      return getTextColor(node, neighbors)
    })
    textElements.attr('opacity', function(node) {
           return setOpacity(node,neighbors, selectedNode);
     })
  
    linkElements.style('stroke', function(link) {
      return getLinkColor(selectedNode, link)
    })
  }
  
  function releaseNode() {
  nodeElements
  .attr('r', 60)
  .attr('fill', function(d, i) { return 'url(#grad' + i + ')'; })
   .attr('opacity', 1);
  
  linkElements.style('stroke', 'grey');
  textElements.attr('opacity','1');
  }
  
  function getNeighbors(node) {
    return graph.links.reduce(function(neighbors, link) {
      if (link.target.name === node.name) {
        neighbors.push(link.source.name)
      } else if (link.source.name === node.name) {
        neighbors.push(link.target.name)
      }
      return neighbors
    }, [node.name])
  }
  
  function getNodeColor(node, neighbors, selectedNode) {
    // If is neighbor
    if (Array.isArray(neighbors) && neighbors.indexOf(node.name) > -1) {
       return 'url(#grad' + selectedNode.index + ')'
      // return node.level === 1 ? '#9C4A9C' : 'rgba(251, 130, 30, 1)'
    }  else {
                return 'url(#grad' + node.index + ')'
  
    }
    //return node.level === 0 ? '#91007B' : '#D8ABD8'
  }
  
  function getNodeRadius(node, neighbors) {
    // If is neighbor
    if ( neighbors.indexOf(node.name) > -1) {
      return '100'
    } 
    else {
          return '60'
    }
  }
  
  function getLinkColor(node, link) {
    return isNeighborLink(node, link) ? 'url(#grad' + node.index + ')' : 'grey'
  }
  
  
  function isNeighborLink(node, link) {
    return link.target.name === node.name || link.source.name === node.name
  }
  
  function getTextColor(node, neighbors) {
    return Array.isArray(neighbors) && neighbors.indexOf(node.name) > -1 ? '40px' : '25px'
  }
  
      function setOpacity(node, neighbors, selectedNode) {
          if (Array.isArray(neighbors) && neighbors.indexOf(node.name) > -1) {
              return 1;
          } else {
              return 0.3;
          }
      }

