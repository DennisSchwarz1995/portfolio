import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueeButtonComponent } from './marquee-button.component';

describe('MarqueeButtonComponent', () => {
  let component: MarqueeButtonComponent;
  let fixture: ComponentFixture<MarqueeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarqueeButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarqueeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
