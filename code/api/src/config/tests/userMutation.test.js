import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe('test user mutations', () => {
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
  });

  it('can alter a name for a specific user', () => {
    const mutation =
     request(server)
    .post('/graphql')
    .send({mutation: '{userSignup { createUsers name: Donald Duck, email: duck@quack.com, password: 123456 } }'})
    .expect(200)
    console.log(mutation)
    // expect(response.body).toMatchObject({

    //   data:{
    //     user: {
    //       email: 'admin@crate.com',
    //       name: 'The Admin',
    //       role: 'ADMIN'
    //       // description
    //       // image
    //     }
    //   }
    // })
  })
});