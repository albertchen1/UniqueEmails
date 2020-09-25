# UniqueEmails
This is my coding exercise from Fetch Rewards. The user can provide emails and will receive an integer returning the number of unique emails provided. As listed in the exercise instructions: 

```
Unique email addresses means they will be delivered to the same account using Gmail account matching. Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".

Examples
test.email@gmail.com, test.email+spam@gmail.com and testemail@gmail.com will all go to the same address, and thus the result should be 1.
test.email@gmail.com and test.email@fetchrewards.com are two different email addresses, and thus the result should be 2.
```

I completed this in Node.js version 12.16.3 and deployed to Heroku at: http://unique-emails-fetch-rewards.herokuapp.com/

There are two ways to run this:
1. You can send a request through your browser like this:
```http://unique-emails-fetch-rewards.herokuapp.com/?array=``` + emails.
   The emails should be listed as parameters with key=array and value=emails separated by commas.
   For example:
   ```http://unique-emails-fetch-rewards.herokuapp.com/?array=test.email@gmail.com,test.email@fetchrewards.com```

2. You can send a request through an IDE, like the request.js file provided. 
   To use the request.js file, assign the emails variable to the emails as a string separated by commas.


If you want to run this on your local environment:
   Download/clone the Github repo on your local environment.
   Start the server by running node client.js in your terminal.
   Assign the emails variable to the emails as a string separated by commas in the request.js file.
   Send the request by running node request.js in another terminal

   You can also test this on your local browser by sending a request in the format specified in the request.js file
   Example: 
   ```http://localhost:3000/?array=test.email@gmail.com,test.email+spam@gmail.com```
