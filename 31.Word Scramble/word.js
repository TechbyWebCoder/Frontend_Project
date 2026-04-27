const words = ["javascript", "python", "html", "css", "react"];
const hints = [
    "A popular programming language for web development",
    "A programming language known for its simplicity",
    "The standard markup language for creating web pages",
    "A stylesheet language used to describe the presentation of a document",
    "A JavaScript library for building user interfaces"
];

let displayWord = "";
let displayHint = "";
let index = 0;

function shuffle(word) {
    let arr = word.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (input.value.toLocaleLowerCase() === displayWord.toLocaleLowerCase()) {
        output.innerHTML = "Result: Correct";
    } else {
        output.innerHTML = "Result: Incorrect";
    }
}

function refresh() {
    index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    displayHint = hints[index];
    let scrambleWord = document.getElementById("scrambleWord");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
}

refresh();
