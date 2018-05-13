import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkqComponent } from './workq.component';

describe('WorkqComponent', () => {
  let component: WorkqComponent;
  let fixture: ComponentFixture<WorkqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
