import { Component } from '@angular/core';
import { MarqueeComponent } from './marquee/marquee.component';
import { MarqueeButtonComponent } from '../shared/marquee-button/marquee-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeButtonComponent, MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
