import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchauctionsComponent } from './searchauctions.component';

describe('SearchauctionsComponent', () => {
  let component: SearchauctionsComponent;
  let fixture: ComponentFixture<SearchauctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchauctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
