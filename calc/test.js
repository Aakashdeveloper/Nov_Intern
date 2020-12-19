var UserNumber = 20;
var counter = 0;
var MaxTries = 3;
var RandomNumber= Math.floor(Math.random()*(20-1)) + 1;
var attempts;
while(RandomNumber != attempts) {
    console.log("Please pick a Number between 1 and" +UserNumber);
    counter += 1;
    if (counter > MaxTries) {
        console.log("You have no. more tries left press F5 to play Again");
    }
    if (RandomNumber == attempts){
        console.log("congrats you have the correct number");
        console.log(" the random number was" + Random );
        console.log("you have get the number" + counter);
    }
}