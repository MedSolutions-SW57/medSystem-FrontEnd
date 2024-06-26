import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratorySampleComponent } from './laboratory-sample.component';

describe('LaboratorySampleComponent', () => {
  let component: LaboratorySampleComponent;
  let fixture: ComponentFixture<LaboratorySampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaboratorySampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaboratorySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
