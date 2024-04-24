import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestResultsComponent } from './request-results.component';

describe('RequestResultsComponent', () => {
  let component: RequestResultsComponent;
  let fixture: ComponentFixture<RequestResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequestResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
