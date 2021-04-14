// lecture ::1
var obj = {};
var obj1 = new Object;
console.log(obj1);

//example
var book = {
    name: 'functional js',
    author: 'xyz',
    print: function(){
    console.log(this.name, this.author);
    }
}

console.log(book);
book.print();

// to show the output of property
for(var props in book){
    console.log(props + ' = ' + book[props]);
    
}


// lecture::2  make class in js
function Person(name, email){
    this.email = email;
    this.name = name;

    this.print = function (){
        console.log('Name : '+ this.name);
        
    }
}

var p1 = new Person('tarik', 'first@gmail.com');
var p2 = new Person('abir', 'second.com');
var p3 = new Person('islam', 'third.com');

var people = [p1, p2, p3];
// console.log(p1.name);  // output: tarik
// console.log(p1.email); // first.com
// console.log(p1);   // name:tarik  , email: 
// console.log(people);

// to find email
people.forEach(function(person){
    console.log('Email :'+ person.email); // output: all email
    // person.print();  // to show the name also
    
})

// iterate object (Person er p1)
for(var props in p1){
    console.log('properties = '+ props);  // all properties will show of p1
    
}


// another example
function Book(name, author, price){
    this.name = name;
    this.author = author;
    this.price = price;
}
var book = new Book('name of book', 'author name', 500);
console.log(book.constructor);


// Lecture ::3  
// this keyword is related to object (this = that object)
// when this is called within  function()...then that (this) is called in a funtion then it will be window object
// 
var obj = {
    name: 'tarik',
    print: function(){
        console.log(this);  // output:: whole object
        
    }
}

function myFunc(){
    function inner(){
        console.log(this);  // output :: window object
        // jokhon function er moddhe this use hobe tokon window object output dibe
    }
}


// to solve this problem we use bind() method
// bind() method is needed to use other method in another place
var obj = {
    name: 'tarik',

    print:function(){
        console.log(this); // output::whole object
        console.log('hello '+ this.name); // hello tarik
        
    }
}
// person.print();

// var myname = person.name;
//console.log(nyname);

// var myPrint = function(){
//     console.log(this);
//     console.log('hello '+ this.name);
    
    
// }

var myPrint = person.print.bind(person)
console.log(myPrint);  
myPrint();
// jokhon akta function kono akta object er moddhe thakbe
// onno jaigai oi function or method use korte chaile bind() method use korte hobe


function add(num){
    return this.value + num;
}
var obj = {
    value: 10
}
var obj2 ={
    value: 50
}
var binded = add.bind(obj);
var result = binded(40);
result; // output:: 50

// setTimeout
var person = {
    name: 'tarik',
    print:function(){
        setTimeout(function(){
            console.log('hello world');
            
        }, 2000) // 2000 milisecond interval...after 2 second hello world will be shown
    }
}
var result = person.print();
resutlt

// 
var person ={
       name: 'tarik',

       print: function(){   // this is called mehtod

           setTimeout(function(){       // this is pure function
               console.log(this);
               console.log('hello , '+this.name);
               
               
           }.bind(this),2000)
       }
}

// method vs function
// jokhon obj er vitore function refer kora thakbe take method bole
// method er this mane object ke acces korbe... ar pure function er vitore this mane global or window object ke access korbe


// lecture:: 4 >> prototype
function Person(name, age){
    this.name = name;
    this.age =  age;
}
this.hello = function(){   // method gula ke alada kore rakha kei prototype bole
    console.log('Hello , '+this.name);
    
}
var p1 = new Person('tarik', 22);
var p2 = new Person('islam', 24);


//another way
function Person(name, age){
    this.name = name;
    this.age =  age;
}
Person.prototype.hello = function(){
    console.log('Hello , '+this.name);
    
}
var p1 = new Person('tarik', 22);
var p2 = new Person('islam', 24);
// see lecture again 


// lecture:: 5 Bind , call, apply
function printMe(){
    console.log('Hello, '+this.name);  // Hello, tarik  // Hello, islam
    
}
var obj1 = {
    name: 'tarik',
    age: 22
}
var obj2 = {
    name: 'islam',
    age: 22
}
var binded1 = printMe.bind(obj1);
var binded2 = printMe.bind(obj2);

// printMe.call(obj1);
// printMe.call(obj2);  // sathe sathe call korbe (without assign with var)

binded1();
binded12();
// bind method er problem hocce instantly run kore na


// another example
function add(a, b){
    return (a+b) * this.c;
}

var obj1 = {
    c:3;
}

var obj2 = {
    c: 5;
}

var resutlt = add.call(obj, 10, 4);  // a,b er argument (10, 4)
result; // output ::42

var resutl2 = add.apply(obj2, [10, 3]);  // to use apply [] must use.. this is the difference between call and apply
resutl2;  // output:: 65

var binded = add.bind(obj1);
console.log(binded(12, 5));   // 51



// lecture ::6 inheritance with js
// onner character or boisisto jodi arekjoner moddhe apply koreen take inheriteance  bole

function Person(){
    this.name = 'tarikul'
}

function Teacher(){
    Person.call(this);
    this.subject = 'math':
}

var teacher = new Teacher();  // to create object

var name = teacher.name;
console.log(name); // tarikul








