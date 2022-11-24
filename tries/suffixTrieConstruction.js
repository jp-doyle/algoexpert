class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

	// O(n^2) time, where n = length of input string
  // O(n^2) space

  populateSuffixTrieFrom(string) {

    for (var i = 0; i < string.length; i++) {
			var pointer = this.root;

			for (var j = i; j < string.length; j++ ) {
				if (pointer[string[j]] !== undefined) {
					pointer = pointer[string[j]];
				} else {
					pointer[string[j]] = {};
          pointer = pointer[string[j]];
				}
			}
			if (pointer[this.endSymbol] === undefined) {
				pointer[this.endSymbol] = true;
			}
		}
  }

	// O(n) time, where n = length of input string
  // O(1) space

  contains(string) {
		var pointer = this.root;

		for (var i = 0; i < string.length; i++) {
			if (pointer[string[i]] === undefined) {
				return false;
			}
			pointer = pointer[string[i]];
		}
		if (pointer[this.endSymbol] === undefined) {
			return false;
		}
		return true;
  }
}