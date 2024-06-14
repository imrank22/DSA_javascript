// Given an array, reverse it, do not use any inbuilt functions.

// Approach:
// take 2 variables to hold the first and last element, then swap them.
// Eg: [1, 5, 3, 5, 6, 8, 3, 1, 10]
//      p1                      p2 | swap them, then increment p1 and decrement p2
//         p1                p2    | repeat again
//            p1          p2       | repeat again
//               p1    p2          | repeat again
//                 p1p2            | this would go until index of p1 < p2.

// Time complexity => O(N), Iterations => N/2
// Space complexity => O(1)

function reverseTheArray(arr){
    let p1 = 0;
    let p2 = arr.length - 1;
    while(p1 < p2){
        let temp = arr[p1]
        arr[p1] = arr[p2];
        arr[p2] = temp;

        p1++;
        p2--;
    }
    return arr;
}

console.log(reverseTheArray([1,2,3,4,5]))
console.log(reverseTheArray([1,2,3,4,5, 10,11,12,131,14]))