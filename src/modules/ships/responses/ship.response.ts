import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated/user/user.model';

@ObjectType()
export class ShipResponse {
  @Field()
  message: string;

  @Field(() => User)
  user?: User;
}
