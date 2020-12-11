import { Module } from '@nestjs/common';

import { ItemInventoryController } from './item-inventory.controller';

@Module({
  controllers: [ItemInventoryController],
})
export class ItemInventoryModule {}
