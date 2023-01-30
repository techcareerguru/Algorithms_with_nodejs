// Binary Search code in Node Js.

function binarySearch(arrayInput, tragetValue){
    let left = 0;
    let right = arrayInput.length - 1;

    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        // console.log(mid);
        if(arrayInput[mid] === tragetValue){
            return mid;
        }
        if(arrayInput[mid] < tragetValue){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

// Execute function binarysearch
arrayInput=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
tragetValue = 20;
var result = binarySearch(arrayInput, tragetValue);
console.log(result);