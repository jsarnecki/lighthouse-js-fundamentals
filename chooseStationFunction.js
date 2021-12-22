const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function(s){
  let result = [];
  for (let i = 0; i < s.length; i++){
    if (s[i][1] >= 20){
      if (s[i][2] === "school" || s[i][2] === "community centre"){
        result.push(s[i][0]);
      }
    }
  }
  return result;
}

// <20 && school || community centre

console.log(chooseStations(stations));

