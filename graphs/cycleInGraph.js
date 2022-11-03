// O((v + e) * e) time, where v = number of vertices, and e = number of edges
// O(v) space
// *Less than optimal time complexity*

// edges input is a 2D array where rows represent vertices and row members represent outward edges to vertices
// e.g. [[1], [0, 2], [0]]

function cycleInGraph(edges) {

  let containsCycle = false;

  function followEdges(vertex, vertices = {}) {
    if (vertex in vertices) {
      containsCycle = true;
    } else {
      vertices[vertex] = true;
      for (const v of edges[vertex]) {
        followEdges(v, vertices);
      }
      delete vertices[vertex];
    }
  }

  for (let v = 0; v < edges.length; v += 1) {
    if (containsCycle) {
      break;
    } else {
      followEdges(v);
    }
  }

  return containsCycle;
}