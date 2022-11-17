// O(n) time, where n = length of buildings array
// O(n) space

function sunsetViews(buildings, direction) {

  const indicesOfBuildingsWithViews = [];
  if (buildings.length === 0) return [];
  else if (buildings.length === 1) return [0];
  else if (direction === 'EAST') {
    let heightOfTallestBuilding = buildings[buildings.length - 1];
    indicesOfBuildingsWithViews.push(buildings.length - 1);

    for (let i = buildings.length - 2; i >= 0; i -= 1) {
      if (buildings[i] > heightOfTallestBuilding) {
        indicesOfBuildingsWithViews.unshift(i);
        heightOfTallestBuilding = buildings[i];
      }
    }
  } else {
    let heightOfTallestBuilding = buildings[0];
    indicesOfBuildingsWithViews.push(0);

    for (let i = 1; i < buildings.length; i += 1) {
      if (buildings[i] > heightOfTallestBuilding) {
        indicesOfBuildingsWithViews.push(i);
        heightOfTallestBuilding = buildings[i];
      }
    }
  }

  return indicesOfBuildingsWithViews;
}