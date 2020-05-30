import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacerhealComponent } from './sacerheal.component';

describe('SacerhealComponent', () => {
  let component: SacerhealComponent;
  let fixture: ComponentFixture<SacerhealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacerhealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacerhealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
