import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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


