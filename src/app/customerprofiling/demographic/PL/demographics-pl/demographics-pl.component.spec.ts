import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicsPLComponent } from './demographics-pl.component';

describe('DemographicsPLComponent', () => {
  let component: DemographicsPLComponent;
  let fixture: ComponentFixture<DemographicsPLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicsPLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicsPLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
