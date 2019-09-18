import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevengersComponent } from './devengers.component';

describe('DevengersComponent', () => {
  let component: DevengersComponent;
  let fixture: ComponentFixture<DevengersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevengersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevengersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
