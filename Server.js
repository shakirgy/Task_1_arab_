const express=require('express');
const app = express();
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./DataBase/dbconnect');
const Router=require('./Routes/routes');

connectDB()
dotenv.config()

app.use(express.json());
app.use(cors());
app.use("/",Router)

const port=process.env.port || 2000
app.listen(port,()=>console.log(`server is running ${port}`));
