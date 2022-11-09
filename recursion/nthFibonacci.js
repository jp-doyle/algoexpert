// O(n) time
// O(1) space

function getNthFib(n) {

  if (n === 1) return 0;
  else if (n === 2) return 1;
  else {
    const hashTable = {
      nMinusTwo: 0,
      nMinusOne: 1
    };
    let counter = 3;

    while (counter <= n) {
      const temp = hashTable['nMinusOne'];
      hashTable['nMinusOne'] = temp + hashTable['nMinusTwo'];
      hashTable['nMinusTwo'] = temp;
      counter += 1;
    }

    return hashTable['nMinusOne'];
  }
}