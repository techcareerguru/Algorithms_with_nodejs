// selection sort

function selectionSort(inputArray){
    for(let i=0; i < inputArray.length; i++){

        let minIndex = i;
        for(let j = i+1; j < inputArray.length; j++){
            if(inputArray[j] < inputArray[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            [inputArray[i], inputArray[minIndex]] = [inputArray[minIndex], inputArray[i]];
        }
    }
    return inputArray;
}

// to execute this fuction I am going to call selectionSort function
inputData = [5,3,1,10,40,30,23];
let result = selectionSort(inputData);
console.log(result);