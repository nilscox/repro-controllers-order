import { Module } from '@nestjs/common';

import { StoreController } from './store.controller';

@Module({
  imports: [],
  controllers: [StoreController],
})
export class StoreModule {}
