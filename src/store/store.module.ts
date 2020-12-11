import { Module } from '@nestjs/common';
import { ItemInventoryModule } from './item-inventory/item-inventory.module';

import { StoreController } from './store.controller';

@Module({
  imports: [ItemInventoryModule],
  controllers: [StoreController],
})
export class StoreModule {}
