import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientExamResultsComponent } from './patient-exam-results.component';

describe('PatientRequestResultsComponent', () => {
  let component: PatientExamResultsComponent;
  let fixture: ComponentFixture<PatientExamResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientExamResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientExamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
