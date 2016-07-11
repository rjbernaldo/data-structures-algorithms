function anagram(word) {
  return (function repeat(n) {
    if (n === 1) {
      return;
    } else {
      for (var i = 0; i < n; i++) {
        repeat(n - 1);
        if (n === 2) console.log(word);
        word = rotate(word, n);
      }
    }
  })(word.length);
}

function rotate(word, n) {
  word = word.split(''); // turn word into array
  n = n - 1; // index of last element

  var temp;

  for (var i = n; i > -1; i--) {
    if (i === n) {
      temp = word[i];
    }


    if (i === 0) {
      word[i] = temp
    } else {
      word[i] = word[i - 1];
    }
  }

  return word.join('');
}

anagram('cat');

var steps = 0;

function recursiveFind(arr, searchKey, lowerBound, upperBound) {
  console.log(++steps);
  if (isNaN(lowerBound)) lowerBound = 0;
  if (isNaN(upperBound)) upperBound = arr.length - 1;

  var currentIndex = parseInt((lowerBound + upperBound) / 2);
  var currentElement = arr[currentIndex];

  if (currentElement === searchKey) {
    return currentIndex;
  } else if (lowerBound > upperBound) {
    return false
  } else {
    if (currentElement < searchKey) {
      return recursiveFind(arr, searchKey, currentIndex + 1, upperBound);
    } else {
      return recursiveFind(arr, searchKey, lowerBound, currentIndex - 1);
    }
  }
}

var arr = [];

for (var i = 0; i < 1000; i++) {
  arr.push(i + 1);
}

console.log(recursiveFind(arr, 737))
