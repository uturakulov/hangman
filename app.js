//create array with words
var words = ["программа", "макака", "прекрасный", "оладушек"];

//choose random word
var word = words[Math.floor(Math.random() * words.length)];

//create final array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

// function game() {
//game loop begins here
while (remainingLetters > 0) {
  //show current state of game
  alert(answerArray.join(" "));

  //asking for variant
  var guess = prompt("Угадайте букву, или нажмите Отмена для выхода из игры.");
  if (guess === null) {
    //exit loop
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву!");
  } else {
    //updating the state of game
    for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess;
        remainingLetters--;
      }
    }
  }
  //ending of the game loop
}
// }
//showing the answer
alert(answerArray.join(" "));
alert("Отлично ! Было загадано слово " + word);
