function averageOfNumbers(arr) {
  const numbers = arr.filter((item) => typeof item === "number");

  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((sum, number) => sum + number, 0);

  return sum / numbers.length;
}

const arr = [1, "gjkiu", 3, true, 5, "0", 10, false];
console.log(averageOfNumbers(arr));

let x = parseFloat(prompt("Введите первое число:"));
let znak = prompt("Введиде символ (+, -, *, /, %, ^):");
let y = parseFloat(prompt("Введите второе число:"));

function doMath(x, znak, y) {
  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (y !== 0) {
        return x / y;
      } else {
        return "Деление на 0 не возможно";
      }
    case "%":
      return x % y;
    case "^":
      return Math.pow(x, y);
    default:
      return "ошибка";
  }
}
console.log(`${doMath(x, znak, y)}`);

function arr() {
  let rows = parseInt(prompt("Введите количество рядков:"));
  let cols = parseInt(prompt("Введите количество столбиков:"));
  let array = [];

  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < cols; j++) {
      array[i][j] = parseInt(prompt(` [${i}][${j}]:`));
    }
  }

  return array;
}
let array = arr();
console.log(array);

function removeEl(str, el) {
  for (let i of el) {
    str = str.split(i).join("");
  }
  return str;
}
let str = prompt("Введите предложение");
let el = prompt(
  "Введите символы которые вы хотите убрать из рядка через запятую"
).split(",");
console.log(
  "Предложение после удаления выбранных вами символов:",
  removeEl(str, el)
);
