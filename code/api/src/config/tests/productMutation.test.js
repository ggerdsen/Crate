import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../setup/schema';

describe('test the truth', () => {
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
    
    it('returns all products', async (done) => {
      const response = await request(server)
      .post('/graphql')
      .send({query: `{products { name } }`})
      .expect(200)
        console.log(response.body)
      expect(response.body.data.products.length).toBe(8);
      done();
    })


  it('returns a product based on id', async (done) => {
    const response = await request(server)
    .post('/graphql')
    .send({query: '{productById(productId:1) { slug name description type gender image } }'})
    .expect(200)
    console.log(response.body.data);
    expect(response.body).toMatchObject({

      data:{
        productById: {
          slug: 'belt-for-women',
          name: 'Belt for Women',
          description: 'A very nice belt for women.',
          type: 2,
          gender: 2,
          image: '/images/stock/belt-female.jpg'
        }
      }
    })
    done();
  })
});