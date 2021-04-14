var myGlobal= 10; // global variable
function fun1(){
    var oopsGlobal= 5; // it is also global variable ...if we write var before oopsGlobal it will be local global
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
