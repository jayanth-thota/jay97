import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestockpriceComponent } from './createstockprice.component';

describe('CreatestockpriceComponent', () => {
  let component: CreatestockpriceComponent;
  let fixture: ComponentFixture<CreatestockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
