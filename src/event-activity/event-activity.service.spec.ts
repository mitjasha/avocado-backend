import { Test, TestingModule } from '@nestjs/testing';
import { EventActivityService } from './event-activity.service';

describe('EventActivityService', () => {
  let service: EventActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventActivityService],
    }).compile();

    service = module.get<EventActivityService>(EventActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
