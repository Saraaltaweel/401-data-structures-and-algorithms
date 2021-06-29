function binarySearch(arr,key){
    let start=0;
    let end=arr.length-1;

    while(start<=end){
        let middle=math.floor((start+end)/2);
        if (arr[middle]===key){
            return middle;
        }
        else if (arr[middle]<key){
            start=middle+1
        }
        else{
            end=middle-1;
        }
    }
    return -1;
}
console.log(binarySearch([4, 8, 15, 16, 23, 42], 15));