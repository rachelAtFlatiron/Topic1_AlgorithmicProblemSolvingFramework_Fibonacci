/* Implement a function that finds the nth number in the Fibonacci sequence. */

function fib(num){
  // Code here
  if(num <= 2){
    return 1;
  }
  let prev = 1;
  let cur = 1;
  for(let i = 3; i <= num; i++){
    let newCur = prev + cur;
    prev = cur;
    cur = newCur; 
  }
  return cur;
}

export { fib }