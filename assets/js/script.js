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

        gameState.activeArray = getRandomSet(); // Stores the random set of numbers into the active array for the UI to display
        gameState.round = 1; // Resets the round count to 1 when new game is started
        displayNumbers(); // Displays the active array to the user
    }

    /**
     * Starts the game timer and handles 
     */
    function startGameTimer() {

        let secondsLeft = 120;

        const timerId = setInterval(() => {

            // Checks if there are 0 seconds left, if so clear the timer
            if (secondsLeft === 0) {
                clearInterval(timerId);
                showScoreModal();
            }

            // Decrement seconds remaining
            secondsLeft--;
            
            // Checks if seconds is bigger than or equal to zero first to prevent showing negative numbers on timer
            if (secondsLeft >= 0) {
                // Update display to reflect how much time the user has remaining
                updateTimerDisplay(secondsLeft);
            }

        }, 1000);
    }

    /**
     * Updates UI to reflect timer
     * @param {number} secondsLeft - takes a number as argument
     */
    function updateTimerDisplay(secondsLeft){

        // Convert the seconds left into a minutes variable
        const minutes = Math.floor(secondsLeft / 60);

        // Stores the remaining seconds into a variable
        const seconds = secondsLeft % 60;

        // Updates the UI with our respective variables, padStart is added to display the time in a MM:SS format
        document.getElementById("minutes").innerText = `${minutes}`.padStart(2, "0");
        document.getElementById("seconds").innerText = `${seconds}`.padStart(2, "0");
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

        // Array of number sets that will be used in the game
        const numbersArray = [[8,8,2,7], [8,8,4,1], [6,6,8,2], [2,7,4,8], [1,5,6,3], [2,4,8,9], [8,7,1,8], [1,3,5,6], [2,4,4,6], [2,2,3,7],
         [1,2,5,6], [2,2,6,7], [3,6,8,9], [1,3,7,8], [3,3,5,9], [4,6,6,8], [1,2,4,9], [8,7,8,1], [3,4,4,5], [5,5,9,1], [2,4,6,7], [1,2,7,8],
          [1,4,4,6], [2,3,3,7], [8,8,7,9], [1,5,6,8], [2,4,8,9], [5,6,6,9], [7,7,7,3], [5,7,8,8], [3,5,8,9], [2,5,7,9], [3,4,7,8], [2,3,4,8],
        [5,7,7,5], [1,4,4,9], [2,2,5,7], [1,3,8,8], [4,5,5,7], [1,5,6,7], [2,2,6,9], [3,4,2,6], [4,6,6,8], [4,5,2,2] [4,4,2,8], [3,4,5,5], 
        [2,9,3,5], [8,2,6,2], [2,4,4,1], [1,5,8,8], [3,3,4,8]];

        // Creates random number between 0 and the array length
        const randomNum = Math.floor(Math.random() * numbersArray.length);
            
        // Stores random array from numbers array into variable
        const randomSet = numbersArray[randomNum];
        
        return randomSet;
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