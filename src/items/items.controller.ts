// /* eslint-disable prettier/prettier */
// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
// } from '@nestjs/common';
// import { ItemsService } from './items.service';
// // import { Item } from './interfaces/item.interface';
// import { CreateItemDto } from './dto/create-item.dto';

// @Controller('items')
// export class ItemsController {
//   constructor(private readonly itemsService: ItemsService) {}

//   @Get()
//   findAll() {
//     return this.itemsService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id) {
//     return this.itemsService.findOne(id);
//   }

//   @Post()
//   create(@Body() body: any) {
//     return this.itemsService.create(body);
//   }

//   @Delete(':id')
//   delete(@Param('id') id): string {
//     return `Delete ${id}`;
//   }

//   @Put(':id')
//   update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
//     return `Update ${id} - Name: ${updateItemDto.name}`;
//   }
// }
