"use strict";

//////////////////////////////////////
// Task 1
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
//////////////////////////////////////

let string =
  "The includes() method determines whether one string may be found within another string, returning true or false as appropriate.";

function getVowelNumber(string) {
  let stringNew = string.toLowerCase().split("");
  let counter = 0;

  for (let item of stringNew) {
    if (
      item === "a" ||
      item === "e" ||
      item === "i" ||
      item === "o" ||
      item === "u"
    ) {
      counter++;
    }
  }

  return counter;
}

let result = getVowelNumber(string);

console.log(result);

// Разбор ДЗ на паре
function countVowelsV2(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  return string.split("").filter((letter) => vowels.includes(letter)).length;
}

console.log(countVowelsV2(string));

//////////////////////////////////////
// Task 2
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число,
// которое функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
//////////////////////////////////////

function logNumbers(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("fizz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      console.log("buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else {
      console.log(i);
    }
  }
}

console.log(logNumbers(16));

//////////////////////////////////////
// Task 3
// Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам.
//////////////////////////////////////

function avg(...theArgs) {
  let sum = 0;

  for (let item of theArgs) {
    sum += item;
  }

  return sum / theArgs.length;
}

let result2 = avg(1, 3, 5, 10, 30);
console.log(result2);

// Разбор ДЗ на паре
function avg2(...args) {
  return args.reduce((sum, value) => sum + value) / args.length;
}

console.log(avg2(1, 3, 5, 10, 30));

//////////////////////////////////////
// Task 4
//////////////////////////////////////

function logPar(n) {
  if (n === 1) {
    let par = "()";
    return par;
  }
  return `(${logPar(n - 1)})`;
}

console.log(logPar(3));
