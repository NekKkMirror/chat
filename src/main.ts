import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { CustomExceptionFilter } from '@common/filters/custom-exception.filter';
import { AppModule } from '@modules/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableCors();

  app.useGlobalFilters(new CustomExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
    }),
  );

  const configService = app.get(ConfigService);
  const host = configService.get<string>('environment.host');
  const port = configService.get<number>('environment.port');

  console.info(`Starting server on ${host}:${port}`);

  await app.listen({ port, host });
}

void bootstrap();
