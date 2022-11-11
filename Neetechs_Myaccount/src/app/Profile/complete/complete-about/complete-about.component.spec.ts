import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAboutComponent } from './complete-about.component';

describe('CompleteAboutComponent', () => {
  let component: CompleteAboutComponent;
  let fixture: ComponentFixture<CompleteAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
