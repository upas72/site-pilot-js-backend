import { Module } from '@nestjs/common'
import { SitePilotController } from 'src/site-pilot.controller'
import { SitePilotService } from 'src/site-pilot.service'

@Module({
  imports: [],
  controllers: [SitePilotController],
  providers: [SitePilotService],
})
export class SitePilotModule {}
