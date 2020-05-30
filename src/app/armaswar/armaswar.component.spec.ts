import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaswarComponent } from './armaswar.component';

describe('ArmaswarComponent', () => {
  let component: ArmaswarComponent;
  let fixture: ComponentFixture<ArmaswarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmaswarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmaswarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
