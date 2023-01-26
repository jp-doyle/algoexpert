// hard
// O(n^2) time, where n = length of input array (buildings)
// O(1) space
// can also be done in O(n) time and O(n) space

function largestRectangleUnderSkyline(buildings) {

  let largestRectangle = 0;

  for (let i = 0; i < buildings.length; i += 1) {
    const height = buildings[i];
    let leftIndex = i;
    let rightIndex = i;

    while (leftIndex >= 1 && buildings[leftIndex - 1] >= height) {
      leftIndex -= 1;
    }

    while (rightIndex < buildings.length - 1 && buildings[rightIndex + 1] >= height) {
      rightIndex += 1;
    }
    const rectangle = (rightIndex - leftIndex + 1) * height;
    if (rectangle > largestRectangle) largestRectangle = rectangle;
  }
  return largestRectangle;
}