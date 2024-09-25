import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursorEffectComponent } from './cursor-effect.component';

describe('CursorEffectComponent', () => {
  let component: CursorEffectComponent;
  let fixture: ComponentFixture<CursorEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursorEffectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CursorEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
