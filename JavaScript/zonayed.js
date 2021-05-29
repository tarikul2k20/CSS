1.// function use as argument of another function
function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}

function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Zonayed Ahmed', hello);



2. // funtion use as return function
function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('Zonayed Ahmed')('Coffee');



3. //val cannot changing even under function value of a is changed
function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
    return a;
}

var a = 100;
console.log('Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('Value of a after changing function is applied: ' + a);




4. //scope (var function scope)
function parentFunction() {
    var a = 6;
    function childFunction() {
       var b = 4;
       console.log('Sum: ' + (a + b));
    } 
    childFunction();
 }   // output::10



 5. //closures
 function closuresDemo() {
    var x = 10;
    return function() {
       var y = 20;
       console.log('Sum: ' + (x + y));
    }
 }

 closuresDemo()()

 6. //another
 function aParentFunc(a) {
    return function(b) {
       console.log('Sum: ' + (a + b));
    }
 }
 aParentFunc(6)(4);

 
 7. //IIFE (Imeditely Invoked(call) Function Expression)
 (function aDemoFunc() {
    console.log('Hello World!');
 })();   
// private function (not accessable by anywhere)  //without call we can see result
// in last bracket we can give argument if needed

 8. // another 
 var sum = (function() {
    return 10 + 20; 
 })();

 // jodi return value deya thake private function a tahole access kora jabe 



 // Advance 
 9. // this
 function helloThis(){
    console.log(this);  // output:: global object // always this indicate a object
 }
 
 helloThis();


 // 'use strict' sudhu matro function er moddhei  acces kore // global ke kore na
 10. function helloThis(){   
    'use strict';
    console.log(this);
}

helloThis();  // output :: undefined (for "use strict") tai kono object output a dekhabe na


11. //  it will be glball var 
function unNamed() {
    this.name = 'Zonayed Ahmed';
 }
 
 unNamed();
 console.log(name);
// though local scope but this.name means global


12. //object
var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    msg: function() {
         console.log('My name is '+ this.name);
    }
 }
 myCustomObj.msg();  // output:: My name is Zobayed Ahmed


 13. //je object er moddhe thakbe sei object er this ke indicate korbe
  var myCustomObj = {
   name: 'Zonayed Ahmed',
   age: 21,
   anotherObj: {
      name: 'Ahmed Zonayed',
      msg: function() {
         console.log('My name is: ' + this.name);
      }
   }
}
myCustomObj.anotherObj.msg(); // output::My name is Ahmed Zonayed
// since this always search nearest object

// we can declare the first object by call method (call , bind , apply)
myCustomObj.anotherObj.msg.call(myCustomObj); 


14. // call , bind , apply
var myCustom = {
   name: 'Zonayed Ahmed',
   age: 21,
   job: 'Student',
   anotherObj: {
      name: 'Ahmed Zonayed',
      value: function() {
         console.log('My name is ' + this.name);
      }.call(myCustom)
   }
}
//call method sathe sathe call hoye jai alada vabe call kora lage na


15.// call
var rahim = {
   name: 'Rahim Abdu',
   dob: 1986
}

var karim = {
   name: 'Karim Rahman',
   dob: 1996,
   age: function(currentYear) {
      console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old!');
   }
}

karim.age.call(rahim, 2018); // for rahim //  output ::rahim is 32 years old
// we can use bind , apply also same process



16. // using apply
// call and bind unlimited argument nite pare 
// but apply matro 2 ta nite pare // second argument nei array akaare
var rahim = {
   name: 'Rahim Abdu',
   dob: 1986
}

var karim = {
   name: 'Karim Rahman',
   dob: 1996,
   age: function(currentYear, msg) {
      console.log(msg +"  "+ this.name + ' is ' + (currentYear - this.dob) + ' years old!');
   }
}

karim.age.apply(rahim, [2020, "hello,"]);
// output::Hello , rahim is 34 years old

17. // apply and  call je function a call kora hoi  sathe sathe call kore
// but bind sathe sathe call kore na
var myCustomObj = {
   name: 'Zonayed Ahmed',
   age: 21,
   job: 'Student',
   anotherObj: {
      name: 'Ahmed Zonayed',
      value: function() {
         console.log('My name is ' + this.name);
      }
   }
}
myCustomObj.anotherObj.value.bind(myCustomObj); // this will not return the value
var anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj);
anotherFunc();  // then you will see the result


18. // bind method arguments can be declared later
var rahimAge = karim.age.bind(rahim, 2018);
rahimAge('Hello World!');

19. // onek somoy exact object acces nao hote pare 
// amra method use kore fixed korte pari
var myObj = {
   name: 'Zonayed Ahmed',
   age: 21,
   timer: function() {
      setTimeout(function() {
         console.log('My name is ' + this.name); // akhane direct name ke acces korte pare na tai methood use kora hoise
      }.bind(myObj), 1000)  // call use korle sathe sathe print hoye jabe // tai bind(setTimeout)
    }
}
myObj.timer();
//setTimeout global object er akta method // tai this ke call kore dite hobe 
// 1000 mili second pore output dekhabe


20. // primitive data in js=> number , string , boolean, undefined, null
// convert primitive data to object
var str = new String("amar sonar ");
console.dir(str); // then we see the object method/propertie in console 


21. // function constructor=> same type object barbar asle eitar sahajje akbar e toiri korte pari
var Person = function(name, age, job) {
   this.name = name;
   this.age = age;
   this.job = job;
   this.dateOfBirth = function() {
      console.log(this.name + ' is born in ' + (2018 - this.age));
   }
}

var samirwithmethod = new Person('Samir Hossain', 22, 'Student'); 
samirwithmethod.dateOfBirth();  
//output::samir is born in 1996


22.// inheritance(using prototype)
var PersonOnly = function(name, age, job) {
   this.name = name;
   this.age = age;
   this.job = job;
}

PersonOnly.prototype.dateOfBirth = function() {
   console.log(this.name + ' born in ' + (2018 - this.age));
} 
//console.log(PersonOnly.prototype); // to see dateOfBirth method in console
var zawad = new PersonOnly('Zawad Ahmed', 1, 'Child');
zawad.dateOfBirth();

//ভ্যারিয়েবলকেও কন্সট্রাকটর ফাংশনে দিতে পারবো
PersonOnly.prototype.address = 'Bangladesh';
console.log(zawad.address)

23.// inheritance using function constuctor (jodi teacher der same properties thake sudhu subject add korte hoi )
var Person = function(name, age, job) {
   this.name = name;
   this.age = age;
   this.job = job;
}

var Teacher = function(name, age, job, subject) {
   Person.call(this, name, age, job);  // this means every new object er jonno this bujhacce(kamaljeet)
   this.subject = subject;     // we call without argument person.call(this)
}

var kamaljeet = new Teacher('Kamaljeet Saini', 53, 'Teacher', 'CSE');
console.log(kamaljeet.age);

//'use strict';
cannot declare global variable


24. // ES6
// let vs var 
// we can change value by declaring var but let can not change value
// varকীওয়ার্ড ফাংশন স্কোপ মেইন্টেইন করে
// letও constব্লক(Block) স্কোপ মেইন্টেইন করে
let i6 = 13;

for(let i6 = 0; i6 < 5; i6++) {
   console.log(i6);
}

console.log('Value: ' + i6);
// output:: 0,1,2,3,4   
// output ::value: 13

25.// template literal and string method (alternative of concate)
var name6= "tarik" ;
var age6 = 22
console.log(`My name is ${name6} and I\'m ${age6}years old! Currently I\'m a ${work6}`);

//another exp
function calculateAge(dob) {
   return `I'm ${2018 - dob} years old!`;
}

calculateAge(1996);

// some string method (only work for string)
startsWith(), endsWith(), includes(), repeat()


26. // arrow function and lexical this keyword   
const dob = [1996, 1986, 2017, 1989];
const currentAge5 = dob.map(function(oneDob) {  
   return 2018 - oneDob;
})

27. //for each from anisul
var arr = [2,3,4];
var newArr = [];
arr.forEach(function(x){
   newArr.push(x.x);
})
console.log(newArr);

//map from anisul
// map function nijei akta array create kore // so no need to create new array
var arr = [2,3,4];
var newArr = arr.map(function(x){
   return x*x;
})
console.log(newArr);

//filter (condition)
var arr = [3, 12, 33, 4];
var newArr = arr.filter(function(x){
   return x>10;
})
console.log(newArr);   


28. //map() method
const zawad = new Map();
zawad.set('fullName', 'Zawad Ahmed');
zawad.get('fullName');  //output: Zazad Ahmed

zawad.has('fullName');  //true

zawad.has('something');  // false

zawad.delete('fullName'); // delete propertie

zawad.clear();   // remove map

// another
const favorite = new Map();
favorite.set('name', 'Zonayed Ahmed');
favorite.set('job', 'student');
favorite.set('color', 'blue'); 

console.log(favorite); 
console.log(favorite.size);

favorite.forEach((value, key) => console.log(`Key is: ${key} and the value is: ${value}`));

29. // for of diyeo loop chalate pari
for(let [key, value] of favorite.entries()) {
   console.log(`Key is: ${key} and the value is: ${value}`);
}


30.//Destructin
//alternative of seperate assign
//  var name = zonayed[0];
const zonayed = ['Zonayed Ahmed', 21, 'Student'];
const [name6, age6, profession6] = zonayed;
console.log(name6);
console.log(age6);
console.log(profession6);

//object 
const zonayedObj = {
   nameObj: 'Zonayed Ahmed',
   ageObj: 21,
   professionObj: 'Student'
};
const { nameObj, ageObj, professionObj } = zonayedObj;  // console.log(nameObj) 

// onject in object access
const { anotherObj: { anotherNewObj: { title: newTitle } } } = comObj;

31.//Array in es6
const nodeList = document.querySelectorAll('.box-content');  //.box-content all are div class
const nodeToArr6 = Array.from(nodeList);   // nodeList was object //but now converted to array

// loop in array
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];   
// for(var i = 0; i < numbers.length; i++) {
//    if(numbers[i] === 5) break;
//    console.log('Number printed: ' + numbers[i]);
// }
for(const number of numbers) {
   if(number === 5) break;
   console.log(`Number printed ${number}`);
}

32.// find number from array
var numbers = [19, 23, 14, 56, 32, 65, 10, 45];
//es5
var findNum = numbers.map(function(theNum) {
   return theNum === 65;
}) 
console.log(findNum)  // [false false ......true..false]


//using index
findNum.indexOf(true);  //output::5
numbers[findNum.indexOf(true)]  // output:: 65

//es6
numbers.findIndex(number => number === 65); //output: 5


33.//spread operator
//es5
var numbers = [1, 2, 3, 4];
function calculate(a, b, c, d) {
   console.log('Sum: ' + (a + b + c + d));
}
calculate(1, 2, 3, 4)  //or using array below
calculate.apply(null, numbers)  //output :10   //apply similar as call// but takes argument as array
// es 6
calculate(...numbers)   //simple output: 10

// add or push using es6
var arrName = ['Rahim', 'Karim', 'Rafiq', 'Jabbar'];
const arrName6 = ['Bangladesh', ...arrName, 'Language'] //output:: ['Bangladesh','Rahim',....,'language']

//concat() vs spread
var arrOne = [0, 1, 2, 3, 4];
var arrTwo = [5, 6, 7, 8, 9];
arrOne = arrOne.concat(arrTwo)
//es6
arrOne = [...arrOne, ...arrTwo]


34.//rest parameter
https://js.zonayed.me/es6/post-8
//অ্যারো ফাংশনে এই argumentঅবজেক্ট কাজ করবে না। 
//আর তাই আপনি যখন অ্যারো ফাংশন ইউজ করতে যাবেন তখন আপনাকে এই ক্ষেত্রে রেস্ট প্যারামিটার ইউজ করতে হবে।

//es5
function arguments5() {
   for(var i = 0; i < arguments.length; i++) {
      console.log('Argument passed: ' + arguments[i]);
   }
}
arguments5('Bangladesh', 'India', 'Sri Lanka');

// es6
function arguments6(...anyName) {
   for(var i = 0; i < anyName.length; i++) {
      console.log('Argument passed: ' + anyName[i]);
   }
}
arguments6('Bangladesh', 'India', 'Sri Lanka');

//arrow function will not work
const argumentsArr = () => {
   for(var i = 0; i < arguments.length; i++) {
      console.log('Argument passed: ' + arguments[i]);
   }
}
argumentsArr('Bangladesh', 'India', 'Sri Lanka')  // output::it will show error
//arguments অবজেক্ট ঠিক অ্যারে না হওয়ায় এখানে আপনি চাইলে forEach, map, filter, reduceবা 
//এরকম বাকী যত মেথড আছে সেগুলো কাজ করাতে পারবেন নাঃ
//কারণ এই argumentsঅবজেক্ট এর এই ধরনের কোনো মেথড নেই।
//example: below map() will not work
function argumentsMeth() {
   arguments.map(function(oneArgs) {
      console.log('Argument Passed: ' + oneArgs);
   })
}

35.//but amra object ke array te convert korte pari
//it will work
function argumentsMethWork() {
   var argsArr = Array.prototype.slice.call(arguments);

   argsArr.map(function(oneArgs) {
      console.log('Argument Passed: ' + oneArgs);
   })
}
argumentsMethWork('Bangladesh', 'India', 'Sri Lanka')


36.//Rest parameter use kore uporer sob gulo problem solve korte pari
// arrow function will work with rest parameter
// ALL METHOD will work  with spread operator
const argumentsArr6 = (...anyName) => {
   for(var i = 0; i < anyName.length; i++) {
      console.log('Argument passed: ' + anyName[i]);
   }
}
argumentsArr6('Bangladesh', 'India', 'Sri Lanka')

//map
const argumentsMeth6 = (...anyName) => {
   anyName.map(oneArgs => console.log('Argument Passed: ' + oneArgs))
}


// jodi amra kisu parameter jana thake ar kisu jana na thake 
const restExtra = (name, age, ...others) => {
   console.log(`My name is ${name} and I am ${age} years old!`);
   others.map(other => console.log(`Argument Passed: ${other}`));
}
restExtra('Zonayed Ahmed', 21, 'JavaScript', 'Chrome', 'Web Developer', 'Front End Engineer')


37// Default parameter
//es5
function defaultParams(name, age) {
   name ? name = name : name = 'Zonayed Ahmed'
   age ? age = age : age = 21
   console.log('My name is ' + name + ' and I am ' + age + ' years old!');
} 
defaultParams();  // akhane parmater change korteo parbo

//es6
function defaultParams6(name = 'Zonayed Ahmed', age = 21) {
   console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
defaultParams6('Zawad Ahmed', 1); // faka rakhle default tai run korbe
 // https://js.zonayed.me/es6/post-9


 //function constructor in ES 6 with default parameter
 function FunctionConst6(name = 'Zonayed Ahmed', age = 21) {
   this.name = name;
   this.age = age;
}
var zonayed6 = new FunctionConst6();
//var zawad6 = new FunctionConst6('Zawad Ahmed', 1);
console.log(zonayed6.name);
console.log(zonayed6.age);

38//class
//function constructor
var Child5 = function(name, dob) {
   this.name = name;
   this.dob = dob;
}
var zawad = new Child5('Zawad Ahmed', 2017);
//Child5.prototype.currentAge = function() {                          (to add new method/propertie)
//    console.log(this.name + ' is ' + (2018 - this.dob) + ' years old!');
// }
//zawad.currentAge();
console.log(zawad.name);
console.log(zawad.dob);

//using es6
class Child6 {
   constructor(name, dob) {
      this.name = name;
      this.dob = dob;
   }

   currentAge() {
      console.log(`${this.name} is ${2018 - this.dob} years old!`);
   }
} 
const zawad6 = new Child6('Zawad Ahmed', 2017);
console.log(zawad6.name);
console.log(zawad6.dob);
zawad6.currentAge();


39//class and inheritance

class PersonClass {
   constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
   }
}
class TeacherClass extends PersonClass {        // inheritance
   constructor(name, age, job, subject) {
      super(name, age, job);
      this.subject = subject;
   }
}
const ourSir = new TeacherClass('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');


40// method o inherit korte parbe 
class PersonClassMeth {
   constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
   }
   dateOfBirth() {    //akhane eita method
      console.log(`${this.name} born in ${2018 - this.age}`);
   }
}

class TeacherClassMeth extends PersonClassMeth {
   constructor(name, age, job, subject) {
      super(name, age, job);
      this.subject = subject;
   }
}
const ourSirMeth = new TeacherClassMeth('Shafiq Sir', 46, 'Assistant Teacher', 'Physics');

// console.log(ourSirMeth.dateOfBirth());  method o acces kora jabe

41// sudhu matro class er maddhome method acces kora jabe static er maddhome
class StaticMethod {
   constructor(name) {
      this.name = name;
   }
   static aSpecMeth() {
      console.log('I am A Special Method!');
   }
}
console.log(StaticMethod.aSpecMeth());
// console.log(aMeth.aSpecMeth());   error asbe কারণ এটা staticমেথড। এটা শুধুমাত্র উক্ত ক্লাস দিয়েই অ্যাক্সেস করা যাবে, 
// কিন্তু সেই ক্লাস দিয়ে তৈরী কোনো অবজেক্ট দিয়ে অ্যাক্সেস করা যাবে না।



///prototype
// object to array(arguments)
var arr = prototype.slice.call(arguments);
// to inherit object method(function constructor)
Person.prototype.dateOfBirth = function(){}
// 