import fastify from 'fastify';
const port = process.env.PORT || 3001;

const api = fastify({ logger: true});
api.register(require('fastify-cors'));
api.register(require('fastify-routes'));
api.get('/', (request, reply)=>{
    return { hello: 'world'}
})

api.listen(port, (error, address)=>{
    if(error) {
        api.log.error(error);
        process.exit(1);
    };//endif;
api.log.info(` server start on ${address}`);
})
