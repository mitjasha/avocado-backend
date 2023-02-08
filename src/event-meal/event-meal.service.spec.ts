import { Test, TestingModule } from "@nestjs/testing";
import { EventMealService } from "./event-meal.service";

describe("EventMealService", () => {
  let service: EventMealService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventMealService],
    }).compile();

    service = module.get<EventMealService>(EventMealService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
