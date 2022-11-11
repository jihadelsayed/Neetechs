import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOMComponent } from './edit-om.component';

describe('EditOMComponent', () => {
  let component: EditOMComponent;
  let fixture: ComponentFixture<EditOMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
