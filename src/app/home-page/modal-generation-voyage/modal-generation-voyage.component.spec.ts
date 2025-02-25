import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGenerationVoyageComponent } from './modal-generation-voyage.component';

describe('ModalGenerationVoyageComponent', () => {
  let component: ModalGenerationVoyageComponent;
  let fixture: ComponentFixture<ModalGenerationVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalGenerationVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalGenerationVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
