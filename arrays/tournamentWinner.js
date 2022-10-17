// O(n) time, where n = number of competitions
// O(k) space, where k = number of teams

function tournamentWinner(competitions, results) {

  const hashTable = {};
  let highestScore = 0;
  let tournamentWinner;

  for (let index = 0; index < competitions.length; index += 1) {
    let winner;
    if (results[index] === 0) winner = competitions[index][1];
    else winner = competitions[index][0];

    if (hashTable[winner]) {
      hashTable[winner] += 3;
    } else {
      hashTable[winner] = 3;
    }

    if (hashTable[winner] > highestScore) {
      highestScore = hashTable[winner];
      tournamentWinner = winner;
    }
  }

  return tournamentWinner;
}