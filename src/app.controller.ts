import { Body, Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({cmd: 'GET_PRODUCT_SUCCESS'})
  logSuccess(data: any) {
    this.appService.logSuccess(data);
  }

  @MessagePattern('GET_PRODUCT_ERROR')
  logError(data: any) {
    this.appService.logError(data);
  }
}
