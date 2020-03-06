#  Crushing Bugs Project

## Fixing 2 bugs that the puzzle game still has

### Prerequisites

![Puzzle](images/puzzle.jpg "Puzzle Banner")

#### Roadmap and Solutions

1st Bug: Puzzle pieces get overlapped after dropped 
- Inspect div elements.
- Create a condition that recognize the div that holds the puzzles.
- Allow puzzles to be dropped only when div has a class that it is meant for drop zones only.

2nd Bug: Puzzles are not reset after switching to a new board
- Inspect div elements.
- Create a loop that allows users to reset all the puzzle pieces back to board after clicking on the puzzle button.
- Set up a class for the puzzle container, set a loop that brings the puzzle pieces back to the parent div.

##### Considerations
- Work more on the UI/UX experience: such as set up a scoreboard, a proper reset button, and allow puzzles to be swappable.

### Author
My Tu Tran

### License

MyTuTran © 2020