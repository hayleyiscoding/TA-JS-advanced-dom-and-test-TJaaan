// 1. Write a function named `getFullName` that accepts two input `firstName` and `lastName` and return the `fullName`

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 2. Write a function named `isPalindrome` that accepts one input returns `true` or `false` based on wether the value passed is palindrome or not.

function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("hannah"));

// 3. Create 2 functions that calculate properties of a circle, using the definitions here.

// - Create a function called `getCircumfrence`:

// Pass the radius of a circle to the function and it returns the circumference based on the radius, and output `The circumference is NN`.

function getCircumference(radius) {
  return `The circumference is ${[2 * Math.PI * radius]}.`;
}

// - Create a function called `getArea`:

// Pass the radius to the function and it returns the area based on the radius, and output `The area is NN`.

function getArea(radius) {
  return `The area is ${[Math.PI * radius]}.`;
}

module.exports = { getFullName, getCircumference, getArea, isPalindrome };
