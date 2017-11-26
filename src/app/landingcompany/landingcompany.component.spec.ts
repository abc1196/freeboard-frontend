import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingcompanyComponent } from './landingcompany.component';

describe('LandingcompanyComponent', () => {
  let component: LandingcompanyComponent;
  let fixture: ComponentFixture<LandingcompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingcompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
