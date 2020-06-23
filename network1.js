# Let's build an adjacency matrix
data <- matrix(sample(0:1, 25, replace=TRUE), nrow=5)
colnames(data) <- rownames(data) <- LETTERS[1:5]

# Transform it in a graph format
library(igraph)
network <- graph_from_adjacency_matrix(data)

# Transform it in a JSON format for d3.js
library(d3r)
data_json <- d3_igraph(network)

# Save this file
write(data_json, "data.json")