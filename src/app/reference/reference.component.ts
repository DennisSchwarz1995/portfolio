import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference.component.html',
  styleUrl: './reference.component.scss',
})
export class ReferenceComponent {
  referenceIndex = 1;
  @ViewChild('carousel') carousel!: ElementRef;

  references = [
    {
      quote:
        'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H. Janisch',
      role: 'Team Partner',
    },
    {
      quote:
        'I had the good fortune of working with Lukas on a project. He always stayed calm and made sure our team was set up for success.',
      author: 'T. Schulz',
      role: 'Frontend Developer',
    },
    {
      quote:
        "Apart from Lukas's efficient way of working, he also showed a strong commitment to the team.",
      author: 'M. Braun',
      role: 'Backend Developer',
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
}
