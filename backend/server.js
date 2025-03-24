import express from 'express';
const app = express();

const port = 5100;
try{
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
