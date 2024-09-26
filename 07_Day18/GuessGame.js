let max = prompt("Enter the max number :");

const random = Math.floor(Math.random() *max) + 1; 
let guess = prompt("Guess the Correct Number : ");
while(true){
    if ( guess == "quit"){
        console.log("User quit")
        break; 
    }
    if (guess == random){
        console.log(`you are right,, Congrats, Your guess is right the number is ${random} `);
        break;

    } else{
        guess = prompt("your guess was wrong ,, Please try again .. May be you can guess right:")
    }
}