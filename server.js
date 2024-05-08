const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')


dotenv.config();

app.use(cors())
const app=express();
app.listen(PORT,()=>{
    mongoose.connect(process.env.URL)
    .then(()=>{console.log('connected to db and running on the db sucessfully')})
    .catch((err)=>{
        console.log(err.message)
    })
})

