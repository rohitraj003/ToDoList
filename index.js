import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoute from "./routes/todoRoute.js"

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

// Connect to DB
const mongo_uri = process.env.MONGO_URI;
mongoose.connect(mongo_uri)
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

// middleware
app.use(express.json());

app.use("/tasks",todoRoute);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

