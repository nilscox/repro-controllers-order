import { ExpressAdapter } from '@nestjs/platform-express';
import { Test, TestingModule } from '@nestjs/testing';
import * as express from 'express';
import * as request from 'supertest';

import { AppModule } from './app.module';

describe('reproduction', () => {
  const server = express();
  let module: TestingModule;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const app = module.createNestApplication(new ExpressAdapter(server));

    await app.init();
  });

  afterAll(async () => {
    await module.close();
  });

  describe('store', () => {
    it('should return the store 42', async () => {
      await request(server).get('/store/42').expect(200);
    });
  });

  describe('store inventory', () => {
    it('should return the inventory', async () => {
      await request(server).get('/store/item-inventory').expect(200);
    });
  });
});
