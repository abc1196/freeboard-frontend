import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyauctiondetailComponent } from './companyauctiondetail.component';

describe('CompanyauctiondetailComponent', () => {
  let component: CompanyauctiondetailComponent;
  let fixture: ComponentFixture<CompanyauctiondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyauctiondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyauctiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
