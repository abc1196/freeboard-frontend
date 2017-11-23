import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentofferdetailComponent } from './studentofferdetail.component';

describe('StudentofferdetailComponent', () => {
  let component: StudentofferdetailComponent;
  let fixture: ComponentFixture<StudentofferdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentofferdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentofferdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
