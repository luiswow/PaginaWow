import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacerComponent } from './sacer.component';

describe('SacerComponent', () => {
  let component: SacerComponent;
  let fixture: ComponentFixture<SacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
