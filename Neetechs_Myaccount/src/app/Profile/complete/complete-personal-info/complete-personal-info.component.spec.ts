import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePersonalInfoComponent } from './complete-personal-info.component';

describe('CompletePersonalInfoComponent', () => {
  let component: CompletePersonalInfoComponent;
  let fixture: ComponentFixture<CompletePersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletePersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletePersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
