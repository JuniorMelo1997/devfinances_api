import express from "express";
import {Request, Response} from "express";

const routes = express.Router();

/*Home*/
routes.get("/", (req: Request, res: Response)=>{res.send("Home")});

/*Users routes*/
routes.post("/login", /*function*/);
routes.get("/user/:id", /*function*/);
routes.get("/users", /*function*/);
routes.put("/user/:id", /*function*/);
routes.delete("/user/:id", /*function*/);

/*Transactions routes*/
routes.post("/transactions", /*function*/);
routes.get("/transactions", /*function*/);
routes.put("transactions", /*function*/);
routes.delete("/transactions", /*function*/);

export {routes}