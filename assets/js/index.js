"use strict";

/////////////////////////////////////////////////////
// Function Constructor MyArray
/////////////////////////////////////////////////////

function ArrayMethods() {
  this.push = function () {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };

  this.pop = function () {
    const lastIndex = this.length - 1;
    const lastItem = this[lastIndex];

    delete this[lastIndex];

    --this.length;

    return lastItem;
  };

  this.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  this.concat = function (array) {
    let result = new MyArray();

    for (let i = 0; i < this.length; i++) {
      result.push(this[i]);
    }

    for (let i = 0; i < array.length; i++) {
      result.push(array[i]);
    }

    return result;
  };

  this.flat = function (depth = 1) {
    if (depth < 0) {
      console.error("depth must be a positive value");
      return;
    }

    let newArr = new MyArray();

    if (depth === 0) {
      return this;
    }

    for (let i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        const buffer = this[i].flat(depth - 1);

        newArr = newArr.concat(buffer);
      } else if (this[i] !== undefined) {
        newArr.push(this[i]);
      }
    }

    return newArr;
  };
}

function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    this.length++;
  }
}

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray(
  "test",
  2,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  [[[3]]],
  "test5",
  [[[[[5]]]]]
);

console.log(myArr);
console.log(myArr.flat(10));

/////////////////////////////////////////////////////
// Написать функцию глубокого выравниванию для объекта (flat для объектов).
/////////////////////////////////////////////////////

//////////////////////////////////////
// Написать функцию logParenthis используя массивы, а не шаблонные строки. logParenthis (3) // ((()))
// Функция может скобки как возвращать строку, так и просто выводить в консоль.
//////////////////////////////////////

// Мой вариант:
function logPar(level) {
  let parenthisArray = [];

  if (level > 0) {
    parenthisArray.length = level;
    parenthisArray = parenthisArray.fill("()");
  }
  let result = parenthisArray.join("").split("").sort().join("");
  return result;
}

console.log(logPar(5));

// Разбор ДЗ на паре
function logPar(level) {
  let parenthisArray = [];
  logParenthis(level);

  function logParenthis(number) {
    if (number > 0) {
      parenthisArray = [...parenthisArray, "("];

      logParenthis(number - 1);

      parenthisArray = [...parenthisArray, ")"];
    }
  }

  return parenthisArray.join("");
}
console.log(logPar(5));

/////////////////////////////////////////////////////
// Создать объект user'а. У объекта есть имя, дата рождения (использовать Date в js),
// количество отработанных часов за месяц и ставка за час.
// Реализовать геттеры (get age) на получение возраста и заработной платы.
/////////////////////////////////////////////////////

const user = {
  name: "Pyotr",
  birthDay: new Date(1970, 7, 15),
  workingHours: 176,
  hourlyRate: 7,
  get salary() {
    return `${this.name}'s salary: ${this.workingHours * this.hourlyRate}`;
  },
  get age() {
    let todayYear = new Date().getFullYear();
    return todayYear - this.birthDay.getFullYear();
  },
};

console.log(user);
console.log(user.salary);
console.log(user.age);

//////////////////////////////////////
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».
//////////////////////////////////////

// Мой вариант:
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
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число,
// которое функция принимает в качестве параметра, с такими условиями:
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
//////////////////////////////////////

// Мой вариант:
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
// Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам.
//////////////////////////////////////

// Мой вариант:
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
// Напишите функцию addNum(n), которая вернёт другую функцию.
// Возвращенная функция должна складывать получаемый аргумент
// с аргументом n возвращающей функции. Замыкание.
//////////////////////////////////////

// Разбор ДЗ на паре
function addNum(n) {
  let accum = n;
  return function sum(m) {
    return (accum = accum + m);
  };
}

const add = addNum(6);
console.log(add(6));

//////////////////////////////////////
// Напишите функцию operation(num1, num2, fn), в которой num1 и num2 — числовые переменные,
// а fn — функция, которая берет два аргумента и выполняет математическую операцию над ними
//////////////////////////////////////

// Разбор ДЗ на паре
function operation(num1, num2, fn) {
  return fn(num1, num2);
}

console.log(
  operation(5, 10, (num1, num2) => {
    return num1 + num2;
  })
);

//////////////////////////////////////
// Создать объект obj, с методами method1(),method2() и method3().
// В методе method3() должна возвращаться строка «метод3».
// Сделайте так, чтобы было возможно выполнение кода obj.method1().method2().method3()
//////////////////////////////////////

const obj = {
  method1() {
    return this;
  },
  method2() {
    return this;
  },
  method3() {
    return "метод3";
  },
};

let res = obj.method1().method2().method3();
console.log(res);
