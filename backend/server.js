import express from 'express';
const app = express();
import mongoose from 'mongoose';

const port = 5100;
try{
  //await mongoose.connect('mongodb://localhost:27017')
  app.listen(port, ()=>{
    console.log(`server running on PORT ${port}...`);
  });
}catch(error){
  console.log(error);
  process.exit(1);
}


app.get('/', (req,res) =>{
    res.send('Hello World');
});
