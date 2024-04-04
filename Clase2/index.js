let fullOperation = '';

function number(value){
    console.log(value);
    fullOperation += value;
    renderNumber();
}

function operation(op){
    console.log(op);
    let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/|\^)/);
    if (operador) return;
    fullOperation += op;
    renderNumber();
}

function del(){
  fullOperation = "";
  renderNumber();
}

function renderNumber(){
    document.getElementById('screen').innerHTML = fullOperation;
}
function saveNumber(){
  document.getElementById('screen2').innerHTML += fullOperation + "<br>";
}

function result(){
    const values = fullOperation.split(/(\+|-|\x|\/|\^)/);

    console.log(values);
    let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);

    console.log(number1);
    console.log(number2);
    console.log(operador);

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    switch (operador) {
        case 'x':
          fullOperation = multiplication(number1, number2);
          break;
        case '/':
          fullOperation = division(number1, number2);
          break;
        case '+':
          fullOperation = sum(number1, number2);
          break;
        case '-':
          fullOperation = substract(number1, number2);
          break;
        case '^':
          fullOperation = power(number1, number2);
          break;
        default:
          break;
      }
    
      renderNumber();
      saveNumber();
}

function multiplication(number1, number2) {
    return number1 * number2;
}

function division(number1, number2) {
    return number1 / number2;
}

function sum(number1, number2) {
    return number1 + number2;
}

function substract(number1, number2) {
    return number1 - number2;
}

function power(number1, number2) {
  return Math.pow(number1,number2);
}