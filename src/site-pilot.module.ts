import { SitePilotController } from 'src/site-pilot.controller'
import { SitePilotService } from 'src/site-pilot.service'
import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [SitePilotController],
  providers: [SitePilotService],
})
export class SitePilotModule {}
