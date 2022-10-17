// O(n) time, where n = length of input (coins) array
// O(1) space

function nonConstructibleChange(coins) {
  coins.sort(function(a,b){return a-b;});
  let change = 0;
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > change + 1) {
      return change + 1;
    }
    change += coins[i];
  }
  return change + 1;
}