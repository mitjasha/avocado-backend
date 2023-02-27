import { Test, TestingModule } from '@nestjs/testing';
import { RecipesRuService } from './recipes-ru.service';

describe('RecipesRuService', () => {
  let service: RecipesRuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipesRuService],
    }).compile();

    service = module.get<RecipesRuService>(RecipesRuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
