import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent {
  referenceIndex = 1;
  @ViewChild('carousel') carousel!: ElementRef;

  references = [
    {
      quote:
        'COLLEAGUE_H_JANISCH',
      author: 'H. Janisch',
      role: 'Team Partner',
    },
    {
      quote:
        'COLLEAGUE_T_SCHULZ',
      author: 'T. Schulz',
      role: "FRONTEND_DEVELOPER",
    },
    {
      quote:
        "COLLEAGUE_P_BRAUN",
      author: 'P. Braun',
      role: "BACKEND_DEVELOPER",
    },
  ];

  next() {
    this.referenceIndex = (this.referenceIndex + 1) % this.references.length;
  }

  prev() {
    this.referenceIndex =
      (this.referenceIndex - 1 + this.references.length) %
      this.references.length;
  }

  goToReference(index: number) {
    this.referenceIndex = index;
  }

  getPrevIndex(): number {
    return (
      (this.referenceIndex - 1 + this.references.length) %
      this.references.length
    );
  }

  getNextIndex(): number {
    return (this.referenceIndex + 1) % this.references.length;
  }
}
