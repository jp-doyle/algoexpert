// O(ns + bs) time, where n = number of small strings, s = length of longest small string, and b = length of the big string
// O(ns)

function multiStringSearch(bigString, smallStrings) {

  const smallStringsHashMap = {};

  for (let i = 0; i < smallStrings.length; i += 1) {
    const smallString = smallStrings[i];
    smallStringsHashMap[smallString] = i;
  }

  const solution = new Array(smallStrings.length).fill(false);
  const suffixTrie = new SuffixTrie();

  for (const smallString of smallStrings) {
    suffixTrie.add(smallString);
  }

  for (let i = 0; i < bigString.length; i += 1) {
    const char = bigString[i];
    if (char in suffixTrie.tree) {
      let j = i + 1;
      let tree = suffixTrie.tree[char];

      while (j <= bigString.length && tree!== null) {
        const nextTree = tree[bigString[j]];
        const string = tree[suffixTrie.endSymbol];
        if (string !== undefined) {
          const index = smallStringsHashMap[string];
          solution[index] = true;
        }
        if (nextTree !== undefined) {
          tree = nextTree;
        } else {
          tree = null;
        }
        j += 1;
      }
    }
  }

  return solution;
}

class SuffixTrie {
  constructor() {
    this.tree = {};
    this.endSymbol = '*';
  }

  add(string) {
    let tree = this.tree;
    for (const char of string) {
      if (tree[char] === undefined) {
        tree[char] = {};
      }
      tree = tree[char];
    }
    tree[this.endSymbol] = string;
  }
}