import * as Joi from 'joi';
import { registerAs } from '@nestjs/config';
import { IEnvironment } from './environment.config.types';

export const environmentConfig = registerAs(
  'environment',
  (): IEnvironment => ({
    nodeEnv: process.env.NODE_ENV!,
    port: Number(process.env.APP_PORT!),
    host: process.env.APP_HOST!,
    dbHost: process.env.POSTGRES_HOST!,
    dbPort: Number(process.env.POSTGRES_PORT!),
    username: process.env.POSTGRES_USER!,
    password: process.env.POSTGRES_PASSWORD!,
    database: process.env.POSTGRES_DB!,
  }),
);

export const environmentConfigSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  APP_PORT: Joi.number().required(),
  APP_HOST: Joi.string().required(),
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
});
