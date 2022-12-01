function boggleBoard(board, words) {

  const wordsOnBoard = {};
  const wordsSuffixTrie = new SuffixTrie();

  for (const word of words) {
    wordsSuffixTrie.add(word);
  }

  function findWords (rowIdx, colIdx, hashTable, visited) {
    if ('*' in hashTable) {
      const word = hashTable['*'];
      if (!(word in wordsOnBoard)) {
        wordsOnBoard[word] = true;
      }
    }
    const rowOnBoard = rowIdx >= 0 && rowIdx < board.length ? true : false;
    const colOnBoard = colIdx >= 0 && colIdx < board[0].length ? true : false;
    if (rowOnBoard && colOnBoard) {
      const char = board[rowIdx][colIdx];
      if (hashTable[char]) {
        if (visited[rowIdx][colIdx] === false) {
          visited[rowIdx][colIdx] = true;
          const nextHashTable = hashTable[char];
          findWords(rowIdx - 1, colIdx, nextHashTable, visited);
          findWords(rowIdx - 1, colIdx + 1, nextHashTable, visited);
          findWords(rowIdx, colIdx + 1, nextHashTable, visited);
          findWords(rowIdx + 1, colIdx + 1, nextHashTable, visited);
          findWords(rowIdx + 1, colIdx, nextHashTable, visited);
          findWords(rowIdx + 1, colIdx - 1, nextHashTable, visited);
          findWords(rowIdx, colIdx - 1, nextHashTable, visited);
          findWords(rowIdx - 1, colIdx - 1, nextHashTable, visited);
          visited[rowIdx][colIdx] = false;
        }
      }
    }
    return;
  }

  for (let rIdx = 0; rIdx < board.length; rIdx += 1) {
    for (let cIdx = 0; cIdx < board[0].length; cIdx += 1) {
      const char = board[rIdx][cIdx];
      if (char in wordsSuffixTrie.tree) {
        const visited = board.map(row => row.map(char => false));
        findWords(rIdx, cIdx, wordsSuffixTrie.tree, visited);
      }
    }
  }

  return Object.keys(wordsOnBoard);
}

class SuffixTrie {
  constructor() {
    this.tree = {};
  }

  add(word) {
    let tree = this.tree;
    for (const char of word) {
      if (tree[char] === undefined) {
        tree[char] = {};
      }
      tree = tree[char];
    }
    tree['*'] = word;
  }
}