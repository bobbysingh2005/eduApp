import mongoose from 'mongoose';

const mongoUrl = 'mongodb://0.0.0.0:27017/eduApp';

const db = mongoose.createConnection(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});//endConnection;

db.on('connected', ()=>{
	console.log('mongoDb database connection is ready!');
});//end;
db.on('error', (err)=>console.log(`database connection Error: ${err}`));

export default db;