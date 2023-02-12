import { Test, TestingModule } from '@nestjs/testing';
import { EventActivityController } from './event-activity.controller';

describe('EventActivityController', () => {
  let controller: EventActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventActivityController],
    }).compile();

    controller = module.get<EventActivityController>(EventActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
