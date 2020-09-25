const https = require("http");

// http://localhost:3000/?array=test.email@gmail.com,test.email+spam@gmail.com

// Fill in your emails below, in the emails variable: Each email needs to be separated with a comma
// Ex: 
// let emails = "test.email@gmail.com,test.email@fetchrewards.com"
let emails = `insert emails here` // insert emails into the string (quotations)

const reqURL = "http://unique-emails-fetch-rewards.herokuapp.com/?array=" + emails;
// To run this in your local environment, use the URL below instead
// const reqURL = "http://localhost:3000/?array=" + emails
// Make sure your port matches the port your server is using

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


