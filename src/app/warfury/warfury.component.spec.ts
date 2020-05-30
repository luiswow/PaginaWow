import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarfuryComponent } from './warfury.component';

describe('WarfuryComponent', () => {
  let component: WarfuryComponent;
  let fixture: ComponentFixture<WarfuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarfuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarfuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
