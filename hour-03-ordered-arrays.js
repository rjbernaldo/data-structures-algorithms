function binarySearch(elem, arr) {
  console.log('SEARCHING ' + elem + ' in array of ' + arr.length);
  var lowerBound = 0, 
      upperBound = arr.length, 
      middleIndex,
      steps = 0;

  while (true && steps < 10) {
    steps++;
    middleIndex = parseInt((lowerBound + upperBound) / 2, 10);
    var currentElem = arr[middleIndex];

    if (currentElem === elem) {
      console.log('FOUND: ' + elem + ' in ' + steps + ' steps');
      return middleIndex;
    } else if (lowerBound > upperBound) {
      console.log('NOT FOUND: ' + steps);
      return false;
    } else {
      if (currentElem < elem) {
        lowerBound = middleIndex + 1;
      } else {
        upperBound = middleIndex - 1;
      }
    }
  }
}

var arr = [];

for (var i = 0; i < 1000; i++) {
  arr.push(i + 1);
}

binarySearch(737, arr);
binarySearch(315, arr);
binarySearch(525, arr);
binarySearch(799, arr);
binarySearch(915, arr);
