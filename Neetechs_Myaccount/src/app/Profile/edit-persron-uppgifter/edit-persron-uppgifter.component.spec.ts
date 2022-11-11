import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersronUppgifterComponent } from './edit-persron-uppgifter.component';

describe('EditPersronUppgifterComponent', () => {
  let component: EditPersronUppgifterComponent;
  let fixture: ComponentFixture<EditPersronUppgifterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersronUppgifterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersronUppgifterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
