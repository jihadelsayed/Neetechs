import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudierComponent } from './edit-studier.component';

describe('EditStudierComponent', () => {
  let component: EditStudierComponent;
  let fixture: ComponentFixture<EditStudierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
