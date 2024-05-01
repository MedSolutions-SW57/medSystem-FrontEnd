import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterFormComponent } from './doctor-register-form.component';

describe('DoctorRegisterFormComponent', () => {
  let component: DoctorRegisterFormComponent;
  let fixture: ComponentFixture<DoctorRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
