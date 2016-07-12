function mergeSort(arr) {
  return (function repeat(arr) {
    var s = 0;
    var e = arr.length - 1;

    var m = Math.floor((s + e) / 2);
    var firstArr = [];
    var secondArr = [];
    var thirdArr = [];

    for (var i = s; i <= m; i++) {
      firstArr.push(arr[i]);
    }

    for (var i = m + 1; i <= e; i++) {
      secondArr.push(arr[i]);
    }

    if (firstArr.length > 1) {
      firstArr = repeat(firstArr);
    }

    if (secondArr.length > 1) {
      secondArr = repeat(secondArr);
    }

    while (firstArr.length > 0 && secondArr.length > 0) {
      var firstElem = firstArr[0];
      var secondElem = secondArr[0];

      if (firstElem < secondElem) {
        thirdArr.push(firstArr.shift());
      } else {
        thirdArr.push(secondArr.shift());
      }
    }

    while (firstArr.length === 0 && secondArr.length > 0) {
      thirdArr.push(secondArr.shift());
    }

    while (firstArr.length > 0 && secondArr.length === 0) {
      thirdArr.push(firstArr.shift());
    }

    return thirdArr;
  })(arr);
}

var arr = [];

for (var i = 0; i < 10; i++) {
  arr.push(Math.floor((Math.random() * 100) + 1));
}

console.log('Unsorted: ', arr);
var sortedArr = mergeSort(arr);
console.log('Sorted: ', sortedArr);
