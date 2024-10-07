import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: Project | null = null;
  @Input() projects: Project[] = [];
  @Input() isVisible: boolean = false;
  @Output() closeCard = new EventEmitter<void>();
  @Output() nextProjectEvent = new EventEmitter<void>();

  close() {
    this.closeCard.emit();
  }

  nextProject() {
    this.nextProjectEvent.emit();
  }

  formattedIconSrc(tech: any) {
    return `/assets/img/${tech.toLowerCase()}.png`;
  }
}
