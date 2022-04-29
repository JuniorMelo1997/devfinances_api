import express from "express";
import { db } from "./database/db";
import { routes } from "./Routes";
const app = express();


app.use(routes);

app.listen(3000, async ()=>{
    await db.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
    }).catch((error)=>{
        console.log("Cannot connect to database. Error: " + error);
    });
    

    console.log("Server is running");
})