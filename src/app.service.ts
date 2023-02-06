import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { createConnection } from 'mongoose';

@Injectable()
export class AppService {
  /**
   *
   */
  constructor(  ) {
    // super();
    
  }
  getHello(): string {
    return 'Hello World!';
  }
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  codeOfTheDay(){
    
  }
}


