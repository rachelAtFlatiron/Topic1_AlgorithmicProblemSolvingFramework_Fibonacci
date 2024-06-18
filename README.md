# Practice Lesson - Algorithmic Problem Solving Framework

## Overview

The Fibonacci sequence is a well known sequence of numbers in mathematics where the current number is the sum of the previous two numbers.  While there has been evidence of the understanding of the Fibonacci sequence in Greek and Indian history it has been named after the Italian mathematician Leonardo of Pisa who first introduced the sequence to Western mathematics in 1202.  Fibonacci numbers are often found in nature - for example the number of petals on flowers, the spiraling patterns in pine cones, pineapples, and cauliflower, and sea shells.  As a result the Fibonacci sequence is also prevalent in a lot of artwork.  Calculating the Fibonacci sequence is also one of the most famous algorithms that all beginner programmers know.

## Tools and Resources

[The magic of Fibonacci numbers - TED](https://www.youtube.com/watch?v=SjSHVDfXHQ4)

[How to draw the Fibonacci sequence](https://www.youtube.com/watch?v=qTw_qay54WI)

[The Golden Ratio - PBS](https://www.youtube.com/watch?v=1Jj-sJ78O6M)

## Instructions

The Fibonacci sequence begins as `1, 1, 2, 3, 5, 8, 13, 21, 34, ...`.  The current number is the sum of the previous two numbers.  The only exceptions are the first two numbers of the sequence: 1 and 1 (although some mathematicians may start with 0 and 1).

Your task is to use the algorithmic problem solving framework to create an algorithm to calculate the `nth` number in the sequence.  For example:

```
fib(1) => 1
fib(2) => 1
fib(3) => 2
fib(4) => 3
fib(5) => 5
fib(6) => 8
...
```

As a reminder here are the steps to the algorithmic problem solving framework:
1. Problem Definition
2. Problem Analysis
3. Algorithm Development
4. Coding and Documentation
5. Testing and Debugging
6. Maintenance (opt)
7. Document and Comment (opt)

Some of these steps may be a little repetitive in this case but it is still worth working through.  Definitely try doing it on your own before viewing an example of pseudocode and solution below.

## Solution

**1. Problem Definition**

Return the `nth` number of the Fibonacci sequence where the first two numbers are 1 and 1 such that `fib(1) = 1` and `fib(2) = 1`.  We can always expect a positive integer as input.  

**2. Problem Analysis**

We will have to keep track of the previous two numbers and add them together.  Once we get the new value we will have to update the previous two numbers and continue.  Once we reach the `nth` iteration we will return that number.

However there are two special cases: our first two numbers.  Since there are no previous numbers to add together we will have to somehow take into account the `1st` and `2nd` values of the Fibonacci sequence.

**3. Algorithm Development**

We know that `1` and `1` will be our starting point so we will initialize variables that are equal to those numbers.

```js
// handle special cases if n is 1 or 2
// create variable for first and second value
// create for loop starting from 3 (since we already have the first two numbers of the sequence) and iterate `n` number of times
    // add up the available numbers
    // update the variables to save the new numbers
// return final number
```
**4. Coding and Documentation**

```js
function fib(num){
    // handle special cases if n is 1 or 2
    if(num <= 2){
        return 1;
    }
    // create variable for first and second value
    let prev = 1;
    let cur = 1;
    // create for loop starting from 3 (since we already have the first two numbers of the sequence) and iterate up to num
    for(let i = 3; i <= num; i++){
        // add up the available numbers
        let newCur = prev + cur;
        // update the variables to save the new numbers
        prev = cur;
        cur = newCur; 
    }
    // return final number
    return cur;
}
```

**5. Testing and Debugging**

It is always important to test your base cases.  Since the math is pretty straightforward it would be nice to test a few random values for `num`.

**6. Maintenance**

This would be a good point to see if you can optimize your code.

**7. Document and Comment**

This would be a good point to simplify your comments.

And there it is.  The Fibonacci sequence.


