
let currentPlayer = 'X';

let boxesfilled = 0;

let allowClicking = 'yes';

//Congratulate the winner
function congratulateWinner() {

  allowClicking = 'no';

  const colorOne = document.querySelector('.firstColor');

  const colorTwo = document.querySelector('.secondColor');

  const colorThree = document.querySelector('.thirdColor');

  setTimeout(function() {

    colorOne.innerHTML = `Congratulations! `;

    colorTwo.innerHTML = `${currentPlayer} `;

    colorThree.innerHTML = `won!`;

    clearBoard();

    boxesfilled = 0;

  }, 900);

  setTimeout(function() {

  colorOne.innerHTML = ` `;

  colorTwo.innerHTML = ` `;

  colorThree.innerHTML = ` `;

  },2600);

};

// Get all td tags from the DOM and save as a variable 'boxes'
const boxes = document.querySelectorAll('td');

// Loop over every DOM node in the boxes array
for(let i = 0; i < boxes.length; i++ ) {

// Add an event listen function to each of them
    boxes[i].addEventListener('click', function() {

// Check if box is empty before trying to write in it
    if (this.innerHTML !== "") {

      return; //exit function if the box is not empty

    } else if(allowClicking === 'yes') {

      this.innerHTML = currentPlayer;

    } else {

      return;

    }

    const b0 = boxes[0].innerHTML, b1 = boxes[1].innerHTML, b2 = boxes[2].innerHTML, b3 = boxes[3].innerHTML, b4 = boxes[4].innerHTML,b5 = boxes[5].innerHTML,b6 = boxes[6].innerHTML, b7 = boxes[7].innerHTML, b8 = boxes[8].innerHTML;

    // Check who wins the game
    if(
      ( b0 === b1 && b1 === b2 && b0 === currentPlayer ) ||
      ( b3 === b4 && b4 === b5 && b3 === currentPlayer ) ||
      ( b6 === b7 && b7 === b8 && b8 === currentPlayer ) ||
      ( b0 === b3 && b3 === b6 && b0 === currentPlayer ) ||
      ( b1 === b4 && b4 === b7 && b1 === currentPlayer ) ||
      ( b2 === b5 && b5 === b8 && b2 === currentPlayer ) ||
      ( b0 === b4 && b4 === b8 && b0 === currentPlayer ) ||
      ( b2 === b4 && b4 === b6 && b2 === currentPlayer )

    ) {

      congratulateWinner(currentPlayer);

      return;

    }

    //Check for the draw
    boxesfilled++;

    if (boxesfilled === 9) {

      const colorOne = document.querySelectorAll('.firstColor')[1]; // Different color text

      const colorTwo = document.querySelectorAll('.secondColor')[1];

      const colorThree = document.querySelectorAll('.thirdColor')[1];

      setTimeout(function() {

        colorOne.innerHTML = `It's `;

        colorTwo.innerHTML = `a `;

        colorThree.innerHTML = `draw`;

        clearBoard();

        boxesfilled = 0;

      }, 900);

      setTimeout(function() {

      colorOne.innerHTML = ` `;

      colorTwo.innerHTML = ` `;

      colorThree.innerHTML = ` `;

    },2600);

      return;

    }

    // Change the player from one to the other
    if( currentPlayer === 'X' ){

      currentPlayer = 'O';

    } else {

      currentPlayer = 'X'; // It was 'O', so change to 'X'

    }

  }); // End of event listener

} // End of for loop

const restart = document.querySelector('#playAgain');

// Clear the board
const clearBoard = function(){

  for ( let i = 0; i < boxes.length; i ++ ) {

    boxes[i].innerHTML = '';

  }

  allowClicking = 'yes';

};

restart.addEventListener('click', function(){

clearBoard();

boxesfilled = 0;

});
