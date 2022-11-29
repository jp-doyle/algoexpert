// O(n) time, where n = length of input array
// O(n) space

function minRewards(scores) {

  const rewards = new Array(scores.length).fill(1);

  for (let i = 0; i < scores.length - 1; i += 1) {
    if (scores[i + 1] > scores[i]) {
      rewards[i + 1] = rewards[i] + 1;
    }
  }

  for (let i = scores.length - 1; i > 0; i -= 1) {
    if (scores[i - 1] > scores[i]) {
      rewards[i - 1] = Math.max(rewards[i - 1], rewards[i] + 1)
    }
  }

  const solution = rewards.reduce((a,b) => a + b);
  return solution;
}