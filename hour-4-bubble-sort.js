function bubbleSort(arr) {
  var currentLeft,
      currentRight,
      unsortedLength = arr.length;

  while(unsortedLength > 0) {
    if (currentLeft + 1 < unsortedLength) {
      currentLeft++;
    } else {
      currentLeft = 0;
      unsortedLength--;
    }

    currentRight = currentLeft + 1;

    if (arr[currentLeft] > arr[currentRight]) {
      var temp = arr[currentLeft];
      arr[currentLeft] = arr[currentRight];
      arr[currentRight] = temp;
    }
  }

  return arr;
}

var arr = [];

for (var i = 0; i < 10; i++) {
  arr.push(Math.floor((Math.random() * 100) + 1));
}

console.log('Unsorted: ', arr);
var sortedArr = bubbleSort(arr);
console.log('Sorted: ', sortedArr);
