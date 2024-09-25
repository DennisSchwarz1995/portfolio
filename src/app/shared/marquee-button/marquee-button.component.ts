import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee-button.component.html',
  styleUrl: './marquee-button.component.scss'
})
export class MarqueeButtonComponent {
  @Input() marqueeText: string | null = null;
}
