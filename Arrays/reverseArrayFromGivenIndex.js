// Given an array, reverse it, do not use any inbuilt functions.

// Approach:
// take 2 variables to hold the first and last element, then swap them.
// Eg: [1, 5, 3, 5, 6, 8, 3, 1, 10]
//      p1                      p2 | swap them, then increment p1 and decrement p2
//         p1                p2    | repeat again
//            p1          p2       | repeat again
//               p1    p2          | repeat again
//                 p1p2            | this would go until index of p1 < p2.

// Time complexity :=>
// The total number of iterations of the loop is proportional to half the number of elements between SI and EI (specifically (EI - SI + 1) / 2).
// Therefore, the time complexity is: 𝑂((𝐸𝐼 − 𝑆𝐼+ 1) /2)
// Since constants are ignored in Big-O notation, the time complexity simplifies to: 𝑂(𝐸𝐼 − 𝑆𝐼 +1)

// Explanation:
// If EI - SI + 1 is the length of the subarray being reversed, then the time complexity is linear in terms of the length of the subarray.
// In summary, the time complexity of the reverseTheArray function is: O(n)
// where n is the length of the subarray to be reversed.

// Space complexity : Big O => O(1), constant

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

console.log(reverseSubsetOfTheArray( [1,2,3,4,5], 0, 2 ))
console.log(reverseSubsetOfTheArray( [1,2,3,4,5,10,11,12,13,14], 4, 8) )