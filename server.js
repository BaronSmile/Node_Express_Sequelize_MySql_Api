const express = require('express');
const cors = require('cors');
const router = require('./routes/productRouter');

const app = express();

const corOptions = {
  origin: 'https://localhost:8081'
};

// middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routers
app.use('/api/products', router)

//testing api
app.get('/',(req,res)=>{
  res.json({message:'hello from api'})
});

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT,()=>{
  console.log(`server is running port: ${PORT}`)
})
