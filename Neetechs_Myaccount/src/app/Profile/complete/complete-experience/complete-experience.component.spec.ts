import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteExperienceComponent } from './complete-experience.component';

describe('CompleteExperienceComponent', () => {
  let component: CompleteExperienceComponent;
  let fixture: ComponentFixture<CompleteExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
