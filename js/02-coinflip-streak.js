let coinFlip;
let counter = 0;
let coinPrompt = parseInt(prompt("Number of flips"));

do {
    coinFlip = Math.round(Math.random());
    if(coinFlip == 0) {
        console.log("Heads");
        counter += 1;
        //console.log(counter);
    } else if (coinFlip == 1){
        console.log("Tails")
    }
} while (coinFlip == 0 && counter <= coinPrompt);