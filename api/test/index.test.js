import polyfill from '@babel/polyfill';
import app from '../src/index.js';
import superTest from 'supertest';

const Request = superTest(app);

describe('testing for entry point', ()=>{
it('stage 1', async done => {
const res = await Request.get('/test');
//console.log(JSON.stringify(res));
expect(res.status).toBe(200);
//expect(res.test).toBe({message:'pass'});
expect(res.body.message).toBe('pass');

done();
});//end;                                                                                                                                                                                                                                                                     
it('stage 2', async done => {
const res = await Request.get('/');
expect(res.status).toBe(200);
done();
});//end;



});//end Describe;
