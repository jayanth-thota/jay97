import { TestBed } from '@angular/core/testing';

import { StockexchangeService } from './stockexchange.service';

describe('StockexchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockexchangeService = TestBed.get(StockexchangeService);
    expect(service).toBeTruthy();
  });
});
