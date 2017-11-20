import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyofferdetailComponent } from './companyofferdetail.component';

describe('CompanyofferdetailComponent', () => {
  let component: CompanyofferdetailComponent;
  let fixture: ComponentFixture<CompanyofferdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyofferdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyofferdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
