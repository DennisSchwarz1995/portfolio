import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() project: Project | null = null;
  @Input() isFirstElement: boolean = false;
  @Output() openOverlay = new EventEmitter<Project>(); 

  openProject() {
    if (this.project) {
      this.openOverlay.emit(this.project);
    }
  }
}


