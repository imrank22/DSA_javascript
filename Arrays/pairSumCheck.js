// Given n array element, check if there exists a pair (i, j) such that, 
// 1. arr[i] + arr[j] == k
// 2.  i!=j

function pairSumCheck(arr, k){
    for(let i=0; i<arr.length; i++){ // 0, N -1
        for(let j=0; j<arr.length; j++){ // 0, N-1 
            if(i !== j && arr[i] + arr[j] === k){
                return true
            }
        }
    }
    return false;
}

// Time complexity => O(N*N) = N square

console.log(pairSumCheck( [3, -2, 1, 4, 3, 6, 8], 10 ))

// Now, in above solution we check each pair 2 times because for any pair, 
// i+j will always be equal to j+i, for example in above case, 4+6 = 10, will also be equal when 6+4 will come in the index
// Hence, when i=0, j=1
//             i=1, j=2 and so on.

function pairSumCheck(arr, k){
    for(let i=0; i<arr.length; i++){ // 0 -> N -1
        for(let j=i+1; j<arr.length; j++){ // i+1 -> N-1 
            if(arr[i] + arr[j] === k){
                return true
            }
        }
    }
    return false;
}

// Time complexity => O(N*N) = N square, But we reduced the number of iteration.