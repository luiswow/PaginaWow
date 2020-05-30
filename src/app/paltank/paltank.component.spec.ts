import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaltankComponent } from './paltank.component';

describe('PaltankComponent', () => {
  let component: PaltankComponent;
  let fixture: ComponentFixture<PaltankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaltankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaltankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
