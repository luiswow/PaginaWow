import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagodpsComponent } from './magodps.component';

describe('MagodpsComponent', () => {
  let component: MagodpsComponent;
  let fixture: ComponentFixture<MagodpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagodpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagodpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
