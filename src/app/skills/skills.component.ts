import { Component } from '@angular/core';
import { InfoBoxComponent } from '../shared/info-box/info-box.component';
import { MarqueeButtonComponent } from '../shared/marquee-button/marquee-button.component';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from "./tooltip/tooltip.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [InfoBoxComponent, MarqueeButtonComponent, CommonModule, TooltipComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  isTooltipVisible: boolean = false;
  skills = [
    { name: 'HTML', icon: 'assets/img/html.png', learned: true },
    { name: 'CSS', icon: 'assets/img/css.png', learned: true },
    { name: 'JavaScript', icon: 'assets/img/javascript.png', learned: true },
    { name: 'Material Design', icon: 'assets/img/material_design.png', learned: true },
    { name: 'TypeScript', icon: 'assets/img/typescript.png', learned: true },
    { name: 'Angular', icon: 'assets/img/angular.png', learned: true },
    { name: 'Firebase', icon: 'assets/img/firebase.png', learned: true },
    { name: 'GIT', icon: 'assets/img/git.png', learned: true },
    { name: 'Rest Api', icon: 'assets/img/rest_api.png', learned: true },
    { name: 'Scrum', icon: 'assets/img/scrum.png', learned: true },
    { name: 'Growth Mindset', icon: 'assets/img/growth_mindset.png', learned: true },
    { name: 'React', icon: 'assets/img/react.png', learned: false },
    { name: 'Vue JS', icon: 'assets/img/vue_js.png', learned: false },
  ];


  showTooltipOnHover(skill: any): void {
    if (skill.name === 'Growth Mindset') {
      this.isTooltipVisible = true;
    }
  }

  hideTooltipOnLeave(): void {
    this.isTooltipVisible = false;
  }

  get learnedSkills() {
    return this.skills.filter(skill => skill.learned);
  }

  get unlearnedSkills() {
    return this.skills.filter(skill => !skill.learned);
  }

   formatIconName(icon: string): string {
    return icon.replace(/_/g, ' ');
  }
}
