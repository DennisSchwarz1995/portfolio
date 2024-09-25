import { Component } from '@angular/core';
import { InfoBoxComponent } from "../shared/info-box/info-box.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InfoBoxComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
