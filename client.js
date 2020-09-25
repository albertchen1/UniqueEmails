const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;
const url = require('url');
const PORT = process.env.PORT || 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
    // console.log(process.env)
    const queryObject = url.parse(req.url,true).query;
    // If there is an array provided in the parameters
    if (queryObject.array) {
        const emails = queryObject.array.split(",");
        let unique = `Number of unique emails: ${numUnique(emails)}`
        res.setHeader('Content-Type', 'application/json');
        res.end(unique);
        res.statusCode = 200;
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end("No emails received, 0 unique");
    }
  //Set the response HTTP header with HTTP status and Content type
});

server.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
//   console.log(`Server running at http://${hostname}:${PORT}/`);
});

function numUnique(emails) {
    // Used a set to look for unique emails
    let set = new Set();
    emails.forEach(email => {
        // Pushed to an arary instead of using strings or stringbuilder to save runtime
        // since pushing to arrays or arraylists requires O(1) time as opposed to += for strings which requires O(N) time
        let reduced = [];
        // Ignore is a flag for everything that comes after a "+", except when you hit the "@"
        let ignore = false;
        for (let i = 0; i < email.length; i++) {
            let char= email[i];
            // I used OR char === " " because "+" in URLs becomes " ", so when it comes in it gets converted to spaces
            if (char === "+" || char === " ") ignore = true;
            if (char === ".") continue;  
            if (ignore && char == "@") ignore = false;
            if (ignore) continue;
            reduced.push(char);
        }
        // Convert the reduced array to a string, and add it to the set
        // If it already exists in the set, nothing will happen
        set.add(reduced.join(""));
    })
    // Set size will indicated the number of unique emails
    return set.size;
}
