import { Test, TestingModule } from '@nestjs/testing'
import { SitePilotController } from 'src/site-pilot.controller'
import { SitePilotService } from 'src/site-pilot.service'

describe('SitePilotController', () => {
  let sitePilotController: SitePilotController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SitePilotController],
      providers: [SitePilotService],
    }).compile()

    sitePilotController = app.get<SitePilotController>(SitePilotController)
  })

  describe('Get Health', () => {
    it('should return "OK!"', () => {
      expect(sitePilotController.getHealth()).toBe('OK!')
    })
  })
})
