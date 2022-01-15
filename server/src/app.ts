import express, { Express } from 'express';
import http from "http";
import helmet from "helmet";
import cors from 'cors';
import {routes} from "./routes/route";
const mongoose = require('mongoose');
const router: Express = express();


router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(helmet());
router.use(cors());
router.use(routes);


//Connect to DB
const uri: string = 'mongodb://mongo:27017/webapp'
const options = { useNewUrlParser: true, useUnifiedTopology: true }

 mongoose
  .connect(uri, options)
  .then(() => console.log("Database connected..."))



const httpServer = http.createServer(router);
const PORT: string = '3001';
httpServer.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));