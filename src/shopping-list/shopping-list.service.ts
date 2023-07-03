
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingItem } from './schemas/shopping-list.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShoppingListService {

  constructor(@InjectModel(ShoppingItem.name)
  private readonly shoppingItemModel: Model<ShoppingItem>) { }


  async create(createShoppingListDto: CreateShoppingListDto) {
    return 'This action adds a new shoppingList';
  }

  async findAll(): Promise<ShoppingItem[]> {
    return this.shoppingItemModel.find().exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} shoppingList`;
  }

  async update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  async remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }
}
