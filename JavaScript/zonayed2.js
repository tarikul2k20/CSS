//DOM manipulation
// dom added method
// element select
document.querySelector('#box1'); 
document.querySelector('.box');  // select first box (box1) 
document.querySelectorAll('.box'); // select all box
document.getElementById('box2')  // id likha ache so # lagbe na

document.querySelectorAll('.box');  // it look like array(nodeList) //conver list to array
// then we can use it for array's method and property //first store to variable
var boxNodeList = document.querySelectorAll('.box');
var boxArray = Array.prototype.slice.call(boxNodeList);

document.getElementsByClassName('box'): এটাও আরেকটা সিলেক্টর, তবে স্পেশালি ক্লাস সিলেক্ট করার জন্যেঃ
 // this is called HTMLcollection // look like array


 // tag selector
 document.querySelector():                //আমরা জানি, এটা দিয়ে সবই সিলেক্ট করা যায়। 
  document.querySelector('div')             //তবে সবগুলো ম্যাচের মধ্যে একদম প্রথমটা সিলেক্ট করবে

  document.querySelectorAll('h4, p, ul');

  document.getElementsByTagName('h4');  // to select tag

  // attriute selector
  document.querySelector('[data-atr="box1"]');
  // pseudo code
  document.querySelector('li:first-child');
  document.querySelectorAll('li:first-child, li:last-child'); //multiple select

  //parent child select(select child from parent)
  var parentElement = document.getElementById('box3');
  //console.dir(parentElement); to see the method and property of parentElement
  parentElement.children;   // see direct child
  parentElement.childNodes;   // see all child

  //child of child (using index number)
  parentElement.children[2].children;

  //select parent from child
  var box3p = document.querySelector('.box3-paragraph');
  console.dir(box3p);
  box3p.parentNode;
  box3p.parentNode.parenNode;

  // best select definite element
  document.querySelector('#box3 h4');
  document.querySelector('#box3 h4, #box4 li');   // multiple select
  //direct child select
  document.querySelectorAll('#box3>strong');
  // select wtihout box3
  document.querySelectorAll('.box:not(#box3)');

  //multiple select
  document.querySelector('.box, #box3, #box3 strong, #box3 strong, #box3 li:last-child');



  //play with element
    //create new element
    var newParagraph = document.createElement('p');
  // add content inside element  
  var chacchu = 'Zawad Ahmed'; newParagraph.textContent = 'His name is: ' + chacchu + '!';
  newParagraph;
  newParagraph.textContent;


  //insert html 
  var newDiv = document.createElement('div');
  newDiv.innerHTML = 'DOM Manipulation is Fun!'; // html must be string


  //add class in element
  newDiv.classList.add('new-div');   // classList = propertie  , add()=method   
  // newDiv er moddhe akta class create hobe 
  newDiv.className += ' old-new-div'; // for old browser

  newDiv.classList; // to see all class
  newDiv.classList.remove('new-div');  // remove class
  newDiv.className = newDiv.className.replace(/old-new-div$/, ' ');  // old browser



  // add attribute 
  newDiv.setAttribute('data-attr', 'something');
  newDiv.setAttribute('data-attr', 'someOtherThing');  //modify
  newDiv.removeAttribute('data-attr');   // remove attribute

  newDiv.removeAttribute('class');  // class also a attribute


  //style of element
  //see all css property
  console.dir(newDiv.style);

  newDiv.style.backgroundColor = '#000';

//add element before or after
var box1 = document.getElementById('box1');
box1.insertAdjacentElement('afterbegin', newDiv);
box1.insertAdjacentElement('beforeend', newParagraph);

// make child element box2 inside box1
box1.appendChild(box2);

//শুরুর দিকের চাইল্ড বানাতেঃ
var box1h4 = document.querySelector('#box1>h4');
box1.insertBefore(box2, box1h4);   //h4 er age chole jabe box2

//remove previous one
newParagraph.previousSibling.remove();   //nextSibling 

//প্যারেন্ট ইলিমেন্ট দিয়ে চাইল্ড ইলিমেন্ট রিমুভ করাঃ
box1.childNodes;
box1.childNodes[1];
box1.childNodes[1].remove();
box1.removeChild(box1h4);

//direct remove
document.getElementById('box3').remove();


// Event (html attribute)
//alert
<li onclick="alert('This Document is Created for https://js.zonayed.me')">About this document</li>

// using js
function showAlert() {
  alert('Alert by Function Call');
}
<li onclick = showAlert()> click here </li>

// or (better method)
const clickMeBtn = document.getElementById('btn-click-me');  
clickMeBtn.onclick = function() {
  console.log('Button Clicked');
}

//list of html attribute event
onchange, onclick, onmouseover, onmouseout, onload, onkeydown


// we can use method to add more than 1 event in single method below
// addEventListener()    it is a method(best)
const box1 = document.getElementById('box1');
box1.addEventListener('click', function() {
  console.log('Clicked on Box 1');
})  
//এরকম আপনি চাইলে এখানে ইভেন্ট টাইপে প্যারামিটার হিসেবে load, focus, blur, 
//submit, resize, cut, copy, keydown, keypress, keyupসহ আরো অনেক টাইপের ইভেন্ট দিতে পারবেন।


// Event modify (bubble up) // if onlick 2 ta hoye jai then amra eivabe modify korte parbo
clickMeBtn.onclick = function(event) {
  event.stopPropagation();
  console.log('Button Clicked');  // arekta onclik er jonno eita result dekhabe
}


// jodi onlick 2 ta thake 
clickMeBtn.onclick = function(event) {
  event.stopPropagation();
  event.stopImmediatePropagation();
  console.log('Button Clicked');
}


// preven Default behaviour
const link = document.getElementById('link');
link.addEventListener('click', function(event) {
   event.preventDefault();
});


//run this code on console then automatically showing=>   button Clicked
clickMeBtn.click();  // amra click kora charao event ta ghota te pari

 // event delegation (akta box er modde sokol li ke click korle output same dekhabe)
 var box4 = document.getElementById('box4');
 box4.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
       console.log('Clicked on a List Item');
    }
 });


 // form event
 const inputs = document.querySelectorAll('input');
 const submitBtn = document.querySelector('button[type=submit]');
 inputs[0].addEventListener('change', function() {          // akhane nodeLish akare thakbe 2 ta input ache total input[0], [1]
    console.log('Change Event on Input');
 });


 // we can take input field value
 inputs[0].addEventListener('change', function(event) {
  console.log(event.target.value);
});

//submit button a click korle load nibe na/ oi page ei input nibe na //ajax diye control korte pari 
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
});


// jodi empty field er karone alert dite chai
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if(inputs[0].value === '' || inputs[1].value === '') {
     alert('Input Field cannot be Empty!');
  }
});

// jodi input er data gula submit er por output dekhte chai
submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
  if(inputs[0].value === '' || inputs[1].value === '') {
     alert('Input Field cannot be Empty!');
  } else {
     var input0Data = inputs[0].value;
     var input1Data = inputs[1].value;
     console.log('Your Name:', input0Data, 'And Your Email:', input1Data);
  }
});


//kewdown
document.addEventListener('keydown', function() { console.log('Key Down Event'); });
 //keypress
 document.addEventListener('keypress', function() { console.log('Key Press Event'); });
//  keyup: কী চাপ দিয়ে ছেড়ে দিলে এই ইভেন্ট ঘটেঃ
document.addEventListener('keyup', function() { console.log('Key Up Event'); });

// kon key press hoise seitao bolbe
document.addEventListener('keydown', function(event) {
  console.log('Key Down Event');
  console.log('Pressed Key: ' + event.key);
});

// with console dir
document.addEventListener('keydown', function(event) {
  console.log('Key Down Event');
  console.log('Pressed Key: ' + event.key);
  console.dir(event);
});


//mouse event
//mouseover
clickMeBtn.onmouseover = function(event) { console.log('Mouse Over'); }
//or
clickMeBtn.addEventListener('mouseover', function() {
  console.log('On Mouse Over using addEventListener');
});


// mouseout
clickMeBtn.addEventListener('mouseout', function() { console.log('On Mouse Out'); });



//browser Event
//load
window.addEventListener('load', function() {
  console.log('Your Page Fully Loaded!');
});

//only mark up load er por e dekhabe
document.addEventListener('DOMContentLoaded', function() {
  console.log('Your Markup is Ready!');
});

//নির্দিষ্ট কোনো ইলিমেন্ট লোড হওয়ার পরের ইভেন্টঃ (box2)
img1.addEventListener('load', function() { console.log('Image 1 Has Successfully Loaded!'); });
// load na hole
img2.addEventListener('error', function() { console.log('Image Cannot be loaded!'); });




//AJAX (Asynchronous Javascript And XML)
// send request pathano server a //ajax request
var request = new XMLHttpRequest(); // ইন্সট্যান্স অবজেক্ট তৈরী
request.open('GET', 'url', true); // রিকোয়েস্ট ওপেন করা   get,post, update, delete (asynchorous= true)
request.send(); // রিকোয়েস্ট পাঠানো      //url = 'https://jsonplaceholder.typicode.com/posts'
// রিকোয়েস্ট হ্যান্ডেল
request.onreadystatechange = function handleRequest(){
  console.log(request);       //request.responseText
}

//string to object  JSON.parse()
//JSON (javascript object notation)
// above request.responseText   is a string
// want to convert string to object // sothat we can use this object 
var request = new XMLHttpRequest(); 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); 
request.send(); 

request.onreadystatechange = function handleRequest(){
  console.log(JSON.parse(request.responseText));
}


//akhane kisu error show korbe //readyStat er 4 ta stage ache //4 number mane final 
//https://js.zonayed.me/dom/post-4    akhane details

var request = new XMLHttpRequest(); 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); 
request.send(); 

request.onreadystatechange = function handleRequest(){
   if(request.readyState === 4) {
      console.log(JSON.parse(request.responseText));
   }
}


//রিকোয়েস্ট রেসপন্সঃ এখন আমরা যদি ভুল কোনো ইউআরএল দিয়ে রিকোয়েস্ট করি তাহলেঃ
var request = new XMLHttpRequest(); 
request.open('GET', 'https://jeiwebsitenai.typicode.com/posts', true);   //url wron
request.send(); 

request.onreadystatechange = function handleRequest(){
   if(request.readyState === 4) {
      console.log(JSON.parse(request.responseText));
   }
}


//if url is wrong then red error will be vanished by request object er property status diye
var request = new XMLHttpRequest(); 
request.open('GET', 'https://jeiwebsitenai.typicode.com/posts', true); 
request.send(); 

request.onreadystatechange = function handleRequest(){
   if(request.readyState === 4 && request.status === 200) {
      console.log(JSON.parse(request.responseText));
   }
}

//পেজে এ ডাটা দেখানোঃ আমরা এতক্ষন ডাটা উদ্ধার করলাম। 
//এখন সেই ডাটা আমাদের ডকুমেন্ট এ দেখাবো। তার আগে রিকোয়েস্টটাকে কমপ্লিট করে নেইঃ

var request = new XMLHttpRequest(); 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); 
request.send(); 

request.onreadystatechange = function handleRequest(){
   if(request.readyState === 4 && request.status === 200) {
      console.log(JSON.parse(request.responseText));
   }
}


//below method to see output in console but after click the button

var loadPosts = document.getElementById('btn-click-me');
var box = document.getElementById('box');

loadPosts.addEventListener('click', function() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
  request.send();

  request.onreadystatechange = function handleRequest(){
     if(request.readyState === 4 && request.status === 200) {
        console.log(JSON.parse(request.responseText));
     }
  }
});



// below method to see output inside box under button (all title of the object)
var loadPosts = document.getElementById('btn-click-me');
var box = document.getElementById('box');
var uList = document.createElement('ul');

loadPosts.addEventListener('click', function() {
   var request = new XMLHttpRequest();
   request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
   request.send();
   request.onreadystatechange = function handleRequest(){
      if(request.readyState === 4 && request.status === 200) {
         var data = JSON.parse(request.responseText);
         data.forEach(function(singleData) {
           var list = document.createElement('li');
           list.textContent = singleData.title;
           uList.appendChild(list)
         })
         box.insertAdjacentElement('beforeend', uList);
      }
   }
});




