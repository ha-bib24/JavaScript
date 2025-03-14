
// multiple
let num1 = 5;
let num2 = 3;
let result = num1 * num2;
console.log(result); 

// devision
let num1 = 10;
let num2 = 2;
let result = num1 / num2;
console.log(result); 


// reminder
let num1 = 10;
let num2 = 3;
let remainder = num1 % num2;
console.log(remainder); 


// add
let num1 = 7;
let num2 = 8;
let result = num1 + num2;
console.log(result); 


// sub
let num1 = 15;
let num2 = 5;
let result = num1 - num2;
console.log(result); 


// null
let myVar = null;
console.log(myVar); 


/**
 * সংক্ষেপে
* → গুণ
/ → ভাগ
% → ভাগশেষ (Remainder)
+ → যোগ
- → বিয়োগ
null → কোনো মান নেই
 */

// Exponentiation **
let base = 2;
let exponent = 3;
let result = base ** exponent; 
console.log(result); 


// Math.pow() 
let result = Math.pow(2, 3);
console.log(result); 

// Increment ++
let num = 5;
num++; // num = num + 1
console.log(num); 


// Decrement --
let num = 5;
num--; // num = num - 1
console.log(num); 

// Square Root
let num = 16;
let sqrt = Math.sqrt(num);
console.log(sqrt); 

// সর্বোচ্চ এবং সর্বনিম্ন মান বের করা
let maxNum = Math.max(10, 20, 30, 5, 15);
let minNum = Math.min(10, 20, 30, 5, 15);
console.log("Max:", maxNum); 
console.log("Min:", minNum); 

// Rounding Math.round() → কাছের পূর্ণসংখ্যায় রাউন্ড করবে
console.log(Math.round(4.7)); 
console.log(Math.round(4.3)); 

// Math.ceil() → উপরের পূর্ণসংখ্যায় রাউন্ড করবে
console.log(Math.ceil(4.3)); 

// Math.floor() → নিচের পূর্ণসংখ্যায় রাউন্ড করবে
console.log(Math.floor(4.7)); 

// এলোমেলো সংখ্যা (Random Number) তৈরি করা
Math.random() → 0 এবং 1 এর মধ্যে একটি এলোমেলো সংখ্যা তৈরি করবে
console.log(Math.random()); 

// 1 থেকে 10 এর মধ্যে এলোমেলো সংখ্যা তৈরি করা
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); 

/**সংক্ষেপে
** → ঘাত (Exponentiation)
++ → ইনক্রিমেন্ট (Increment)
-- → ডিক্রিমেন্ট (Decrement)
Math.sqrt() → বর্গমূল
Math.max() → সর্বোচ্চ মান
Math.min() → সর্বনিম্ন মান
Math.round() → কাছের পূর্ণসংখ্যায় রাউন্ড
Math.ceil() → উপরের পূর্ণসংখ্যায় রাউন্ড
Math.floor() → নিচের পূর্ণসংখ্যায় রাউন্ড
Math.random() → এলোমেলো সংখ্যা তৈরি */

