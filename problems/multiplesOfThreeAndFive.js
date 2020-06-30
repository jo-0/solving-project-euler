"use strict";


/**
 * Find the sum of all the multiples of 3 and 5 upto 1000.
 * 
 * @param {Number} upto - The number upto which we need to find the multiples of 3 & 5.
 * @returns - The sum of all the multiples of 3 & 5.
 */
function findSumOfMultiplesOfThreeAndFive(upto) {
    // Initialise the sum.
    let sum = 0;
    for (let i = 0; i < upto; i++) {
        // Check if the number is divisible by 3 or 5. If so, add it to the sum.
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    }
    return sum;
}


console.log("The sum of all the multiples of 3 and 5 are "
    + findSumOfMultiplesOfThreeAndFive(1000));