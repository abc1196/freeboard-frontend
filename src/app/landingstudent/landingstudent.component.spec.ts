import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingstudentComponent } from './landingstudent.component';

describe('LandingstudentComponent', () => {
  let component: LandingstudentComponent;
  let fixture: ComponentFixture<LandingstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
