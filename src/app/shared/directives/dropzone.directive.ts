import { Directive, HostListener, ElementRef, Renderer2, Host, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {

  @Output() fileDropped = new EventEmitter<FileList>()

  private readonly dropzone$$ = new BehaviorSubject(false);

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2,
  ) {
    this.dragEnterEvent();
    this.dragOverEvent();
    this.dragLeaveEvent();
    this.dragDropEvent();
    this.dropzone$$.pipe(distinctUntilChanged()).subscribe(isShowdropzone => {
      if (isShowdropzone) {
        this.createZone();
      } else {
        this.removeZone();
      }
    })

  }

  private dragEnterEvent() {
    fromEvent(this.elementRef.nativeElement, 'dragenter').subscribe((event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      this.addPointerEvent();
      this.dropzone$$.next(true);
    });
  }

  private dragOverEvent() {
    fromEvent(this.elementRef.nativeElement, 'dragover').subscribe((event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();

      this.addPointerEvent();
      this.dropzone$$.next(true);
    });
  }

  private dragLeaveEvent() {
    fromEvent(this.elementRef.nativeElement, 'dragleave').subscribe((event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      this.removePointerEvent();
      this.dropzone$$.next(false);
    })
  }

  private dragDropEvent() {
    fromEvent(this.elementRef.nativeElement, 'drop').subscribe((event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
      this.dropzone$$.next(false);
      this.removePointerEvent();
      this.removeZone();
      this.fileDropped.emit(event.dataTransfer.files);
    })
  }

  private removeZone() {
    this.renderer2.removeClass(this.elementRef.nativeElement, 'dropzone');
  }

  private createZone() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'dropzone');
  }

  private addPointerEvent() {
    const elements = this.elementRef.nativeElement.querySelectorAll('*');
    elements.forEach(element => this.renderer2.setStyle(element, 'pointer-events', 'none'));
  }

  private removePointerEvent() {
    const elements = this.elementRef.nativeElement.querySelectorAll('*');
    elements.forEach(element => this.renderer2.removeStyle(element, 'pointer-events'));
  }
}
