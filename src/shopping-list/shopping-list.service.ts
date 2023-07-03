
import { CreateShoppingListDto } from './dto/create-shopping-list.dto';
import { UpdateShoppingListDto } from './dto/update-shopping-list.dto';
import { ShoppingItem } from './schemas/shopping-list.schema';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ShoppingListService {
  create(createShoppingListDto: CreateShoppingListDto, 
    @InjectModel(TodoItem.name)
    private readonly shoppingItemModel: Model<ShoppingItem>) {
,
  }

  findAll() Promise<ShoppingItem[]>{
    return this.todoItemModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingList`;
  }

  update(id: number, updateShoppingListDto: UpdateShoppingListDto) {
    return `This action updates a #${id} shoppingList`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingList`;
  }
}
