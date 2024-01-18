document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const flagsLeft = document.querySelector("#flags-left");
  const width = 10;
  let bombAmount = 20;
  let squares = [];

  console.log(grid);

  // créer le tableaux
  function createBoard() {
    flagsLeft.innerHTML = bombAmount;

    // mélange des bombes dans le tableau
    const bombArray = Array(bombAmount).fill("bomb");
    const emptyArray = Array(width * width - bombAmount).fill("valid");
    const gameArray = emptyArray.concat(bombArray);
    const shuffledArray = gameArray.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.id = i;
      square.classList.add(shuffledArray[i]);
      grid.appendChild(square);
      squares.push(square);

      // click normal
      square.addEventListener("click", function () {
        click(square);
      });

      // click controle et gauche
      square.addEventListener("click", function () {
        // addFlag(square);
      });
    }

    // ajout de chiffres
    for (let i = 0; i < squares.length; i++) {
      let total = 0;
      const isLeftEdge = i % width === 0;
      const isRightEdge = i % width === width - 1;

      if (squares[i].classList.contains('valid')) {
        if (i > 0)
      }
    }
  }
  createBoard();

  function click(square) {
    console.log(square);
  }
});
