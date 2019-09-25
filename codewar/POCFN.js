function productFib(prod){
  // ...
  let v1 = 0,
      v2 = 1;
  while(v1*v2 < prod){
    v2 = v1 + v2
    v1 = v2 - v1
  }
  return [v1,v2,v1*v2 === prod]
}
console.log(productFib(4895));
