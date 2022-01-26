// let a = prompt ('Введите основание треугольника');
// let na = Number (a)
// let h = prompt ('Введите высоту треугольника');
// let nh = Number (h)
// let S = 1/2*na*nh;
// alert(S);

// let a = prompt ('Введите верхнее основание трапеции');
// let na = Number (a)
// let b = prompt ('Введите нижнее основание трапеции');
// let nb = Number (b)
// let h = prompt ('Введите высоту трапеции');
// let nh = Number (h)
// let S = (((na+nb)/2)*nh);
// alert(S);

// let r = prompt ('Введите радиус круга');
// let nr = Number (r);
// let S = Math.PI*Math.pow(nr, 2);
// alert(S);

// let a = prompt ('Введите основание параллелограммa');
// let na = Number (a)
// let h = prompt ('Введите высоту параллелограммa');
// let nh = Number (h)
// let S = na*nh
// alert(S);

// let r = prompt ('Введите радиус цилиндра');
// let nr = Number (r);
// let h = prompt ('Введите высоту цилиндра');
// let nh = Number (h)
// let V = Math.PI*Math.pow(nr, 2)*nh;
// alert(V);

// let r = prompt ('Введите радиус сферы');
// let nr = Number (r);
// let V = 4/3*Math.PI*Math.pow(nr, 3);
// alert(V);

// function sayYourAge () {
//   const num = prompt('Укажите ваш возраст');

//   return num;
// }

// const result = sayYourAge();

// console.log (result);

// const a = prompt ('Введите верхнее основание трапеции');
// const b = prompt ('Введите нижнее основание трапеции');
// const h = prompt ('Введите высоту трапеции');

// function trapezoidArea(num1, num2, num3) {
//   return (Number (num1)+ Number(num2))/2*Number(num3);
// }

// const result = trapezoidArea(a, b, h);
// console.log (result);

// 2

// const a = prompt ('Введите верхнее основание трапеции');
// const b = prompt ('Введите нижнее основание трапеции');
// const h = prompt ('Введите высоту трапеции');

// function trapezoidArea(num1, num2, num3) {
//   const prepA = Number(num1);
//   const prepB = Number(num2);
//   const prepH = Number(num3);

//   return (prepA + prepB)/2 * prepH;
// }

// const result = trapezoidArea(a, b, h);

// console.log (result);

// calculator/////////////////////////////////////

const num1 = Number( prompt('Напишите число'));
const operator = prompt('Напишите Действие');
const num2 = Number( prompt('Напишите число'));

function calculator(a, op, b) {

  if (isNaN(a) || isNaN(b)) {
    return null;
  }

  // if (op !== '+' || op !== '-' || op !== '*' || op !== '/') {
  //   return null;
  // }

  if (op === '+') {
    return a + b;
  }

  if (op === '-') {
    return a - b;
  }

  if (op === '*') {
    return a * b;
  }

  if (op === '/') {
    return a / b;
  }

  return null;
}
const result = calculator(num1, operator, num2);
alert(result);