// draggable.directive.ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  private xOffset = 0;
  private yOffset = 0;
  private isDragging = false;

  constructor(private el: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.xOffset = event.clientX - this.el.nativeElement.offsetLeft;
    this.yOffset = event.clientY - this.el.nativeElement.offsetTop;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.el.nativeElement.style.left = event.clientX - this.xOffset + 'px';
      this.el.nativeElement.style.top = event.clientY - this.yOffset + 'px';
    }
  }

  @HostListener('document:mouseup')
  onMouseUp() {
    this.isDragging = false;
  }
}