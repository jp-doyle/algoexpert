// O(n) time, where n = length of path string
// O(n) space

function shortenPath(path) {

  const tokens = [];
  let absolute = false;
  let indexOfFirstDirectory = null;
  let i = 0;

  if (path[0] === '/') {
    tokens.push('/');
    absolute = true;
    i = 1;
  }

  while (i < path.length) {
    const character = path[i];
    let info;

    if (character === '/') {
      info = returnNextIndexAndCount(path, i, '/');
      if (tokens.length > 0 && tokens[tokens.length - 1] !== '/') {
        tokens.push('/');
      }
    } else if (character === '.') {
      info = returnNextIndexAndCount(path, i, '.');
      if (info[1] === 2) {
        if (absolute) {
          if (tokens.length > 1) {
            tokens.pop();
            tokens.pop();
          }
        } else {
          if (indexOfFirstDirectory !== null && tokens.length - 1 > indexOfFirstDirectory) {
            tokens.pop();
            tokens.pop();
            if (tokens.length - 1 < indexOfFirstDirectory) {
              indexOfFirstDirectory = null;
            }
          } else {
            tokens.push('..');
          }
        }
      }
    } else {
      info = returnNextIndexAndCount(path, i, null);
      tokens.push(path.slice(i,info[0]));
      if (indexOfFirstDirectory === null) {
        indexOfFirstDirectory = tokens.length - 1;
      }
    }
    i = info[0];
  }

  if (tokens.length > 1 && tokens[tokens.length - 1] === '/') tokens.pop();
  return tokens.join('');
}

function returnNextIndexAndCount(string, index, character) {

  let j = null;
  let count = null;
  if (character === '/' || character === '.') {
    j = index + 1;
    count = 1;

    while (j < string.length && string[j] === character) {
      j += 1;
      count += 1;
    }
  } else {
    j = index + 1;

    while (j < string.length && string[j] !== '/' && string[j] !== '.') {
      j += 1;
    }
  }
  return [j, count];
}