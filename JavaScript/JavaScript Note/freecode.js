
// find character
var firstLetterOfFirstName="";
var firstName="Ada";
firstLetterOfFirstName=firstName[0];
console.log(firstLetterOfFirstName); // output : A



// string are immutable (unchanged)
var name="jello world";
var name="hello world"; // this will be changed 



// select last character of string
var name="thomas";
var lastLetter=name[name.lenght-1];



// empty function
function wordBlanks(noun, adjective, verb, adverb){
    var result="";
    result+="the "+ adjective +" "+ noun +" "+ verb + " to the store " + adverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));  // output : the big dog ran to the store quickly



// store multiple value in array
var ourArray= ["john", 23]   // string and number 



// nested array
var ourArray=[["the universe", 42], ["every", 33]];

var ourArray=[10,20,30];
var myData=ourArray[0]; // output : 10




// modify array data
var ourArray=[10,20,30];
ourArray[1]=40 // new array [10,40,30]



// access multi-dimensional arrary with indexes
var ourArray=[[1,2,3], [4,5,6,], [[7,8,9],10,11]];
var myData=ourArray[1][2]; // output : 6



//manipulate (use) array with push()
var ourArray=["thomas", "j", "cat"];
ourArray.push(["joy", "d"]);  // new array will be : ["thomas", "j", "cat", ["joy", "d"]];

var ourArray=[["john" , 23],["cat", 2]];
ourArray.push(["dog", 3]); // [["john" , 23],["cat", 2],["dog", 3];




// manipulate array with pop() 
// we can remove item using pop()
var ourArray=[1,2,3];
var removeArray=ourArray.pop();
   // removeArray now equals 3, and ourArray now equals [1,2]
var ourArray=[["john", 23], ["cat", 2]];
var newArray=ourArray.pop(); // ourArray=["john", 23];



//manipulate array with shift()  
// shift() is similar to pop().. but it removes from first 
var ourArray=["johm", "j", ["cat"]];
var removeArray=ourArray.shift(); // ourArray=["j", ["cat"]]



// unshift() function is inverse of shift and similar to push but add from start
var ourArray=["john","j"];
ourArray.shift();  // ourArray  now equals ["j"]
ourArray.unshift("happy"); // ourArray  now equals ["happy", "j"];



// function
function name(a,b){
    console.log(a+b);
}
name(5,10);  // output is 15



// Global scope of funciton
var myGlobal= 10; // global variable
function fun1(){
    oopsGlobal= 5; // it is also global variable ...if we write var before oopsGlobal it will be local global
}

function fun2() {
    var output =""; 
    if (typeof myGlobal !="undefined"){
        output+="myGlobal: " +myGlobal;
    }
    if(typeof oopsGlobal !="undefined"){
        output+="oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
    fun1();
    fun2();




// local scope and function  // scope(area, chance, goal, place, spread)
function name(){
    var myVar =5;
    console.log(myVar);
}
name();

console.log(myVar);  // output :: 5, undefined (because local varible)



// Global vs Local Scope in Function
var dress="tshirt";
function name(){
    var dress ="sweater";
    return dress;
}
console.log(name());
console.log(dress);  // first output: sweater   second: tshirt  
                     // Local variable is powerful than global

//  Return 
    function name(numb){
        return numb - 7; 
    }
console.log(name(10)); // output :: 3



// another example
var changed=0;
function change(num){
    return (num+5)/3;
}
changed =change(10);  // output is : 5



// function another example with push, shift
// problem: add number to end of array and remove first item of array
function nextInLiner(arr, item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3];

console.log("before: " +JSON.stringify(testArr));  // JSON.stringify .. make the array to string
console.log(nextInLiner(testArr,4));
console.log("after: "+ JSON.stringify(testArr));
       /* output :: before: [1,2,3]
                   1
                   after: [2,3,4] */


              
// conditiona logic with if statements   
  function cond(isTrue){
      if(isTrue){
        return "yes , it is true";
      }
      return "no , it is false";
  }      
  

  // another example
function fun1(val){
    if(val==12){
        return "Equal";
    }
    return "not equal";
}
console.log(fun1(10));  // output ::not equal


// comparson with the Logical Operator
function fun1(val){
    if(val<=80){
        if(val>=70){
            return "A+";
        }
        return " fail";
    }
}


// another way using && logical operator
function fun1(val){
    if(val<=80 && val>=70){
        return "A+";
    }
    return "Fail";
}
console.log(fun1(75));  // output:: A+


// if ...else
function fun1(val){
    var result="";
    if(val>5){
        return "bigger than 5";
    }
    else{
        return "less than or equal 5";
    }
}
console.log(fun1(3));  // less than or equal // order must be followed


// golf Game
var name=["name1", "name2", "name3", "name4"];
function fun1(par, strokes){
    if(strokes==par){
        return name[0];
    }
    else if(strokes==par- 1){
        return name[1];
    }
}
console.log(fun(3,2));


// switch Satements
function fun1(val){
    var answer= "";
    switch(val){
        case 1:
        answer= "alpha";
        break;
         case 2:
          answer = "beta";
          break
    }
    return answer;
}
console.log(fun1(2));   // output :: beta

// another
function fun1(val){
    var answer= "";

    switch(val){
        case "a": 
         answer = "apple";
         break;
         case "b":
             answer = "cat";
             break;
             default:
             answer = "milk";
             break;
    }
    return answer;
}
console.log(fun1("b"));



// multiple identical options in Switch Statements
case 1:
case 2:
case 3: 
   answer = "low"; // all the condition same result
  break;
// Replacing if..else by switch


// Returning Boolean values from function
function isLess(a,b){
    return a < b;
}
console.log(isLess(10, 15));  // output :: true


// objects
var myDog = {
    "name": "john",
    "legs" : 2,
    "friends": []  // he has no objects
}

// accesing objects
var testObj = {
    "hat": "ballcap",
    "shirt" : "jersy",
    "shoes" : "cleats"
} ;
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// accessing objects with bracket notation
// we can also use bracket notation to access objects
// but when properties have space bracket is must
var testObj = {
    "an etree": "hamburger",
    "my side": "veggies"
} ;
var entreeValue = testObj["an anttree"];
 

//object property can access using variable
var testObj = {
    12 : "john",
    15 : "mathew"
}; 
var playerNumber= 12;
var player = testObj[playerNumber];  // plyer is assign to john


// Updating Object Property 
var testObj ={
    "name" : "john", 
    "age" : 24
}
testObj.name = " happy john"; // the value is now name= happy john


// add element in object
var testObj ={
    "name" : "john", 
    "age" : 24
}
testObj.gender = "male"; // now the object have 3 properties


// delete properties from object by (delete keyword)
var testObj ={
    "name" : "john", 
    "age" : 24
}
delete testObj.age; 

// object can be used to lookup or stored values 
// we can store data instead of case conditional statement
function fun1(val){
    var result ="";

    var ourObject={
        "a" : "apple",
        "b" : "bat",
        "c" : "cat"
    };
    result = ourObject[val];

    return result;
}
console.log(fun1("c"));  // output for c is cat


// The hasOwnProperty() method in JavaScript is used to check 
//whether the object has the specified property as its own property.
var myObj ={
    gift : "pony",
    pet: "kitchen"
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
           return myObj[checkProp];
    } else {
    return "not found";
    }
}
console.log(checkObj("gift")); // output :: not found   when gift  then pony is the result 


// manipulating(use) complex object
// many object under one array
var ourArrayOrObject=[
    {
    "a" : "apple",
    "b" : "bat",
    "c" : "cat"
};

{
    "a" : "apple",
    "b" : "bat",
    "format" : [
        "cd",
        "dvd"
    ],
    "c" : "cat"
};
]


//  accessing nested object
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "seat" : "crumbs"
        },
        "outside" : {
            "trunk": "jack"
        }
    }
};
var gloveType= myStorage.car.inside["glove box"];
console.log(gloveType);  // output :: maps


//accessing nested Array
var myPlants=[
    {
        type: "flowers",
        list : ["rose","tulip"]
    },
    {
        type : "tress",
        list: ["fir","pine","birch" ]
    }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree);  // output :: pine

// Record Collection (2h 4min)


// While Loop
var myArray = [];
var i = 0;
while(i<5){
    myArray.push(i);
    i++;
}
console.log(myArray); // output:: [0, 1, 2, 3, 4]


// for loop
var myArray = [];
for(var i = 0; i< 5; i++){
    myArray.push(i);
}

// another example
var myArray = [];
for (var i=10; i>0; i-=2){
    myArray.push(i);
}              // output :: [1, 3, 5, 7, 9] >>> reverse output



// iterate(repeate) through an array with a For Loop
var myArray = [9, 10, 11, 12];
var ourTotal = 0 ;
for (var i=0 ; i< ourArray.length; i++){
    ourTotal+=myArray[i];
}
console.log(myArray);



// nesting For Loops  for the nesting array
function multi(arr){
    var prod=1;
    for(var i=0; i < arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            prod*=arr[i][j];
        }
    }
    return prod;
}
var prod=multi([[1,2],[3,4]])
console.log(prod)   // output :: 24


// iterate with do..while loop
// do..while loop run at least one time before condition check  
var myArray = [];
var i = 10;
do {
    myArray.push(i);
    i++;
}while (i<5)
console.log(i, myArray);

//Profile Lookup
var myArray = [
    {
        "firstName" : "john",
        "phone" : "123"
    },
    {
        "firstName" : "smith",
        "phone" : "456"
    }
];
function fun1(name, prop){
    for (var i =0; i<myArray.length; i++){
        if(myArray[i].firstName === name){
            return myArray[i][prop] || "not found"; 
        }
    }
    return "no data found";
}

var result = fun1("smith", "phone");
console.log(result);


//object all properties access through special loop 
for(item in rahim) {
    console.log(item)
 }


// generate Random Fractions
function fun(){
    return Math.random();
}
console.log(fun()); // it will give random fraction number between 0 and 1 ..it can be zero but not 1


// generate Random Whole number
// Math.floor take the nearesh whole number ...and 
// Math.random take 0 to 1 fractional number but not 1
function name(){
    return Math.floor(Math.random());
}
console.log(name() * 10);



// generate random whole numbers(integer) within a range
function range(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(range(5, 15));


//parseInt() .. function take string but return integer 
function convertInt(str){
    return parseInt(str);  
}
console.log("55");


//Use the parseInt Function with a Radix
function convertInt(str){
    return parseInt(str, 2);  // we also define the radix or base of numb like parseInt(str, 2)
}
console.log("1010");


// shortcut of if..else (using ternary operator)
function check(a,b){
    return a===b ? true : false;
}
console.log(check(1,1));

// let vs var
//let can not be same name variabale in many times...and you will be warn
// but var can be same variable name in many times

//compare scopes of the var and let keywords
// var can declare globaly  or localy inside a function
// let can be declare only for local variable


//Declare a Read only variable with the const keyword
// by const ...you cannot reassign 
// when using const All the captital letters should be use in common
function printManyTimes(str){
    "use strict";
    const SENTENCE = str + "is cool";
    for (let i = 0; i < str.lenght; i+= 2){
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");


//Mutuate an array Declared with const
var s= [5,7, 2];
function editInPlace(){
    "use strict";
    //s= [2,3,6];  //if i write like this.. result showing undefined
    s[0] = 2;
    s[1] = 5;
    s[2] = 7; // this will work
}


// Prevent Object Mutation   (mutation = poriborton)



// use arrow funcion to write Anonymus (unnamed function) function
var magic = function(){
    return new Date();
};



var magig = () =>{
    return new Date();
};

//shorter
var magic = () => new Date();  // if return have only one value (for better use const in stead of var)


// write arrow function with parameters
var myConcat = function (arr1, arr2){
    return arr1.concat(arr2);
}
console.log(myConcat([1,2], [3,4,5]));

// using arrow function of above (shortcut)
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,5]));


//write higher order Arrow Functions
// function take another function as argument 
// problem: square of all positive integers only

const realNumberArray = [4,5.7, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList =(arr)=>{
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareIntegers;
};
const squareIntegers = squareList(realNumberArray);
console.log(squareIntegers);
// explain :: arr.filter(num =>Number.isInteger(num) && num>0)   .>>> arr (array) will be filtered ... num is the all argument of array and the argument (number) is number> 0 and integer
// map(x=> x*x)  ::   x is the result (after the condition) argument which will be pass in...and square of x



//Write higher order Arrow functions
    const increment = (function(){
        return function increment(number, value =1){
            return number + value;
        };
    } ) ();
    console.log(increment(5,2));
    console.log(increment(5));  // output:: 7 and 6


// Use the rest operator with function parameters
const sum = (function(){
    return function sum(x,y,z){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b, 0);
    };
}) ();
console.log (sum(1,2,3));  // output :: 6

// above can be done with Rest operator
const sum = (function(){
    return function sum(...args){
        const args = [x,y,z];
        return args.reduce((a,b) => a+b, 0);
    };
}) ();
console.log (sum(1,2,3));  // output :: 6


// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['jan', 'feb', 'mar'];
let arr2;
(function(){
    arr2 =arr1;
    arr1[0] = 'potato'

}) ();
console.log (arr2);  //["potato" "feb", "mar"]

// now using spread operator
const arr1 = ['jan', 'feb', 'mar'];
let arr2;
(function(){
    arr2 =[...arr1];  // now arr1 not equal to arry2...arry2 is equal to all element of arry1
    arr1[0 = 'potato'

}) ();
console.log (arr2);  //["jan" "feb", "mar"]



//Use Destructive(ধ্বংসাত্বক) Assignment to Assign Variables from Objects
 var voxel = {x: 3.6, y:7.4, z:6.54};
 var x= voxel.x;  // x = 3.6  // old method to assigning object to variables
 var x= voxel.y;  //y = 7.4 
 var x= voxel.z;
// new method
const { x : a, y : b, z:c} = voxel;

// another example 
const AVG_TEMPERATURES = {
    today : 77.5,
    tomorrow: 79
};
function getTempOfTomorrow(avgTemperatures){
    "use strict";
    const { tomorrow : tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow; 
}
console.log(getTempOfTomorrow(AVG_TEMPERATURES));    //output :: 79 // get tomorrow temperature out of average tempereture




//Destructing Assignment With Nested Objects
const LOCAL_FORECAST = {
    today : { min : 72, max : 83},
    tomorrow: { min: 73.3, max : 84.6}
};
function getMaxOfTomorrow (forecast){
    "use strict";
    const {tomorrow :{max: getMaxOfTomorrow}} = forecast;
    return getMaxOfTomorrow;
}
console.log (getMaxOfTomorrow(LOCAL_FORECAST));  // output ::84.6


// Use Destructing Assignment to assign Variables from Arrays
const [z,x, , y] = [1,2,3,4,5];
console.log(z,x,y);  // output::[ 1, 2,4]

//switching variable by array 
let a =8, b= 6;
(() =>{
    "use strict";
    [a,b]=[b,a]
}) ();
console.log(a);
console.log(b);   // output ::6,8

//Use Destructing Assignment with the Rest Operator
const source = [1,2,3,4,5,6,7];
function removeFirstTwo(list){
    const [ , , ...arr] =list;  // first two elemnt is empty..then rest operator of arr =list
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);          // output :: [3,4,5,6,7]
console.log(source);       // output :: [1,2,3,4,5,6,7]


// 


