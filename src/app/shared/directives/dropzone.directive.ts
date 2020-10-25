import { Directive, HostListener, ElementRef, Renderer2, Host, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[appDropzone]'
})
export class DropzoneDirective {

  @Output() fileDropped = new EventEmitter<FileList>()

  private readonly dropzone$$ = new BehaviorSubject(false);

  @HostListener('dragenter', ['$event']) onDragenter(event: DragEvent) {
    // event.preventDefault();
    // event.stopPropagation();
    this.dropzone$$.next(true);
    // this.createZone();

  }

  @HostListener('dragover', ['$event']) onDragover(event: DragEvent) {
    event.preventDefault();
    // event.stopPropagation();
    this.dropzone$$.next(true);
    // this.createZone();
  }

  @HostListener('dragleave', ['$event']) onDragleave(event) {

    console.log(event);
    this.dropzone$$.next(false)
    // this.removeZone();
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.dropzone$$.next(false);
    this.removeZone();
    this.fileDropped.emit(event.dataTransfer.files);
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer2: Renderer2,
  ) {
    this.dropzone$$.pipe(distinctUntilChanged()).subscribe(isShowdropzone => {
      if (isShowdropzone) {
        this.createZone();
      } else {
        this.removeZone();
      }
    })

  }

  private removeZone() {
    this.renderer2.removeClass(this.elementRef.nativeElement, 'dropzone');
  }

  private createZone() {
    this.renderer2.addClass(this.elementRef.nativeElement, 'dropzone');
  }
}
