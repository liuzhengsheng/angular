import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedproductComponent } from './suggestedproduct.component';

describe('SuggestedproductComponent', () => {
  let component: SuggestedproductComponent;
  let fixture: ComponentFixture<SuggestedproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestedproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
