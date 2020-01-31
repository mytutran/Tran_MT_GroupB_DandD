(() => {
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				gameBoard = document.querySelector('.puzzle-board');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	// set up the puzzle pieces and boards

	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources
		// change the image elements on the left to match the selected puzzle
		//forEach = looping
		pieceNames.forEach((piece, index) => puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`);

		//and set the drop zone background image based on the puzzle the user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}





	// add event handling here -> how is user going to use our app?
	//what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working wtih
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	// call the function and pass in the first nav button as a reference
	changeImageSet.call(puzzleButtons[0]);

})();
