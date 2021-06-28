function reverseArray(arr) {
    let newarr = [];
    for(let i = arr.length -1; i >= 0; i--){
      newarr[newarr.length] = arr[i];
    }
    return newarr;
  }
  console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));