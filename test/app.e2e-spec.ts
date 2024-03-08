import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { SitePilotModule } from 'src/site-pilot.module'
import * as request from 'supertest'

describe('Site Pilot (e2e)', () => {
  let app: INestApplication

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [SitePilotModule],
    }).compile()

    app = moduleFixture.createNestApplication()
    await app.init()
  })

  it('Check Health', () => {
    return request(app.getHttpServer()).get('/heath').expect(200).expect('OK!')
  })
})
