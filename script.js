let inputtedNum = document.getElementById("number");
let output = document.getElementById("output");
let outputDiv = document.querySelector(".output_div");
const button = document.getElementById("convert-btn");
outputDiv.style.visibility = "hidden";

// palindromeChecker function
function palindromeChecker() {
  if (inputtedNum.value === "") {
    error();
    output.textContent = "Please enter a valid number";
  } else if (inputtedNum.value < 0) {
    error();
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputtedNum.value > 3999) {
    error();
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let result = "";
    for (let i = 0; i < romanNumerals.length; i++) {
      while (inputtedNum.value >= romanNumerals[i][1]) {
        result += romanNumerals[i][0];
        inputtedNum.value -= romanNumerals[i][1];
      }
    }
    output.textContent = result;
    outputDiv.style.backgroundColor = "#3b3b4f";
    outputDiv.style.borderColor = "#fff";
    output.style.color = "#fff";
  }
}
button.addEventListener("click", (event) => event.preventDefault());
button.addEventListener("click", palindromeChecker);

function error() {
  outputDiv.style.visibility = "visible";
  outputDiv.style.backgroundColor = "#ffadad";
  outputDiv.style.borderColor = "#850000";
  output.style.color = "#850000";
}
