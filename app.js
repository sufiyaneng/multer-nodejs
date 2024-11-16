import express from "express";
import todorouter from "./router.js"
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const port = 3000;
app.use("/api/v1",todorouter)
app.listen(port,()=>{
    console.log("server is running")
})