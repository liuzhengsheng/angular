import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationpannelComponent } from './applicationpannel.component';

describe('ApplicationpannelComponent', () => {
  let component: ApplicationpannelComponent;
  let fixture: ComponentFixture<ApplicationpannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationpannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
