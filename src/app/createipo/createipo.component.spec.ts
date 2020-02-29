import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateipoComponent } from './createipo.component';

describe('CreateipoComponent', () => {
  let component: CreateipoComponent;
  let fixture: ComponentFixture<CreateipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
