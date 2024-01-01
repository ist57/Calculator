
const resultScreen = document.querySelector(".js-inputText");
const keyboard=document.querySelectorAll(".js-keyboard button");
const numberButtons = document.querySelectorAll(".js-number-button");
const operationButtons = document.querySelectorAll(".js-operation-button");
const equalButton = document.querySelector(".js-equal-button");
const modButton = document.querySelector(".js-mod-button");
const clearButton = document.querySelector(".js-clear-button");
const resetButton = document.querySelector("js-reset-button");

keyboard.forEach(button => {
  button.addEventListener('click', function(){
    if (this.textContent === '=') {
      
      resultScreen.value = calculate();
    }
    else if (this.textContent === 'C') {
      resultScreen.value = '';
    }
    else if (this.textContent === 'AC') {
      resultScreen.value = '0';
    }
    else if (this.textContent === '+' || this.textContent === '-' || this.textContent === '*' || this.textContent === '/' || this.textContent === '%') {
      resultScreen.value += ` ${this.textContent} `; //resultscreen'in değerine bu operatörü ve bir boşluk karakterini ( ) ekler.??????????????????
    }
    else {
      resultScreen.value += this.textContent;
    }
  });

});

function calculate() {
  const expression = resultScreen.value.split(' ');
  const firstNum = parseFloat(expression[0]);
  const secondNum = parseFloat(expression[2]);
 

  switch (expression[1]) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    case "%":
      return firstNum % secondNum;
    default: "eror"
  }
}