// This connects the buttons on the HTML to the functions in test.js

function startTest() {
    // Hide the start screen
    const startScreen = document.getElementById("start");
    if (startScreen) startScreen.hidden = true;

    // Show the test screen
    const testScreen = document.getElementById("test");
    if (testScreen) {
        testScreen.hidden = false;
        // Call the function from test.js to load the first question
        showQuestion(); 
    }
}

function reset() {
    // Reset the quiz state
    currentQuestion = 0;
    scores = { "me": 0, "hero": 0, "wizard": 0, "villain": 0 };
    
    // Hide results and show start
    document.getElementById("results").hidden = true;
    document.getElementById("start").hidden = false;
}
