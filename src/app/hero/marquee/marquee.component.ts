import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {

  descriptions: string[] = [
    'TITLE',
    'BASED_IN',
    'OPEN_TO_WORK',
    'MARQUEE_INFO'
  ];
}
