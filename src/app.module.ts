import { Module } from '@nestjs/common';

import { ItemInventoryModule } from './store/item-inventory/item-inventory.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [ItemInventoryModule, StoreModule],
})
export class AppModule {}
