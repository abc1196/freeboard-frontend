import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentauctiondetailComponent } from './studentauctiondetail.component';

describe('StudentauctiondetailComponent', () => {
  let component: StudentauctiondetailComponent;
  let fixture: ComponentFixture<StudentauctiondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentauctiondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentauctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
