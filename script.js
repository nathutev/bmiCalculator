let weight;
let height;
let resultHeight;
let resultBmi;
let bmiResult = document.getElementById("bmiResult");

function solve(){
  reset();
  weight = document.getElementById("inputWeight").value;
  height = document.getElementById("inputHeight").value;

  resultHeight = height * height;

  resultBmi = Math.round(10000 * (weight / resultHeight));

  document.getElementById("bmiResult").textContent += resultBmi;
}

let oldBmiResult = bmiResult.textContent;
function reset(){
  bmiResult.textContent = oldBmiResult;
}