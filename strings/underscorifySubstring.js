// O(n + m) time, where n = length of string, and m = length of substring
// O(n) space

function underscorifySubstring(string, substring) {

  let result = '';
  const substringIndices = [];
  let i = 0;

  // Determine start and end indices of substrings in string
  while (i < string.length) {
    const index = string.indexOf(substring, i);
    if (index !== -1) {
      substringIndices.push([index, index + substring.length]);
      i += 1;
    } else {
      break;
    }
  }

  if (substringIndices.length === 0) return string;
  i = 0;

  // Merge indices of adjacent/overlapping substrings
  while (i < substringIndices.length - 1) {
    const currentIndices = substringIndices[i];
    const nextIndices = substringIndices[i + 1];
    if (currentIndices[1] >= nextIndices[0]) {
      substringIndices[i] = [currentIndices[0], nextIndices[1]];
      substringIndices.splice(i + 1, 1);
    } else {
      i += 1;
    }
  }

  i = 0;
  let j = 0;

  // Insert underscores before and after discrete substrings
  while (i < string.length) {
    if (j < substringIndices.length && i === substringIndices[j][0]) {
      result += '_';
      result += string.slice(i, substringIndices[j][1]);
      result += '_';
      i = substringIndices[j][1];
      j += 1;
    } else {
      result += string[i];
      i += 1;
    }
  }

  return result;
}