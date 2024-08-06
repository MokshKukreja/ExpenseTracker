const express = require('express')
const app = express()
const port = 8000
const mongoose = require("mongoose")
// const bodyParser = require('body-parser');
const cors = require("cors")
const transactionRouter = require('./routes/transactionRoutes')
const userRouter = require('./routes/userRoutes')
require('dotenv').config();

app.use(express.json())


app.use(cors())

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log("HTTPS Method" + req.method + " , URL" +req.url)
    next();
})
app.use("/transactions",transactionRouter)
app.use("/users",userRouter)


// mongoose.connect("mongodb://localhost:27017/expp1", () => {
//     console.log("Connected successfully");
// })


// mongoose.connect("mongodb+srv://mokshkukreja545:moksh1234@cluster0.jmxdezc.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0", () => {
//     console.log("Connected successfully");
// })
// mongoose.set('strictQuery', true);

const uri = "mongodb+srv://mokshkukreja545:moksh1234@cluster0.jmxdezc.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

// Set mongoose options
mongoose.set('strictQuery', true);

// Connect to the MongoDB cluster
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected successfully");
    })
    .catch((error) => {
        console.error("Connection error", error);
    });



app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})