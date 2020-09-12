import polyFill from '@babel/polyfill';
import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';

const App = express();

App.use(cors());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/', (req, res)=>res.send(`Welcome to EduApp`));
App.use('/test', (req, res)=>res.send({ok: true, message:'pass'}))

// App.listen(port, ()=>console.log(`edu api server started on http://localhost:${port} \n press ctrl + c to exit`));
export default App;