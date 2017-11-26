import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentexperienceComponent } from './studentexperience.component';

describe('StudentexperienceComponent', () => {
  let component: StudentexperienceComponent;
  let fixture: ComponentFixture<StudentexperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentexperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentexperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
