import { Component } from '@angular/core';
import { InfoBoxComponent } from "../shared/info-box/info-box.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [InfoBoxComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
