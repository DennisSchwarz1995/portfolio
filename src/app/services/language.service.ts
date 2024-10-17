import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);

    const savedLang = localStorage.getItem('lang') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);

    window.addEventListener('storage', (event) => {
      if (event.key === 'lang' && event.newValue) {
        this.translate.use(event.newValue);
      }
    });
  }

  toggleLanguage(): void {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}