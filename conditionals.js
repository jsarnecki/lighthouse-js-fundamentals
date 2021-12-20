const raining = true;
const cold = false;
const temp = 12;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
} else if (temp < 15){
  console.log("Short sleeves won't cut it!")
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!");

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


if (temp < -40 || temp > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}

