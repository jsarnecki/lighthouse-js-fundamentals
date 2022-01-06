const range = function(s, f, r){
  if (r <= 0 || f <= s || s === undefined || f === undefined || r === undefined){
    return [];
  };
  let result = [];
  for (let i = s; i <= f; i += r){
    result.push(i);
  };
  return result;
}

console.log(range(10, 30, 5));
