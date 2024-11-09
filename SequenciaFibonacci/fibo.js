// Sequência de Fibonacci//
let quant = 10;
let num1 = 0;
let num2 = 1;

console.log(num1);
console.log(num2);
function fibonacci(quant)
{
  for(let i = 2; i < quant; i++)
  {
    fibo = num1 + num2;
    num1 = num2;
    num2 = fibo;
    console.log(fibo);
  }
}

fibonacci(quant);