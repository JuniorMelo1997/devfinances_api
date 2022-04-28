import express from "express";
import { db } from "./database/db";
const app = express();

app.listen(3000, async ()=>{
    await db.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
    }).catch((error)=>{
        console.log("Cannot connect to database. Error: " + error);
    });
    

    console.log("Server is running");
})