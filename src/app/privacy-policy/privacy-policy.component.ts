import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})

export class PrivacyPolicyComponent {

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang');
    const defaultLang = savedLang ? savedLang : 'en';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);

    // Listen for language changes from other tabs
    window.addEventListener('storage', (event) => {
      if (event.key === 'lang' && event.newValue) {
        this.translate.use(event.newValue);
      }
    });
  }
}