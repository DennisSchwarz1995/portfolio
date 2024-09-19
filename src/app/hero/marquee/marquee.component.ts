import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {

  descriptions: string[] = [
    'Frontend Developer',
    'Based in Saarland',
    'Open to Work',
    'Available for remote Work'
  ];
}