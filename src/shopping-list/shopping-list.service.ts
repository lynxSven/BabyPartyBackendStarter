
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingItem } from './schemas/shopping-list.schema';

import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShoppingListService {

  constructor(@InjectModel(ShoppingItem.name)
  private readonly shoppingItemModel: Model<ShoppingItem>) { }


  async create(createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingItemModel.create(createShoppingListDto);
  }

  async findAll(): Promise<ShoppingItem[]> {
    return this.shoppingItemModel.find({"assignedUser": null}).exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} shoppingList`;
  }

  async update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  async findAllForCurrentUser(): Promise<ShoppingItem[]> {
    return this.shoppingItemModel.find().exec();
  }

  async remove(id: string) {
    const deleted = await this.shoppingItemModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deleted;
  }
}
