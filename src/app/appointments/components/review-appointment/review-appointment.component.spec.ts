import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAppointmentComponent } from './review-appointment.component';

describe('ReviewAppointmentComponent', () => {
  let component: ReviewAppointmentComponent;
  let fixture: ComponentFixture<ReviewAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReviewAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
