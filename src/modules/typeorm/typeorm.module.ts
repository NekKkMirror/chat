import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => ({
        type: 'postgres',
        host: configService.get<string>('environment.dbHost'),
        port: configService.get<number>('environment.dbPort'),
        username: configService.get<string>('environment.username'),
        password: configService.get<string>('environment.password'),
        database: configService.get<string>('environment.database'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeOrmConfigModule {}
