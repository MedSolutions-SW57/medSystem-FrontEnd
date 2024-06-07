import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLoginFormComponent } from './patient-login-form.component';

describe('PatientLoginFormComponent', () => {
  let component: PatientLoginFormComponent;
  let fixture: ComponentFixture<PatientLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientLoginFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
