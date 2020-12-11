import { Controller, Get } from '@nestjs/common';

@Controller('store/item-inventory')
export class ItemInventoryController {
  @Get()
  getItemInventory() {
    return {
      banana: 42,
      // ...
    };
  }
}
