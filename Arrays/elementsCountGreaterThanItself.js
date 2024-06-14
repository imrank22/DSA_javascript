// Given an array of integers, count the number of elements having at least one item greater than itself.

// Approach 1 :=>
// Loop over the array, find the max element
// Loop again, count the number of elements not equal to the max
// Return count
// Total iterations = 2
// Time complexity = O(N)

// Approach 2 :=>
// Loop over the array, find the max element
// Loop again, remove the max element
// Return length of array
// Total iterations = 2
// Time complexity = O(N)

// Approach 3 (One iteration) :=>
// Initialize the max and the count
// Loop over the array, If element less than max, increment the count.
// If element greater than the max, assign new max and count as index(which is number of all elements before the max, as all will be lesser)
// Return count
// Total iterations = 1
// Time complexity = O(N)
// Space complexity = O(1)
// Solution for Approach 3.

function getElementCount(arr) {
  let maxVal = arr[0]; // 8B
  let count = 0; // 8B

  for (let i = 0; i < arr.length; i++) {
    // i, 8B
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
// Space complexity = 8+8+8 = 24 = O(1), constant space

const a = [1, 6, 6, 8, 3, 1, 8, 4, 2];
console.log(getElementCount(a));
const b = [1, 6, 6, 8, 3, 1, 10, 8, 4, 2];
console.log(getElementCount(b));
