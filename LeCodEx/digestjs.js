//create a secretNumber
var secretNumber = 5;

//make a guess
var guess = Number(prompt("Guess the number!!"));

//check
if(guess === secretNumber){
    alert("CORRECT GUESS!!");
}
else if(guess<secretNumber){
    alert("Low..Try Again!!");   
}
else{
    alert("High..Try Again!!");
}