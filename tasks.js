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