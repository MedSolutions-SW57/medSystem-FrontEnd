import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRequestHistoryComponent } from './patient-request-history.component';

describe('PatientRequestHistoryComponent', () => {
  let component: PatientRequestHistoryComponent;
  let fixture: ComponentFixture<PatientRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientRequestHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
