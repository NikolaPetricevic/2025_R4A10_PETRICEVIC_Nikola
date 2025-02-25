import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuppressionVoyageComponent } from './modal-suppression-voyage.component';

describe('ModalSuppressionVoyageComponent', () => {
  let component: ModalSuppressionVoyageComponent;
  let fixture: ComponentFixture<ModalSuppressionVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSuppressionVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalSuppressionVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
