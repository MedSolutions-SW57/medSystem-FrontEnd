import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryAnalysisComponent } from './laboratory-analysis.component';

describe('LaboratoryAnalysisComponent', () => {
  let component: LaboratoryAnalysisComponent;
  let fixture: ComponentFixture<LaboratoryAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboratoryAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboratoryAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
