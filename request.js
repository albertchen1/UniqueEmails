const https = require("http");

// let emails = "test.email@gmail.com,test.email+spam@gmail.com"
// let emails2 = "test.email@gmail.com,test.email@fetchrewards.com"

// http://localhost:3000/?array=test.email@gmail.com,test.email+spam@gmail.com

// Fill in your emails below, in the emails variable: Each email needs to be separated with a comma
// Ex: 
// let emails = "test.email@gmail.com,test.email@fetchrewards.com"
// let emails = ""





const reqURL = "http://localhost:3000/?array=test.email@gmail.com,test.email@fetchrewards.com"

https.get(reqURL, res => {
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });
    res.on("end", () => {
        // body = JSON.parse(body);
        console.log(body)
    })
})

