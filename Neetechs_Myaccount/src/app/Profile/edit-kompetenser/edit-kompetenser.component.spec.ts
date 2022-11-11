import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKompetenserComponent } from './edit-kompetenser.component';

describe('EditKompetenserComponent', () => {
  let component: EditKompetenserComponent;
  let fixture: ComponentFixture<EditKompetenserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKompetenserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKompetenserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
