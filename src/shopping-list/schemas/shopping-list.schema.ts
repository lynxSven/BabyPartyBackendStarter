import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShoppingItemDocument = ShoppingItem & Document;

@Schema()
export class ShoppingItem {
  @Prop({ required: true })
  headline: string;

  @Prop({ required: false })
  text: string;

  @Prop({ required: false })
  href: string;

  @Prop({ required: false })
  hrefImg: string;

  @Prop({ required: false })
  assignedUser: string;
}

export const ShoppingItemSchema = SchemaFactory.createForClass(ShoppingItem);
