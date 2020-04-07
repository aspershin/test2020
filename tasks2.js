// Функции высшего порядка.

// Нахождение суммы диапазона. Вариант 1.

var total = 0, count = 1;
while (count <=10) {
  total += count;
  count +=1;
}
console.log(total);

// Нахождение суммы диапазона. Вариант 2.

var array2 = [];
console.log(typeof(array2));

var range = function (arr){  
    var lower = Math.min(arr[0],arr[1]);    
    var upper = Math.max(arr[0],arr[1]);  

    for (var i=lower;i<=upper;i++){  
        array2.push(i);  
    } 
    return array2; 
}  

var sum = function (array2){ 
  var total = 0;
  for(var i=0; i<array2.length; i++){  
      var total = total+array2[i];  
  }
  return total;
}  

console.log(sum(range([1, 10]))); 