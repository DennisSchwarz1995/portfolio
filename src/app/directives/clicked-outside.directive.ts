import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickedOutside]',
  standalone: true
})
export class ClickedOutsideDirective {

  constructor(private el: ElementRef) { }

  @Output() clickedOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.el.nativeElement.contains(target);
    const isMenuIcon = target.classList.contains('menuIcon'); 
    
    if (!clickedInside && !isMenuIcon) {
      this.clickedOutside.emit(target);
    } 
  }
}
