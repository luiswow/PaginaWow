import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalrepComponent } from './palrep.component';

describe('PalrepComponent', () => {
  let component: PalrepComponent;
  let fixture: ComponentFixture<PalrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
