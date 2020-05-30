import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockdpsComponent } from './lockdps.component';

describe('LockdpsComponent', () => {
  let component: LockdpsComponent;
  let fixture: ComponentFixture<LockdpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockdpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockdpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
