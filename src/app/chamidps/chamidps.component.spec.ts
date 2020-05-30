import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamidpsComponent } from './chamidps.component';

describe('ChamidpsComponent', () => {
  let component: ChamidpsComponent;
  let fixture: ComponentFixture<ChamidpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamidpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamidpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
