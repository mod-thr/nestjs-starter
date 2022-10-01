import { Module } from '@nestjs/common';
import { IndexController } from './controllers/index/index.controller';

@Module({
  controllers: [IndexController],
})
export class RootModule {}
