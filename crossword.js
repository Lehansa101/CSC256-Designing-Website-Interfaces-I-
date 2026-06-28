// Array of crossword clues
let clues = [
    "1. The planet we live on",
    "2. The star at the center of our solar system",
    "3. A natural satellite that orbits a planet"
];

// Array of correct answers
let answers = ["earth", "sun", "moon"];

// Display clues using a loop
let clueBox = document.getElementById("clueBox");

for(let i = 0; i < clues.length; i++)
{
    clueBox.innerHTML += clues[i] + "<br>";
}

// Function to check answers
function checkAnswers()
{
    let w1 = document.getElementById("word1").value.toLowerCase();
    let w2 = document.getElementById("word2").value.toLowerCase();
    let w3 = document.getElementById("word3").value.toLowerCase();

    let result = document.getElementById("result");

    if(w1 === answers[0] && w2 === answers[1] && w3 === answers[2])
    {
        result.innerHTML = "Correct! Great job!";
    }
    else
    {
        result.innerHTML = "Try again!";
    }
}