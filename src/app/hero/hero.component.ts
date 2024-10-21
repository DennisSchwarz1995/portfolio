import { Component, Input } from '@angular/core';
import { LogoComponent } from '../shared/logo/logo.component';
import { MarqueeComponent } from './marquee/marquee.component';
import { MarqueeButtonComponent } from '../shared/marquee-button/marquee-button.component';
import { CommonModule, ViewportScroller } from '@angular/common';
import { ClickedOutsideDirective } from '../directives/clicked-outside.directive';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';
import { ScrollService } from '../services/scroll.service';

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
    private scrollService: ScrollService,
    private languageService: LanguageService
  ) {}

  public scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
  
  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
