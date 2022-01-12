import express, {Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
const mongoose = require('mongoose');


const app: Application = express();
app.use(express.json());
app.use(cors());
const PORT: string = '3001';


//Connect to DB
//const uri: string = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGODB_HOSTNAME}:27017/${process.env.MONGO_DATABASE}`
const uri: string = 'mongodb://mongo:27017/webapp'
const options = { useNewUrlParser: true, useUnifiedTopology: true }


 mongoose
  .connect(uri, options)
  .then(() => console.log("Database connected..."))


app.get('/', (req: Request, res: Response) => {
    res.send({message: 'Hello World'});
})

app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));