
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingItem } from './schemas/shopping-list.schema';

import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UpdateShoppingListUserDto } from './dto/update-shopping-list.-user-dto';

@Injectable()
export class ShoppingListService {

  constructor(@InjectModel(ShoppingItem.name)
  private readonly shoppingItemModel: Model<ShoppingItem>) { }


  async create(createShoppingListDto: CreateShoppingListDto) {
    return this.shoppingItemModel.create(createShoppingListDto);
  }

  async findAll(): Promise<ShoppingItem[]> {
    return this.shoppingItemModel.find({ "assignedUser": null }).exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} shoppingList`;
  }

  async update(id: number, updateShoppingListDto: UpdateShoppingListDto): Promise<ShoppingItem> {
    return this.shoppingItemModel
    .findOneAndUpdate({ _id: id }, updateShoppingListDto, {
      returnDocument: 'after',
    })
    .exec();
  }

  async updateUser(id: string, updateShoppingListDto: UpdateShoppingListUserDto): Promise<ShoppingItem> {
    return this.shoppingItemModel
    .findOneAndUpdate({ _id: id }, updateShoppingListDto, {
      returnDocument: 'after',
    })
    .exec();
  }

  async findAllForCurrentUser(currentUser: string): Promise<ShoppingItem[]> {
    return this.shoppingItemModel.find({ "assignedUser": currentUser }).exec();
  }

  async remove(id: string) {
    const deleted = await this.shoppingItemModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deleted;
  }
}
