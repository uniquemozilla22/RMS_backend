import express from "express"
import mongoose from "mongoose"
import * as env from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import connection from "./src/database/connection"
import routes from "./src/routes"



// Declatrations of the function
const app = express();


// Using the application extenders 
app.use(cors());
env.config()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connection to the database
connection()


// Routes Handler
routes(app)

const port = process.env.NODE_ENV !== "production" ?  8000:process.env.PORT ;

app.listen(port, () => console.log("connection running at :" + port));