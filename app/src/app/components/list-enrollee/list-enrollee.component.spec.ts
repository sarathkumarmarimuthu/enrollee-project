import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListEnrolleeComponent } from './list-enrollee.component';

describe('ListEnrolleeComponent', () => {
  let component: ListEnrolleeComponent;
  let fixture: ComponentFixture<ListEnrolleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEnrolleeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
