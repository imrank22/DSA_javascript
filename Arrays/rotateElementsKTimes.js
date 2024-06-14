// Given N array elements, rotate the array from last to first by K times.

/** 
 * Example input:
 * arr = [3, 4, 1, -2, 9, 8, 7], and k = 3
 * Output:
 * arr = [9, 8, 7, 3, 4, 1, -2]
*/

/**
 * Given arr= [3, 4, 1, -2, 9, 8, 7], and k= 3
 * k = 1, arr=> [7, 3, 4, 1, -2, 9, 8]
 * k = 2, arr=> [8, 7, 3, 4, 1, -2, 9]
 * k = 3, arr=> [9, 8, 7, 3, 4, 1, -2]
 */

/**
 * Approach:
 * k= 5
 * arr[13] = a0 a1 a2 a3 a4 a5 a6 a7 a8 a9 a10 a11 a12
 * Output we need: "a8 a9 a10 a11 a12" a0 a1 a2 a3 a4 a5 a6 a7
 * 
 * Step 1: Reverse the entire array
 * a12 a11 a10 a9 a8 a7 a6 a5 a4 a3 a2 a1 a0 // Total iterations: n/2
 * Step 2: Reverse from 0 to k-1
 * "a8 a9 a10 a11 a12" a7 a6 a5 a4 a3 a2 a1 a0 // Total iterations: k/2
 * Step 3: Reverse the remaining to its original state (from k to N-1)
 * a8 a9 a10 a11 a12 "a0 a1 a2 a3 a4 a5 a6 a7" // Total iterations: (n-k)/2
 * 
 * Time complexity for this approach:=> n/2 + k/2 + (n-k)/2 = n
 * T.C = O(N)
 */

function rotateLastKElements(arr, k){
    const N = arr.length-1;
    const reversedArr = reverseSubsetOfTheArray(arr, 0, N);
    const reversedFirstSubset = reverseSubsetOfTheArray(reversedArr, 0, k-1);
    const finalReversedArray = reverseSubsetOfTheArray(reversedFirstSubset, k, N);
    console.log(finalReversedArray);
}

rotateLastKElements([3, 4, 1, -2, 9, 8, 7], 4);

function reverseSubsetOfTheArray(arr, SI, EI){
    let p1 = SI;
    let p2 = EI;
    while(p1 < p2){
        let temp = arr[p1]
        arr[p1] = arr[p2];
        arr[p2] = temp;

        p1++;
        p2--;
    }
    return arr;
}