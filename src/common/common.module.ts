import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//* Import module from winston module
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { PrismaService } from './prisma.service';
import { ValidationService } from './validation.service';

//* Decorators Global : mengimport module pada seluruh file secara global
@Global()
@Module({
  //* Winston module code configuration
  imports: [
    WinstonModule.forRoot({
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    }),
    //* Config module configuration
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  //* Common module configuration
  providers: [PrismaService, ValidationService],
  exports: [PrismaService, ValidationService],
})
export class CommonModule {}
