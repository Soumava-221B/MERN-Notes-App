# Commands used in the project in sequential manner
1. cd backend -> npm init -y
2. npm install express@4.18.2
3. node server.js
4. in package.json 
"scripts": {
    "dev": "node server.js"
  },

5. to clear terminal command + k
6. npm install nodemon -D (-D install as dev dependency)
7. What is an Endpoint?
An endpoint is a combination of a URL + HTTP method that lets the client interact with a specific resource.

8. npm i dotenv
9. npm i mongoose@latest

10. middlewares are used to for auth check
11. Using upstash for rate limiting (to prevent the server crash due too many request in small amount of time)
12. npm i @upstash/ratelimit@2.0.5 @upstash/redis@1.34.9
13. Status: 429 means too many requests