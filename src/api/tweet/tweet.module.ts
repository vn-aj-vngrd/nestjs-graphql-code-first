import { Module } from '@nestjs/common';
import { TweetsModule } from 'src/modules/tweets/tweets.module';
import { TweetResolver } from './tweet.resolver';

@Module({
  imports: [TweetsModule],
  providers: [TweetResolver],
})
export class ApiModule {}
