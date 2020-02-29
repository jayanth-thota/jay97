import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesectorsComponent } from './createsectors.component';

describe('CreatesectorsComponent', () => {
  let component: CreatesectorsComponent;
  let fixture: ComponentFixture<CreatesectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
