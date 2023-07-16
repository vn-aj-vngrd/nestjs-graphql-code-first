import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class LoginInput {
  @Field()
  @IsNotEmpty()
  username: string;

  @Field({ nullable: true })
  @IsNotEmpty()
  password?: string;
}
