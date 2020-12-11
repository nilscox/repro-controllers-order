import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('store')
export class StoreController {
  @Get(':id')
  getStore(@Param('id', new ParseIntPipe()) id: number) {
    return 'Store #' + id;
  }
}
