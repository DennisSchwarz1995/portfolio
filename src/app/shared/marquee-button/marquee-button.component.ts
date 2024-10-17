import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-marquee-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './marquee-button.component.html',
  styleUrl: './marquee-button.component.scss'
})
export class MarqueeButtonComponent {
  @Input() marqueeText: string | null = null;
  @Input() disabled: boolean = false;
}
