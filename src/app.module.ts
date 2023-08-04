import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { LoggerMiddleware } from './infra/http/middlewares/LoggerMiddleware';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('auth');
  }
}
