import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserItem, UserSchema } from './schemas/user.schema';

@Injectable()
export class UserService {

  constructor(@InjectModel(UserItem.name)
  private readonly userItemModel: Model<UserItem>) { }
  create(createUserDto: CreateUserDto) {
    return this.userItemModel.create(createUserDto);
  }

  findAll() {
    return this.userItemModel.find().sort({loginName: 1}).exec();

  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
