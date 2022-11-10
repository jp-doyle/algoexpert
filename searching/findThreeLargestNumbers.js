// O(n) time, where n = length of input array
// O(1) space

function findThreeLargestNumbers(array) {

	let results = [null, null, null];

	function shiftResults(results, arrayValue, resultsIndex) {

		for (let index = 0; index <= resultsIndex; index += 1) {
			if (index === resultsIndex) {
				results[index] = arrayValue;
			} else {
				results[index] = results[index + 1];
			}
		}
	};

	for (let i = 0; i < array.length; i += 1) {
		if (array[i] > results[2] || results[2] === null) {
			shiftResults(results, array[i], 2);
		} else if (array[i] > results[1] || results[1] === null) {
			shiftResults(results, array[i], 1);
		}	else if (array[i] > results[0] || results[0] === null) {
			shiftResults(results, array[i], 0);
		}
	}

	return results;
};