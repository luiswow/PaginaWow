import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamihealComponent } from './chamiheal.component';

describe('ChamihealComponent', () => {
  let component: ChamihealComponent;
  let fixture: ComponentFixture<ChamihealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamihealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamihealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
