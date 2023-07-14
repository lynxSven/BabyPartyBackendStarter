import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = UserItem & Document;

@Schema()
export class UserItem {
  @Prop({ required: true })
  loginName: string;

}

export const UserSchema = SchemaFactory.createForClass(UserItem);
