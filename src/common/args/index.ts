import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
class Filter {
  @Field(() => String)
  field: string;

  @Field(() => String)
  operator: string;

  @Field(() => String)
  value: string;
}

@InputType()
class OrderBy {
  @Field(() => String)
  field: string;

  @Field(() => String)
  direction: string;
}

@InputType()
class Pagination {
  @Field(() => Int)
  @Min(0)
  skip = 0;

  @Field(() => Int)
  @Min(1)
  @Max(200)
  take = 10;
}

@ArgsType()
export class ParamArgs {
  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => [Filter], { nullable: true })
  filters?: Filter[];

  @Field(() => OrderBy, { nullable: true })
  orderBy?: OrderBy;

  @Field(() => Pagination, { nullable: true })
  pagination?: Pagination;
}
