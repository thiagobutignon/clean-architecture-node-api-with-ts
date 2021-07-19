import request from 'supertest'
import { MongoHelper } from './../../infra/db/mongodb/helpers/mongo-helpers'
import app from '../config/app'
import { Collection } from 'mongodb'

let accountCollection: Collection

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })
  test.skip('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Thiago',
        email: 'thiagobutignon@gmail.com',
        password: '123456',
        passwordConfirmation: '123456'
      })
      .expect(200)
  })
})
