// Core Module
const path = require('path');

// External Module
const express = require('express');
const cors = require('cors');

//Local Module

const { default: mongoose } = require('mongoose');
const { hostrouter } = require('./router/hostRoutes');


const app = express();
app.use(cors({origin : "http://localhost:5173"}))

app.use("/" ,hostrouter)


const PORT = 3000;
const DB_PATH = "mongodb+srv://root:root@cluster0.vuzxpyo.mongodb.net/?appName=Cluster0";

mongoose.connect(DB_PATH)
.then(() => {
  console.log('Connected to Mongo');
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
}).catch(err => {
  console.log('Error while connecting to Mongo: ', err);
});