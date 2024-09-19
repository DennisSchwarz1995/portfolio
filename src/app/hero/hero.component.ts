import { Component } from '@angular/core';
import { MarqueeComponent } from './marquee/marquee.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MarqueeComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
