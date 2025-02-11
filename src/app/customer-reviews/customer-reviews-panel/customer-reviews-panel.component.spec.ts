import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReviewsPanelComponent } from './customer-reviews-panel.component';

describe('CustomerReviewsPanelComponent', () => {
  let component: CustomerReviewsPanelComponent;
  let fixture: ComponentFixture<CustomerReviewsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerReviewsPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerReviewsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
