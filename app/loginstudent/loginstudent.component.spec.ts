import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginstudentComponent } from './loginstudent.component';

describe('LoginstudentComponent', () => {
  let component: LoginstudentComponent;
  let fixture: ComponentFixture<LoginstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
