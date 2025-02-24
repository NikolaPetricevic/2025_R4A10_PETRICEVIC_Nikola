import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesGridComponent } from './voyages-grid.component';

describe('VoyagesGridComponent', () => {
  let component: VoyagesGridComponent;
  let fixture: ComponentFixture<VoyagesGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagesGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyagesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
