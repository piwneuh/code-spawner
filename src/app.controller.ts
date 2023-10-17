import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/compose')
  generateCompose(@Body() dto: any): string {
    return this.appService.generateCompose(dto);
  }
}
