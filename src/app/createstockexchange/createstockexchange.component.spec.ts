import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestockexchangeComponent } from './createstockexchange.component';

describe('CreatestockexchangeComponent', () => {
  let component: CreatestockexchangeComponent;
  let fixture: ComponentFixture<CreatestockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
