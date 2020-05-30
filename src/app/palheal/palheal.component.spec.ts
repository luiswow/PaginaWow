import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalhealComponent } from './palheal.component';

describe('PalhealComponent', () => {
  let component: PalhealComponent;
  let fixture: ComponentFixture<PalhealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalhealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalhealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
