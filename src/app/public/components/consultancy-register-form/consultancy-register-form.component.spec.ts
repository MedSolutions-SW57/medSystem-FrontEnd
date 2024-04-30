import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultancyRegisterFormComponent } from './consultancy-register-form.component';

describe('ConsultancyRegisterFormComponent', () => {
  let component: ConsultancyRegisterFormComponent;
  let fixture: ComponentFixture<ConsultancyRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultancyRegisterFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultancyRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
