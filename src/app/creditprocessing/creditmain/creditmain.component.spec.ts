import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditmainComponent } from './creditmain.component';

describe('CreditmainComponent', () => {
  let component: CreditmainComponent;
  let fixture: ComponentFixture<CreditmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
