import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanymenuComponent } from './companymenu.component';

describe('CompanymenuComponent', () => {
  let component: CompanymenuComponent;
  let fixture: ComponentFixture<CompanymenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanymenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanymenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
