import { Test, TestingModule } from "@nestjs/testing";
import { EventMealController } from "./event-meal.controller";

describe("EventMealController", () => {
  let controller: EventMealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventMealController],
    }).compile();

    controller = module.get<EventMealController>(EventMealController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
