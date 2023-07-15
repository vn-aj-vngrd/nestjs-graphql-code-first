import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

class Filter {
  @Field()
  field: string;

  @Field()
  operator: string;

  @Field()
  value: string;
}

class OrderBy {
  @Field()
  field: string;

  @Field()
  direction: string;
}

class Pagination {
  @Field((type) => Int)
  @Min(0)
  skip = 0;

  @Field((type) => Int)
  @Min(1)
  @Max(200)
  take = 10;
}

@ArgsType()
export class ParamArgs {
  @Field((type) => String, { nullable: true })
  search?: string;

  @Field((type) => [Filter], { nullable: true })
  filters?: Filter[];

  @Field((type) => [OrderBy], { nullable: true })
  orderBy?: OrderBy[];

  @Field((type) => Pagination, { nullable: true })
  pagination?: Pagination;
}
