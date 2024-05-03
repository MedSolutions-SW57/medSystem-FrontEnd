import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorLoginFormComponent } from './doctor-login-form.component';

describe('DoctorLoginFormComponent', () => {
  let component: DoctorLoginFormComponent;
  let fixture: ComponentFixture<DoctorLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorLoginFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
