function quickSort(arr) {
  return (function repeat(arr, left, right) {
    if (right - left > 0) {
      var pivotIndex = partition(arr, left, right);

      repeat(arr, left, pivotIndex - 1);
      repeat(arr, pivotIndex + 1, right);

      return arr;
    }
  })(arr, 0, arr.length - 1);

  function partition(arr, left, right) {
    var pivotIndex = right;
    var pivot = arr[right];

    left = left - 1;

    while (true) {
      while (arr[++left] < pivot) {}
      while (0 < right && pivot < arr[--right]) {}

      if (left < right) {
        swap(arr, left, right);
      } else {
        break;
      }
    }

    if (left !== pivotIndex) swap(arr, left, pivotIndex);

    return left;
  }

  function swap(arr, left, right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}

var arr = [];

for (var i = 0; i < 10; i++) {
  arr.push(Math.floor((Math.random() * 100) + 1));
}

console.log('Unsorted: ', arr);
var sortedArr = quickSort(arr);
console.log('Sorted: ', sortedArr);
