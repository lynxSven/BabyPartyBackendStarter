import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FoodItemDocument = FoodItem & Document;

@Schema()
export class FoodItem {
  @Prop({ required: true })
  headline: string;

  @Prop({ required: false })
  text: string;

  @Prop({ required: true })
  user: string;

}

export const FoodItemSchema = SchemaFactory.createForClass(FoodItem);
