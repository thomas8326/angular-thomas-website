import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dropzone',
  template: '<ng-content></ng-content>',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent implements OnInit {
  constructor(private readonly elementRef: ElementRef, private readonly renderer2: Renderer2) {}

  ngOnInit(): void {
    fromEvent(this.elementRef.nativeElement, 'dragenter')
      .pipe(
        tap(() => console.log('enter')),
        switchMap(() =>
          merge(
            fromEvent(this.elementRef.nativeElement, 'dragleave'),
            fromEvent(this.elementRef.nativeElement, 'drop'),
          ),
        ),
      )
      .subscribe((event: DragEvent) => {
        event.preventDefault();
        event.stopPropagation();
        console.log(event);
      });
  }
}
