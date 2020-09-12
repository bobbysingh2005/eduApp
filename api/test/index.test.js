import App from '../src/server';
import superTest from 'supertest';
import { json } from 'body-parser';
import { assertScalarType } from 'graphql';


const Request = superTest(App);

describe('Api request', ()=>{
    it('get', async (done)=>{
        const req = await Request.get('/')
.expect(200)
.expect(res => {
    assertScalarType.equal(res.body.length, 1, 'message pass 1')
});
done()
    });//end;
});//end;