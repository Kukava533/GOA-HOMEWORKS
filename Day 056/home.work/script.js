
function manualSlice(arr, start, end) {
    let slicedArr = [];

    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = arr.length;
    }
    
    for (let i = start; i < end; i++) {
        slicedArr.push(arr[i]);
    }
    
    return slicedArr;
}