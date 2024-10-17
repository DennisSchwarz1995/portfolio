import { Component } from '@angular/core';
import { InfoBoxComponent } from "../shared/info-box/info-box.component";
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [InfoBoxComponent, RouterLink, TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
isActive = false;

triggerImageHover() {
  this.isActive = true;
}

}
