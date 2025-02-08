import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConsultComponent } from './home-consult.component';

describe('HomeConsultComponent', () => {
  let component: HomeConsultComponent;
  let fixture: ComponentFixture<HomeConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
