import { Directive, HostListener, ElementRef, Renderer2, Host } from '@angular/core';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {

  @HostListener('dragenter', ['$event']) onDragenter() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'dropzone');
  }

  @HostListener('dragleave', ['$event']) onDragleave() {
    this.renderer2.removeClass(this.elementRef.nativeElement, 'dropzone');
  }

  constructor(private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2) { }
}
