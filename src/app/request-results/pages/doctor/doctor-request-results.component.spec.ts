import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRequestResultsComponent } from './doctor-request-results.component';

describe('RequestResultsComponent', () => {
  let component: DoctorRequestResultsComponent;
  let fixture: ComponentFixture<DoctorRequestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorRequestResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRequestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
