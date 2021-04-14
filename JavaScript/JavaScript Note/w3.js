// Variable declare in one line...it can be use distinct line
var person = "John Doe", carName = "Volvo", price = 200; 

// Light on or off
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>
<img id="myImage" src="pic_bulboff.gif" style="width:100px"></img>
<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>


// string ( if the first one was string then other number/alphabet taken as a string) 
x = "5" + 2 + 3;
document.getElementById("demo").innerHTML = x;  // out put is ...523>>> var x = 16 + 4 + "Volvo";...output is 20volvo

var x = 5, y=5,z=6;
document.getElementById("demo").innerHTML =(x == y) + "<br>" + (x == z);  //output is ... true false


// Javascript Object
var person = {
    firstName : "John", lastName  : "Doe", age : 50,  eyeColor  : "blue"
  };
  document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old."; // output is : John is 50 years old.

// Typeof()   
document.getElementById("demo").innerHTML = 
typeof "john" + "<br>" +                               output : string
typeof 3.14 + "<br>" +                                          number     
typeof true + "<br>" +                                          boolean
typeof false + "<br>" +                                         boolean
typeof x;                                                       undefined
typeof {name:'John', age:34}                                    object"
typeof [1,2,3,4]                                                object  //The typeof operator returns "object" for arrays 


// Function ( function can be written up or down)
 function name(x,y){
     return x*y;
 }document.getElementById("demo").innerHTML=name(value1, value2);

 (if the variable declare inside of function then that variable outside treated as undefined type)

// A method is a function stored as a property.
var person = {
  firstName: "John",
  lastName : "Doe",
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
document.getElementById("demo").innerHTML = person.fullName(); //output: John Doe  //if we don't give () after fullname it will show the function 

//  display date using function
<button onclick="displayDate()">The time is?</button>
<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>

// text length
var x="abcd";
document.getElementById("demo").innerHTML=x.length;

// Backslash escape character ( to use the single, double , backslash )
var x="the name of the country is \"bangladesh\" "          //output:  the name of the country is "bangladesh"

Note: if we want to break the line after operator or comma can be proper way ...we also use single backslash ( \ )
The safest way to break a code line in a string is using string addition. Example: "john" +"Doe"
we can use += to concate

// Index of 
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo").innerHTML = pos;

var pos = str.lastIndexOf("locate"); // allocate last word position of sentence
var pos = str.indexOf("locate", 15); // starting point forward
var pos = str.lastIndexOf("locate", 15); // starting point backward

var pos = str.search("locate"); //The search() method cannot take a second start position argument. 


//Slice string
slice(7, 13)   // 7 to position 12 (13-1):
substring(start, end)  // the start position, and the end position (end not included)
substr(start, length)   //

// replace 
<button onclick="myFunction()">Try it</button>
<p id="demo">Please visit Microsoft!</p>

<script>
function myFunction() {
  var str = document.getElementById("demo").innerHTML; 
  var txt = str.replace("Microsoft","W3Schools");
  document.getElementById("demo").innerHTML = txt;
}
</script>

str.charAt(0);  //which character at position 0

//number
number.toString() // making the number into string
myNumber.toString(8);   // myNumber=32;   returns 40 in octal
number.toFixed(2);  // given output after two decimal point   // number=3.12345  output= 3.12
number.toPrecision(4); // given total (4) number  // number=3.12345   output=3.123
number.toExponent(3) // make the number exponent  ...after 3 digit   //number=123456  output: 1.234e+5
number.valueOf() ;// The valueOf() method returns a number as a number


// (x === y) is false because x and y have different types    // when x=200 and y=new Number(200);
// (x == y) is false because objects cannot be compared

// Regular Expression
var txt = str.replace(/MICROSOFT/i,"W3Schools"); // to replace first similar upper or lower case word
var txt = str.replace(/Microsoft/g,"W3Schools"); // global match >>> replace all similar word
var text2 = text1.toUpperCase(); // lower to upper
var text2 = text1.toLowerCase();

// joining string (two method)
var text = "Hello" + " " + "World!";
var text = "Hello".concat(" ", "World!");

day === "Monday" ? price -= 1.5 : price += 1.5;

// Array 
var x = cars.length;   // The length property returns the number of elements
var y = cars.sort();   // The sort() method sorts arrays

fruits = ["Banana", "Orange", "Apple", "Mango"];
var last = fruits[fruits.length - 1];  // accessing the last element of the array

//Looping Array Elements
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

//converting array to string
document.getElementById("demo").innerHTML = fruits.toString();   // method 1
document.getElementById("demo").innerHTML = fruits.join(" * ");  // method 2

fruits.pop();              // Removes the last element ("Mango") from fruits
fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits
var x = fruits.push("Kiwi");   //  the value of x is 5    // The push() method returns the new array length:

fruits.shift();            // Removes the first element "Banana" from fruits
var x = fruits.shift();    // the value of x is "Banana"  // The shift() method returns the string that was "shifted out":

var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3