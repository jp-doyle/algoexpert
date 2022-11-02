// O(nlogn) time, where n = length of first input array (also equal to length of second input array)
// O(1) space

function classPhotos(redShirtHeights, blueShirtHeights) {

  let back;
  let front;

  redShirtHeights.sort((a,b) => a - b);
  blueShirtHeights.sort((a,b) => a - b);

  if (redShirtHeights[0] > blueShirtHeights[0]) {
    back = redShirtHeights;
    front = blueShirtHeights;
  } else {
    back = blueShirtHeights;
    front = redShirtHeights;
  }

  for (let i = 0; i < redShirtHeights.length; i += 1) {
    if (back[i] - front[i] <= 0) {
      return false;
    }
  }

  return true;
}