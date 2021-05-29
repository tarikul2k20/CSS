1.//First class function
//র্স্ট ক্লাস ফাংশনকে আপনি অন্য কোনো ফাংশনের আর্গুমেন্ট হিসেবে পাস করতে পারবেন, 
// এক ফাংশন থেকে আরেকটা ফাংশন রিটার্ন করতে পারবেন। 
// আর সবচেয়ে মজার ব্যাপার হলো ফাংশনকে ভ্যারিয়েবল হিসাবেও স্টোর করতে পারবেন।

2. // higer order function (map, reduce , filter)
//es5
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var anotherItems = [];

for(var i = 0; i < items.length; i++) {
    anotherItems.push(items[i] * 2);
}
console.log(anotherItems);


//es5 using map()
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var anotherItems = items.map(function(item) {
    return item * 2;
});
console.log(anotherItems);


//es6 using map
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const anotherItems = items.map(item => item * 2);
console.log(anotherItems);

//map
//es5
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getSquare(item) {
    return item * item
 }
 arr.map(getSquare)

 //es6
 var newArr = arr.map(function(item) {
    return item * item;
 })

 //es6
 const newArr = arr.map(item => item * item);

 //map() তিনটা আর্গুমেন্ট অ্যাক্সেপ্ট করে
 //এটা অ্যারের প্রত্যেকটা আইটেম সিলেক্ট করে, দ্বিতীয় আর্গুমেন্ট হচ্ছে অ্যারের আইটেমের ইন্ডেক্স নাম্বার, 
 //আর তৃতীয় নাম্বার টা সবসময়ই পুরো অ্যারে দিবে
 var newArr = arr.map(function(item, index, fullArr) {
    console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr)
})

//filter
//ফিল্টার সেইম ম্যাপের মতোই কিন্তু এখানে অ্যাপ্লাইকৃত ফাংশন যদি 
//trueরিটার্ণ করে তাহলেই সেটা নতুন অ্যারেতে স্থান পাবে
var newArr = arr.filter(function(item) {
    return item % 2 == 0
 })

//es6
const newArr = arr.filter(item => item % 2 === 0);


//reduce
//এর কাজ হচ্ছে কোনো কিছুর কাউন্ট করা
var arr = [1, 2, 3, 4]
var total = arr.reduce(function(sum, item){
    return sum += item;
 }, 0);


 //another
 var total = arr.reduce(function(sum, item, index, fullArr) {
    console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr + ' and sum: ' + sum);
    return sum += item
 }, 0)


 //es6
 const t = arr.reduce((sum, item) => sum += item, 0)          //sum = 0   initial value


 //determine the value of this
 const anObj = {
    name: 'Zawad Ahmed',
    age: 1
 }
 
 const anoArray = [1, 2, 4, 5, 6, 7, 9, 3];

 anoArray.map(function(single, index, fullArr) {
    console.log(this)
 }, anObj)    //not windows object


 //some(), every()
 const arr = [1, 2, 4, 5, 6, 7, 8];
 anArr.some(callback, thisArg);  //structure of some  like as map

 //some exp
 const anArrSome = ['hello', 1, 2, 3, 'Bangla', 5, 'world', 7, 8, 9];

 anArrSome.some(function(anElement) {
   return anElement === 9
})       //output: true

//ভিতরের কলব্যাক ফাংশনটা অ্যারের প্রত্যেকটা আইটেমের উপর একবার একবার করে চলবে। 
//কলব্যাক ফাংশন আবার তিনটা আর্গুমেন্ট অ্যাক্সেপ্ট করে।প্রথম আর্গুমেন্ট অ্যারের বর্তমান আইটেম যেটার উপর কলব্যাক ফাংশনটা চলছে, 
//তারপরের আর্গুমেন্ট সেটার ইন্ডেক্স নাম্বার, তারপরের আর্গুমেন্টটায় পুরো অ্যারেটাই অ্যাক্সেস পাবেন।
anArr.some(function(currentElement, index, theArray) {
   //some codes
   // return true or false
});

//es6
anArr.some((currentElement, index, theArray) => {
   //some codes
   // return true or false
});

//another 
anArrSome.some((currentElement, index, theArray) => {
   console.log(currentElement);
   console.log(index);
   console.log(theArray);
});

//akta element true holei kaaj bondho kore dei some()
anArrSome.some(anElement => {
   console.log(`Current Element: ${anElement}`);
   return anElement === 1;
})    //output:: hello,   ture

//we cannot use break in these method like loop
// to break in these mehtod
anArr.some(anElement => {
   console.log(`Current value: ${anElement}`);
   return anElement === 5;
})  // output: 1,2,3,4,5,true     //and break korbe


//object er array // check age property  by some 
const objSome = [
   {
      name: 'Zawad Ahmed',
      age: 1,
      job: 'Child'
   },{
      name: 'Zobayer Ahmed',
      age: 31,
      job: 'Pharmacists'
   }
]

objSome.some(anObj => anObj.age)    //output: true

//এখন আবার চাচ্ছি এখানে থাকা সবার ডাটার মধ্যে ১ বছরের কেউ আছে কিনাঃ
objSome.some(anObj => anObj.age === 1)   //true
objSome.some(anObj => anObj.job === 'Teacher')  //false


//every
//এটা পরীক্ষা করবে আপনার অ্যারের প্রত্যেকটা আইটেম আপনার দেওয়া শর্ত মেনে চলছে কিনা।
// যদি প্রত্যেকটা আইটেমই শর্ত মেনে চলে, তাহলেই একমাত্র এটা trueরিটার্ণ করবে।
const arrDiffEvery = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
arrDiffEvery.every(anItem => anItem === 1);  //false

//another
arrDiffEvery.every((currentElement, index, theArray) => {           //ager motoi 3 ta value nibe
   console.log(`Current Element: ${currentElement}`);
   console.log(`Index: ${index}`);
   console.log(`The Array: ${theArray}`);
   return true;
});


//anothre
const anNumberArrEvery = [1, 1, 1, 3, 4, 5, 6, 7, 8, 9];

anNumberArrEvery.every(anElement => {
   console.log(`${anElement} is printed`);
   return anElement === 1;
})
//output:: 1 is printted, 3 is printed, false          //jokhon e false pabe then array theke beriye jabe

//check every element is numbe or not
anNumberArrEvery.every(anElement => typeof anElement === 'number');   // true


//array object property check
const objEvery = [
   {
      name: 'Zawad Ahmed',
      job: 'Child'
   },{
      name: 'Zobayer Ahmed',
      age: 31,
      job: 'Pharmacists'
   }
]

objEvery.every(anObj => anObj.name);  //true


//loop of object
var obj = {
   Bangladesh: ‘Dhaka’, 
   India: ‘Delhi’, 
   Nepal: ‘Kathmandu’, 
}
for(name in obj) {
   console.log(name);
}

//capital show
for(name in obj) {
   console.log(obj[name]);
}

//values method
var capitals = Object.values(obj);  // capitals is now array of capital

//now we can use map
capitals.map(function(capital) {
   console.log('Capital is: ' + capital);
})

//use code short
Object.values(obj).map(function(capital) {
   console.log('Capital is: ' + capital);
})

//es6
Object.values(obj).map(capital => console.log(`Capital is ${capital}`));

//keys 
var countries = Object.keys(obj);
//get values through key
countries.map(function(country) {
   console.log('Capital of ' + country + ' is: ' + obj[country]);
})

//es6
Object.keys(obj).map(country => console.log(`Capital of ${country} is: ${obj[country]}`));


//Math object
Math.pow(10,2);   // square of 10
Math.floor(10.29);   //output:10  // only integer
Math.round();      // take nearest integer   
Math.max(0,2,4);  // output: 4
Math.min(...numbers)   // to take array we use spread operator
Math.random();        // 0 - 1 er moddhe fractional number 

//Date object\
console.log(new Date(2021,4,25));   //  year, month(0-11), days  
console.log(Date());   // it show present time


// or and operator
// or operator a jodi akadink variable theke jeta value thakbe seta print korbe
const userOrAge = userOr.age || 'Age Not Found';   // jodi user.age empty hoi then 'age not found' print korbe
true && console.log(‘Eat');    //output :: eat

//example
const userAnd = {
   name: 'Zonayed Ahmed'
}
if(userAnd.name){
   console.log(true && "has a property");  // has a property
}
// technique
userAnd.name && console.log(`Name is: ${userAnd.name}`);  // jodi first userAnd.name thake then second will print


//jekono akta false holei output dekhabe na
userAnd.name && userAnd.age && console.log(`${userAnd.name} is ${userAnd.age} years old!`);

// jekono akta thaklei seitai print korbe 
(userAnd.name ||userAnd.age) && console.log(`Found: ${userAnd.name || userAnd.age}`);


//ternary operator
console.log(age < 18 ? 'You are not Adult!' : 'You are Adult');
//another
function findAuthor(name) {
   return(name === 'Zonayed Ahmed' ? 'This is the author' : 'Some other person');
}



false(বুলিয়ান false, নিজেই মিথ্যা)
null
NaN
0
খালি ("", ''অথবা ````);
undefined
!anythingTrue(সত্য কোনো এক্সপ্রেশনের পূর্বে !দিয়েও সেটাকে মিথ্যা করা যায়)
আর তাই এখানে emailমিথ্যা।

//real life
function successFunc() {
   console.log('Got your email');
}
let email;
email ? successFunc() : console.log('Please provide your email!');  // jehutu email a kono value nai sehetu eta false

//
objTer.name ? objTer.age ? console.log('It has name and age') : objTer.job ? console.log('yes it has a job') : console.log('no it does not have any job') : console.log('I does not have any name');

