import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographicRUComponent } from './demographic-ru.component';

describe('DemographicRUComponent', () => {
  let component: DemographicRUComponent;
  let fixture: ComponentFixture<DemographicRUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemographicRUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographicRUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
