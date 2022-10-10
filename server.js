const express = require("express")
const mongoose = require("mongoose")
const app = express();

const uri = "mongodb+srv://GokulCasper:Gokul_2506@gokulcaper.lr72vn2.mongodb.net/booking?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri)
        console.log("Connected to MongoDB ");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(8000, () => {
    console.log("Server Connected to Port 8000");
})