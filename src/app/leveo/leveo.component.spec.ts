import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveoComponent } from './leveo.component';

describe('LeveoComponent', () => {
  let component: LeveoComponent;
  let fixture: ComponentFixture<LeveoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeveoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
