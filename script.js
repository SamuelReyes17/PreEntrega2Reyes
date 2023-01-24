let calculadora = {
  history: [],
  add: function (num1, num2) {
    let result = num1 + num2;
    this.history.push(`${num1} + ${num2} = ${result}`);
    return parseFloat(result);
  },
  substract: function (num1, num2) {
    let result = num1 - num2;
    this.history.push(`${num1} - ${num2} = ${result}`);
    return parseFloat(result);
  },
  multiply: function (num1, num2) {
    let result = num1 * num2;
    this.history.push(`${num1} * ${num2} = ${result}`);
    return parseFloat(result);
  },
  divide: function (num1, num2) {
    let result = num1 / num2;
    this.history.push(`${num1} / ${num2} = ${result}`);
    return parseFloat(result);
  },
  percentage: function (num1, num2) {
    let result = (num1 * num2) / 100;
    this.history.push(`${num1} * ${num2} / 100 = ${result}`);
    return parseFloat(result);
  },
  showHistory: function () {
    console.log(this.history);
  },
};
while (true) {
  let num1 = parseFloat(prompt("Ingresa el primer numero"));
  let num2 = parseFloat(prompt("Ingresa el segundo nmumero"));
  let operation = prompt("Ingrese la operacion a realizar: +, -, *, /, %");
  let result;
  switch (operation) {
    case "+":
      result = calculadora.add(num1, num2);
      break;
    case "-":
      result = calculadora.substract(num1, num2);
      break;
    case "/":
      result = calculadora.divide(num1, num2);
      break;
    case "*":
      result = calculadora.multiply(num1, num2);
      break;
    case "%":
      result = calculadora.percentage(num1, num2);
      break;

    default:
      alert("Operacion invalida");
  }

  if (result) {
    alert("El resultado es " + result);
  }

  calculadora.showHistory();
  let repeat = prompt("Desea realizar otra operacion? si / no");
  if (repeat === "no") {
    break;
    alert("Gracias por tu tiempo");
  }
}
