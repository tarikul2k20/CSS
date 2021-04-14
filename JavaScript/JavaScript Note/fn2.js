// 1. function can be stored in a variable  
function sayName(name){
    return 'Hello ', + name;
}
var hello = sayName;
console.log(hello('tarik'));



// 2. A function can be stored in an array
// from above function
var arr = [1,2, hello];  // output:: [1,2,[sayhello]]
arr.push(sayName);
console.log(arr)  //// output:: [1,2,[sayhello], [sayHello]]


// 3. function can be stored as an object field or property
var person = {
    name: "tarik",
    sayName: sayName
}

// 3. inner function

function outer(){
    function inner(){
        console.log("i am innner ");
        
    }
    inner();
   console.log("i am outer");
}
outer();

// to see the inner function output after inner function should be called 
// inner function a kono kisu declare korle seta kebol inner functio ei result dekhabe 
// but outer function a  kono kisu declare korle jekono jaigai output dekhte pabo 

// another
function add(a,b){
    function sum(){  // sum() kono parameter (a,b) na dileo hobe because a,b outer function a ache
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function times(){
        return a*b;
    }
    function div(){
        return a/b;
    }
    return sum() + sub()+ times()+ div();

}
var output= add(10,5);
console.log(output);




// Lecture 4::  return Statment
function name(firstName,lastName, gender){
    var output;
    if(gender === 'male'){
        output = 'mr.'+firstName+ ' '+lastName;
    }
    else if(gender === 'female'){
        output= 'ms'+ ' '+firstName+ ' '+lastName;
    }
    return output;
}
var fullname= name('Tarik', 'Islam', 'Male');
console.log(fullname);



// example
function example(){
    return{
        name: "tarikul",
        skill:['java', 'javascript'],
        print: function(){
            console.log(this.name, this.skill);
            
        }
    }
}
var obj = example();
obj.print();



//lecture :: 5
// higher order function
//ex-1
var arr = [4,5,1,0,9];
function cbf(a){
    console.log(a);
    
}
arr.forEach(cbf);

// ex-2
function caller(){
    return function(name){
        return 'Caller Calling You' + name;
    }
}
var x= caller ();
var y = x('tarik');  // or   var a =caller()('tarik'); // same output
y;  


// lecture:: 6  call back function
function hello(name){
    print(name);    //output::tarik
    print('something else');  // output:: something else
}
function print(args){
    console.log(args);
    
}
hello('tarik')


// another way 
function hello(name, print){
    print(name);
}
hello('tarik', print)

function print(args){
    console.log(args);
    
}

// another
function hello(name, print){
    print(name);
}
hello('tarik', function(name){
    console.log('Hello' + name); // output:: Hello tarik
    
})

hello('tarik', function(name){
    console.log('How are you'+ name); // output:: How are you, tarik
    
})

hello('name', function(name){
    console.log('Length of the'+name+ 'is='+ name.length);
    
})

// benefit of above function is : other function only do one particular work
// but abobe function can be used many way as i want


// example
var obj={
    name: "tarik",
    age: 22,
    email: 'something'
}

function myself(person, callback){
    console.log('Name: '+ person.name+' '+person.age);
        callback(person.email);
    
    
}

myself(obj, function(email){
    console.log('email sent to :'+ email);
    
})

// another
function print(data, callback1, callback2){
    console.log('original data: '+ data);
    callback1(data);
    callback2(data);
    
}

print('Amar Sonar Bangla ami tomai', function(data){
    var data= data.toUpperCase();
    console.log('Uppercase: '+ data); //output::all uppercase

    
}, function(data){
    var data = data.toLowerCase();
    console.log(data);
    console.log('Lenght: ' + data.length); // output:: 45
    
    
});


// lecture::7 
// return function from function
function host(){
    console.log('i am host func'); 
    return function(){
        console.log('i am child'); // this output will show when only console.log(a())
        
    }
    
}
var a = host();
console.log(a()); // output: host function and child function // but when conosle.log(a) ... then only child function executed



// this can be done another way
function host(){
    console.log('i am host func');
    function child(){
        console.log('i am child');
        
    }
    return child;
    
}
var a= host();
a();


// another example
function greeting(msg){
    return function(name){      // anonymous function
        console.log(msg +' '+ name);
        
    }
}
var good = greeting('good morning');
var hello = greeting('Hello');

// hello();        output:: Hello undefined
hello('Tarik');    output::Hello Tarik
good('Tarikul');    output:: good morning Tarikul

// above can be write 
function greeting(msg){
    function ret(name){          // by namimg the function
        console.log(msg + ' '+name);
        
    }
    return ret;
}

var good = greeting('good morning');
var hello = greeting('Hello');

hello('Tarik');    output::Hello Tarik
good('Tarikul');    output:: good morning Tarikul



// lecture :: 8  => closure
var name = 'tarik';
function sayName(){
    console.log('Hello, '+ name); // out:: Hello , tarik
    
}
//console.dir(sayName) ::  to see the closure at console::  Here name is the closure
sayName();



// lecture::9  => sort array of object
var arr = [67, 34, 21, 45, 6, 38, 10];
arr.sort();
arr;  // output:: may be not accurate

// another method of sorting
var arr = [67, 34, 21, 45, 6, 38, 10]; 
arr.sort(function(a,b){
    return a-b;
});
console.log(arr);


// sort array of object 
var people =[
    {name: 'abc', age: 22},
    {name: 'def', age: 24},
    {name: 'djfj', age: 16}
]
people.sort(function(a, b){
    return a.age-b.age;
});
console.log(people); // this will be sort by age


// sort by name
people.sort(function(a, b){
    if (a.name> b.name){
        return 1;
    } else if(a.name<b.name){
        return -1;
    }else{
        return 0;
    }

})


// Lecture:: 10 forEach function
var arr= [1,2,3,4];
arr.forEach(function(value, index, arr){
    console.log('Element is '+value+ ' index is '+index+ ' arr= '+ arr);
    
})
// callback function er moddhe diye amra (value, index , arr) pass korte parbo
// commonly akta elment pass korle oita value hisebe count hobe


// above using callback function
var arr= [1,2,3,4];
 
function loop(arr, callback){
    for(var i=0; i<arr.length;i++){
        callback(arr[i]);  // callback(arr[i], i)   //index soho output pawar jonno
    }
}

loop(arr, function(element){    // function(element, i)
    console.log('Element is '+ element);   //console.log(element + ' '+ i)   // output a index soho dekhabe
    
});


// lecture ::11  filter
var arr = [1, 2, 3, 4, 5];
var newArr = [];
for(var i=0; i<arr.length; i++){
    if(arr[i]%2==1){
        newArr.push(arr[i]);

    }
}
console.log(newArr);


// above can be written
var arr = [1, 2, 3, 4, 5];
var newArr = arr.filter(function(value){
    return value % 2 == 1;
});
console.log('new array = '+ newArr);


// another way (callback) without using filter function
var arr = [1, 2, 3, 4, 5];
function myFilter(arr, callback){
    var newArr = [];

    for(var i=0; i<arr.lenght; i++){
        if(callback(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var myArr = myFilter(arr, function(element){
    return element % 2 == 1;
});
console.log(myArr);


// lecture:: 12  map function
// problem : add 2 with everry element of array without map()
var arr = [1, 2, 3, 4, 5];
var mapArr = [];

for(var i=0; i<arr.length; i++){
    mapArr.push(arr[i] + 2);
}
console.log('Mapped array ' + mapArr); // output:: added 2 with every


// with map()
var arr = [1, 2, 3, 4, 5];
var mapArr = arr.map(function(value){  // this function also can take 3 element:: first is value, 2nd is index, 3rd is array(value, index, array)
    return value + 2;
});
console.log('New Array =' + newArr);


// make your own library map() ... so you can understood how to work this map()
var arr = [1, 2, 3, 4, 5];

function myMap(arr, callback){
    var newArr = [];
     
    for(var i=0; i<arr.length; i++){
    var data = callback(arr[i]);
    // newArr.push(callback(arr[i]));
    newArr.push(data);
  }
return newArr;
}

var myArr = myMap(arr, function(value){
    return value + (5 -2*3);
});
console.log("newArrayy= " + myArr);


// lecture:: 13 => Reduce()
// problem:: sum all the digit
var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(a, b){
    return a+b;
});
console.log(('Result = '+ result));   // output::15






