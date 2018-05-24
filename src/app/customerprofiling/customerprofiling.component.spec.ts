import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprofilingComponent } from './customerprofiling.component';

describe('CustomerprofilingComponent', () => {
  let component: CustomerprofilingComponent;
  let fixture: ComponentFixture<CustomerprofilingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerprofilingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerprofilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
