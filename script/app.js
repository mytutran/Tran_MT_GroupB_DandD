(() => {
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	// set up the puzzle pieces and boards

	function changeImageSet() {
		// change all the image elements on the page -> draggable image sources
		// change the image elements on the left to match the selected puzzle
		//forEach = looping
		pieceNames.forEach((piece, index) => {
			puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
			puzzlePieces[index].id = `${piece + this.dataset.puzzzleref}`;

		});

		//and set the drop zone background image based on the puzzle the user selects
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
		//debugger;
	}

	function allowDrag(event) {
		//console.log('started dragging an image');
		event.dataTransfer.setData("text/plain", this.id);

	}

	function allowDragOver(event) {
		event.preventDefault();
	//console.log('dragged over a drop zone');
	}

	function allowDragLeave(event) {
		event.preventDefault();
		//console.log('dragged outside drop zone');
	}

	function allowDrop(event) {
		event.preventDefault();
		//console.log('dragged on a drop zone');
		let target = event.target;
		let currentImage = event.dataTransfer.getData("text/plain");
		// add that image to whaetever drop zone we're dropping our image on
		let droppable = target.classList.contains("drop-zone");
		if (droppable) {
		target.appendChild(document.querySelector(`#${currentImage}`));
		}
	}


	// add event handling here -> how is user going to use our app?
	//what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working wtih
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone =>  {
		zone.addEventListener('dragover', allowDragOver),
		zone.addEventListener('dragover', allowDragLeave),
		zone.addEventListener('drop', allowDrop)
	});
	// call the function and pass in the first nav button as a reference
	//research call, apply and bind -> look at MDN
	changeImageSet.call(puzzleButtons[0]);

})();
