# Commands used in the project in sequential manner

## Backened setup guide step-by-step
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

## Front-end setup guide step-by-step
Change the directory to front-end
1. Initialize the front-end: ```npm create vite@latest .```
2. press y to proceed then select React as framework and JavaScript variant
3. install node package with ```npm install```
4. For routes ```npm i react-router```
5. For react notification library: ```npm i react-hot-toast```
6. Install and configure Tailwind CSS with Vite: "https://v3.tailwindcss.com/docs/guides/vite"
7. For Tailwindcss components: daisyUI("https://v4.daisyui.com/docs/install/") ```npm i daisyui@4.12.24 -D```
8. Install react icons library ```npm i lucide-react```
9. Install Axios(Promise based HTTP client) for browser and node.js ```npm i axios```