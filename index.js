/* Problem: Given an array of 'n' elements and a target element of 't', find the index of 't'
in the array. Return -1 if the target is not found. 

*/

function linearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}


console.log(linearSearch([3,6,9,12], 9))

// Big O === O(n)