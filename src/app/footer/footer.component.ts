import { Component } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {


  constructor(private scrollService: ScrollService) {

  }

  public scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
}
