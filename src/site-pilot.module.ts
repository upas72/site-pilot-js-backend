import { Module } from '@nestjs/common';
import { SitePilotController } from './site-pilot.controller';
import { SitePilotService } from './site-pilot.service';

@Module({
  imports: [],
  controllers: [SitePilotController],
  providers: [SitePilotService],
})
export class SitePilotModule {}
