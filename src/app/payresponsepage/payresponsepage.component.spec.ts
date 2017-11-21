import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayresponsepageComponent } from './payresponsepage.component';

describe('PayresponsepageComponent', () => {
  let component: PayresponsepageComponent;
  let fixture: ComponentFixture<PayresponsepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayresponsepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayresponsepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
