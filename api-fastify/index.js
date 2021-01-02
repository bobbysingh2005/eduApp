const fastify = require('fastify');

fastify.register(require('fastify-cors'));
fastify.register(require('fastify-routes'));

fastify.listen(3001, (error, address)=>{
if(error){
fastify.log.error(error);
process.exit(1);
};//endif;
fastify.log.info(address);
});//endListen;