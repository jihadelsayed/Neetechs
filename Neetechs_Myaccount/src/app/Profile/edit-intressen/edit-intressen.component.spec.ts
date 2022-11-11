import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIntressenComponent } from './edit-intressen.component';

describe('EditIntressenComponent', () => {
  let component: EditIntressenComponent;
  let fixture: ComponentFixture<EditIntressenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIntressenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIntressenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
