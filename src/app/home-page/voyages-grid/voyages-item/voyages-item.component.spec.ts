import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesItemComponent } from './voyages-item.component';

describe('VoyagesItemComponent', () => {
  let component: VoyagesItemComponent;
  let fixture: ComponentFixture<VoyagesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyagesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
