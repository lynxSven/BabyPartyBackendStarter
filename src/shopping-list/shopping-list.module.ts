import { Module } from '@nestjs/common';
import { ShoppingListService } from './shopping-list.service';
import { ShoppingListController } from './shopping-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShoppingItem, ShoppingItemSchema } from './schemas/shopping-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShoppingItem.name, schema: ShoppingItemSchema },
    ]),
  ],
  controllers: [ShoppingListController],
  providers: [ShoppingListService]
})
export class ShoppingListModule {}
