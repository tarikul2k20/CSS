function arguments6(...any) {
    for(var i = 0; i < any.length; i++) {
       console.log('Argument passed: ' + any[i]);
    }
 }
 arguments6('Bangladesh', 'India', 'Sri Lanka');