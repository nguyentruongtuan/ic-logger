import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  logSuccess(data: any) {
    console.log('GET SUCCESS', data);
  }
  logError(data: any) {
    console.log('GET ERROR', data);
  }
}
