const lastIndexOf = function(arr, n){
  if (arr.length === 0){
    return -1;
  }
  let index = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === n){
      index.push(i);
    }
  }
  if (index.length === 0){
    return -1;
  } else {
    return index[index.length - 1];
  }
};

console.log(lastIndexOf([ 5, 5, 5], 5));
