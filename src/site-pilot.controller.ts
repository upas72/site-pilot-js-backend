import { Controller, Get } from '@nestjs/common'
import { SitePilotService } from './site-pilot.service'

@Controller()
export class SitePilotController {
  constructor(private readonly sitePilotService: SitePilotService) {}

  @Get('health')
  getHealth(): string {
    return this.sitePilotService.getHealth()
  }
}
