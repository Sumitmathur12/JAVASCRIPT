const FavMovie = "Avatar"
let guess = prompt("guess my fav movie name")
while((guess != FavMovie) && ( guess != "quit")){
    guess = prompt(" Wrong guess , Please try again ")

}
if(guess == FavMovie){
    console.log( "congrats !!")
}else {
    console.log("Sorry ,, Guess again ")
}