import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingItem } from './schemas/shopping-list.schema';
import { UpdateShoppingListUserDto } from './dto/update-shopping-list.-user-dto';

@Controller('shopping-list')
export class ShoppingListController {
  constructor(private readonly shoppingListService: ShoppingListService) { }

  @Post()
  create(@Body() createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingListService.create(createShoppingListDto);
  }

  @Get()
  findAll(): Promise<ShoppingItem[]> {
    return this.shoppingListService.findAll();
  }
  
  @Get('currentUser/:loginName')
  findCurrentUser(@Param('loginName') loginName: string): Promise<ShoppingItem[]> {
    return this.shoppingListService.findAllForCurrentUser(loginName);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingListDto: UpdateShoppingListDto) {
    return this.shoppingListService.update(+id, updateShoppingListDto);
  }

  @Patch('currentUser/:id')
  updateUser(@Param('id') id: string, @Body() updateShoppingListUserDto: UpdateShoppingListUserDto) {
    return this.shoppingListService.updateUser(+id, updateShoppingListUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingListService.remove(id);
  }
}
