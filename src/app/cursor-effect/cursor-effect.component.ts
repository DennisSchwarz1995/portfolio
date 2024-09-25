import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cursor-effect',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor-effect.component.html',
  styleUrl: './cursor-effect.component.scss',
})
export class CursorEffectComponent {
  cursorStyle = {
    left: '0px',
    top: '0px',
    opacity: 0,
  };
  isCursorVisible = false;


  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const cursorSize = 25;

    let mouseX = Math.max(
      cursorSize,
      Math.min(event.pageX, window.innerWidth - cursorSize)
    );
    let mouseY = Math.max(
      cursorSize,
      Math.min(event.pageY, window.innerHeight - cursorSize)
    );

    this.cursorStyle.left = `${mouseX}px`;
    this.cursorStyle.top = `${mouseY}px`;
    if (!this.isCursorVisible) {
      this.isCursorVisible = true;
      this.cursorStyle.opacity = 1; 
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.isCursorVisible = false;
    this.cursorStyle.opacity = 0;
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    this.isCursorVisible = true;
    this.cursorStyle.opacity = 1;
  }
}
