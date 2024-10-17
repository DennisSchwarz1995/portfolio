import { Component, Input } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { MarqueeButtonComponent } from '../shared/marquee-button/marquee-button.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ClickedOutsideDirective } from '../directives/clicked-outside.directive';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    LogoComponent,
    MarqueeButtonComponent,
    MarqueeComponent,
    CommonModule,
    ClickedOutsideDirective,
    TranslateModule,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  isMenuOpen: boolean = false;

  constructor(
    private viewportScroller: ViewportScroller,
    private translate: TranslateService
  ) {
    this.translate.addLangs(['en', 'de']);
    let savedLang = localStorage.getItem('lang');
    let defaultLang = savedLang ? savedLang : 'en';
    this.translate.setDefaultLang(defaultLang);
    this.translate.use(defaultLang);

    window.addEventListener('storage', (event) => {
      if (event.key === 'lang' && event.newValue) {
        this.translate.use(event.newValue); 
      }
    });

  }

  

  public scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('lang', newLang);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
