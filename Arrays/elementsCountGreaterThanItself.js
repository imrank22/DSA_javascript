// Given an array of integers, count the number of elements having at least one item greater than itself.

function getElementCount(arr) {
  let maxVal = arr[0]; // 4B
  let count = 0; // 4B

  for (let i = 0; i < arr.length; i++) {
    // i, 4B
    if (arr[i] < maxVal) {
      count++;
    } else if (arr[i] > maxVal) {
      maxVal = arr[i];
      count = i;
    }
  }
  return count;
}

// Time complexity = O(N)
// Space complexity = 4+4+4 = 16 = O(1), constant space

const a = [1, 6, 6, 8, 3, 1, 8, 4, 2];
console.log(getElementCount(a));
const b = [1, 6, 6, 8, 3, 1, 10, 8, 4, 2];
console.log(getElementCount(b));
