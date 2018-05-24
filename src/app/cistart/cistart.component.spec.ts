import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CistartComponent } from './cistart.component';

describe('CistartComponent', () => {
  let component: CistartComponent;
  let fixture: ComponentFixture<CistartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CistartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CistartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
