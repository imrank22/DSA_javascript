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
 * Space complexity = O(1), constant as we are only creating N, P1 and P2 integer variables.
 */

/**
 * Edge case:
 * 
 * What if k value if greater than the length of array? 
 * It will end into an error or add undefined values to array.
 * To solve this, we have to get k always lesser than the length of array.
 * Approach 1: If k is greater than length, throw error to user.
 * Approach 2: 
 * ar[6] = a0 a1 a2 a3 a4 a5
 * k=0 => a0 a1 a2 a3 a4 a5
 * k = 1 => a5 a0 a1 a2 a3 a4
 * k = 2 => a4 a5 a0 a1 a2 a3
 * k = 3 => a3 a4 a5 a0 a1 a2
 * k = 4 => a2 a3 a4 a5 a0 a1
 * k = 5 => a1 a2 a3 a4 a5 a0
 * k = 6 => a0 a1 a2 a3 a4 a5 (When k = 6, Length of array, it is same as rotating k=0 times)
 * k = 7 => a5 a0 a1 a2 a3 a4 (When k = 7, it is same as rotating k=1 times)
 * k = 8 => a4 a5 a0 a1 a2 a3 (When k = 8, it is same as rotating k=2 times)
 * and so on...
 * Therefore, it should always be 0 <= K <= N
 * If K is greater than the length of array, we need to keep subtracting it from the length of array until we reach a number which is 0 <= K <= N
 * Instead of subtracting, we can simply divide K by N to get the remainder and it will be our new K.
 * 
 * When Arr length if 6, Rotating K times will be same as.
 * 0 -> 6 -> 12 -> 18
 * 1 -> 7 -> 13 -> 19
 * 2 -> 8 -> 14 -> 20
 * 3 -> 9 -> 15 -> 21
 * 4 -> 10 -> 16 -> 22
 * 5 -> 11 -> 17 -> 23
 * 
 * To bring K between 0 to 5 as the array length if 6:
 * K % N => remainder is the new K, rotate it now K times.
 */

function rotateLastKElements(arr, k){
    const N = arr.length-1;
    const K = k%N
    const reversedArr = reverseSubsetOfTheArray(arr, 0, N);
    const reversedFirstSubset = reverseSubsetOfTheArray(reversedArr, 0, K-1);
    const finalReversedArray = reverseSubsetOfTheArray(reversedFirstSubset, K, N);
    console.log(finalReversedArray);
}

rotateLastKElements([3, 4, 1, -2, 9, 8, 7], 10);

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