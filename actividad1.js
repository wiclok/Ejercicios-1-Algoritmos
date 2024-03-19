const calcularFactorial = (num)=>{
  let factorial = 1

  for (let i = 1; i <= num; i++) {
    let acum = 0
    for (let j = 1; j <= i; j++) {
      acum +=factorial
    }
    factorial = acum
  }
  return factorial
}
console.log(calcularFactorial(6));
console.log(calcularFactorial(5));
console.log(calcularFactorial(4));
console.log(calcularFactorial(3));
console.log(calcularFactorial(2));
console.log(calcularFactorial(1));