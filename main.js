"use strict";

//Easy1
let arr = [1,2,3,4,5,6,7,8,9,10,11,12]

let odds = arr.filter(n => n%2)
let evens = arr.filter(n => n%2 == 0)

console.log(odds)

//EASY 2
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

//Medium2
const valonly = x => {
    const newArray = [];
    for(let i = 0; i < x.length; i++){
        const char = x.charAt(i);
        if("aeiouAEIOU".indexOf(char) !== -1){
            newArray.push(char.toLowerCase())
        }
        else{
            newArray.push(char.toUpperCase())
        }
    }
    return newArray.join("")
}
console.log(valonly("Peter"))

//MEDIUM 3

const gcd = (a, b) => {
  if (a == 0) return b;
  return gcd(b % a, a);
};

console.log(gcd(84, 9));

//Medium4
class Car  {
    constuctor (make, model, year, color, mileage){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.mileage = mileage;
    }
    driveToWork(){
        this.mileage + 42;
        console.log(this.mileage + 42)
        }
    driveAroundTheWorld(){
        this.mileage + 2000;
        console.log(this.mileage + 2000)
    }
    runErrands(){
        this.mileage + 14;
        console.log(this.mileage + 14)
    };
};

let car1 = new car1("toyota", "hybrid", 2014, "blue", 2000); 

car1.driveToWork

//Hard
const testing = (string) => {
  if (string.includes("{") && string.includes("}")) {
    return true;
  } else if (string.includes("[") && string.includes("]")) {
    return true;
  } else if (string.includes("(") && string.includes(")")) {
    return true;
  } else {
    return false;
  }
};

console.log(testing("(Hello)"));
