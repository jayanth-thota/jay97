import { TestBed } from '@angular/core/testing';

import { StockpriceService } from './stockprice.service';

describe('StockpriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockpriceService = TestBed.get(StockpriceService);
    expect(service).toBeTruthy();
  });
});
