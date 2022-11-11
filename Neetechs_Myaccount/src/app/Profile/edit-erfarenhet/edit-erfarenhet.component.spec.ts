import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditErfarenhetComponent } from './edit-erfarenhet.component';

describe('EditErfarenhetComponent', () => {
  let component: EditErfarenhetComponent;
  let fixture: ComponentFixture<EditErfarenhetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditErfarenhetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditErfarenhetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
