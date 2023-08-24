import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
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

  async remove(id: string): Promise<UserItem> {

    const deleted = await this.userItemModel
    .findByIdAndRemove({ _id: id })
    .exec();
  return deleted;
     }
}
