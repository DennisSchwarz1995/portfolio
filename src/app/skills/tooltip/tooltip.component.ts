import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  @Input() tooltipText: string = "";
  @Input() unlearnedSkills: Array<{ name: string; icon: string; learned: boolean }> = [];
  @Input() isVisible: boolean = false;
}
