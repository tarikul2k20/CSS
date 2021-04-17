// function use as argument of another function
function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}

function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Zonayed Ahmed', hello);



// funtion use as return function
function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('Zonayed Ahmed')('Coffee');



//val cannot changing even under function value of a is changed
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




//scope
function parentFunction() {
    var a = 6;
    function childFunction() {
       var b = 4;
       console.log('Sum: ' + (a + b));
    } 
    childFunction();
 }   // output::10



 //closures
 function closuresDemo() {
    var x = 10;
    return function() {
       var y = 20;
       console.log('Sum: ' + (x + y));
    }
 }

 closuresDemo()()

 //another
 function aParentFunc(a) {
    return function(b) {
       console.log('Sum: ' + (a + b));
    }
 }
 aParentFunc(6)(4);

 
 //IIFE (Imeditely Invoked(call) Function Expression)
 (function aDemoFunc() {
    console.log('Hello World!');
 })();     // private function (not accessable by anywhere)  //without call we can see result


 // another 
 var sum = (function() {
    return 10 + 20; 
 })();

 // jodi return value deya thake private function a tahole acces kora jabe 



 // Advance 
 // this
 function helloThis(){
    console.log(this);  // output:: global object // always this indicate a object
 }
 
 helloThis();


 //function helloThis(){
    'use strict';
    console.log(this);
}

helloThis();  // output :: undefined (for "use strict") tai kono object output a dekhabe na


// 
function unNamed() {
    this.name = 'Zonayed Ahmed';
 }
 
 unNamed();
 console.log(name);
// though local scope but this.name means global


//
var myCustomObj = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student',
    msg: function() {
         console.log('My name is '+ this.name);
    }
 }
 myCustomObj.msg();  // output:: My name is Zobayed Ahmed


 // var myCustomObj = {
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


// call , bind , apply
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


// 
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



// using apply
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

// apply and  call je function a call kora hoi  sathe sathe call kore
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


