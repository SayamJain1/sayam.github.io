"use strict";

// we cant define a random number inside the below section or anywhere in the code because the random number has to defiende already
// Math is an object in js and it has many methods and random is one of them
// we can get rid of decimal numbers by using .trunc method and to get a specific numbers of random number we have to mark that number here in Math.random #note: it does not include the typed number so make sure you use above that number!!!
let secretNumber = Math.trunc(Math.random() * 21);

let score = 20; /* To work with scores we initiallize it here and decrease it later*/

let highScore = 0;

// BY USING SAME CODE AGAIN AND AGAIN WE ARE BRACKING THE RULE OF "DRY" !!! TO SLOVE THAT WE WILL USE functions !!!
const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const showScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// we know that if we get something from user-interface like 'input feild' it usually always a string, because in this project we have to deal with a random number so to compare a number with a number is our main idea and to do that we first have to convert the input retrieve data to the number and we know to do that we have method called Number()
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input!!!
  if (!guess) {
    // document.querySelector(".message").textContent = "Choose a valid number";
    showMessage(
      "Choose a valid number"
    ); /* Replace this ⤴ line and made it shorter by refactoring it using a function */
  }

  //   when input is > 20 !!!
  else if (guess > 20) {
    // document.querySelector(".message").textContent = "Choose between 1 and 20";
    showMessage("Choose between 1 and 20");
  }

  //   when player wins!!!
  else if (guess === secretNumber) {
    showMessage("Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    /*To hide secret number we put this code here when wins, it shows up*/

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When wrong AND REFACTORING THE CODE : The DRY Principle
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =guess > secretNumber ? "Too High" : "Too Low";
      showMessage(guess > secretNumber ? "Too High" : "Too Low");
      score--; /* It is same as "score = score - 1" */
      // document.querySelector(".score").textContent = score;
      showScore(score);
    } else {
      showMessage("You Lost The Game");
      // document.querySelector(".score").textContent = 0;
      showScore(0);
      document.querySelector("body").style.backgroundColor = "#a30808";
    }
  }

  // //   when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too High";
  //     score--; /* It is same as "score = score - 1" */
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#a30808";
  //   }
  // }

  // //   when guess is too low
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Lost The Game";
  //     document.querySelector(".score").textContent = 0;
  //     document.querySelector("body").style.backgroundColor = "#a30808";
  //   }
  // }
});

// Again button!!!

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 21);
  // document.querySelector(".message").textContent = "Start guessing...";
  showMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
