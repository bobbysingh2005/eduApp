import polyfill from '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';
import Logger from 'morgan';


const App = express();
const mongoUrl = 'mongodb://localhost:27027/eduApp';
const port = process.env.PORT || 3001;

/* use Middleware  */
App.use(cors());
App.use(bodyParser.urlencoded({extended: false}));
App.use(bodyParser.json());
App.use(Logger('tiny'));

/* use Routes */
App.get('/test', (req, res)=>res.json({ message: "pass" }));
App.get('/', (req,res)=>res.status(200).send(`Welcome to Edu App Api`));
App.use('/api', routes);

//const server = App.listen(port, ()=>console.log(`EduAppApi server started on http://localhost:${port} \n press ctrl + c to exit`));

//module.exports = App;
App.listen(port, ()=>console.log(`EduAppApi server started on http://localhost:${port} \n press ctrl + c to exit`));