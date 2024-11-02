import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ResponseError } from '../interfaces/error.interface';
import { FastifyReply, FastifyRequest } from 'fastify';

@Catch()
export class CustomExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(CustomExceptionFilter.name);

  catch(error: ResponseError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<FastifyReply>();
    const request = ctx.getRequest<FastifyRequest>();

    const { statusCode, message, errorName } = (() => {
      if (error instanceof HttpException) {
        return this.httpException(error as HttpException);
      } else {
        return this.customException(error);
      }
    })();

    this.logger.error(
      `[${errorName}] Request: "${request.originalUrl}" Status: ${statusCode} Error: ${message}. \n StackTrace: ${error.stack}`,
      error.stack,
    );

    response.status(statusCode);

    response.send({
      statusCode: statusCode,
      message: message,
      error: errorName,
    });
  }

  private httpException(error: HttpException) {
    const statusCode = error.getStatus();
    const response = error.getResponse() as { message: string } | string;
    const message = typeof response === 'object' ? response.message : response;
    const errorName = error.name;

    return { statusCode, message, errorName };
  }

  private customException(error: ResponseError) {
    const statusCode = error?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message;
    const errorName = 'Internal Server Error';

    return { statusCode, message, errorName };
  }
}
