import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss',
})
export class InfoBoxComponent {
  @Input() title: string | null = null;


  constructor() {}
}
