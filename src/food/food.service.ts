import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { FoodItem } from './schemas/shopping-list.schema';

@Injectable()
export class FoodService {


  constructor(@InjectModel(FoodItem.name)
  private readonly foodItemModel: Model<FoodItem>) { }
  
  create(createFoodDto: CreateFoodDto) {
    return 'implement me'
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

  remove(id: number) {
    return `This action removes a #${id} food`;
  }
}
