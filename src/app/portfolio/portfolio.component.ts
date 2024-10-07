import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsComponent } from './projects/projects.component';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card/project-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, CommonModule, ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  activePreviewIndex: number | null = null;
  selectedProject: Project | null = null;
  isProjectCardVisible: boolean = false;


  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      preview: 'assets/img/join.png',
      github: 'https://github.com/DennisSchwarz1995',
    },
    {
      id: 2,
      title: 'Sharkie',
      description:
        'Platformer game inspired by classic arcade games. Play as a chicken character and overcome various obstacles.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      preview: 'assets/img/sharkie.png',
      github: 'https://github.com/DennisSchwarz1995',
    },
    {
      id: 3,
      title: 'DA Bubble',
      description:
        'A project management tool built with Angular and Firebase, with features for tracking project progress and tasks.',
      technologies: ['Angular', 'Firebase', 'TypeScript'],
      preview: 'assets/img/da_bubble.png',
      github: 'https://github.com/DennisSchwarz1995',
    },
  ];

  showProjectPreview(index: number): void {
    this.activePreviewIndex = index;
  }

  hideProjectPreview(): void {
    this.activePreviewIndex = null;
  }

  openProjectCard(project: Project): void {
    this.selectedProject = project;
    this.isProjectCardVisible = true;
  }

  closeProjectCard(): void {
    this.selectedProject = null;
    this.isProjectCardVisible = false;
  }

  showNextProject(): void {
    if (this.selectedProject) {
      let currentIndex = this.projects.findIndex(p => p.id === this.selectedProject?.id);
      let nextIndex = (currentIndex + 1) % this.projects.length;
      this.selectedProject = this.projects[nextIndex];
    }
  }
}
