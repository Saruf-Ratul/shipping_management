
const app=require("./app");



const dotenv = require("dotenv");
const connectDatabase=require("./db/Database.js");

//handling uncought Exception
// process.on("uncaughtException", (err)=>{
//     console.log(`Error: ${err.message}`);
//     console.log(`shutting down the server for Handling uncaught exception`);
// })

// config
// if(process.env.NODE_ENV!=="PRODUCTION"){
//   require("dotenv").config({
//       path:"backend/config/.env"
//   })}
//connect database
connectDatabase();


const PORT = 5000 ;

//create server 
const server=app.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`)
})


//Unhandled Promise rejection
// process.on("unhandledRejection",(err)=>{
//   console.log(`Shutting down server for ${err.message}`);
//   console.log(`Shutting down server due to Unhandled Promise rejection`);
//   server.close(()=>{
//     process.exit(1);
//   });
// })