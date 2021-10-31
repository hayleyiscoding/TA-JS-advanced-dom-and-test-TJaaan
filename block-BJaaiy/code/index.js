const moment = require("moment");

var date = moment(); // <2021-10-31T18:33:02+10:00>

let now = moment().format("MMMM Mo YYYY, hh:mm:ss [pm] ");
console.log(now);

let now2 = moment().format("dddd");
console.log(now2);

let now3 = moment().format("MMM Mo YY");
console.log(now3);

let valid = moment('2020-01-01').inspect();
console.log(valid); // valid
let valid2 = moment('2020-14-01').inspect();
console.log(valid2); //invalid

let addSevenDays = moment().add(7, 'days');
console.log(addSevenDays);

let addSevenMonths = moment().add(7, 'months');
console.log(addSevenMonths);

let addSevenYears = moment().add(7, 'years');
console.log(addSevenYears);

let minusSevenDays = moment().subtract(7, 'days');
console.log(minusSevenDays);

let minusSevenMonths = moment().subtract(7, 'months');
console.log(minusSevenMonths);

let minusSevenYears = moment().subtract(7, 'years');
console.log(minusSevenYears);

// Find the difference between the following 2 dates:

// 1.

// - date1: `2014-11-11`
// - date2: `2015-09-11`

var a = moment([2014, 11, 11]);
var b = moment([2015, 09, 11]);
console.log(a.diff(b, 'days')); // 304 days

// 2.

// - date1: `2014-11-27`
// - date2: `2015-09-16`

var a = moment([2014, 11, 27]);
var b = moment([2015, 09, 16]);
console.log(a.diff(b, 'days')); // 293 days

// - Check is `2020-01-01` date after `2018-01-01`

let isAfter1 = moment('2020-01-01').isAfter('2018-01-01');
console.log(isAfter1);

// - Check is `2010-01-01` date after `2018-01-01`

let isAfter2 = moment('2020-01-01').isAfter('2018-01-01');
console.log(isAfter2);

// - Check if the year `2019` is a leap year

console.log(moment([2019]).isLeapYear());

// - Check if the year `2020` is a leap year

console.log(moment([2020]).isLeapYear());

// #### Use lodash to do the following things:

const lodash = require("lodash");

let array = [1,2,3,4,5];

console.log(lodash.chunk(array, 2));
console.log(lodash.compact(array));
console.log(lodash.concat(array, 2, 33, 4));
console.log(lodash.difference([2, 1], [2, 3]));
console.log(lodash.fill(array, 'a'));

// - Use five methods form the list of Array methods and five from Collection methods (Left side on this link https://lodash.com/docs/4.17.15)

let users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

  console.log(lodash.filter(users, { 'age': 36, 'active': true }));

  function add(n){
      return n + 2;
  }
  console.log(lodash.flatMap([5, 7], add));

  lodash.forEach([8, 7], function(value) {
    console.log(value);
  });

  console.log(lodash.groupBy(['one', 'two', 'three'], 'length'));

  console.log(lodash.includes([1, 2, 3], 1)); // true
