import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteLocationComponent } from './complete-location.component';

describe('CompleteLocationComponent', () => {
  let component: CompleteLocationComponent;
  let fixture: ComponentFixture<CompleteLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
