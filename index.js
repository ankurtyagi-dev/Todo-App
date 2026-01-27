import express from "express";
const app = express();
app.use(express.json());

import 'dotenv/config';
const PORT = process.env.PORT || 4000;

import router from "./routes/todos.js";
app.use("/api/v1", router);


app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})

import dbConnect from "./config/database.js";
dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1> This is Home Page </h1>`);
})