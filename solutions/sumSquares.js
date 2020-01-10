// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

const sumSquares = (limit) => {
    let sumSquare = (limit*(limit+1)*((2*limit)+1))/6

    let sum = (limit*(1+100))/2;
   
    

    console.log(sumSquare);

    return Math.pow(sum,2)-sumSquare;

    

   

}

console.log(sumSquares(100));