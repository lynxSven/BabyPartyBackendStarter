import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodItem } from './schemas/food.schema';

@Injectable()
export class FoodService {


  constructor(@InjectModel(FoodItem.name)
  private readonly foodItemModel: Model<FoodItem>) { }
  
  create(createFoodDto: CreateFoodDto) {
    return this.foodItemModel.create(createFoodDto);
  }

  findAll() {
    return this.foodItemModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} food`;
  }

  update(id: number, updateFoodDto: UpdateFoodDto) {
    return `This action updates a #${id} food`;
  }

  async remove(id: string) {
    const deleted = await this.foodItemModel
    .findByIdAndRemove({ _id: id })
    .exec();
  return deleted;
  }
}
