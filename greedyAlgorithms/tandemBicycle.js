// O(nlogn) time, where n = (equal) length of input arrays
// O(1) space

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {

  redShirtSpeeds.sort((a,b) => b - a);
  if (fastest) {
    blueShirtSpeeds.sort((a,b) => a - b);
  } else {
    blueShirtSpeeds.sort((a,b) => b - a);
  }

  let cumulativeSpeed = 0;

  for (let i = 0; i < redShirtSpeeds.length; i += 1) {
    if (redShirtSpeeds[i] > blueShirtSpeeds[i]) {
      cumulativeSpeed += redShirtSpeeds[i];
    } else {
      cumulativeSpeed += blueShirtSpeeds[i];
    }
  }

  return cumulativeSpeed;
}