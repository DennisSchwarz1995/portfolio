import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { SkillsComponent } from "./skills/skills.component";
import { CursorEffectComponent } from './cursor-effect/cursor-effect.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferenceComponent } from "./reference/reference.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent, AboutComponent, CursorEffectComponent, SkillsComponent, PortfolioComponent, ReferenceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
