// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function(){

    // Get the button Elements and add event listeners to them
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "start"){
                resetGameState();
                document.getElementById("score").innerText = 0; // Resets score at DOM
                document.querySelector(".number-grid").classList.remove("disabled"); // Enable the number-grid once game has begun
                document.getElementById("start").classList.add("hide"); // Disable start button to prevent user pressing more than once.
                document.getElementById("quit").style.display = 'inline-block'; // Show quit button to user once game has begun
                runGame();
                startGameTimer();
            } else if (this.classList.contains("game-btn")){
                handleNumberClick(event);
            } else if (this.classList.contains("operator-btn")){
                handleOperatorClick(event);
            } else if (this.getAttribute("data-type") === "undo") {
                revertArray();
            } else if (this.getAttribute("data-type") === "quit") {
                location.reload();
            }
        });
    }
    
    // Game state object lives here (idea taken from chatGPT)
    const gameState = {
        num1: null,
        num1ButtonIndex: null,
        num2: null,
        num2ButtonIndex: null,
        num3: null,
        operator: null,
        clickedOp: null,
        lastClickedOp: null,
        lastClickedButton: null,
        index: null,
        step: 1,
        chosenNumber: null,
        activeArray: [],
        round: 1,
        initialArrayCopy: [],
        secondVersionArray: [],
        thirdVersionArray: [],
        fourthVersionArray: [],
        };

    /**
     * Initialises and starts a new game round
     */
    function runGame() {

    }

    /**
     * Starts the game timer and handles 
     */
    function startGameTimer() {

    }

    /**
     * Updates UI to reflect timer
     * @param {number} secondsLeft - takes a number as argument
     */
    function updateTimerDisplay(secondsLeft) {

    }

    /**
    * Manages the current state of the game based on the step value in `gameState`.
    */
    function manageGameState() {

    }

    /**
     * Randomly gets a set of numbers from numbersArray to be used in the game
     * @returns Random set of four numbers
     */
    function getRandomSet() {

    }

    /**
     * Displays the numbers to User and removes empty buttons
     */
    function displayNumbers() {

    }

    /**
     * Handles user clicks on number buttons, updating game state accordingly.
     * @param {Event} event - The click event triggered by a number button.
     */
    function handleNumberClick(event) {

    }

    /**
     * Handles user clicks on operator buttons, updating game state accordingly.
     * @param {Event} event - The click event triggered by an operator button.
     */
    function handleOperatorClick(event) {

    }

    /**
     * Performs a calculation on two numbers stored in `gameState` using the provided operator.
     * @param {string} operator - The operator to apply ('+', '-', '*', '/').
     */
    function performCalculation(operator) {


    }

    /**
     * Updates active array to reflect recent calculation
     */
    function updateNumberArray() {
        
    }

    /**
     * Takes a snapshot of the current array and stores it into a variable depending on round
     */
    function storeNumberArray() {

    }

    /**
     * Reverts current active array back to previous version depending on round
     */
    function revertArray() {

    }

    /**
     * Checks if the user has won a point. If so, it runs the game again to give the user another question
     */
    function checkForWin() {

    }

    /**
    * Gets the current score from the DOM and increments it by 1
    */
    function incrementScore() {

    }

    /**
     * Display the game ending modal when the game timer reaches 00:00
     */
    function showScoreModal() {

    }

    /**
     * Updates the game ending modal content to reflect score from DOM
     */
    function updateModalContent() {

    }

    /**
     * Displays error modal to user when they make a mistake in the game
     */
    function showErrorModal(answer) {


    }

    /**
    * Resets all relevant `gameState` variables to their initial values,
    * preparing the game for a new turn or to recover from an invalid action.
    */
    function resetGameState() {

    }

});