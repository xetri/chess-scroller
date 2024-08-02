
// Function to go to the previous move
function goToPreviousMove() {
    const prevMoveButton = document.querySelector(".chevron-left");
    if (prevMoveButton) {
        prevMoveButton.click();
    }
}

// Function to go to the next move
function goToNextMove() {
    const nextMoveButton = document.querySelector(".chevron-right");
    if (nextMoveButton) {
        nextMoveButton.click();
    }
}

var board
var isBoardActive = false

// Event listener to capture mouse wheel scroll
window.addEventListener('wheel', function (event) {
    if (!board) {
        board = document.querySelector("wc-chess-board")

        board.addEventListener("mouseenter", function(e) {
            isBoardActive = true
        })
        board.addEventListener("mouseleave", function(e) {
            isBoardActive = false
        })
    }

    if (!isBoardActive) return

    event.preventDefault()
    if (event.deltaY < 0) { // Scroll up
        goToPreviousMove();
    } else if (event.deltaY > 0) { // Scroll down
        goToNextMove();
    }
});
