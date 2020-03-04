var text = '#';
var number;
var a = function () {
  for(number = 0; number<7; number+=1) {
    console.log(`${text}`);
    text = text + '#';
  }
}

a();

var text2 = '#';
var number2;
var b = function () {
  while(text2.length <= 7) {
    console.log(`${text2}`);
    text2 = text2 + '#';
  }
}

b();

var c = function () {
  for(i=1; i<=100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
      } else if (i % 3 === 0) {
        console.log('Fizz')
      } else if (i % 5 === 0) {
        console.log('Buzz')
      } else {
        console.log(i)
      }
  }
}

c();

var d = function () {
  var number_1 = '#',
      number_2 = ' ',
      row, column;
  for(row=0; row<4; row++) {
    column = number_1 + number_2;
    column += column;
  }
  console.log(column);
}

d();

// Минимум
var e = function () {
  min = Math.min;
  console.log(min(1, -10));
}

e();

// Рукурсия
var isEven = function (a) {
  if ((a-2)%2 == 0) {
    console.log('Это число чётное')
  } else {
    console.log('Это число нечётное')
  }
}

isEven(10);

var countBs = function () {
  a="BORSCH";
  y = "B";
  count = 0;
  console.log("Количество символов в строке: ", a.length);
  for(z=0;z<=a.length;z+=1) {
    console.log(a.charAt(z));
    console.log(typeof a.charAt(z));
    console.log(typeof y);
    if (a.charAt(z) == y) {
      count+=1;
    }
  }
  console.log(a.charAt(z));
  console.log(count);
  if (count == 0) {
    console.log('В строке нет символов \"B\"');
  } else {
    console.log('Количество символов \"B\" в слове равно: ', count);
  }
}

countBs();

var countChar = function(k) {
  a="DOLBY DIGITAL";
  for (i=0; i<=a.length; i+=1) {
    if (a.charAt(i) == k) {
    console.log("Символ \"D\" находится под номером ", i);
    }
  
  }
}

countChar("L");

// shift и unshift для массивов

var todoList = [];
function rememberTo(task) {
  todoList.push(task);
}
function whatIsNext() {
  return todoList.shift();
}
function urgentlyRememberTo(task) {
  todoList.unshift(task);
}

console.log([1,2,3,2,1].indexOf(2));
console.log([1,2,3,2,1].lastIndexOf(2));

// Сумма диапазона варант 1 (неправильный)

// var rangeList = [];
// summa = 0;
// function range(start, end, step) { //аргумент step в данном случае не является обязательным.
//   for (i=0; i<end; i++) {
//     rangeList.push(start);
//     if (step != undefined) { // если шаг не равено undefined, то есть определён, то умножаем на шаг, затем складываем
//       start+=1*step;
//     } else {
//       start+=1;
//     }
//   }
//   console.log(rangeList);
// }

// function sum () {
//   for(i=0; i<rangeList.length; i++) {
//     summa += rangeList[i];
//   }
//   console.log(summa);
// }

// range(1,10,2)
// sum();

// сумма диапазона вариант 2 (с положительным шагом)

// function range(start, end, step) { // определяем функцию range для заполнения массива
//   var rangeList = []; // определяем массив, в который будем записывать значения
//   summa = 0; // определяем начальную сумму чисел в массиве
//   i = 0;
//   while (start<=end) {
//     rangeList.push(start);
//     if (step!=undefined) {
//       start+=1*step;
//     } else {
//       start+=1;
//     }
//     summa+=rangeList[i];
//     i+=1;
//   }
//   console.log(rangeList);
//   console.log(summa);
//   console.log(typeof(summa));
//   console.log(rangeList[i]);
// }

// range(1,10,2);

// сумма диапазона вариант 3 (с отрицательным шагом)

function range(start, end, step) { // определяем функцию range для заполнения массива
  var rangeList = []; // определяем массив, в который будем записывать значения
  summa = 0; // определяем начальную сумму чисел в массиве
  i = 0;
  while (start>=end) {
    rangeList.push(start);
    if (step!=undefined) {
      start+=1*step;
    } else {
      start+=1;
    }
    summa+=rangeList[i];
    i+=1;
  }
  console.log(rangeList);
  console.log(summa);
  console.log(typeof(summa));
  console.log(rangeList[i]);
}

range(5,2,-1);

// Обращение массива, но без использования стандартного метода reverse.
// Вариант 1, с новым массивом.

function reverseArray(array) {
  var newArray = [], index;
  for (i=array.length;i>0;i--) {
    index = array.length-i;
    newArray[i] = array[index];
  }
  console.log(array);
  console.log(array.length);
  console.log(newArray);
}

reverseArray(["P","E","R","S","H","I","N"]);

// Вариант 2, со старым массивом, который будет изменён.

function reverseArrayInPlace(arr) {
  var index;
  console.log(arr);
  console.log(arr.length);
  for (i=arr.length;i>0;i--) {
    index=arr.length-i;
    arr[i] = arr[index];
  }
  console.log(arr);
  console.log(arr.length);
}

reverseArrayInPlace([1,2,3,4,5,6]);