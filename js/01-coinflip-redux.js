let coinFlip;
// User will tell how many coin flip there will be
// convert string to integer
let coinPrompt = parseInt(prompt("Number of flips"));
for ( let i = 1; i <= coinPrompt; i++){
    coinFlip = Math.round(Math.random());
    if (coinFlip == 0 ){
        window.console.log("Heads");
    } else if (coinFlip == 1){
        window.console.log("Tails")
    }
}