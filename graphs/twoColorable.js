// O(v + e) time, where v = number of vertices, and e = number of edges
// O(v) space

function twoColorable(edges) {

  const colors = new Array(edges.length).fill(null);

  for (let i = 0; i < edges.length; i += 1) {
    let color = colors[i];
    if (color === null) {
      colors[i] = 0;
      color = 0;
    }

    for (let connectedVertex of edges[i]) {
      if (connectedVertex === i) return false;
        else if (colors[connectedVertex] === color) {
          return false;
        } else if (colors[connectedVertex] === null) {
          colors[connectedVertex] = color === 0 ? 1 : 0;
        }
    }
  }
  return true;
}