import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagoComponent } from './mago.component';

describe('MagoComponent', () => {
  let component: MagoComponent;
  let fixture: ComponentFixture<MagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
