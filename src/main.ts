import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${process.env.RMQ_ENDPOINT}:${process.env.RMQ_PORT}`],
        queue: "logger_queue"
      },
    },
  );
  await app.listen(() => console.log('Logger service is listening'));
}
bootstrap();
