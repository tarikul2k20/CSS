// first tutorial
var arr = ["e" , "d" , "tarik"];
// arr.sort();
// console.log(arr.sort())
// arr.splice(2,1);
// console.log(arr);

arr.forEach(function(val){
    console.log(val)
});

arr.forEach(name);
function name(val){
    console.log(val); 
}



// call back function
function hello(a, b, callback){
    var c=a+b;
    var d=a-b;
    callback(c, d);
}

function multi(c, d){
    console.log(c*d);
}

hello(10,5,multi)



// shortcut
function hell(a,b,call){
    var c=a+b;
    var d=a-b;
    call(c, d);
}
hell(10,5,function(c,d){
    console.log("multiply :"+ (c*d))
})


// object
var obj = {
    "name": "tarik",
    "age": 24,
    details: function(){
        console.log(this.name , this.age)
    }
}
console.log(obj.details());

console.log(obj)

for (var i in obj){
    console.log(obj[i]);
    
}

// javascript object access by forEach()
var aray = [
    {
        "name": "tarik",
        "age": 22
    },
    {
        "name": "islam",
        "age": "23"
    }
];
aray.forEach(function(val){
    console.log(aray[0].age);
    
})



