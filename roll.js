//Dice Roller that takes sides + number of dice, Rolls them and displays results

//Roll the dice
function rollDice(){
//Roll the Dice when "Roll" button is clicked
document.getElementById("roll").onclick = function (){

  var sides = document.getElementById("sides").value;
  var dice = document.getElementById("dice").value;
  var resultsBox = document.getElementById("results");

//loop through the number of dice
var diceRolls = [];
for (i = 0; i < dice; i++){
  //each dice roll has a random number between 1 & the "sides" inputed
  var results = Math.floor((Math.random() * sides) + 1);
  //Push each result into the array
  diceRolls.push(results);
}
//Output the results in the results field
resultsBox.value = diceRolls;

}

}
//Ready the ALL THE FUNCTIONS!
window.onload = function () {rollDice()};
