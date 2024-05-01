import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRequestHistoryComponent } from './doctor-request-history.component';

describe('RequestHistoryComponent', () => {
  let component: DoctorRequestHistoryComponent;
  let fixture: ComponentFixture<DoctorRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorRequestHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
