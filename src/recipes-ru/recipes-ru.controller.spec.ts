import { Test, TestingModule } from '@nestjs/testing';
import { RecipesRuController } from './recipes-ru.controller';

describe('RecipesRuController', () => {
  let controller: RecipesRuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipesRuController],
    }).compile();

    controller = module.get<RecipesRuController>(RecipesRuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
