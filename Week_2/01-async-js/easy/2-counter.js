console.log("Hi, before SetTimeout");
setTimeout(function timeout(){
    console.log("Hi, from setTimeout");
}, 5000);
console.log("Hi, after SetTimeout")
