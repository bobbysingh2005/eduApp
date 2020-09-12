
import App from './server.js';
const port = process.env.PORT || 3000;

App.listen(port, ()=>console.log(`edu api server started on http://localhost:${port} \n press ctrl + c to exit`));