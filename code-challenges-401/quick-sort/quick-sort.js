'use strict';

var element = [5, 3, 7, 6, 2, 9];
function swap(element, leftIndex, rightIndex) {
  var temp = element[leftIndex];
  element[leftIndex] = element[rightIndex];
  element[rightIndex] = temp;
}
function partition(element, left, right) {
  var pivot = element[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (element[i] < pivot) {
      i++;
    }
    while (element[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(element, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(element, left, right) {
  var index;
  if (element.length > 1) {
    index = partition(element, left, right);
    if (left < index - 1) {
      quickSort(element, left, index - 1);
    }
    if (index < right) {
      quickSort(element, index, right);
    }
  }
  return element;
}

var sortedArray = quickSort(element, 0, element.length - 1);
console.log(sortedArray);
