"use strict";

function mergeSort(unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);

  const leftSort = unsortedArray.slice(0, middle);
  const rightSort = unsortedArray.slice(middle);

  return merge(mergeSort(leftSort), mergeSort(rightSort));
}

function merge(leftSort, rightSort) {
  let resultArray = [],
    leftSortIndex = 0,
    rightSortIndex = 0;

  while (leftSortIndex < leftSort.length && rightSortIndex < rightSort.length) {
    if (leftSort[leftSortIndex] < rightSort[rightSortIndex]) {
      resultArray.push(leftSort[leftSortIndex]);
      leftSortIndex++;
    } else {
      resultArray.push(rightSort[rightSortIndex]);
      rightSortIndex++;
    }
  }

  return resultArray
    .concat(leftSort.slice(leftSortIndex))
    .concat(rightSort.slice(rightSortIndex));
}
