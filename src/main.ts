import { NestFactory } from '@nestjs/core'
import { SitePilotModule } from 'src/site-pilot.module'

async function bootstrap() {
  const app = await NestFactory.create(SitePilotModule)
  await app.listen(3000)
}

bootstrap()
