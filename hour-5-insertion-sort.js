function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var ins = i;
    var current = arr[i];

    while(current < arr[ins - 1]) {
      arr[ins] = arr[ins - 1];
      ins--;
    }
  
    arr[ins] = current;
  }

  return arr;
}

var arr = [];

for (var i = 0; i < 10; i++) {
  arr.push(Math.floor((Math.random() * 100) + 1));
}

console.log('Unsorted: ', arr);
var sortedArr = insertionSort(arr);
console.log('Sorted: ', sortedArr);
