const fs = require("fs");
const prompt = require('prompt-sync')();
let data = prompt("Enter the data : ");

fs.writeFile('a.txt',data,(err)=>{
    if(err){
        console.log("No data passed")
    }else{
        console.log("File write Successfully");
    }
});
