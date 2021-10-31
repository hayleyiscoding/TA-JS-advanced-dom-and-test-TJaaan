// const { TestWatcher } = require("jest");
const everything = require("./index");

// 1) Positive test
test('concats first name and last name to equal full name with a space between', () => {
    expect(everything.getFullName('Hayley', 'Wood')).toBe(`Hayley Wood`);
});

// 1) Negative test

test('concats first name and last name to equal full name with a space between', () => {
    expect(everything.getFullName('Hayley', 'Wood')).not.toBe(`HayleyWood`);
});

// 2) Positive Test 

test('accepts a string and returns true if palindrome or false if not', () => {
    expect(everything.isPalindrome(`hannah`)).toBe(true);
});

// 2) Negative Test

test('accepts a string and returns true if palindrome or false if not', () => {
    expect(everything.isPalindrome(`house`)).not.toBe(true);
});

// 3) Positive Test 

test('accepts a radius and returns a string saying the circumference of the circle is (circumference)', () => {
    expect(everything.getCircumference(5)).toBe(`The circumference is 31.41592653589793.`);
});

// 3) Negative Test 

test('accepts a radius and returns a string saying the circumference of the circle is (circumference)', () => {
    expect(everything.getCircumference(5)).not.toBe(`The circumference is 31.4159265358979.`);
});

// 4) Positive Test

test('accepts a radius and returns a string saying the area of the circle is (area)', () => {
    expect(everything.getArea(5)).toBe(`The area is 15.707963267948966.`);
});

// 4) Negative Test

test('accepts a radius and returns a string saying the area of the circle is (area).', () => {
    expect(everything.getArea(5)).not.toBe(`The area is 15.707963267948966`);
});

