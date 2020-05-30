import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectwarComponent } from './protectwar.component';

describe('ProtectwarComponent', () => {
  let component: ProtectwarComponent;
  let fixture: ComponentFixture<ProtectwarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectwarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
