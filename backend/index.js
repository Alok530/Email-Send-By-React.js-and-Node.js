const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers/router1');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("hello");
})

app.use('/api',router);

app.listen(5000,()=>{
    console.log('app is listening on port',5000);
});