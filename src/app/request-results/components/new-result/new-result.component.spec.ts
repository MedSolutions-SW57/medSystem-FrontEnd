import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResultComponent } from './new-result.component';

describe('NewResultComponent', () => {
  let component: NewResultComponent;
  let fixture: ComponentFixture<NewResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
