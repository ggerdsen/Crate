import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe('Crate Queries', () => {
  let server;
  beforeAll(() => {
    server = express();
    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })
  it('returns all crates', async(done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{crates(orderBy:"desc") { id } }`})
      .expect(200)
        console.log(response.body.data.crates);
        expect(response.body.data.crates.length).toBe(6)
    done();
  })

  it('returns a crate by id', async(done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{crateById(crateId:4) { name } }`})
      .expect(200)
      console.log(response.body.data);
      expect(response.body.data).toMatchObject(
        {
          crateById: {
            name: 'Accessories for Women'
          }
        }
      )
    done();
  })
});
