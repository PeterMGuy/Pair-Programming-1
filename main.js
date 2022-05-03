"use strict";
//EASY 1
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const myPrimeArray = newArray.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
});
console.log(myPrimeArray);

//MEDIUM 1

const vowelChecker = (str) => {
  if (str === "a" || str === "A") {
    console.log("This is a vowel");
  } else if (str === "e" || str === "E") {
    console.log("This is a vowel");
  } else if (str === "i" || str === "I") {
    console.log("This is a vowel");
  } else if (str === "o" || str === "O") {
    console.log("This is a vowel");
  } else if (str === "u" || str === "U") {
    console.log("This is a vowel");
  } else {
    console.log("This is not a vowel");
  }
};

vowelChecker("A");

//MEDIUM 3

const gcd = (a, b) => {
  if (a == 0) return b;
  return gcd(b % a, a);
};

console.log(gcd(84, 9));

//Hard
