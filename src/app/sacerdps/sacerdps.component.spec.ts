import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacerdpsComponent } from './sacerdps.component';

describe('SacerdpsComponent', () => {
  let component: SacerdpsComponent;
  let fixture: ComponentFixture<SacerdpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacerdpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacerdpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
