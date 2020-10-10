import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateEnrolleeFormComponent } from './create-update-enrollee-form.component';

describe('CreateUpdateEnrolleeFormComponent', () => {
  let component: CreateUpdateEnrolleeFormComponent;
  let fixture: ComponentFixture<CreateUpdateEnrolleeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateEnrolleeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateEnrolleeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
