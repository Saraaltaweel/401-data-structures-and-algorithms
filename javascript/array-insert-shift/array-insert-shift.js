function insertShiftArray(arr, val){
    let newarr = [];
   if (arr.length == 0) {
        newarr.push(value);
    }
     else {
        for (let i = 0; i < arr.length; i++) {
            let indVal = Math.ceil(arr.length / 2);
            if (i == indVal) {
                newarr.push(val)
            }
            newarr.push(arr[i])
        }
    }
    return newarr;
}
console.log(insertShiftArray([1,2,4,5],3));