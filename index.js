const targetWord = "javascript";

const guessedLetters = [];

function updateWordDisplay(){
    // Create a string to display the word with underscores and guessed letters
    let display = "";
    for (const letter of targetWord){
        if(guessedLetters.includes(letter)){ 
            // if we guess correct, display the letter
            display += letter + " ";
        } else {
            // else only display underscores
            display += "_ ";                
        }
    }
    document.getElementById("word-display").textContent = display.trim();
}
function checkGuess() {
    // Gather and adjust user input
    const guessInput = document.getElementById("guess-letter")
    const guess = guessInput.value.toLowerCase(); 
    // ensure the guess is a single letter
    if(guess.length != 1 || !/[a-z]/.test(guess)){ 
        alert("Please enter a valid letter.")
        return;
    }else if(guessedLetters.includes(guess)){
        alert("Letter has already been guessed.")
    }else{
        // if guessed letter is not in the list already, push to list.
        guessedLetters.push(guess);
        // call update word display to compare letters in list to target word
        updateWordDisplay();
    }
    // clear input
    guessInput.value = "";
}
// call update word display to compare letters in list to target word
updateWordDisplay();

/*
Ideas: 1) implement a map/dict style structure to store many words of different size. 
       store words in key value pairs of 'word length : word' so that the user
       can pick a word length (difficulty) to add some variability to the game.
       2) display a incorrect guess graphic. 
       (simple: X's that count up.)
       (less simple: display the hangman parts increasing with each wrong guess.)
       3) clean code, adjust style
*/