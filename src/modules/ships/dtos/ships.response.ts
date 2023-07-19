import { Field, ObjectType } from '@nestjs/graphql';
import { Ship } from 'src/@generated/ship/ship.model';

@ObjectType()
export class ShipsResponse {
  @Field()
  message: string;

  @Field(() => Ship)
  ship?: Ship;
}
