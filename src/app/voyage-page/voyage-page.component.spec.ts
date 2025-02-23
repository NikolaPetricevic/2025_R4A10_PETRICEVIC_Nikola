import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagePageComponent } from './voyage-page.component';

describe('VoyagePageComponent', () => {
  let component: VoyagePageComponent;
  let fixture: ComponentFixture<VoyagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoyagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
