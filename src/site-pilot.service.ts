import { Injectable } from '@nestjs/common';

@Injectable()
export class SitePilotService {
  getHealth(): string {
    return 'OK!';
  }
}
