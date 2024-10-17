import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})

export class LegalNoticeComponent {

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang');
    const defaultLang = savedLang ? savedLang : 'en';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);


    window.addEventListener('storage', (event) => {
      if (event.key === 'lang' && event.newValue) {
        this.translate.use(event.newValue);
      }
    });
  }
}
