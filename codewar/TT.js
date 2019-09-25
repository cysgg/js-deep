function tripledouble(num1, num2) {
  //code me
  for(var i = 0; i < 10; i++){
    triple = new RegExp (i + "{3}")
    double = new RegExp (i + "{2}")
    if(triple.test(num1) && double.test(num2)){
       return 1
    }
  }
  return 0
}
console.log(tripledouble(211134445 , 448));
